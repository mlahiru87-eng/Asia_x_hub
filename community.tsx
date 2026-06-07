import { Send } from "lucide-react"

export function Community() {
  return (
    <section id="community" className="scroll-mt-24 px-4 py-12 sm:px-6">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.2 0.04 25) 0%, oklch(0.16 0.02 270) 50%, oklch(0.2 0.05 235) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 70% 20%, var(--brand-red) 0%, transparent 50%), radial-gradient(circle at 20% 80%, var(--brand-telegram) 0%, transparent 50%)",
          }}
        />

        <div className="relative px-6 py-14 text-center sm:px-12">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Stay Connected With Asia X Hub
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Join our Telegram community and receive instant updates, trending content, and exclusive
            releases.
          </p>
          <a
            href="https://t.me/asia_x_hub"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-telegram)] px-8 py-4 text-base font-bold text-white shadow-[0_0_28px_-6px_var(--brand-telegram)] transition-transform hover:scale-105"
          >
            <Send className="h-5 w-5" />
            Join Telegram Channel
          </a>
        </div>
      </div>
    </section>
  )
}
