import { Zap, Flame, Smartphone, Rocket } from "lucide-react"

const FEATURES = [
  {
    icon: Zap,
    title: "Fast Access",
    desc: "Instant access to featured entertainment content.",
    color: "var(--brand-gold)",
  },
  {
    icon: Flame,
    title: "Trending Content",
    desc: "Stay updated with popular videos.",
    color: "var(--brand-red)",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    desc: "Optimized for all devices and screen sizes.",
    color: "var(--brand-telegram)",
  },
  {
    icon: Rocket,
    title: "Daily Updates",
    desc: "Fresh content and community updates.",
    color: "var(--brand-gold)",
  },
]

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground sm:text-3xl">
          Why Choose <span className="text-gradient-gold">Asia X Hub</span>
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="glass group rounded-2xl p-6 text-center transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `color-mix(in oklch, ${f.color} 18%, transparent)`,
                  color: f.color,
                  boxShadow: `0 0 20px -8px ${f.color}`,
                }}
              >
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
