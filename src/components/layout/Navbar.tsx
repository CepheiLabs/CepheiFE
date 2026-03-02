export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
      style={{ backgroundColor: '#161a26' }}
    >
      {/* Logo */}
      <span
        style={{
          fontFamily: "'Advent Pro', sans-serif",
          fontSize: '36px',
          fontWeight: 600,
          lineHeight: '36px',
          color: '#4fd1c5',
        }}
      >
        CEPHEI
      </span>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-6">
        {/* Home with active indicator */}
        <div className="flex flex-col items-center gap-1 relative">
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              fontWeight: 600,
              letterSpacing: '-0.18px',
              color: '#c9a24d',
              cursor: 'pointer',
            }}
          >
            Home
          </span>
          {/* Blurred gold ellipse under Home */}
          <span
            style={{
              width: '29px',
              height: '5px',
              borderRadius: '50%',
              background: '#c9a24d',
              filter: 'blur(4px)',
              display: 'block',
              position: 'absolute',
              bottom: '-8px',
            }}
          />
        </div>

        {(['Available Games', 'Why Us', 'Contact'] as const).map((item) => (
          <span
            key={item}
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: '16px',
              fontWeight: 500,
              letterSpacing: '-0.18px',
              color: '#e3e6ed',
              cursor: 'pointer',
            }}
            className="hover:text-[#4fd1c5] transition-colors"
          >
            {item}
          </span>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center gap-4">
        <button
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: '16px',
            fontWeight: 500,
            letterSpacing: '-0.18px',
            color: '#c9a24d',
            background: 'transparent',
            border: '1px solid #c9a24d',
            borderRadius: '8px',
            padding: '10px 24px',
            cursor: 'pointer',
          }}
          className="hover:bg-[#c9a24d]/10 transition-colors"
        >
          Log In
        </button>
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
            padding: '10px 24px',
            cursor: 'pointer',
          }}
          className="hover:bg-[#b8903e] transition-colors"
        >
          Start Playing
        </button>
      </div>
    </nav>
  );
}
