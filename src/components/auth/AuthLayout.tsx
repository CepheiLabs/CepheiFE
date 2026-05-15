import type { ReactNode } from "react"

import { Button } from "@/components/ui/button"

type AuthLayoutProps = {
  children: ReactNode
  eyebrow: string
  title: string
  description: string
  onBackHome: () => void
}

export default function AuthLayout({
  children,
  eyebrow,
  title,
  description,
  onBackHome,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="flex h-[64px] items-center justify-between bg-card px-5 sm:h-[68px] sm:px-8">
        <button
          type="button"
          onClick={onBackHome}
          className="font-logo text-[32px] font-semibold leading-none text-[var(--brand-teal)] sm:text-4xl"
        >
          CEPHEI
        </button>
        <Button variant="outline" size="sm" onClick={onBackHome}>
          Back Home
        </Button>
      </header>

      <section className="grid min-h-[calc(100vh-64px)] grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
        <aside className="hidden flex-col justify-between overflow-hidden bg-[linear-gradient(180deg,#141721_0%,#161A26_100%)] px-10 py-12 lg:flex">
          <div>
            <p className="font-mono text-xs font-medium uppercase text-primary">{eyebrow}</p>
            <h1 className="mt-5 max-w-xl font-heading text-5xl font-semibold leading-tight text-foreground">
              {title}
            </h1>
            <p className="mt-5 max-w-md font-body text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>

          <div className="relative h-[360px]">
            <div className="absolute inset-x-8 bottom-8 h-40 rounded-full bg-accent/10 blur-3xl" />
            <img
              src="/assets/game-dice.png"
              alt=""
              aria-hidden="true"
              className="absolute left-4 top-8 w-44 object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)]"
            />
            <img
              src="/assets/game-coin-flip.png"
              alt=""
              aria-hidden="true"
              className="absolute right-6 top-0 w-40 object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)]"
            />
            <img
              src="/assets/game-weekly-raffle.png"
              alt=""
              aria-hidden="true"
              className="absolute bottom-2 left-1/2 w-52 -translate-x-1/2 object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)]"
            />
          </div>
        </aside>

        <div className="flex items-center justify-center px-5 py-10 sm:px-6 lg:px-10">
          <div className="w-full max-w-[440px]">{children}</div>
        </div>
      </section>
    </main>
  )
}
