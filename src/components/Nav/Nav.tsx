import styles from './Nav.module.css'
import { NavActive } from './NavActive'
import { LanguageSwitcher } from './LanguageSwitcher'
import type { Locale } from '@/lib/i18n'
import type { Labels } from '@/lib/labels'

type Props = {
  fullName: string
  locale: Locale
  labels: Labels['nav']
}

export function Nav({ fullName, locale, labels }: Props) {
  const trimmed = fullName.trim()
  const firstSpace = trimmed.indexOf(' ')
  const first = firstSpace === -1 ? '' : trimmed.slice(0, firstSpace)
  const rest = firstSpace === -1 ? trimmed : trimmed.slice(firstSpace + 1)

  const items = [
    { id: 'home', num: '01', label: labels.home },
    { id: 'projects', num: '02', label: labels.projects },
    { id: 'experience', num: '03', label: labels.experience },
    { id: 'about', num: '05', label: labels.about },
  ]

  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <span className={styles.brandDot} />
        {first && <span className={styles.full}>{first} </span>}
        {rest}
      </div>
      <div className={styles.right}>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                data-num={item.num}
                className={styles.link}
                data-nav-link={item.id}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <LanguageSwitcher
          current={locale}
          labels={{
            languageMenu: labels.languageMenu,
            english: labels.english,
            italian: labels.italian,
          }}
        />
      </div>
      <NavActive activeClass={styles.active} sectionIds={items.map((i) => i.id)} />
    </nav>
  )
}
