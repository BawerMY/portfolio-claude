'use client'

import { useEffect } from 'react'

type Props = {
  activeClass: string
  sectionIds: string[]
}

export function NavActive({ activeClass, sectionIds }: Props) {
  useEffect(() => {
    const linkMap = new Map<string, HTMLElement>()
    document.querySelectorAll<HTMLElement>('[data-nav-link]').forEach((el) => {
      const id = el.dataset.navLink
      if (id) linkMap.set(id, el)
    })

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            linkMap.forEach((link) => link.classList.remove(activeClass))
            linkMap.get(entry.target.id)?.classList.add(activeClass)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))

    // smooth scroll for anchor links
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return
      const id = anchor.getAttribute('href')?.slice(1)
      if (!id) return
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' })
    }
    document.addEventListener('click', handler)

    // initialize active link on mount
    const initial = sectionIds[0]
    linkMap.get(initial)?.classList.add(activeClass)

    return () => {
      observer.disconnect()
      document.removeEventListener('click', handler)
    }
  }, [activeClass, sectionIds])

  return null
}
