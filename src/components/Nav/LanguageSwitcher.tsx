'use client'

import { useEffect, useRef, useState, useTransition } from 'react'
import { setLocaleAction } from '@/app/actions/locale'
import type { Locale } from '@/lib/i18n'
import styles from './LanguageSwitcher.module.css'

type Props = {
  current: Locale
  labels: { languageMenu: string; english: string; italian: string }
}

export function LanguageSwitcher({ current, labels }: Props) {
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return
    function onDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  function pick(locale: Locale) {
    setOpen(false)
    if (locale === current) return
    startTransition(() => {
      setLocaleAction(locale)
    })
  }

  return (
    <div ref={rootRef} className={styles.root}>
      <button
        type="button"
        className={styles.trigger}
        aria-label={labels.languageMenu}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        disabled={isPending}
      >
        <GlobeIcon />
        <span className={styles.code}>{current.toUpperCase()}</span>
      </button>
      {open && (
        <ul role="menu" className={styles.menu}>
          <li>
            <button
              type="button"
              role="menuitemradio"
              aria-checked={current === 'en'}
              className={`${styles.item} ${current === 'en' ? styles.itemActive : ''}`}
              onClick={() => pick('en')}
            >
              <span>{labels.english}</span>
              <span className={styles.itemCode}>EN</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              role="menuitemradio"
              aria-checked={current === 'it'}
              className={`${styles.item} ${current === 'it' ? styles.itemActive : ''}`}
              onClick={() => pick('it')}
            >
              <span>{labels.italian}</span>
              <span className={styles.itemCode}>IT</span>
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}

function GlobeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.7 3 4 6 4 9s-1.3 6-4 9c-2.7-3-4-6-4-9s1.3-6 4-9z" />
    </svg>
  )
}
