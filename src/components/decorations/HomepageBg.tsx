import { useEffect, useRef } from 'react'

export default function HomepageBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W = canvas.width
    const H = canvas.height
    const COLS = 22
    const ROWS = 14
    const cW = W / COLS
    const cH = H / ROWS
    const INTRO = 2200
    let start: number | null = null
    let animId: number

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 4)

    const vignette = (x: number, y: number) => {
      const nx = ((x / W) - 0.5) * 2
      const ny = ((y / H) - 0.5) * 2
      return Math.max(0, 1 - Math.sqrt(nx * nx * 0.6 + ny * ny) * 0.75)
    }

    type Particle = {
      x: number; y: number
      r: number; life: number
      speed: number; delay: number
    }

    const particles: Particle[] = Array.from({ length: 38 }, () => {
      const col = Math.floor(Math.random() * COLS)
      const row = Math.floor(Math.random() * ROWS)
      return {
        x: col * cW, y: row * cH,
        r: Math.random() * 1.4 + 0.6,
        life: Math.random(),
        speed: 0.003 + Math.random() * 0.004,
        delay: Math.random() * 1200,
      }
    })

    type Pulse = {
      horiz: boolean; index: number
      pos: number; speed: number
      alpha: number; color: [number, number, number]
    }

    const pulses: Pulse[] = []
    let lastPulse = 0

    const spawnPulse = () => {
      const horiz = Math.random() > 0.5
      pulses.push({
        horiz,
        index: horiz
          ? Math.floor(Math.random() * ROWS)
          : Math.floor(Math.random() * COLS),
        pos: 0,
        speed: 0.012 + Math.random() * 0.01,
        alpha: 0.55 + Math.random() * 0.35,
        color: Math.random() > 0.6 ? [100, 200, 255] : [255, 255, 255],
      })
    }

    const draw = (ts: number) => {
      if (!start) start = ts
      const elapsed = ts - start
      const raw = Math.min(elapsed / INTRO, 1)
      const p = easeOut(raw)

      ctx.clearRect(0, 0, W, H)

      ctx.lineWidth = 0.5
      for (let c = 0; c <= COLS; c++) {
        const x = c * cW
        ctx.strokeStyle = `rgba(255,255,255,${0.13 * p * vignette(x, H / 2)})`
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H * p); ctx.stroke()
      }
      for (let r = 0; r <= ROWS; r++) {
        const y = r * cH
        ctx.strokeStyle = `rgba(255,255,255,${0.13 * p * vignette(W / 2, y)})`
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W * p, y); ctx.stroke()
      }

      if (raw > 0.6 && ts - lastPulse > 900) {
        spawnPulse()
        lastPulse = ts
      }
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pu = pulses[i]
        pu.pos += pu.speed
        const fade = Math.min(pu.pos * 4, 1) * Math.max(0, 1 - (pu.pos - 0.8) * 5)
        const a = pu.alpha * fade * p
        const [r, g, b] = pu.color
        const len = 0.18
        ctx.lineWidth = 1

        if (pu.horiz) {
          const y = pu.index * cH
          const x0 = Math.max(0, (pu.pos - len) * W)
          const x1 = Math.min(W, pu.pos * W)
          const grad = ctx.createLinearGradient(x0, 0, x1, 0)
          grad.addColorStop(0, `rgba(${r},${g},${b},0)`)
          grad.addColorStop(1, `rgba(${r},${g},${b},${a})`)
          ctx.strokeStyle = grad
          ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x1, y); ctx.stroke()
        } else {
          const x = pu.index * cW
          const y0 = Math.max(0, (pu.pos - len) * H)
          const y1 = Math.min(H, pu.pos * H)
          const grad = ctx.createLinearGradient(0, y0, 0, y1)
          grad.addColorStop(0, `rgba(${r},${g},${b},0)`)
          grad.addColorStop(1, `rgba(${r},${g},${b},${a})`)
          ctx.strokeStyle = grad
          ctx.beginPath(); ctx.moveTo(x, y0); ctx.lineTo(x, y1); ctx.stroke()
        }

        if (pu.pos > 1.1) pulses.splice(i, 1)
      }

      for (let c = 0; c <= COLS; c++) {
        for (let r = 0; r <= ROWS; r++) {
          const x = c * cW, y = r * cH
          ctx.fillStyle = `rgba(255,255,255,${0.3 * p * vignette(x, y)})`
          ctx.beginPath(); ctx.arc(x, y, 0.9, 0, Math.PI * 2); ctx.fill()
        }
      }

      for (const pt of particles) {
        if (elapsed < pt.delay) continue
        pt.life += pt.speed
        if (pt.life > 1) {
          pt.life = 0
          const col = Math.floor(Math.random() * COLS)
          const row = Math.floor(Math.random() * ROWS)
          pt.x = col * cW
          pt.y = row * cH
        }
        const pulse = Math.sin(pt.life * Math.PI)
        const a = pulse * 0.7 * p * vignette(pt.x, pt.y)
        const radius = pt.r + pulse * 1.2

        const grd = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, radius * 3.5)
        grd.addColorStop(0, `rgba(130,200,255,${a})`)
        grd.addColorStop(1, `rgba(130,200,255,0)`)
        ctx.fillStyle = grd
        ctx.beginPath(); ctx.arc(pt.x, pt.y, radius * 3.5, 0, Math.PI * 2); ctx.fill()

        ctx.fillStyle = `rgba(220,240,255,${a * 0.9})`
        ctx.beginPath(); ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2); ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        width={1400}
        height={900}
      />
    </div>
  )
}