import { SectionHead, sectionStyles, type HeadlinePart } from '../SectionHead/SectionHead'
import { CyclingArt, HikingArt } from './AdventureArt'
import styles from './Adventures.module.css'

export type AdventureItem = {
  id: string | number
  kind: string
  season: string
  title: string
  stats: { label: string; value: string }[]
  coverImageUrl?: string | null
  coverImageAlt?: string | null
}

type Props = {
  num?: string
  headlineParts?: HeadlinePart[]
  tagline?: string
  items: AdventureItem[]
}

const DEFAULT_HEADLINE: HeadlinePart[] = [
  { text: 'Where the' },
  { text: 'screen', accent: 'warm' },
  { text: 'ends.' },
]

function Art({ kind, id }: { kind: string; id: string }) {
  if (kind.toLowerCase() === 'cycling') return <CyclingArt id={id} />
  return <HikingArt id={id} />
}

export function Adventures({
  num = '04 / Adventures',
  headlineParts = DEFAULT_HEADLINE,
  tagline = 'I keep two ongoing logs: distance covered on the bike, and elevation earned on foot. The numbers are honest, even the embarrassing ones.',
  items,
}: Props) {
  return (
    <section className={sectionStyles.section} id="adventures">
      <div className={sectionStyles.inner}>
        <SectionHead num={num} headlineParts={headlineParts} tagline={tagline} />

        <div className={`${styles.grid} reveal`}>
          {items.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.photo}>
                {item.coverImageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.coverImageUrl}
                    alt={item.coverImageAlt || item.title}
                    className={styles.cover}
                  />
                ) : (
                  <Art kind={item.kind} id={`adv-grad-${item.id}`} />
                )}
              </div>
              <div className={styles.overlay} />
              <div className={styles.content}>
                <div className={styles.kicker}>
                  {item.kind} · {item.season}
                </div>
                <h3 className={styles.title}>{item.title}</h3>
                <div className={styles.stats}>
                  {item.stats.map((s, i) => (
                    <div key={i} className={styles.stat}>
                      <span>{s.label}</span>
                      <span>{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
