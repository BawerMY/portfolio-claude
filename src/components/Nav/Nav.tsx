import styles from './Nav.module.css'
import { NavActive } from './NavActive'

const ITEMS = [
  { id: 'home', num: '01', label: 'Home' },
  { id: 'projects', num: '02', label: 'Projects' },
  { id: 'experience', num: '03', label: 'Experience' },
  { id: 'about', num: '04', label: 'About' },
]

type Props = {
  fullName: string
}

export function Nav({ fullName }: Props) {
  const trimmed = fullName.trim()
  const firstSpace = trimmed.indexOf(' ')
  const first = firstSpace === -1 ? '' : trimmed.slice(0, firstSpace)
  const rest = firstSpace === -1 ? trimmed : trimmed.slice(firstSpace + 1)

  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <span className={styles.brandDot} />
        {first && <span className={styles.full}>{first} </span>}
        {rest}
      </div>
      <ul className={styles.list}>
        {ITEMS.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} data-num={item.num} className={styles.link} data-nav-link={item.id}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <NavActive activeClass={styles.active} sectionIds={ITEMS.map((i) => i.id)} />
    </nav>
  )
}
