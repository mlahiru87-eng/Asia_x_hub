import { Flame } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="glass mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_16px_-2px_var(--brand-red)]">
            <Flame className="h-4 w-4" />
          </span>
          <span className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Asia X Hub
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <a href="#featured" className="transition-colors hover:text-foreground">
            Featured
          </a>
          <a href="#popular" className="transition-colors hover:text-foreground">
            Popular
          </a>
          <a href="#features" className="transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#community" className="transition-colors hover:text-foreground">
            Community
          </a>
        </nav>

        <a
          href="https://t.me/asia_x_hub"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[var(--brand-telegram)] px-4 py-1.5 text-sm font-semibold text-white shadow-[0_0_16px_-4px_var(--brand-telegram)] transition-transform hover:scale-105"
        >
          Join Telegram
        </a>
      </div>
    </header>
  )
}
