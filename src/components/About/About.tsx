import { SectionHead, sectionStyles, type HeadlinePart } from '../SectionHead/SectionHead'
import styles from './About.module.css'

type KV = { key: string; value: string }

type Props = {
  num?: string
  headlineParts: HeadlinePart[]
  tagline?: string
  paragraphs: { content: string }[]
  currently: KV[]
  toolkit: KV[]
}

// Renders {warm:text} and {blue:text} inline markers from raw paragraph copy.
function renderProse(text: string) {
  const parts: React.ReactNode[] = []
  const regex = /\{(warm|blue):([^}]+)\}/g
  let last = 0
  let match: RegExpExecArray | null
  let key = 0
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index))
    }
    const [, kind, body] = match
    if (kind === 'warm') {
      parts.push(
        <em key={`m-${key++}`}>{body}</em>,
      )
    } else {
      parts.push(
        <span key={`m-${key++}`} className={styles.accent}>
          {body}
        </span>,
      )
    }
    last = match.index + match[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}

export function About({ num, headlineParts, tagline, paragraphs, currently, toolkit }: Props) {
  return (
    <section className={sectionStyles.section} id="about">
      <div className={sectionStyles.inner}>
        <SectionHead num={num || '03 / About'} headlineParts={headlineParts} tagline={tagline} />

        <div className={`${styles.grid} reveal`}>
          <div className={styles.prose}>
            {paragraphs.map((p, i) => (
              <p key={i}>{renderProse(p.content)}</p>
            ))}
          </div>

          <aside className={styles.side}>
            <div className={styles.card}>
              <div className={styles.cardLabel}>
                <span>Currently</span>
                <span className={styles.cardLive}>● Now</span>
              </div>
              {currently.map((row, i) => (
                <div key={i} className={styles.statRow}>
                  <span className={styles.statKey}>{row.key}</span>
                  <span className={styles.statVal}>{row.value}</span>
                </div>
              ))}
            </div>

            <div className={styles.card}>
              <div className={styles.cardLabel}>
                <span>Toolkit</span>
              </div>
              {toolkit.map((row, i) => (
                <div key={i} className={styles.statRow}>
                  <span className={styles.statKey}>{row.key}</span>
                  <span className={styles.statVal}>{row.value}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
