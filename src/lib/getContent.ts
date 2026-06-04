import { getPayload } from 'payload'
import config from '@payload-config'

export async function getContent() {
  const payload = await getPayload({ config })

  const [siteSettings, hero, about, contact, projects, experience, adventures, reads, plays] =
    await Promise.all([
      payload.findGlobal({ slug: 'site-settings' }).catch(() => null),
      payload.findGlobal({ slug: 'hero' }).catch(() => null),
      payload.findGlobal({ slug: 'about' }).catch(() => null),
      payload.findGlobal({ slug: 'contact' }).catch(() => null),
      payload
        .find({ collection: 'projects', sort: 'order', limit: 50 })
        .then((r) => r.docs)
        .catch(() => []),
      payload
        .find({ collection: 'experience', sort: 'order', limit: 50 })
        .then((r) => r.docs)
        .catch(() => []),
      payload
        .find({ collection: 'adventures', sort: 'order', limit: 20 })
        .then((r) => r.docs)
        .catch(() => []),
      payload
        .find({ collection: 'reads', sort: 'order', limit: 20 })
        .then((r) => r.docs)
        .catch(() => []),
      payload
        .find({ collection: 'plays', sort: 'order', limit: 20 })
        .then((r) => r.docs)
        .catch(() => []),
    ])

  return { siteSettings, hero, about, contact, projects, experience, adventures, reads, plays }
}

export type SiteContent = Awaited<ReturnType<typeof getContent>>
