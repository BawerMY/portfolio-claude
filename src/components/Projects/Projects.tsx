import { SectionHead, sectionStyles, type HeadlinePart } from '../SectionHead/SectionHead'
import { ProjectsList, type ProjectItem } from './ProjectsList'

type Props = {
  num?: string
  headlineParts?: HeadlinePart[]
  tagline?: string
  items: ProjectItem[]
}

const DEFAULT_HEADLINE: HeadlinePart[] = [
  { text: "Things I've" },
  { text: 'shipped', accent: 'warm' },
  { text: ',', breakAfter: true },
  { text: 'broken, and rebuilt.' },
]

export function Projects({
  num = '02 / Projects',
  headlineParts = DEFAULT_HEADLINE,
  tagline = "Hover any project to peek at it. Most are personal — a few are client work I'm allowed to talk about.",
  items,
}: Props) {
  return (
    <section className={sectionStyles.section} id="projects">
      <div className={sectionStyles.inner}>
        <SectionHead num={num} headlineParts={headlineParts} tagline={tagline} />
        <ProjectsList items={items} />
      </div>
    </section>
  )
}
