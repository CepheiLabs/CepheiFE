import { Button } from "@/components/ui/button"

type HeroSectionProps = {
  onStartPlaying: () => void
}

export default function HeroSection({ onStartPlaying }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="flex min-h-[640px] flex-col items-center justify-center px-6 pb-10 pt-[64px] text-center sm:min-h-screen sm:pt-[68px]"
    >
      <div className="flex w-full max-w-[343px] flex-col items-center gap-6 sm:max-w-3xl">
        <h1 className="font-heading text-[34px] font-semibold leading-[1.18] tracking-normal text-foreground min-[390px]:text-4xl sm:text-5xl">
          <span className="sm:block">Play Competitive Games</span>
          <span className="sm:block"> with Real Opponents</span>
        </h1>

        <p className="max-w-sm font-body text-base font-normal leading-[22.4px] text-foreground">
          Play games against real players and win the full pot when you come out on top.
        </p>

        <Button
          size="xl"
          className="mt-2 h-auto w-full max-w-[190px] px-8 py-3.5 text-base sm:w-auto"
          onClick={onStartPlaying}
        >
          Start Playing
        </Button>
      </div>
    </section>
  )
}
