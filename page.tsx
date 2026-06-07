import { AnimatedBackground } from "@/components/animated-background"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TelegramBanner } from "@/components/telegram-banner"
import { Features } from "@/components/features"
import { PopularContent } from "@/components/popular-content"
import { Stats } from "@/components/stats"
import { Community } from "@/components/community"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      <SiteHeader />
      <main className="scroll-smooth">
        <Hero />
        <TelegramBanner />
        <Features />
        <PopularContent />
        <Stats />
        <Community />
      </main>
      <SiteFooter />
    </>
  )
}
