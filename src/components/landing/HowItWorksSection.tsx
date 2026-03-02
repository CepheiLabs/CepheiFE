const steps = [
  {
    vectorSrc: '/assets/step-1-vector.svg',
    title: 'Connect and Sign in',
    description: "Set up once and you're ready to play.",
  },
  {
    vectorSrc: '/assets/step-2-vector.svg',
    title: 'Pick a game',
    description: 'Choose a game and enter a match with other players.',
  },
  {
    vectorSrc: '/assets/step-3-vector.svg',
    title: 'Play and Get Results',
    description: 'Results are determined on-chain and paid out automatically.',
  },
];

const arrowSrcs = ['/assets/arrow-right-1.svg', '/assets/arrow-right-2.svg'];

function StepCard({ vectorSrc, title, description }: { vectorSrc: string; title: string; description: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div
        style={{
          width: '90px',
          height: '110px',
          background: 'linear-gradient(180deg, rgba(128,134,154,0.6) 45.27%, rgba(128,134,154,0) 114.95%)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img src={vectorSrc} alt="" aria-hidden="true" style={{ width: '80px', height: '100px', objectFit: 'contain' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 700, color: '#e3e6ed', lineHeight: '1.3' }}>
          {title}
        </span>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 400, color: '#c7cbd6', lineHeight: '22px' }}>
          {description}
        </span>
      </div>
    </div>
  );
}

function StepArrow({ src }: { src: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '44px' }}>
      <img src={src} alt="→" style={{ width: '50px', height: '20px' }} />
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #141721 0%, rgba(22,26,38,0) 100%)',
        borderRadius: '16px',
        padding: '48px 40px 80px',
        margin: '0 16px',
        overflow: 'hidden',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontFamily: "'Inter', sans-serif",
          fontSize: '24px',
          fontWeight: 500,
          letterSpacing: '-0.48px',
          color: '#e3e6ed',
          marginBottom: '48px',
          marginTop: 0,
        }}
      >
        How it Works
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 60px 1fr 60px 1fr',
          alignItems: 'start',
          gap: '0 8px',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <StepCard {...steps[0]} />
        <StepArrow src={arrowSrcs[0]} />
        <StepCard {...steps[1]} />
        <StepArrow src={arrowSrcs[1]} />
        <StepCard {...steps[2]} />
      </div>
    </section>
  );
}
