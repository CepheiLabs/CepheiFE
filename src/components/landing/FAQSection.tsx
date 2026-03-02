import { useState } from 'react';

const faqs = [
  {
    question: 'How do I play Cephei Games?',
    answer:
      'Connect once, choose a game, enter a match with another player, ana play. Both players enter under the same conditions, and the winner takes the full pot.',
  },
  {
    question: 'How is fairness ensured?',
    answer:
      'All matches are verified on-chain, so outcomes are transparent and cannot be manipulated.',
  },
  {
    question: 'Do I need prior blockchain experience?',
    answer:
      'No. Cephei is designed for both new and experienced blockchain users. You only need a Bitcoin wallet to play.',
  },
  {
    question: 'What games are available?',
    answer:
      'Dice, Coin Flip, and Weekly Raffle are currently available on the testnet. More games will be added over time.',
  },
  {
    question: 'How do I join a game?',
    answer:
      'You can either create a new match by setting an entry amount, or join a match someone else started.',
  },
  {
    question: 'Is my wallet safe?',
    answer: 'Yes. Cephei never stores your private keys. Only the game records are on-chain.',
  },
  {
    question: 'Can I play for free?',
    answer:
      'Some testnet games or features may be available to try without cost. This can change as the platform evolves.',
  },
  {
    question: 'How do I withdraw my winnings?',
    answer:
      'All winnings are automatically sent to your game wallet. You can always transfer the money to your Bitcoin wallet.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
        FAQs
      </h2>

      <div className="flex flex-col gap-4 w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            style={{
              borderLeft: '1px solid #4da3ff',
              borderRight: '1px solid #4da3ff',
              borderTop: '1px solid #4da3ff',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            {/* Question header */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between text-left px-4 py-4 transition-colors hover:bg-white/5"
              style={{
                backgroundColor: '#161a26',
                cursor: 'pointer',
                border: 'none',
                outline: 'none',
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#e3e6ed',
                }}
              >
                {faq.question}
              </span>
              {/* Chevron icon - always showing up arrow (since all are "open" style in design) */}
              <img
                src="/assets/icon-chevron-up.svg"
                alt={openIndex === index ? 'Collapse' : 'Expand'}
                style={{
                  width: '12px',
                  height: '8px',
                  flexShrink: 0,
                  transition: 'transform 0.3s ease',
                  transform: openIndex === index ? 'rotate(0deg)' : 'rotate(180deg)',
                  filter:
                    'invert(55%) sepia(100%) saturate(500%) hue-rotate(190deg) brightness(110%)',
                }}
              />
            </button>

            {/* Answer panel */}
            <div
              style={{
                maxHeight: openIndex === index ? '200px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
                backgroundColor: '#161a26',
              }}
            >
              <div
                className="px-4 pb-4"
                style={{
                  borderTop: '1px solid rgba(77,163,255,0.3)',
                  paddingTop: '12px',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '22.4px',
                    color: '#e3e6ed',
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
