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
import { getDefaults } from '@/lib/defaults'
import { getLocale } from '@/lib/i18n'
import { getLabels } from '@/lib/labels'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const locale = await getLocale()
  const defaults = getDefaults(locale)
  const labels = getLabels(locale)
  const content = await getContent(locale)

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
      <Nav fullName={settings.name} locale={locale} labels={labels.nav} />

      <main>
        <Hero
          meta={hero.meta || []}
          titleParts={hero.titleParts || []}
          subhead={hero.subhead}
          primaryCta={hero.primaryCta}
          secondaryCta={hero.secondaryCta}
          scrollLabel={labels.hero.scroll}
        />

        <Projects
          num={labels.projects.num}
          headlineParts={labels.projects.headlineParts}
          tagline={labels.projects.tagline}
          items={projects}
        />

        <Experience
          num={labels.experience.num}
          headlineParts={labels.experience.headlineParts}
          tagline={labels.experience.tagline}
          items={experience}
          currentLabel={labels.experience.current}
          pastLabel={labels.experience.past}
        />

        <About
          num={about.kicker || labels.contact.num}
          headlineParts={about.headlineParts || []}
          tagline={about.tagline || undefined}
          paragraphs={about.paragraphs || []}
          currently={about.currently || []}
          toolkit={about.toolkit || []}
          currentlyLabel={labels.about.currently}
          nowLabel={labels.about.now}
          toolkitLabel={labels.about.toolkit}
        />

        <Adventures
          num={labels.adventures.num}
          headlineParts={labels.adventures.headlineParts}
          tagline={labels.adventures.tagline}
          items={adventures}
        />

        <Logs
          num={labels.logs.num}
          headlineParts={labels.logs.headlineParts}
          tagline={labels.logs.tagline}
          reads={reads}
          plays={plays}
          readingHeading={labels.logs.readingLog}
          gamingHeading={labels.logs.gamingLog}
        />

        <Contact
          kicker={labels.contact.num}
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
