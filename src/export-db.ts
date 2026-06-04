import fs from 'fs'
import path from 'path'
import { getPayload } from 'payload'
import config from './payload.config'

const OUT = path.resolve(import.meta.dirname, 'seed-data.json')

// drop auto-managed / non-reseedable fields
const stripDoc = ({ id, createdAt, updatedAt, ...rest }: any) => rest
const stripGlobal = ({ id, globalType, createdAt, updatedAt, ...rest }: any) => rest

// upload collections: file metadata is recomputed on re-upload, keep only the
// editable fields + filename (used to locate the file on disk at import time)
const stripUpload = ({
  url,
  thumbnailURL,
  sizes,
  filesize,
  width,
  height,
  mimeType,
  ...rest
}: any) => rest

async function exportDb() {
  const payload = await getPayload({ config })
  const cfg = payload.config
  const out: { collections: Record<string, unknown[]>; globals: Record<string, unknown> } = {
    collections: {},
    globals: {},
  }

  for (const col of cfg.collections) {
    // skip auth collection (password hash+salt can't be re-seeded)
    // and Payload's internal bookkeeping collections
    if (col.slug === 'users' || col.slug.startsWith('payload-')) continue
    const res = await payload.find({
      collection: col.slug,
      depth: 0, // keep relationships as IDs, not nested docs
      pagination: false,
      sort: 'order',
    })
    out.collections[col.slug] = res.docs.map((d) =>
      col.upload ? stripUpload(stripDoc(d)) : stripDoc(d),
    )
    console.log(`· ${col.slug}: ${res.docs.length}`)
  }

  for (const g of cfg.globals) {
    const data = await payload.findGlobal({ slug: g.slug, depth: 0 })
    out.globals[g.slug] = stripGlobal(data)
    console.log(`· global ${g.slug}`)
  }

  fs.writeFileSync(OUT, JSON.stringify(out, null, 2))
  console.log(`✓ Exported DB → ${OUT}`)
  process.exit(0)
}

exportDb().catch((err) => {
  console.error(err)
  process.exit(1)
})
