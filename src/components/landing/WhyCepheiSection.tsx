const features = [
  {
    icon: '/assets/icon-for-everyone.svg',
    title: 'For Everyone',
    description: 'Designed for both newcomers and experienced blockchain users.',
  },
  {
    icon: '/assets/icon-fair-transparent.svg',
    title: 'Fair and Transparent',
    description: 'Every match is verified on-chain, no hidden advantages.',
  },
  {
    icon: '/assets/icon-easy-to-use.svg',
    title: 'Easy to Use',
    description: 'Intuitive interface that gets you playing in seconds.',
  },
  {
    icon: '/assets/icon-confidence.svg',
    title: 'Confidence, Not Confusion',
    description: 'Matches end cleanly. Outcomes are recorded and settled without guesswork.',
  },
];

export default function WhyCepheiSection() {
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
        Why Cephei?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full max-w-5xl">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col gap-4 p-8"
            style={{
              background: 'rgba(255, 255, 255, 0.10)',
              borderRadius: '8px',
            }}
          >
            {/* Icon with blue tint background */}
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '8px',
                background: 'rgba(77, 163, 255, 0.80)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
              }}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                style={{ width: '28px', height: '28px', objectFit: 'contain' }}
              />
            </div>

            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '16px',
                fontWeight: 700,
                color: '#e3e6ed',
              }}
            >
              {feature.title}
            </h3>

            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '22.4px',
                color: '#e3e6ed',
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
