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
  for (const [slug, docs] of Object.entries(data.collections)) {
    const existing = await payload.find({ collection: slug as never, limit: 1 })
    if (existing.totalDocs > 0) {
      console.log(`· ${slug}: skipped (${existing.totalDocs} existing)`)
      continue
    }
    const col = payload.config.collections.find((c) => c.slug === slug)
    const staticDir = col?.upload ? (col.upload as any).staticDir ?? slug : null

    for (const doc of docs) {
      if (staticDir && doc.filename) {
        // re-upload the file that lives on disk next to the dump
        const filePath = path.isAbsolute(staticDir)
          ? path.join(staticDir, doc.filename)
          : path.resolve(import.meta.dirname, '..', staticDir, doc.filename)
        const { filename, ...rest } = doc
        await payload.create({ collection: slug as never, data: rest as never, filePath })
      } else {
        await payload.create({ collection: slug as never, data: doc as never })
      }
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
