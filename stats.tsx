"use client"

import { useEffect, useRef, useState } from "react"

type Stat = {
  label: string
  target: number
  suffix?: string
  display?: string
}

const STATS: Stat[] = [
  { label: "Views", target: 100, suffix: "K+" },
  { label: "Community Members", target: 50, suffix: "K+" },
  { label: "Daily Updates", target: 0, display: "Daily" },
  { label: "Loading Experience", target: 0, display: "Fast" },
]

function Counter({ target, suffix }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const duration = 1500
          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            setValue(Math.floor(progress * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="glass mx-auto grid max-w-5xl grid-cols-2 gap-4 rounded-3xl p-8 sm:p-10 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-extrabold text-gradient-gold sm:text-4xl">
              {stat.display ? stat.display : <Counter target={stat.target} suffix={stat.suffix} />}
            </div>
            <div className="mt-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground sm:text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
