const features = [
  {
    icon: "/assets/icon-for-everyone.svg",
    title: "For Everyone",
    description: "Designed for both newcomers and experienced blockchain users.",
  },
  {
    icon: "/assets/icon-fair-transparent.svg",
    title: "Fair and Transparent",
    description: "Every match is verified on-chain, no hidden advantages.",
  },
  {
    icon: "/assets/icon-easy-to-use.svg",
    title: "Easy to Use",
    description: "Intuitive interface that gets you playing in seconds.",
  },
  {
    icon: "/assets/icon-confidence.svg",
    title: "Confidence, Not Confusion",
    description: "Matches end cleanly. Outcomes are recorded and settled without guesswork.",
  },
]

export default function WhyCepheiSection() {
  return (
    <section id="why-us" className="flex flex-col items-center gap-10 px-6 py-8 sm:gap-12">
      <h2 className="font-control text-2xl font-medium text-foreground">Why Cephei?</h2>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <article key={feature.title} className="flex flex-col gap-4 rounded-md bg-white/10 p-6 sm:p-8">
            <div className="flex size-12 items-center justify-center rounded-md">
              <img
                src={feature.icon}
                alt=""
                aria-hidden="true"
                className="size-8 object-contain cephei-blue-icon"
              />
            </div>

            <h3 className="font-body text-base font-bold text-foreground">{feature.title}</h3>

            <p className="font-body text-base font-normal leading-[22.4px] text-foreground">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
