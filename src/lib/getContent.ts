import { getPayload } from 'payload'
import config from '@payload-config'
import type { Locale } from '@/lib/i18n'

export async function getContent(locale: Locale = 'en') {
  const payload = await getPayload({ config })

  const [siteSettings, hero, about, contact, projects, experience, adventures, reads, plays] =
    await Promise.all([
      payload.findGlobal({ slug: 'site-settings', locale }).catch(() => null),
      payload.findGlobal({ slug: 'hero', locale }).catch(() => null),
      payload.findGlobal({ slug: 'about', locale }).catch(() => null),
      payload.findGlobal({ slug: 'contact', locale }).catch(() => null),
      payload
        .find({ collection: 'projects', sort: 'order', limit: 50, locale })
        .then((r) => r.docs)
        .catch(() => []),
      payload
        .find({ collection: 'experience', sort: 'order', limit: 50, locale })
        .then((r) => r.docs)
        .catch(() => []),
      payload
        .find({ collection: 'adventures', sort: 'order', limit: 20, locale })
        .then((r) => r.docs)
        .catch(() => []),
      payload
        .find({ collection: 'reads', sort: 'order', limit: 20, locale })
        .then((r) => r.docs)
        .catch(() => []),
      payload
        .find({ collection: 'plays', sort: 'order', limit: 20, locale })
        .then((r) => r.docs)
        .catch(() => []),
    ])

  return { siteSettings, hero, about, contact, projects, experience, adventures, reads, plays }
}

export type SiteContent = Awaited<ReturnType<typeof getContent>>
