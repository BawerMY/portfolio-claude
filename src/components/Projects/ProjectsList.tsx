'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Projects.module.css'

export type ProjectItem = {
  id: string | number
  title: string
  slug: string
  year: string
  stack: string[]
  status: string
  href: string
  paletteFrom: string
  paletteTo: string
}

type Props = {
  items: ProjectItem[]
}

export function ProjectsList({ items }: Props) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: 0, y: 0, lerpX: 0, lerpY: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY
    }
    document.addEventListener('mousemove', onMove)

    let raf = 0
    const tick = () => {
      const m = mousePos.current
      m.lerpX += (m.x - m.lerpX) * 0.15
      m.lerpY += (m.y - m.lerpY) * 0.15
      const el = previewRef.current
      if (el) {
        const w = el.offsetWidth
        const h = el.offsetHeight
        const offX = 24,
          offY = 24
        const left = Math.min(Math.max(m.lerpX + offX, 12), window.innerWidth - w - 12)
        const top = Math.min(Math.max(m.lerpY + offY, 12), window.innerHeight - h - 12)
        el.style.left = left + 'px'
        el.style.top = top + 'px'
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  const active = items.find((i) => i.slug === activeSlug)
  const gradient = active
    ? `linear-gradient(135deg, ${active.paletteFrom} 0%, ${active.paletteTo} 100%)`
    : undefined

  return (
    <>
      <div className={`${styles.list} reveal`}>
        {items.map((p, idx) => (
          <a
            key={p.id}
            className={styles.row}
            href={p.href || '#'}
            onMouseEnter={() => setActiveSlug(p.slug)}
            onMouseLeave={() => setActiveSlug(null)}
            onClick={(e) => {
              if (!p.href || p.href === '#') e.preventDefault()
            }}
          >
            <span className={styles.num}>{String(idx + 1).padStart(2, '0')}</span>
            <div className={styles.titleColumn}>
              <div className={styles.titleRow}>
                <h3 className={styles.title}>{p.title}</h3>
                <span className={styles.year}>{p.year}</span>
              </div>
              <div className={styles.stack}>
                {p.stack.map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
            </div>
            <span className={styles.status}>{p.status}</span>
            <span className={styles.arrow}>↗</span>
          </a>
        ))}
      </div>

      <div
        ref={previewRef}
        className={`${styles.preview} ${active ? styles.visible : ''}`}
      >
        <div className={styles.previewInner} style={gradient ? { background: gradient } : undefined}>
          <div className={styles.previewStripe} />
          <div className={styles.previewLabel}>{active?.title || 'Preview'}</div>
        </div>
      </div>
    </>
  )
}
