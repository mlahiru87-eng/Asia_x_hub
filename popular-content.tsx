import Image from "next/image"
import { Play } from "lucide-react"

const ITEMS = [
  { title: "Trending Videos", tag: "Hot", img: "/thumb-trending.png" },
  { title: "Popular Content", tag: "Top", img: "/thumb-popular.png" },
  { title: "Daily Highlights", tag: "New", img: "/thumb-daily.png" },
  { title: "Recommended Videos", tag: "Pick", img: "/thumb-recommended.png" },
]

const DRIVE_VIEW = "https://drive.google.com/file/d/1cUwLl7yzlDAlXeKz8dROvrR5i2M-yWXd/view?usp=drivesdk"

export function PopularContent() {
  return (
    <section id="popular" className="scroll-mt-24 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-2xl font-bold text-foreground sm:text-3xl">
          Popular Content
        </h2>
        <p className="mb-8 text-center text-sm text-muted-foreground">
          Explore trending highlights and recommended videos
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <a
              key={item.title}
              href={DRIVE_VIEW}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group block overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={item.img || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
                  {item.tag}
                </span>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-[0_0_20px_-4px_var(--brand-red)]">
                    <Play className="h-5 w-5 fill-current" />
                  </span>
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">Asia X Hub Exclusive</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
