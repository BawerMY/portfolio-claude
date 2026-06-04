import styles from './Hero.module.css'
import { HeroCanvas } from './HeroCanvas'

type TitlePart = {
  text: string
  accent?: 'none' | 'warm' | 'blue' | null
  breakAfter?: boolean | null
}

type MetaItem = { label: string; live?: boolean | null }

type Cta = { label?: string | null; href?: string | null }

type Props = {
  meta: MetaItem[]
  titleParts: TitlePart[]
  subhead?: string | null
  primaryCta?: Cta | null
  secondaryCta?: Cta | null
}

function renderTitle(parts: TitlePart[]) {
  const out: React.ReactNode[] = []
  parts.forEach((p, i) => {
    const text = p.text
    if (p.accent === 'warm') {
      out.push(
        <em key={`p-${i}`} className="accent-warm">
          {text}
        </em>,
      )
    } else if (p.accent === 'blue') {
      out.push(
        <em key={`p-${i}`} className="accent-blue">
          {text}
        </em>,
      )
    } else {
      out.push(<span key={`p-${i}`}>{text}</span>)
    }
    if (p.breakAfter) {
      out.push(<br key={`br-${i}`} />)
    } else if (i < parts.length - 1) {
      out.push(' ')
    }
  })
  return out
}

export function Hero({ meta, titleParts, subhead, primaryCta, secondaryCta }: Props) {
  return (
    <section className={styles.hero} id="home">
      <HeroCanvas className={styles.canvas} />
      <div className={styles.vignette} />
      <div className={styles.inner}>
        <div className={styles.meta}>
          {meta.map((m, i) => (
            <span key={i} className={m.live ? styles.live : undefined}>
              {m.label}
            </span>
          ))}
        </div>

        <h1 className={styles.title}>{renderTitle(titleParts)}</h1>

        {subhead && <p className={styles.subhead}>{subhead}</p>}

        <div className={styles.cta}>
          {primaryCta?.label && (
            <a href={primaryCta.href || '#'} className={`${styles.btn} ${styles.primary}`}>
              <span>{primaryCta.label}</span>
              <span className={styles.arrow}>↗</span>
            </a>
          )}
          {secondaryCta?.label && (
            <a href={secondaryCta.href || '#'} className={styles.btn}>
              <span>{secondaryCta.label}</span>
            </a>
          )}
        </div>
      </div>
      <div className={styles.scroll}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
