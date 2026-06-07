"use client"

import { useEffect, useState } from "react"

type Particle = {
  id: number
  left: string
  top: string
  size: number
  duration: number
  delay: number
  color: string
}

const COLORS = ["var(--brand-red)", "var(--brand-gold)", "var(--brand-telegram)"]

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const next: Particle[] = Array.from({ length: 26 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 6 + 5,
      delay: Math.random() * 5,
      color: COLORS[i % COLORS.length],
    }))
    setParticles(next)
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Cinematic dark base */}
      <div className="absolute inset-0 bg-background" />

      {/* Animated gradient glow */}
      <div
        className="absolute -top-1/3 left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 rounded-full opacity-40 blur-3xl animate-gradient"
        style={{
          background:
            "radial-gradient(circle, var(--brand-red) 0%, transparent 60%)",
          backgroundSize: "200% 200%",
        }}
      />
      <div
        className="absolute bottom-0 right-0 h-[60vh] w-[60vh] translate-x-1/4 translate-y-1/4 rounded-full opacity-30 blur-3xl animate-gradient"
        style={{
          background:
            "radial-gradient(circle, var(--brand-telegram) 0%, transparent 60%)",
          backgroundSize: "200% 200%",
        }}
      />
      <div
        className="absolute bottom-1/4 left-0 h-[40vh] w-[40vh] -translate-x-1/4 rounded-full opacity-20 blur-3xl animate-gradient"
        style={{
          background:
            "radial-gradient(circle, var(--brand-gold) 0%, transparent 60%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full animate-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: 0.5,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            boxShadow: `0 0 8px ${p.color}`,
          }}
        />
      ))}

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
    </div>
  )
}
