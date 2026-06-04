import { Nav } from '@/components/Nav/Nav'
import { Hero } from '@/components/Hero/Hero'
import { Projects } from '@/components/Projects/Projects'
import { Experience } from '@/components/Experience/Experience'
import { About } from '@/components/About/About'
import { Adventures } from '@/components/Adventures/Adventures'
import { Logs } from '@/components/Logs/Logs'
import { Contact } from '@/components/Contact/Contact'
import { CustomCursor } from '@/components/CustomCursor/CustomCursor'
import { ScrollReveal } from '@/components/ScrollReveal/ScrollReveal'
import { KeyboardNav } from '@/components/KeyboardNav/KeyboardNav'
import { getContent } from '@/lib/getContent'
import { defaults } from '@/lib/defaults'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const content = await getContent()

  const settings = { ...defaults.siteSettings, ...(content.siteSettings || {}) }
  const hero = {
    ...defaults.hero,
    ...(content.hero || {}),
    meta: content.hero?.meta?.length ? content.hero.meta : defaults.hero.meta,
    titleParts: content.hero?.titleParts?.length
      ? content.hero.titleParts
      : defaults.hero.titleParts,
    subhead: content.hero?.subhead || defaults.hero.subhead,
    primaryCta: content.hero?.primaryCta?.label
      ? content.hero.primaryCta
      : defaults.hero.primaryCta,
    secondaryCta: content.hero?.secondaryCta?.label
      ? content.hero.secondaryCta
      : defaults.hero.secondaryCta,
  }
  const about = {
    ...defaults.about,
    ...(content.about || {}),
    headlineParts: content.about?.headlineParts?.length
      ? content.about.headlineParts
      : defaults.about.headlineParts,
    paragraphs: content.about?.paragraphs?.length
      ? content.about.paragraphs
      : defaults.about.paragraphs,
    currently: content.about?.currently?.length ? content.about.currently : defaults.about.currently,
    toolkit: content.about?.toolkit?.length ? content.about.toolkit : defaults.about.toolkit,
    tagline: content.about?.tagline || defaults.about.tagline,
    kicker: content.about?.kicker || defaults.about.kicker,
  }
  const contact = {
    ...defaults.contact,
    ...(content.contact || {}),
    headlineParts: content.contact?.headlineParts?.length
      ? content.contact.headlineParts
      : defaults.contact.headlineParts,
    socials: content.contact?.socials?.length ? content.contact.socials : defaults.contact.socials,
  }

  const projects = content.projects.length
    ? content.projects.map((p) => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        year: p.year,
        stack: (p.stack || []).map((s: { name: string }) => s.name),
        status: p.status,
        href: p.href || '#',
        paletteFrom: p.preview?.paletteFrom || '#1a3a6e',
        paletteTo: p.preview?.paletteTo || '#5a8fd6',
      }))
    : defaults.projects

  const experience = content.experience.length
    ? content.experience.map((e) => ({
        id: e.id,
        role: e.role,
        company: e.company,
        period: e.period,
        location: e.location || null,
        summary: e.summary,
        stack: (e.stack || []).map((s: { name: string }) => s.name),
        status: (e.status as 'current' | 'past' | null) || 'past',
      }))
    : defaults.experience

  const adventures = content.adventures.length
    ? content.adventures.map((a) => {
        const cover = typeof a.coverImage === 'object' ? a.coverImage : null
        return {
          id: a.id,
          kind: a.kind,
          season: a.season,
          title: a.title,
          stats: (a.stats || []).map((s: { label: string; value: string }) => ({
            label: s.label,
            value: s.value,
          })),
          coverImageUrl: cover?.url || null,
          coverImageAlt: cover?.alt || null,
        }
      })
    : defaults.adventures

  const reads = content.reads.length
    ? content.reads.map((r) => ({
        id: r.id,
        title: r.title,
        author: r.author,
        coverInitial: r.coverInitial || null,
        status: r.status,
        statusVariant: (r.statusVariant as 'default' | 'now' | 'warm' | null) || 'default',
      }))
    : defaults.reads

  const plays = content.plays.length
    ? content.plays.map((p) => ({
        id: p.id,
        title: p.title,
        studio: p.studio,
        playtime: p.playtime || null,
        coverInitials: p.coverInitials || null,
        status: p.status,
        statusVariant: (p.statusVariant as 'default' | 'now' | 'warm' | null) || 'default',
      }))
    : defaults.plays

  return (
    <>
      <Nav fullName={settings.name} />

      <main>
        <Hero
          meta={hero.meta || []}
          titleParts={hero.titleParts || []}
          subhead={hero.subhead}
          primaryCta={hero.primaryCta}
          secondaryCta={hero.secondaryCta}
        />

        <Projects items={projects} />

        <Experience items={experience} />

        <About
          num={about.kicker || '04 / About'}
          headlineParts={about.headlineParts || []}
          tagline={about.tagline || undefined}
          paragraphs={about.paragraphs || []}
          currently={about.currently || []}
          toolkit={about.toolkit || []}
        />

        <Adventures num="05 / Adventures" items={adventures} />

        <Logs num="06 / Logs" reads={reads} plays={plays} />

        <Contact
          kicker="07 / Contact"
          headlineParts={contact.headlineParts || []}
          socials={contact.socials || []}
          footerLeft={settings.footerLeft || undefined}
          footerRight={settings.footerRight || undefined}
        />
      </main>

      <CustomCursor />
      <ScrollReveal />
      <KeyboardNav />
    </>
  )
}
