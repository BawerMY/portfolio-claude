import fs from 'fs'
import path from 'path'
import { getPayload } from 'payload'
import config from './payload.config'

const FILE = path.resolve(import.meta.dirname, 'seed-data.json')

async function importDb() {
  if (!fs.existsSync(FILE)) {
    console.error(`Missing ${FILE}. Run \`npm run seed:export\` first.`)
    process.exit(1)
  }
  const data = JSON.parse(fs.readFileSync(FILE, 'utf-8')) as {
    collections: Record<string, any[]>
    globals: Record<string, any>
  }

  const payload = await getPayload({ config })

  // ── admin user (not in dump; create if none exists) ─────────────
  const users = await payload.find({ collection: 'users', limit: 1 })
  if (users.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: { email: 'admin@example.com', password: 'change-me-now', name: 'Admin' },
    })
    console.log('✓ Created admin user: admin@example.com / change-me-now')
  }

  // ── globals ─────────────────────────────────────────────────────
  for (const [slug, doc] of Object.entries(data.globals)) {
    await payload.updateGlobal({ slug: slug as never, data: doc as never })
    console.log(`✓ global ${slug}`)
  }

  // ── collections (idempotent: only insert if empty) ──────────────
  // Old (SQLite int) ID → new (Mongo ObjectId string) per collection.
  const idMap: Record<string, Record<string | number, string>> = {}

  const relationFields: Record<string, string[]> = {
    media: [],
    projects: ['coverImage'],
    adventures: ['coverImage'],
    reads: ['coverImage'],
    experience: [],
    plays: [],
    users: [],
  }
  // Field → target collection slug it references.
  const relationTarget: Record<string, string> = {
    coverImage: 'media',
  }

  for (const [slug, docs] of Object.entries(data.collections)) {
    const existing = await payload.find({ collection: slug as never, limit: 1 })
    if (existing.totalDocs > 0) {
      console.log(`· ${slug}: skipped (${existing.totalDocs} existing)`)
      continue
    }
    const col = payload.config.collections.find((c) => c.slug === slug)
    const staticDir = col?.upload ? (col.upload as any).staticDir ?? slug : null
    idMap[slug] ||= {}

    for (const doc of docs) {
      const oldId = doc.id
      // Remap relationship fields using prior collections' idMap.
      for (const field of relationFields[slug] || []) {
        const target = relationTarget[field]
        const oldRef = doc[field]
        if (oldRef != null && target && idMap[target]?.[oldRef]) {
          doc[field] = idMap[target][oldRef]
        } else if (oldRef != null && (!target || !idMap[target]?.[oldRef])) {
          doc[field] = null
        }
      }
      const { id: _drop, ...rest0 } = doc

      let created: any
      if (staticDir && rest0.filename) {
        const filePath = path.isAbsolute(staticDir)
          ? path.join(staticDir, rest0.filename)
          : path.resolve(import.meta.dirname, '..', staticDir, rest0.filename)
        const { filename, ...rest } = rest0
        created = await payload.create({ collection: slug as never, data: rest as never, filePath })
      } else {
        created = await payload.create({ collection: slug as never, data: rest0 as never })
      }
      if (oldId != null) idMap[slug][oldId] = String(created.id)
    }
    console.log(`✓ ${slug} (${docs.length})`)
  }

  console.log('Done.')
  process.exit(0)
}

importDb().catch((err) => {
  console.error(err)
  process.exit(1)
})
