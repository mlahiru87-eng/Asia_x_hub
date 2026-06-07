import { Send } from "lucide-react"

export function TelegramBanner() {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="glass relative mx-auto max-w-5xl overflow-hidden rounded-3xl p-8 sm:p-12">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, var(--brand-telegram) 0%, transparent 55%)",
          }}
        />
        <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-telegram)] text-white shadow-[0_0_30px_-6px_var(--brand-telegram)] animate-float">
            <Send className="h-10 w-10" />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              🚀 Join Asia X Hub Telegram Channel
            </h2>
            <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              Get instant updates, trending videos, exclusive content, and special releases directly
              on Telegram. Join our growing community today.
            </p>
          </div>

          <a
            href="https://t.me/asia_x_hub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--brand-telegram)] px-7 py-3.5 text-base font-bold text-white shadow-[0_0_24px_-6px_var(--brand-telegram)] transition-transform hover:scale-105"
          >
            <Send className="h-5 w-5" />
            Join Telegram Channel
          </a>
        </div>
      </div>
    </section>
  )
}
