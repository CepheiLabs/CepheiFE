import { useState } from "react"

const faqs = [
  {
    question: "How do I play Cephei Games?",
    answer:
      "Connect once, choose a game, enter a match with another player, and play. Both players enter under the same conditions, and the winner takes the full pot.",
  },
  {
    question: "How is fairness ensured?",
    answer:
      "All matches are verified on-chain, so outcomes are transparent and cannot be manipulated.",
  },
  {
    question: "Do I need prior blockchain experience?",
    answer:
      "No. Cephei is designed for both new and experienced blockchain users. You only need a Bitcoin wallet to play.",
  },
  {
    question: "What games are available?",
    answer:
      "Dice, Coin Flip, and Weekly Raffle are currently available on the testnet. More games will be added over time.",
  },
  {
    question: "How do I join a game?",
    answer:
      "You can either create a new match by setting an entry amount, or join a match someone else started.",
  },
  {
    question: "Is my wallet safe?",
    answer: "Yes. Cephei never stores your private keys. Only the game records are on-chain.",
  },
  {
    question: "Can I play for free?",
    answer:
      "Some testnet games or features may be available to try without cost. This can change as the platform evolves.",
  },
  {
    question: "How do I withdraw my winnings?",
    answer:
      "All winnings are automatically sent to your game wallet. You can always transfer the money to your Bitcoin wallet.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="flex flex-col items-center gap-10 px-6 py-8 sm:gap-12">
      <h2 className="font-control text-2xl font-medium text-foreground">FAQs</h2>

      <div className="flex w-full max-w-2xl flex-col gap-4">
        {faqs.map((faq, index) => {
          const open = openIndex === index

          return (
            <article
              key={faq.question}
              className="overflow-hidden rounded-md border-x border-t border-accent bg-card"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-white/5"
              >
                <span className="font-body text-[15px] font-normal leading-snug text-foreground sm:text-base">{faq.question}</span>
                <img
                  src="/assets/icon-chevron-up.svg"
                  alt=""
                  aria-hidden="true"
                  className={`h-2 w-3 shrink-0 transition-transform duration-300 ${open ? "" : "rotate-180"}`}
                />
              </button>

              <div
                className="overflow-hidden bg-[var(--surface-muted)] transition-[max-height] duration-300"
                style={{ maxHeight: open ? 220 : 0 }}
              >
                <div className="border-t border-accent/30 px-4 pb-4 pt-3">
                  <p className="font-body text-base font-normal leading-[22.4px] text-foreground">{faq.answer}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
