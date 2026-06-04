import styles from './SectionHead.module.css'

export type HeadlinePart = {
  text: string
  accent?: 'none' | 'warm' | 'blue' | null
  breakAfter?: boolean | null
}

type Props = {
  num: string
  headlineParts: HeadlinePart[]
  tagline?: string | null
}

export function renderHeadline(parts: HeadlinePart[]) {
  const out: React.ReactNode[] = []
  parts.forEach((p, i) => {
    if (p.accent === 'warm') {
      out.push(
        <em key={`hp-${i}`} className="accent-warm">
          {p.text}
        </em>,
      )
    } else if (p.accent === 'blue') {
      out.push(
        <em key={`hp-${i}`} className="accent-blue">
          {p.text}
        </em>,
      )
    } else {
      out.push(<span key={`hp-${i}`}>{p.text}</span>)
    }
    if (p.breakAfter) {
      out.push(<br key={`hbr-${i}`} />)
    } else if (i < parts.length - 1) {
      out.push(' ')
    }
  })
  return out
}

export function SectionHead({ num, headlineParts, tagline }: Props) {
  return (
    <header className={`${styles.head} reveal`}>
      <div className={styles.num}>{num}</div>
      <div>
        <h2 className={styles.title}>{renderHeadline(headlineParts)}</h2>
        {tagline && <p className={styles.tagline}>{tagline}</p>}
      </div>
    </header>
  )
}

export { styles as sectionStyles }
