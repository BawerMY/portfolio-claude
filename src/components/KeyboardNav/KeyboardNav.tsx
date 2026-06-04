'use client'

import { useEffect } from 'react'

const SECTION_MAP: Record<string, string> = {
  '1': 'home',
  '2': 'projects',
  '3': 'experience',
  '4': 'about',
  '5': 'adventures',
  '6': 'logs',
  '7': 'contact',
}

export function KeyboardNav() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const t = e.target as HTMLElement
      if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable) return

      const k = e.key

      if (k === '0') {
        e.preventDefault()
        const footer = document.getElementById('footer')
        if (footer) {
          window.scrollTo({ top: footer.offsetTop - 20, behavior: 'smooth' })
        } else {
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        }
        return
      }

      const id = SECTION_MAP[k]
      if (!id) return
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' })
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return null
}
