import { Flame, Play, TrendingUp } from "lucide-react"

const DRIVE_PREVIEW = "https://drive.google.com/file/d/1cUwLl7yzlDAlXeKz8dROvrR5i2M-yWXd/preview"
const DRIVE_VIEW = "https://drive.google.com/file/d/1cUwLl7yzlDAlXeKz8dROvrR5i2M-yWXd/view?usp=drivesdk"
const FULL_VIDEO = "https://omg10.com/4/9346339"

export function Hero() {
  return (
    <section id="top" className="relative px-4 pt-28 pb-12 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-5xl text-center">
        {/* Trending badge */}
        <div
          className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-accent"
          style={{ animation: "fade-up 0.6s ease forwards" }}
        >
          <TrendingUp className="h-3.5 w-3.5" />
          Trending Now on Asia X Hub
        </div>

        <h1
          className="text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl"
          style={{ animation: "fade-up 0.7s ease forwards" }}
        >
          <span className="inline-flex items-center gap-3">
            <Flame className="h-8 w-8 text-primary sm:h-12 sm:w-12" />
            <span className="text-gradient-gold">Asia X Hub</span>
            <Flame className="h-8 w-8 text-primary sm:h-12 sm:w-12" />
          </span>
        </h1>

        <p
          className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animation: "fade-up 0.8s ease forwards" }}
        >
          Watch Trending Videos, Exclusive Entertainment Content and Daily Updates.
        </p>
      </div>

      {/* Featured Video — primary content */}
      <div
        id="featured"
        className="mx-auto mt-10 max-w-4xl scroll-mt-24"
        style={{ animation: "fade-up 0.9s ease forwards" }}
      >
        <div className="glass rounded-2xl p-3 shadow-2xl sm:p-4">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 px-1">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-[0_0_14px_-3px_var(--brand-red)]">
                <Flame className="h-3 w-3" /> Trending
              </span>
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">
                Featured Content
              </span>
            </div>
            <span className="text-xs font-medium text-muted-foreground">HD • Exclusive</span>
          </div>

          {/* 16:9 responsive player */}
          <div className="relative w-full overflow-hidden rounded-xl bg-black shadow-[0_0_40px_-12px_var(--brand-red)]">
            <div className="relative aspect-video w-full">
              <iframe
                src={DRIVE_PREVIEW}
                title="Featured Trending Video — Asia X Hub"
                allow="autoplay; encrypted-media"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          <div className="px-1 pt-4">
            <h2 className="flex items-center gap-2 text-lg font-bold text-foreground sm:text-xl">
              <Flame className="h-5 w-5 text-primary" />
              Featured Trending Video
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Watch the latest trending entertainment content and enjoy exclusive videos available
              through Asia X Hub.
            </p>
          </div>
        </div>

        {/* Action buttons directly below the player */}
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={DRIVE_VIEW}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[oklch(0.52_0.22_22)] to-[oklch(0.62_0.22_30)] px-8 py-4 text-base font-bold text-white animate-pulse-glow transition-transform hover:scale-[1.03] sm:w-auto"
          >
            <Play className="h-5 w-5 fill-current" />
            Watch Now
          </a>

          <a
            href={FULL_VIDEO}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[oklch(0.78_0.14_82)] to-[oklch(0.88_0.13_92)] px-8 py-4 text-base font-bold text-[oklch(0.2_0.02_60)] shadow-[0_0_24px_-8px_var(--brand-gold)] transition-transform hover:scale-[1.03] sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              🎬 Watch Full Video
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
