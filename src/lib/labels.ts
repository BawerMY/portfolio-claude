import type { Locale } from '@/lib/i18n'
import type { HeadlinePart } from '@/components/SectionHead/SectionHead'

type Labels = {
  nav: {
    home: string
    projects: string
    experience: string
    about: string
    languageMenu: string
    english: string
    italian: string
  }
  hero: { scroll: string }
  experience: {
    num: string
    headlineParts: HeadlinePart[]
    tagline: string
    current: string
    past: string
  }
  projects: {
    num: string
    headlineParts: HeadlinePart[]
    tagline: string
  }
  about: {
    num: string
    currently: string
    now: string
    toolkit: string
  }
  skills: {
    num: string
    headlineParts: HeadlinePart[]
    tagline: string
  }
  adventures: {
    num: string
    headlineParts: HeadlinePart[]
    tagline: string
  }
  logs: {
    num: string
    headlineParts: HeadlinePart[]
    tagline: string
    readingLog: { prefix: string; em: string }
    gamingLog: { prefix: string; em: string }
  }
  contact: { num: string }
}

const all: Record<Locale, Labels> = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      about: 'About',
      languageMenu: 'Language',
      english: 'English',
      italian: 'Italiano',
    },
    hero: { scroll: 'Scroll' },
    experience: {
      num: '03 / Experience',
      headlineParts: [
        { text: 'Where' },
        { text: "I've", accent: 'warm' },
        { text: '', breakAfter: true },
        { text: 'left fingerprints.' },
      ],
      tagline: 'Roles, projects, and teams that shaped how I work. Listed newest-first.',
      current: 'Current',
      past: 'Past',
    },
    projects: {
      num: '02 / Projects',
      headlineParts: [
        { text: "Things I've" },
        { text: 'shipped', accent: 'warm' },
        { text: ',', breakAfter: true },
        { text: 'broken, and rebuilt.' },
      ],
      tagline:
        "Hover any project to peek at it. Most are personal — a few are client work I'm allowed to talk about.",
    },
    about: { num: '05 / About', currently: 'Currently', now: 'Now', toolkit: 'Toolkit' },
    skills: {
      num: '04 / Skills',
      headlineParts: [
        { text: 'The' },
        { text: 'toolkit', accent: 'warm' },
        { text: ',', breakAfter: true },
        { text: 'in full.' },
      ],
      tagline: 'What I use to build, every day.',
    },
    adventures: {
      num: '06 / Adventures',
      headlineParts: [
        { text: 'Where the' },
        { text: 'screen', accent: 'warm' },
        { text: 'ends.' },
      ],
      tagline:
        'I keep two ongoing logs: distance covered on the bike, and elevation earned on foot. The numbers are honest, even the embarrassing ones.',
    },
    logs: {
      num: '07 / Logs',
      headlineParts: [
        { text: "What I'm" },
        { text: 'reading', accent: 'warm' },
        { text: '', breakAfter: true },
        { text: 'and' },
        { text: 'playing', accent: 'warm' },
        { text: '.' },
      ],
      tagline:
        'Two parallel streams that keep my head from melting. Updated whenever I finish something or get stuck.',
      readingLog: { prefix: 'Reading ', em: 'log' },
      gamingLog: { prefix: 'Gaming ', em: 'log' },
    },
    contact: { num: '08 / Contact' },
  },
  it: {
    nav: {
      home: 'Home',
      projects: 'Progetti',
      experience: 'Esperienza',
      about: 'Chi sono',
      languageMenu: 'Lingua',
      english: 'English',
      italian: 'Italiano',
    },
    hero: { scroll: 'Scorri' },
    experience: {
      num: '03 / Esperienza',
      headlineParts: [
        { text: 'Dove ho' },
        { text: 'lasciato', accent: 'warm' },
        { text: '', breakAfter: true },
        { text: 'le mie impronte.' },
      ],
      tagline:
        'Ruoli, progetti e team che hanno plasmato il mio modo di lavorare. Dal più recente.',
      current: 'Attuale',
      past: 'Passato',
    },
    projects: {
      num: '02 / Progetti',
      headlineParts: [
        { text: 'Cose che ho' },
        { text: 'pubblicato', accent: 'warm' },
        { text: ',', breakAfter: true },
        { text: 'rotto e ricostruito.' },
      ],
      tagline:
        'Passa sopra un progetto per dare un’occhiata. Quasi tutti personali — alcuni lavori per clienti di cui posso parlare.',
    },
    about: { num: '05 / Chi sono', currently: 'Adesso', now: 'Ora', toolkit: 'Strumenti' },
    skills: {
      num: '04 / Competenze',
      headlineParts: [
        { text: 'Lo' },
        { text: 'strumentario', accent: 'warm' },
        { text: ',', breakAfter: true },
        { text: 'per intero.' },
      ],
      tagline: 'Quello che uso per costruire, ogni giorno.',
    },
    adventures: {
      num: '06 / Avventure',
      headlineParts: [
        { text: 'Dove finisce' },
        { text: 'lo schermo', accent: 'warm' },
        { text: '.' },
      ],
      tagline:
        'Tengo due diari paralleli: chilometri in bici e dislivello a piedi. I numeri sono onesti, anche quelli imbarazzanti.',
    },
    logs: {
      num: '07 / Diari',
      headlineParts: [
        { text: 'Cosa sto' },
        { text: 'leggendo', accent: 'warm' },
        { text: '', breakAfter: true },
        { text: 'e' },
        { text: 'giocando', accent: 'warm' },
        { text: '.' },
      ],
      tagline:
        'Due flussi paralleli che mi tengono la testa a posto. Aggiornati quando finisco qualcosa o mi blocco.',
      readingLog: { prefix: 'Diario di ', em: 'lettura' },
      gamingLog: { prefix: 'Diario di ', em: 'gioco' },
    },
    contact: { num: '08 / Contatti' },
  },
}

export function getLabels(locale: Locale = 'en'): Labels {
  return all[locale]
}

export type { Labels }
