import { SectionHead, sectionStyles, type HeadlinePart } from '../SectionHead/SectionHead'
import styles from './Experience.module.css'

export type ExperienceItem = {
  id: string | number
  role: string
  company: string
  period: string
  location?: string | null
  summary: string
  stack: string[]
  status?: 'current' | 'past' | null
}

type Props = {
  num?: string
  headlineParts?: HeadlinePart[]
  tagline?: string
  items: ExperienceItem[]
}

const DEFAULT_HEADLINE: HeadlinePart[] = [
  { text: 'Where' },
  { text: "I've", accent: 'warm' },
  { text: '', breakAfter: true },
  { text: 'left fingerprints.' },
]

export function Experience({
  num = '03 / Experience',
  headlineParts = DEFAULT_HEADLINE,
  tagline = 'Roles, projects, and teams that shaped how I work. Listed newest-first.',
  items,
}: Props) {
  if (!items.length) return null

  return (
    <section className={sectionStyles.section} id="experience">
      <div className={sectionStyles.inner}>
        <SectionHead num={num} headlineParts={headlineParts} tagline={tagline} />

        <div className={`${styles.list} reveal`}>
          {items.map((item, idx) => (
            <article key={item.id} className={styles.row}>
              <span className={styles.num}>{String(idx + 1).padStart(2, '0')}</span>

              <div className={styles.period}>
                <span>{item.period}</span>
                {item.location && <span className={styles.location}>{item.location}</span>}
              </div>

              <div className={styles.main}>
                <div className={styles.titleRow}>
                  <h3 className={styles.role}>{item.role}</h3>
                  <span className={styles.company}>{item.company}</span>
                </div>
                <p className={styles.summary}>{item.summary}</p>
                {item.stack.length > 0 && (
                  <div className={styles.stack}>
                    {item.stack.map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>
                )}
              </div>

              <span
                className={`${styles.status} ${
                  item.status === 'current' ? styles.statusCurrent : ''
                }`}
              >
                {item.status === 'current' ? 'Current' : 'Past'}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
