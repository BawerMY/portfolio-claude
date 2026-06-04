import type { ProjectItem } from '@/components/Projects/ProjectsList'
import type { ExperienceItem } from '@/components/Experience/Experience'
import type { AdventureItem } from '@/components/Adventures/Adventures'
import type { ReadItem, PlayItem } from '@/components/Logs/Logs'
import type { SkillGroup } from '@/components/Skills/Skills'
import type { Locale } from '@/lib/i18n'

type DefaultsShape = {
  siteSettings: {
    name: string
    role: string
    pageTitle: string
    pageDescription: string
    footerLeft: string
    footerRight: string
  }
  hero: {
    meta: { label: string; live?: boolean }[]
    titleParts: { text: string; accent: 'none' | 'warm' | 'blue'; breakAfter?: boolean }[]
    subhead: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
  }
  about: {
    kicker: string
    headlineParts: { text: string; accent: 'none' | 'warm' }[]
    tagline: string
    paragraphs: { content: string }[]
    currently: { key: string; value: string }[]
    toolkit: { key: string; value: string }[]
  }
  contact: {
    headlineParts: {
      text: string
      accent: 'none' | 'warm'
      breakAfter?: boolean
      linkHref?: string
    }[]
    socials: { label: string; href: string }[]
  }
  projects: ProjectItem[]
  experience: ExperienceItem[]
  skills: SkillGroup[]
  adventures: AdventureItem[]
  reads: ReadItem[]
  plays: PlayItem[]
}

