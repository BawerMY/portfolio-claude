'use client'

import { useEffect, useRef } from 'react'
import styles from './CustomCursor.module.css'

const HOVERABLE = 'a, button, [data-hover]'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    document.body.classList.add('custom-cursor')

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0,
      raf = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }

    const tick = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx}px, ${my}px)`
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(tick)
    }

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest?.(HOVERABLE)) {
        document.body.classList.add('cursor-hover')
      }
    }
    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const related = (e as MouseEvent & { relatedTarget?: HTMLElement }).relatedTarget
      if (target.closest?.(HOVERABLE) && !related?.closest?.(HOVERABLE)) {
        document.body.classList.remove('cursor-hover')
      }
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    raf = requestAnimationFrame(tick)

    return () => {
      document.body.classList.remove('custom-cursor')
      document.body.classList.remove('cursor-hover')
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className={`${styles.ring} ${styles.enabled}`} />
      <div ref={dotRef} className={`${styles.dot} ${styles.enabled}`} />
    </>
  )
}
