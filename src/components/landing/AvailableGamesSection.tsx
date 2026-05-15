const games = [
  {
    image: "/assets/game-coin-flip.png",
    title: "Coin Flip",
    description: "Heads or tails. That's it. Choose a side and get an instant result.",
  },
  {
    image: "/assets/game-dice.png",
    title: "Dice",
    description: "Roll it. Beat the odds. Pick your number and see how the roll lands.",
  },
  {
    image: "/assets/game-weekly-raffle.png",
    title: "Weekly Raffle",
    description: "One draw. One winner. Could be you. Enter once and wait for the weekly result.",
  },
]

export default function AvailableGamesSection() {
  return (
    <section id="available-games" className="flex flex-col items-center gap-10 px-6 py-8 sm:gap-12">
      <h2 className="font-control text-2xl font-medium text-foreground">Available Games</h2>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
        {games.map((game) => (
          <article key={game.title} className="group flex cursor-pointer flex-col items-center gap-3">
            <div className="flex h-[190px] items-center justify-center sm:h-[220px]">
              <img
                src={game.image}
                alt={game.title}
                className="h-full w-full max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-w-[240px]"
              />
            </div>

            <div className="flex flex-col items-center gap-3 text-center">
              <h3 className="font-body text-xl font-bold text-foreground">{game.title}</h3>
              <p className="max-w-[280px] font-body text-base font-normal leading-[22.4px] text-foreground">
                {game.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