const skillsEn: SkillGroup[] = [
  {
    id: 'languages',
    titlePre: 'Languages',
    chips: [
      { name: 'TypeScript', variant: 'core' },
      { name: 'JavaScript', variant: 'core' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Python' },
    ],
  },
  {
    id: 'frameworks',
    titlePre: 'Frameworks & ',
    titleEm: 'UI',
    chips: [
      { name: 'Angular', variant: 'core' },
      { name: 'Vue', variant: 'core' },
      { name: 'Flutter', variant: 'core' },
      { name: 'Tailwind', variant: 'core' },
      { name: 'SCSS', variant: 'core' },
    ],
  },
  {
    id: 'tools',
    titlePre: 'Tools & ',
    titleEm: 'AI',
    chips: [
      { name: 'Git', variant: 'core' },
      { name: 'VS Code', variant: 'core' },
      { name: 'Claude Code', variant: 'core' },
      { name: 'Claude Design', variant: 'core' },
    ],
  },
  {
    id: 'backend',
    titlePre: 'Backend & ',
    titleEm: 'services',
    chips: [
      { name: 'Payload CMS', variant: 'core' },
      { name: 'Stripe', variant: 'core' },
    ],
  },
]

const skillsIt: SkillGroup[] = [
  {
    id: 'languages',
    titlePre: 'Linguaggi',
    chips: [
      { name: 'TypeScript', variant: 'core' },
      { name: 'JavaScript', variant: 'core' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Python' },
    ],
  },
  {
    id: 'frameworks',
    titlePre: 'Framework & ',
    titleEm: 'UI',
    chips: [
      { name: 'Angular', variant: 'core' },
      { name: 'Vue', variant: 'core' },
      { name: 'Flutter', variant: 'core' },
      { name: 'Tailwind', variant: 'core' },
      { name: 'SCSS', variant: 'core' },
    ],
  },
  {
    id: 'tools',
    titlePre: 'Strumenti & ',
    titleEm: 'AI',
    chips: [
      { name: 'Git', variant: 'core' },
      { name: 'VS Code', variant: 'core' },
      { name: 'Claude Code', variant: 'core' },
      { name: 'Claude Design', variant: 'core' },
    ],
  },
  {
    id: 'backend',
    titlePre: 'Backend & ',
    titleEm: 'servizi',
    chips: [
      { name: 'Payload CMS', variant: 'core' },
      { name: 'Stripe', variant: 'core' },
    ],
  },
]

const en: DefaultsShape = {
  siteSettings: {
    name: 'Bawer Yavuzatmaca',
    role: 'Frontend Developer',
    pageTitle: 'Bawer Yavuzatmaca — Frontend Developer',
    pageDescription:
      'Frontend developer in Brussels building thoughtful interfaces and chasing long roads.',
    footerLeft: '© 2026 Bawer Yavuzatmaca',
    footerRight: 'Built with care · Brussels',
  },
  hero: {
    meta: [
      { label: 'Frontend Developer' },
      { label: 'Brussels, BE' },
      { label: 'Available for work', live: true },
    ],
    titleParts: [
      { text: 'I build', accent: 'none' },
      { text: 'thoughtful', accent: 'warm', breakAfter: true },
      { text: 'interfaces', accent: 'none' },
      { text: '&', accent: 'blue' },
      { text: 'chase', accent: 'none', breakAfter: true },
      { text: 'long roads.', accent: 'none' },
    ],
    subhead:
      "Hi, I'm Bawer — a frontend developer who treats every pixel like it matters. Off-screen you'll find me on a bike, in a forest, or in a half-abandoned building with a camera.",
    primaryCta: { label: 'See projects', href: '#projects' },
    secondaryCta: { label: 'About me', href: '#about' },
  },
  about: {
    kicker: '05 / About',
    headlineParts: [
      { text: 'The short', accent: 'none' },
      { text: 'version.', accent: 'warm' },
    ],
    tagline:
      'Born curious, slightly obsessive about details, and chronically out the door.',
    paragraphs: [
      {
        content:
          "I'm a frontend developer based in Brussels. I build for the web because the medium is {warm:generous} — you can ship something on a Tuesday and have a stranger tell you it changed their afternoon.",
      },
      {
        content:
          "Right now I'm deepening into design systems, motion, and the messy edges of real user data. I want to be a {blue:full-stack craftsperson} — backend, infra, all of it — but I'm taking it one honest layer at a time.",
      },
      {
        content:
          "When I'm not at a screen, I'm probably on two wheels, lost in a paperback, or climbing a fence I shouldn't be climbing to photograph the rust on the other side.",
      },
    ],
    currently: [
      { key: 'Reading', value: 'A Gentleman in Moscow' },
      { key: 'Playing', value: 'Elden Ring DLC' },
      { key: 'Listening', value: 'Khruangbin · Live' },
      { key: 'Building', value: 'Ride Notes v2' },
    ],
    toolkit: [
      { key: 'Daily', value: 'React · TS · Tailwind' },
      { key: 'Often', value: 'Next.js · Svelte · Astro' },
      { key: 'Learning', value: 'Rust · Postgres · WebGPU' },
      { key: 'Editor', value: 'Neovim, somehow' },
    ],
  },
  contact: {
    headlineParts: [
      { text: "Let's build", accent: 'none', breakAfter: true },
      { text: 'something', accent: 'none' },
      { text: 'worth', accent: 'warm', breakAfter: true },
      { text: 'linking to.', accent: 'none', linkHref: 'mailto:hello@bawer.dev' },
    ],
    socials: [
      { label: 'Email', href: 'mailto:hello@bawer.dev' },
      { label: 'GitHub', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Read.cv', href: '#' },
      { label: 'Strava', href: '#' },
    ],
  },
  projects: [
    {
      id: 'meridian',
      title: 'Meridian',
      slug: 'meridian',
      year: '2026',
      stack: ['React', 'WebGL', 'Tailwind'],
      status: 'Live',
      href: '#',
      paletteFrom: '#1a3a6e',
      paletteTo: '#5a8fd6',
    },
    {
      id: 'ridenotes',
      title: 'Ride Notes',
      slug: 'ridenotes',
      year: '2025',
      stack: ['Next.js', 'Mapbox', 'Supabase'],
      status: 'Personal',
      href: '#',
      paletteFrom: '#1f3a52',
      paletteTo: '#7da9e0',
    },
    {
      id: 'frame',
      title: 'Frame',
      slug: 'frame',
      year: '2025',
      stack: ['SvelteKit', 'SQLite', 'Cloudflare'],
      status: 'Open Source',
      href: '#',
      paletteFrom: '#243b66',
      paletteTo: '#a4b4cd',
    },
    {
      id: 'dust',
      title: 'Dust & Daylight',
      slug: 'dust',
      year: '2024',
      stack: ['Astro', 'MDX', 'Three.js'],
      status: 'Photo Journal',
      href: '#',
      paletteFrom: '#3a2f4a',
      paletteTo: '#d4a574',
    },
    {
      id: 'atlas',
      title: 'Atlas',
      slug: 'atlas',
      year: '2024',
      stack: ['Vue 3', 'D3', 'Pinia'],
      status: 'Client',
      href: '#',
      paletteFrom: '#1a2f4a',
      paletteTo: '#6c5ce7',
    },
    {
      id: 'quiet',
      title: 'Quiet Hours',
      slug: 'quiet',
      year: '2023',
      stack: ['Vanilla JS', 'Web Audio', 'Canvas'],
      status: 'Experiment',
      href: '#',
      paletteFrom: '#142838',
      paletteTo: '#5fbf7f',
    },
  ],
  experience: [
    {
      id: 'e1',
      role: 'Senior Frontend Developer',
      company: 'Atelier Studio',
      period: '2024 — Present',
      location: 'Brussels · Hybrid',
      summary:
        'Lead the design-system rewrite across three product surfaces. Ship motion-heavy marketing pages and an internal CMS-driven editor toolkit.',
      stack: ['React', 'TypeScript', 'Next.js', 'Framer Motion'],
      status: 'current',
    },
    {
      id: 'e2',
      role: 'Frontend Developer',
      company: 'Northbound Labs',
      period: '2022 — 2024',
      location: 'Remote',
      summary:
        'Built data-dense dashboards for a fleet-telemetry product. Owned the migration from CRA to Next.js App Router and cut TTI by 60%.',
      stack: ['React', 'Next.js', 'D3', 'GraphQL'],
      status: 'past',
    },
    {
      id: 'e3',
      role: 'UI Engineer (Contract)',
      company: 'Maison & Co.',
      period: '2021 — 2022',
      location: 'Paris',
      summary:
        'Shipped a Three.js product configurator and a Stripe-backed checkout for a small luxury goods brand. Wrote the front-of-house design tokens still in use today.',
      stack: ['React', 'Three.js', 'Stripe', 'Tailwind'],
      status: 'past',
    },
    {
      id: 'e4',
      role: 'Junior Web Developer',
      company: 'Freelance',
      period: '2019 — 2021',
      location: 'Brussels',
      summary:
        'Built marketing sites and small e-commerce stores for local clients. Learned how to ship under deadline and how to say no to scope creep.',
      stack: ['Vue', 'Nuxt', 'Sanity', 'Vanilla CSS'],
      status: 'past',
    },
  ],
  skills: skillsEn,
  adventures: [
    {
      id: 'vosges',
      kind: 'Hiking',
      season: '2025 season',
      title: 'Vosges & Ardennes',
      stats: [
        { label: 'Trails', value: '14' },
        { label: 'Elevation', value: '9.2k m' },
        { label: 'Longest', value: '32 km' },
      ],
    },
    {
      id: 'koln',
      kind: 'Cycling',
      season: '2025 season',
      title: 'Brussels → Köln',
      stats: [
        { label: 'Distance', value: '4,820 km' },
        { label: 'Climbed', value: '34.5k m' },
        { label: 'Big day', value: '168 km' },
      ],
    },
  ],
  reads: [
    {
      id: 'r1',
      title: 'A Gentleman in Moscow',
      author: 'Amor Towles',
      coverInitial: 'G',
      status: 'Now',
      statusVariant: 'now',
    },
    {
      id: 'r2',
      title: 'Piranesi',
      author: 'Susanna Clarke',
      coverInitial: 'P',
      status: 'Just finished',
      statusVariant: 'default',
    },
    {
      id: 'r3',
      title: 'The Dispossessed',
      author: 'Ursula K. Le Guin',
      coverInitial: 'D',
      status: '2025',
      statusVariant: 'default',
    },
    {
      id: 'r4',
      title: 'Bluets',
      author: 'Maggie Nelson',
      coverInitial: 'B',
      status: 'Reread',
      statusVariant: 'warm',
    },
    {
      id: 'r5',
      title: 'Stoner',
      author: 'John Williams',
      coverInitial: 'S',
      status: '2025',
      statusVariant: 'default',
    },
  ],
  plays: [
    {
      id: 'p1',
      title: 'Elden Ring — Shadow of the Erdtree',
      studio: 'FromSoftware',
      playtime: '84h',
      coverInitials: 'ER',
      status: 'Now',
      statusVariant: 'now',
    },
    {
      id: 'p2',
      title: 'Outer Wilds',
      studio: 'Mobius Digital',
      playtime: 'finished',
      coverInitials: 'OW',
      status: 'All-time',
      statusVariant: 'warm',
    },
    {
      id: 'p3',
      title: 'Death Stranding',
      studio: 'Kojima Productions',
      playtime: null,
      coverInitials: 'DR',
      status: '2025',
      statusVariant: 'default',
    },
    {
      id: 'p4',
      title: 'Red Dead Redemption 2',
      studio: 'Rockstar',
      playtime: 'slow replay',
      coverInitials: 'RD',
      status: 'On-and-off',
      statusVariant: 'default',
    },
    {
      id: 'p5',
      title: 'Celeste',
      studio: 'Maddy Makes Games',
      playtime: 'B-sides',
      coverInitials: 'CL',
      status: '2024',
      statusVariant: 'default',
    },
  ],
}

const it: DefaultsShape = {
  siteSettings: {
    name: 'Bawer Yavuzatmaca',
    role: 'Sviluppatore Frontend',
    pageTitle: 'Bawer Yavuzatmaca — Sviluppatore Frontend',
    pageDescription:
      'Sviluppatore frontend a Bruxelles che costruisce interfacce curate e insegue strade lunghe.',
    footerLeft: '© 2026 Bawer Yavuzatmaca',
    footerRight: 'Fatto con cura · Bruxelles',
  },
  hero: {
    meta: [
      { label: 'Sviluppatore Frontend' },
      { label: 'Bruxelles, BE' },
      { label: 'Disponibile per lavoro', live: true },
    ],
    titleParts: [
      { text: 'Costruisco', accent: 'none' },
      { text: 'interfacce', accent: 'warm', breakAfter: true },
      { text: 'curate', accent: 'none' },
      { text: '&', accent: 'blue' },
      { text: 'inseguo', accent: 'none', breakAfter: true },
      { text: 'strade lunghe.', accent: 'none' },
    ],
    subhead:
      'Ciao, sono Bawer — uno sviluppatore frontend che tratta ogni pixel come se contasse. Fuori dallo schermo mi trovi in bici, in un bosco o in un edificio semi-abbandonato con una macchina fotografica.',
    primaryCta: { label: 'Vedi i progetti', href: '#projects' },
    secondaryCta: { label: 'Chi sono', href: '#about' },
  },
  about: {
    kicker: '05 / Chi sono',
    headlineParts: [
      { text: 'La versione', accent: 'none' },
      { text: 'breve.', accent: 'warm' },
    ],
    tagline:
      'Nato curioso, leggermente ossessionato dai dettagli, e cronicamente fuori porta.',
    paragraphs: [
      {
        content:
          'Sono uno sviluppatore frontend con base a Bruxelles. Costruisco per il web perché il mezzo è {warm:generoso} — puoi pubblicare qualcosa di martedì e ricevere il messaggio di uno sconosciuto che ti dice che gli ha cambiato il pomeriggio.',
      },
      {
        content:
          'In questo momento mi sto immergendo nei design system, nelle animazioni e nei bordi sporchi dei dati utente reali. Voglio diventare un {blue:artigiano full-stack} — backend, infra, tutto — ma procedo uno strato onesto alla volta.',
      },
      {
        content:
          'Quando non sono davanti a uno schermo, sono probabilmente su due ruote, perso in un romanzo, o a scavalcare una recinzione che non dovrei scavalcare per fotografare la ruggine dall’altra parte.',
      },
    ],
    currently: [
      { key: 'Sto leggendo', value: 'A Gentleman in Moscow' },
      { key: 'Sto giocando', value: 'Elden Ring DLC' },
      { key: 'Sto ascoltando', value: 'Khruangbin · Live' },
      { key: 'Sto costruendo', value: 'Ride Notes v2' },
    ],
    toolkit: [
      { key: 'Ogni giorno', value: 'React · TS · Tailwind' },
      { key: 'Spesso', value: 'Next.js · Svelte · Astro' },
      { key: 'Imparando', value: 'Rust · Postgres · WebGPU' },
      { key: 'Editor', value: 'Neovim, in qualche modo' },
    ],
  },
  contact: {
    headlineParts: [
      { text: 'Costruiamo', accent: 'none', breakAfter: true },
      { text: 'qualcosa che', accent: 'none' },
      { text: 'meriti', accent: 'warm', breakAfter: true },
      { text: 'un link.', accent: 'none', linkHref: 'mailto:hello@bawer.dev' },
    ],
    socials: [
      { label: 'Email', href: 'mailto:hello@bawer.dev' },
      { label: 'GitHub', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Read.cv', href: '#' },
      { label: 'Strava', href: '#' },
    ],
  },
  projects: [
    {
      id: 'meridian',
      title: 'Meridian',
      slug: 'meridian',
      year: '2026',
      stack: ['React', 'WebGL', 'Tailwind'],
      status: 'In produzione',
      href: '#',
      paletteFrom: '#1a3a6e',
      paletteTo: '#5a8fd6',
    },
    {
      id: 'ridenotes',
      title: 'Ride Notes',
      slug: 'ridenotes',
      year: '2025',
      stack: ['Next.js', 'Mapbox', 'Supabase'],
      status: 'Personale',
      href: '#',
      paletteFrom: '#1f3a52',
      paletteTo: '#7da9e0',
    },
    {
      id: 'frame',
      title: 'Frame',
      slug: 'frame',
      year: '2025',
      stack: ['SvelteKit', 'SQLite', 'Cloudflare'],
      status: 'Open Source',
      href: '#',
      paletteFrom: '#243b66',
      paletteTo: '#a4b4cd',
    },
    {
      id: 'dust',
      title: 'Dust & Daylight',
      slug: 'dust',
      year: '2024',
      stack: ['Astro', 'MDX', 'Three.js'],
      status: 'Diario fotografico',
      href: '#',
      paletteFrom: '#3a2f4a',
      paletteTo: '#d4a574',
    },
    {
      id: 'atlas',
      title: 'Atlas',
      slug: 'atlas',
      year: '2024',
      stack: ['Vue 3', 'D3', 'Pinia'],
      status: 'Cliente',
      href: '#',
      paletteFrom: '#1a2f4a',
      paletteTo: '#6c5ce7',
    },
    {
      id: 'quiet',
      title: 'Quiet Hours',
      slug: 'quiet',
      year: '2023',
      stack: ['Vanilla JS', 'Web Audio', 'Canvas'],
      status: 'Esperimento',
      href: '#',
      paletteFrom: '#142838',
      paletteTo: '#5fbf7f',
    },
  ],
  experience: [
    {
      id: 'e1',
      role: 'Sviluppatore Frontend Senior',
      company: 'Atelier Studio',
      period: '2024 — Presente',
      location: 'Bruxelles · Ibrido',
      summary:
        'Guido la riscrittura del design system su tre superfici di prodotto. Pubblico pagine marketing ricche di animazioni e un toolkit di editor interno guidato da CMS.',
      stack: ['React', 'TypeScript', 'Next.js', 'Framer Motion'],
      status: 'current',
    },
    {
      id: 'e2',
      role: 'Sviluppatore Frontend',
      company: 'Northbound Labs',
      period: '2022 — 2024',
      location: 'Remoto',
      summary:
        'Ho costruito dashboard dense di dati per un prodotto di telemetria flotte. Ho gestito la migrazione da CRA a Next.js App Router e ho tagliato il TTI del 60%.',
      stack: ['React', 'Next.js', 'D3', 'GraphQL'],
      status: 'past',
    },
    {
      id: 'e3',
      role: 'UI Engineer (Contratto)',
      company: 'Maison & Co.',
      period: '2021 — 2022',
      location: 'Parigi',
      summary:
        'Ho pubblicato un configuratore di prodotto in Three.js e un checkout basato su Stripe per un piccolo brand di lusso. Ho scritto i design token frontend ancora in uso oggi.',
      stack: ['React', 'Three.js', 'Stripe', 'Tailwind'],
      status: 'past',
    },
    {
      id: 'e4',
      role: 'Sviluppatore Web Junior',
      company: 'Freelance',
      period: '2019 — 2021',
      location: 'Bruxelles',
      summary:
        'Ho costruito siti marketing e piccoli e-commerce per clienti locali. Ho imparato a pubblicare entro la scadenza e a dire no allo scope creep.',
      stack: ['Vue', 'Nuxt', 'Sanity', 'Vanilla CSS'],
      status: 'past',
    },
  ],
  skills: skillsIt,
  adventures: [
    {
      id: 'vosges',
      kind: 'Trekking',
      season: 'Stagione 2025',
      title: 'Vosgi & Ardenne',
      stats: [
        { label: 'Sentieri', value: '14' },
        { label: 'Dislivello', value: '9.2k m' },
        { label: 'Più lungo', value: '32 km' },
      ],
    },
    {
      id: 'koln',
      kind: 'Ciclismo',
      season: 'Stagione 2025',
      title: 'Bruxelles → Colonia',
      stats: [
        { label: 'Distanza', value: '4.820 km' },
        { label: 'Salita', value: '34,5k m' },
        { label: 'Giornata top', value: '168 km' },
      ],
    },
  ],
  reads: [
    {
      id: 'r1',
      title: 'A Gentleman in Moscow',
      author: 'Amor Towles',
      coverInitial: 'G',
      status: 'Ora',
      statusVariant: 'now',
    },
    {
      id: 'r2',
      title: 'Piranesi',
      author: 'Susanna Clarke',
      coverInitial: 'P',
      status: 'Appena finito',
      statusVariant: 'default',
    },
    {
      id: 'r3',
      title: 'The Dispossessed',
      author: 'Ursula K. Le Guin',
      coverInitial: 'D',
      status: '2025',
      statusVariant: 'default',
    },
    {
      id: 'r4',
      title: 'Bluets',
      author: 'Maggie Nelson',
      coverInitial: 'B',
      status: 'Rilettura',
      statusVariant: 'warm',
    },
    {
      id: 'r5',
      title: 'Stoner',
      author: 'John Williams',
      coverInitial: 'S',
      status: '2025',
      statusVariant: 'default',
    },
  ],
  plays: [
    {
      id: 'p1',
      title: 'Elden Ring — Shadow of the Erdtree',
      studio: 'FromSoftware',
      playtime: '84h',
      coverInitials: 'ER',
      status: 'Ora',
      statusVariant: 'now',
    },
    {
      id: 'p2',
      title: 'Outer Wilds',
      studio: 'Mobius Digital',
      playtime: 'finito',
      coverInitials: 'OW',
      status: 'Sempreverde',
      statusVariant: 'warm',
    },
    {
      id: 'p3',
      title: 'Death Stranding',
      studio: 'Kojima Productions',
      playtime: null,
      coverInitials: 'DR',
      status: '2025',
      statusVariant: 'default',
    },
    {
      id: 'p4',
      title: 'Red Dead Redemption 2',
      studio: 'Rockstar',
      playtime: 'rigiocata lenta',
      coverInitials: 'RD',
      status: 'A intermittenza',
      statusVariant: 'default',
    },
    {
      id: 'p5',
      title: 'Celeste',
      studio: 'Maddy Makes Games',
      playtime: 'B-sides',
      coverInitials: 'CL',
      status: '2024',
      statusVariant: 'default',
    },
  ],
}

const ALL: Record<Locale, DefaultsShape> = { en, it }

export function getDefaults(locale: Locale = 'en'): DefaultsShape {
  return ALL[locale]
}

// Legacy export — kept so unrelated imports (if any) keep building.
export const defaults = en
