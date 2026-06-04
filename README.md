# Portfolio — Next.js 15 + Payload CMS 3

Personal portfolio for Bawer Yavuzatmaca. Single-page editorial dark-navy design with hover-reveal projects, animated hero canvas, custom cursor, keyboard nav. Every visible string editable through Payload at `/admin`.

## Stack

- **Next.js 15** (App Router) — `15.4.11` pinned for Payload `@payloadcms/next@3.x` peer compat.
- **Payload 3** — mounted in the same Next app, admin at `/admin`, REST at `/api`, GraphQL at `/api/graphql`.
- **SQLite** via `@payloadcms/db-sqlite` — zero-config local dev. Swap to Postgres adapter for prod.
- **TypeScript**, **CSS Modules** per component, **next/font/google** for Newsreader / Geist / Geist Mono.

## Run

```bash
cp .env.example .env       # adjust PAYLOAD_SECRET
npm install
npm run dev                # http://localhost:3000
```

First boot creates a SQLite file at `./payload.db`. Visit `/admin` to create the first user. Site renders immediately using hard-coded defaults (`src/lib/defaults.ts`) so no CMS content is required to demo.

### Seed CMS with default content

```bash
npm run seed
```

Creates admin user `admin@example.com / change-me-now`, populates all globals, inserts 6 projects + 2 adventures + 5 reads + 5 plays. Idempotent for collections (skips if any row exists), upserts globals.

## Project structure

```
src/
├── app/
│   ├── (frontend)/         # public site
│   │   ├── layout.tsx      # next/font, html shell, metadata from Payload
│   │   └── page.tsx        # server component, fetches all content, renders sections
│   └── (payload)/          # admin + api routes (Payload-generated boilerplate)
├── collections/            # Payload collections — Projects, Adventures, Reads, Plays, Media, Users
├── globals/                # Payload globals — SiteSettings, Hero, About, Contact
├── components/
│   ├── Nav/                # fixed top nav + IntersectionObserver active state
│   ├── Hero/               # h1 + animated canvas (particles/ascii/gradient)
│   ├── Projects/           # hover-reveal list + cursor-tracked floating preview
│   ├── About/              # prose + Currently/Toolkit data cards
│   ├── Adventures/         # hiking + cycling cards with SVG topo/elevation art
│   ├── Logs/               # reading + gaming columns
│   ├── Contact/            # oversized mailto + socials + footer
│   ├── SectionHead/        # shared section heading layout
│   ├── CustomCursor/       # dual-ring rAF cursor (hidden on touch)
│   ├── ScrollReveal/       # IntersectionObserver .reveal -> .in
│   └── KeyboardNav/        # G+H / G+P / G+A / G+C vim-style nav + hint toast
├── lib/
│   ├── getContent.ts       # parallel fetch of all globals + collections
│   └── defaults.ts         # fallback content used when CMS empty
├── styles/
│   └── tokens.css          # CSS custom properties (colors, fonts, spacing)
├── payload.config.ts
└── seed.ts                 # seed script (npm run seed)
```

## Where to edit what

| Region of the page  | Source                                      |
| ------------------- | ------------------------------------------- |
| Brand, footer       | Global → **Site Settings**                  |
| Hero meta + headline + CTAs | Global → **Hero**                   |
| About prose + cards | Global → **About**                          |
| Contact headline + socials | Global → **Contact**                 |
| Project rows        | Collection → **Projects** (`order` field sorts) |
| Adventure cards     | Collection → **Adventures**                 |
| Reading log         | Collection → **Reads**                      |
| Gaming log          | Collection → **Plays**                      |

In `About.paragraphs[*].content` use inline markers `{warm:phrase}` for amber italic and `{blue:phrase}` for steel-blue italic. In `Hero.titleParts` / `About.headlineParts` / `Contact.headlineParts` each segment has an `accent` select (`none|warm|blue`) and a `breakAfter` checkbox.

## Responsive

Three breakpoints in CSS modules:

- **≤1100 px (tablet)** — single-column about, 2-col sidebar cards, smaller preview pane
- **≤760 px (mobile)** — projects reflow to 3-area grid, scroll hint hidden, custom cursor + keyboard toast disabled
- **≤380 px (small phones)** — extra tightening
- **`(hover: none)`** — kills custom cursor and forces project stack chips visible on any touch device

## Production

1. Set `PAYLOAD_SECRET` to a long random string.
2. Swap SQLite for Postgres: `npm install @payloadcms/db-postgres`, replace `sqliteAdapter` import in `src/payload.config.ts`.
3. `npm run build && npm start`.
