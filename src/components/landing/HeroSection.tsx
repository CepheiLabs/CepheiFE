export default function HeroSection() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center min-h-screen px-6"
      style={{ backgroundColor: '#141721' }}
    >
      <div className="flex flex-col items-center gap-6 max-w-3xl">
        <h1
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 'clamp(36px, 5vw, 48px)',
            fontWeight: 600,
            letterSpacing: '0.96px',
            lineHeight: '1.2',
            color: '#e3e6ed',
          }}
        >
          Play Competitive Games
          <br />
          with Real Opponents
        </h1>

        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '22.4px',
            color: '#e3e6ed',
            maxWidth: '384px',
          }}
        >
          Play games against real players and win the full pot when you come out on top.
        </p>

        <button
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '-0.18px',
            color: '#161a26',
            background: '#c9a24d',
            border: 'none',
            borderRadius: '8px',
            padding: '14px 32px',
            cursor: 'pointer',
            marginTop: '8px',
          }}
          className="hover:bg-[#b8903e] transition-colors"
        >
          Start Playing
        </button>
      </div>
    </section>
  );
}
