import { Flame, Send } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Flame className="h-4 w-4" />
            </span>
            <span className="text-base font-bold text-foreground">Asia X Hub</span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a
              href="https://t.me/asia_x_hub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--brand-telegram)]"
            >
              <Send className="h-3.5 w-3.5" />
              Telegram Channel
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Contact Us
            </a>
          </nav>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © 2026 Asia X Hub. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
