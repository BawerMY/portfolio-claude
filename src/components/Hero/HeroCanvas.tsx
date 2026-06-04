'use client'

import { useEffect, useRef } from 'react'

type Mode = 'particles' | 'ascii' | 'gradient'

type Props = {
  mode?: Mode
  className?: string
}

export function HeroCanvas({ mode = 'particles', className }: Props) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0,
      H = 0,
      dpr = 1
    let particles: { x: number; y: number; z: number; vx: number; vy: number; tw: number }[] = []
    let asciiCells = { cols: 0, rows: 0, cell: 14 }
    const t0 = performance.now()
    let raf = 0

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = parent.clientWidth
      H = parent.clientHeight
      canvas.style.width = `${W}px`
      canvas.style.height = `${H}px`
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initMode()
    }

    const initMode = () => {
      if (mode === 'particles') {
        const count = Math.floor((W * H) / 9000)
        particles = Array.from({ length: count }, () => ({
          x: Math.random() * W,
          y: Math.random() * H,
          z: Math.random() * 0.8 + 0.2,
          vx: (Math.random() - 0.5) * 0.06,
          vy: (Math.random() - 0.5) * 0.06,
          tw: Math.random() * Math.PI * 2,
        }))
      } else if (mode === 'ascii') {
        const cell = 14
        asciiCells = { cols: Math.ceil(W / cell), rows: Math.ceil(H / cell), cell }
      }
    }

    const drawParticles = (now: number) => {
      ctx.clearRect(0, 0, W, H)
      const g = ctx.createRadialGradient(W * 0.3, H * 0.4, 50, W * 0.3, H * 0.4, Math.max(W, H) * 0.7)
      g.addColorStop(0, 'rgba(30, 60, 110, 0.35)')
      g.addColorStop(1, 'rgba(10, 22, 40, 0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, W, H)
      const tt = (now - t0) / 1000
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0
        const tw = (Math.sin(tt * 1.5 + p.tw) + 1) * 0.5
        const alpha = 0.15 + 0.55 * p.z * tw
        const r = 0.6 + p.z * 1.2
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180, 205, 240, ${alpha})`
        ctx.fill()
      }
    }

    const drawAscii = (now: number) => {
      ctx.clearRect(0, 0, W, H)
      const tt = (now - t0) / 1000
      const { cols, rows, cell } = asciiCells
      ctx.font = `${cell - 2}px var(--mono-font, ui-monospace, monospace)`
      ctx.textBaseline = 'top'
      const chars = ['·', '·', '·', ':', '+', '*', '×']
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const v =
            Math.sin(x * 0.18 + tt * 0.6) * Math.cos(y * 0.22 - tt * 0.4) * 0.5 +
            Math.sin((x + y) * 0.1 + tt * 0.3) * 0.5
          const n = (v + 1) * 0.5
          if (n < 0.45) continue
          const idx = Math.min(chars.length - 1, Math.floor(((n - 0.45) / 0.55) * chars.length))
          const alpha = (n - 0.45) * 0.9
          ctx.fillStyle = `rgba(120, 165, 220, ${alpha})`
          ctx.fillText(chars[idx], x * cell, y * cell)
        }
      }
    }

    const drawGradient = (now: number) => {
      const tt = (now - t0) / 1000
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#0a1628'
      ctx.fillRect(0, 0, W, H)
      const blobs = [
        { x: W * 0.25 + Math.sin(tt * 0.3) * 80, y: H * 0.4 + Math.cos(tt * 0.25) * 60, r: Math.max(W, H) * 0.5, c: 'rgba(60, 110, 200, 0.35)' },
        { x: W * 0.7 + Math.cos(tt * 0.4) * 100, y: H * 0.6 + Math.sin(tt * 0.35) * 80, r: Math.max(W, H) * 0.45, c: 'rgba(90, 70, 180, 0.25)' },
        { x: W * 0.5 + Math.sin(tt * 0.2) * 120, y: H * 0.2 + Math.cos(tt * 0.3) * 40, r: Math.max(W, H) * 0.4, c: 'rgba(212, 165, 116, 0.10)' },
      ]
      ctx.globalCompositeOperation = 'lighter'
      for (const b of blobs) {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r)
        g.addColorStop(0, b.c)
        g.addColorStop(1, 'rgba(10,22,40,0)')
        ctx.fillStyle = g
        ctx.fillRect(0, 0, W, H)
      }
      ctx.globalCompositeOperation = 'source-over'
    }

    const loop = (now: number) => {
      if (mode === 'particles') drawParticles(now)
      else if (mode === 'ascii') drawAscii(now)
      else drawGradient(now)
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('resize', resize)
    resize()
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [mode])

  return <canvas ref={ref} className={className} />
}
