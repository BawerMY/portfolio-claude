import styles from './Contact.module.css'

type HeadlinePart = {
  text: string
  accent?: 'none' | 'warm' | 'blue' | null
  breakAfter?: boolean | null
  linkHref?: string | null
}

type Social = { label: string; href: string }

type Props = {
  kicker?: string
  headlineParts: HeadlinePart[]
  socials: Social[]
  footerLeft?: string
  footerRight?: string
}

function renderTitle(parts: HeadlinePart[]) {
  const out: React.ReactNode[] = []
  parts.forEach((p, i) => {
    const inner =
      p.accent === 'warm' ? (
        <em>{p.text}</em>
      ) : p.accent === 'blue' ? (
        <em className="accent-blue">{p.text}</em>
      ) : (
        <span>{p.text}</span>
      )

    if (p.linkHref) {
      out.push(
        <a key={`c-${i}`} href={p.linkHref} className={styles.titleLink}>
          {inner}
        </a>,
      )
    } else {
      out.push(<span key={`c-${i}`}>{inner}</span>)
    }
    if (p.breakAfter) out.push(<br key={`br-${i}`} />)
    else if (i < parts.length - 1) out.push(' ')
  })
  return out
}

export function Contact({
  kicker = '06 / Contact',
  headlineParts,
  socials,
  footerLeft = '© 2026 Bawer Yavuzatmaca',
  footerRight = 'Built with care · Brussels',
}: Props) {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <div className={`${styles.kicker} reveal`}>{kicker}</div>
        <h2 className={`${styles.title} reveal`}>{renderTitle(headlineParts)}</h2>

        <div className={`${styles.socials} reveal`}>
          {socials.map((s, i) => (
            <a key={i} href={s.href}>
              <span>{s.label}</span>
              <span className="arrow">↗</span>
            </a>
          ))}
        </div>

        <footer id="footer" className={styles.foot}>
          <span>{footerLeft}</span>
          <span>{footerRight}</span>
        </footer>
      </div>
    </section>
  )
}
