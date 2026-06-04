/**
 * One-off seeder for the `skills` global.
 *
 *   npx tsx --env-file=.env src/seed-skills.ts
 *
 * Pushes English + Italian skill groups into Payload. Safe to re-run —
 * it overwrites the global each time.
 */

import { getPayload } from 'payload'
import config from './payload.config'

type Variant = 'default' | 'core' | 'learning'
type Chip = { name: string; variant?: Variant }
type Group = { titlePre: string; titleEm?: string; titlePost?: string; chips: Chip[] }

const en: Group[] = [
  {
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
    titlePre: 'Backend & ',
    titleEm: 'services',
    chips: [
      { name: 'Payload CMS', variant: 'core' },
      { name: 'Stripe', variant: 'core' },
    ],
  },
]

const it: Group[] = [
  {
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
    titlePre: 'Backend & ',
    titleEm: 'servizi',
    chips: [
      { name: 'Payload CMS', variant: 'core' },
      { name: 'Stripe', variant: 'core' },
    ],
  },
]

async function main() {
  const payload = await getPayload({ config })

  await payload.updateGlobal({ slug: 'skills', data: { groups: en }, locale: 'en' })
  await payload.updateGlobal({ slug: 'skills', data: { groups: it }, locale: 'it' })

  console.log('✓ skills global seeded for en + it')
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
