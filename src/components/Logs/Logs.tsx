import { SectionHead, sectionStyles, type HeadlinePart } from '../SectionHead/SectionHead'
import styles from './Logs.module.css'

export type ReadItem = {
  id: string | number
  title: string
  author: string
  coverInitial?: string | null
  status: string
  statusVariant?: 'default' | 'now' | 'warm' | null
  italicTitle?: boolean
}

export type PlayItem = {
  id: string | number
  title: string
  studio: string
  playtime?: string | null
  coverInitials?: string | null
  status: string
  statusVariant?: 'default' | 'now' | 'warm' | null
}

type LogHeading = { prefix: string; em: string }

type Props = {
  num?: string
  headlineParts?: HeadlinePart[]
  tagline?: string
  reads: ReadItem[]
  plays: PlayItem[]
  readingHeading?: LogHeading
  gamingHeading?: LogHeading
}

const DEFAULT_HEADLINE: HeadlinePart[] = [
  { text: "What I'm" },
  { text: 'reading', accent: 'warm' },
  { text: '', breakAfter: true },
  { text: 'and' },
  { text: 'playing', accent: 'warm' },
  { text: '.' },
]

function statusClass(variant?: ReadItem['statusVariant']) {
  if (variant === 'now') return `${styles.status} ${styles.statusNow}`
  if (variant === 'warm') return `${styles.status} ${styles.statusWarm}`
  return styles.status
}

export function Logs({
  num = '05 / Logs',
  headlineParts = DEFAULT_HEADLINE,
  tagline = 'Two parallel streams that keep my head from melting. Updated whenever I finish something or get stuck.',
  reads,
  plays,
  readingHeading = { prefix: 'Reading ', em: 'log' },
  gamingHeading = { prefix: 'Gaming ', em: 'log' },
}: Props) {
  return (
    <section className={sectionStyles.section} id="logs">
      <div className={sectionStyles.inner}>
        <SectionHead num={num} headlineParts={headlineParts} tagline={tagline} />

        <div className={`${styles.grid} reveal`}>
          <div className={styles.col}>
            <h4>
              {readingHeading.prefix}
              <em>{readingHeading.em}</em>
            </h4>
            <ul className={styles.list}>
              {reads.map((r) => (
                <li key={r.id} className={styles.item}>
                  <div className={styles.cover}>
                    {r.coverInitial || r.title.charAt(0).toUpperCase()}
                  </div>
                  <div className={styles.meta}>
                    <div className={styles.title}>
                      <em>{r.title}</em>
                    </div>
                    <div className={styles.author}>{r.author}</div>
                  </div>
                  <span className={statusClass(r.statusVariant)}>{r.status}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4>
              {gamingHeading.prefix}
              <em>{gamingHeading.em}</em>
            </h4>
            <ul className={styles.list}>
              {plays.map((p) => (
                <li key={p.id} className={styles.item}>
                  <div className={`${styles.cover} ${styles.gamingCover}`}>
                    {p.coverInitials || p.title.slice(0, 2).toUpperCase()}
                  </div>
                  <div className={styles.meta}>
                    <div className={styles.title}>{p.title}</div>
                    <div className={styles.author}>
                      {p.studio}
                      {p.playtime ? ` · ${p.playtime}` : ''}
                    </div>
                  </div>
                  <span className={statusClass(p.statusVariant)}>{p.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
