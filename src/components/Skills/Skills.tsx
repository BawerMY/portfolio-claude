import { SectionHead, sectionStyles, type HeadlinePart } from '../SectionHead/SectionHead'
import styles from './Skills.module.css'

export type SkillVariant = 'default' | 'core' | 'learning'

export type SkillChip = { name: string; variant?: SkillVariant }

export type SkillGroup = {
  id: string
  titlePre: string
  titleEm?: string
  titlePost?: string
  chips: SkillChip[]
}

type Props = {
  num: string
  headlineParts: HeadlinePart[]
  tagline?: string
  groups: SkillGroup[]
}

function chipClass(variant?: SkillVariant) {
  if (variant === 'core') return `${styles.chip} ${styles.chipCore}`
  if (variant === 'learning') return `${styles.chip} ${styles.chipLearning}`
  return styles.chip
}

export function Skills({ num, headlineParts, tagline, groups }: Props) {
  return (
    <section className={sectionStyles.section} id="skills">
      <div className={sectionStyles.inner}>
        <SectionHead num={num} headlineParts={headlineParts} tagline={tagline} />

        <div className={`${styles.grid} reveal`}>
          {groups.map((g, i) => (
            <div key={g.id} className={styles.group}>
              <div className={styles.head}>
                <h3 className={styles.title}>
                  {g.titlePre}
                  {g.titleEm && <em>{g.titleEm}</em>}
                  {g.titlePost || ''}
                </h3>
                <div className={styles.num}>{String(i + 1).padStart(2, '0')}</div>
              </div>
              <div className={styles.chips}>
                {g.chips.map((c, j) => (
                  <span key={j} className={chipClass(c.variant)}>
                    {c.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
