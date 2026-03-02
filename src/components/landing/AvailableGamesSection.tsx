const games = [
  {
    image: '/assets/game-coin-flip.png',
    title: 'Coin Flip',
    description: "Heads or tails. That's it. Choose a side and get an instant result.",
  },
  {
    image: '/assets/game-dice.png',
    title: 'Dice',
    description: 'Roll it. Beat the odds. Pick your number and see how the roll lands.',
  },
  {
    image: '/assets/game-weekly-raffle.png',
    title: 'Weekly Raffle',
    description: 'One draw. One winner. Could be you. Enter once and wait for the weekly result.',
  },
];

export default function AvailableGamesSection() {
  return (
    <section className="flex flex-col items-center gap-12 px-6 py-8">
      <h2
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '24px',
          fontWeight: 500,
          letterSpacing: '-0.48px',
          color: '#e3e6ed',
        }}
      >
        Available Games
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {games.map((game) => (
          <div
            key={game.title}
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            <div className="flex items-center justify-center" style={{ height: '220px' }}>
              <img
                src={game.image}
                alt={game.title}
                style={{
                  width: '100%',
                  maxWidth: '240px',
                  height: '100%',
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease',
                }}
                className="group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col items-center gap-3 text-center">
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#e3e6ed',
                }}
              >
                {game.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '22.4px',
                  color: '#e3e6ed',
                  maxWidth: '280px',
                }}
              >
                {game.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
