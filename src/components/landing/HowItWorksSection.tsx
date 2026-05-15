const steps = [
  {
    vectorSrc: "/assets/step-1-vector.svg",
    title: "Connect and Sign in",
    description: "Set up once and you're ready to play.",
  },
  {
    vectorSrc: "/assets/step-2-vector.svg",
    title: "Pick a game",
    description: "Choose a game and enter a match with other players.",
  },
  {
    vectorSrc: "/assets/step-3-vector.svg",
    title: "Play and Get Results",
    description: "Results are determined on-chain and paid out automatically.",
  },
]

const arrowSrcs = ["/assets/arrow-right-1.svg", "/assets/arrow-right-2.svg"]

function StepCard({
  vectorSrc,
  title,
  description,
}: {
  vectorSrc: string
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
      <div className="flex h-[110px] w-[90px] items-center justify-center overflow-hidden rounded-md bg-[linear-gradient(180deg,rgba(128,134,154,0.6)_45.27%,rgba(128,134,154,0)_114.95%)]">
        <img src={vectorSrc} alt="" aria-hidden="true" className="h-[100px] w-20 object-contain" />
      </div>
      <div className="mt-2 flex max-w-[240px] flex-col gap-2 md:max-w-none">
        <h3 className="font-body text-[22px] font-bold leading-[1.3] text-foreground">{title}</h3>
        <p className="font-body text-sm font-normal leading-[22px] text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function StepArrow({ src }: { src: string }) {
  return (
    <div className="hidden items-start justify-center pt-11 md:flex">
      <img src={src} alt="" aria-hidden="true" className="h-5 w-[50px] cephei-white-icon" />
    </div>
  )
}

export default function HowItWorksSection() {
  return (
    <section className="mx-4 overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#141721_0%,rgba(22,26,38,0)_100%)] px-5 py-12 sm:px-10 sm:pb-20">
      <h2 className="mb-10 text-center font-control text-2xl font-medium text-foreground sm:mb-12">How it Works</h2>

      <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-10 md:grid-cols-[1fr_60px_1fr_60px_1fr] md:gap-x-2">
        <StepCard {...steps[0]} />
        <StepArrow src={arrowSrcs[0]} />
        <StepCard {...steps[1]} />
        <StepArrow src={arrowSrcs[1]} />
        <StepCard {...steps[2]} />
      </div>
    </section>
  )
}
