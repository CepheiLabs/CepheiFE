# Cephei Frontend Design System

Cephei is a wallet-based crypto gaming platform for competitive games such as Coin Flip, Dice, and Weekly Raffle. The frontend rewrite should feel trustworthy, fast, and game-ready: polished enough for real-money activity, but simple enough that wallet connection, staking, transaction status, and outcomes are always clear.

This document is based on the Cephei Figma team library, the current landing page assets, and the product direction described in `README.md`.

## Product Principles

- **Trust before spectacle:** every betting action needs clear stake, wallet, network, status, and result feedback.
- **Playful but controlled:** use game visuals, motion, and win states, but keep transactional UI calm and legible.
- **Blockchain state is the source of truth:** pending, confirmed, failed, rejected, and reverted states must be distinct.
- **No hidden complexity:** crypto terms should appear where they help confidence, not as decoration.
- **Mobile-first betting flow:** core game actions must work comfortably on small screens.

## Visual Direction

Cephei uses a dark, space-inspired interface with teal identity color, gold primary actions, and blue system accents. The theme should avoid a generic casino look. It should feel like a competitive on-chain arcade: precise, secure, and energetic.

Use the dark navy background as the persistent app shell. Reserve gold for primary actions and active navigation. Use teal for brand identity and positive highlights. Use blue for focus rings, informational states, and interactive affordances.

## Color Tokens

| Token | Value | Usage |
| --- | --- | --- |
| `background` | `#141721` | App background, page shell |
| `surface` | `#161A26` | Navigation, panels, cards, modals |
| `surface-muted` | `#202637` | Secondary panels, inactive states |
| `surface-raised` | `#252C3F` | Elevated game cards and overlays |
| `foreground` | `#E3E6ED` | Primary text |
| `muted-foreground` | `#C7CBD6` | Secondary text |
| `brand-teal` | `#4FD1C5` | Logo, brand highlights, success accents |
| `action-gold` | `#C9A24D` | Primary CTA, active nav, selected bet option |
| `action-gold-hover` | `#B8903E` | Primary CTA hover |
| `system-blue` | `#4DA3FF` | Focus, links, info, interactive accents |
| `success` | `#4FD1C5` | Confirmed transaction, winning state |
| `warning` | `#F2C94C` | Pending transaction, countdown urgency |
| `danger` | `#F97066` | Failed transaction, rejected signature |
| `border` | `rgba(77, 163, 255, 0.20)` | Default border |
| `overlay` | `rgba(8, 10, 16, 0.72)` | Modal scrim |

## Typography

Use the existing font stack:

- **Logo:** Advent Pro, 600
- **Headings:** Work Sans or Space Grotesk, 600-700
- **Body:** Space Grotesk, 400
- **Controls:** Inter, 600
- **Wallet and transaction metadata:** Roboto Mono, 500

Recommended scale:

| Role | Size | Line height | Weight |
| --- | --- | --- | --- |
| Display | `48px` | `1.1` | `600` |
| Page title | `36px` | `1.15` | `600` |
| Section title | `24px` | `1.25` | `500-700` |
| Card title | `20px` | `1.3` | `700` |
| Body | `16px` | `1.4` | `400` |
| Small | `14px` | `1.45` | `400-500` |
| Label | `12px` | `1.3` | `600` |

Keep letter spacing at `0` for implementation consistency and readability.

## Layout

- Use an app shell with a persistent top navigation on marketing pages and a compact game header in authenticated views.
- Use full-width sections with constrained content containers. Avoid nesting cards inside cards.
- Game screens should prioritize the active game board, stake controls, wallet status, and transaction timeline.
- Dashboard screens should be denser than marketing sections: table/list content, compact panels, and clear status chips.
- Keep border radius at `8px` for cards and controls unless a component has a clear circular purpose.

## Core Components

### Navigation

- Logo in teal.
- Active nav item in gold.
- Wallet/connect action remains visually primary when disconnected.
- Connected wallet state should show network, shortened address, and balance.

### Buttons

- Primary: gold fill, dark text.
- Secondary: transparent or dark surface with gold/blue border.
- Ghost: transparent, foreground text, subtle hover surface.
- Destructive: danger fill or danger outline for irreversible actions.
- Disabled states must be visibly disabled during pending transactions.

### Game Cards

- Use actual game artwork for Coin Flip, Dice, and Weekly Raffle.
- Show game status: available, coming soon, active round, or pending settlement.
- Cards should be selectable but not overly decorative.

### Transaction Feedback

Every transaction flow needs:

- Wallet confirmation requested
- Pending on-chain
- Confirmed
- Failed or reverted
- User rejected signature
- Wrong network
- Insufficient funds

Do not optimistically show a win or payout before the chain event confirms it.

### Forms And Stake Controls

- Stake amount inputs should show currency, balance, minimum, maximum, and validation.
- Provide quick amount controls where useful.
- Never allow duplicate submissions while a transaction is pending.

## Motion

Use motion for feedback, not distraction:

- Button hover: subtle color shift.
- Game result reveal: short, confident animation.
- Pending transaction: steady progress indicator.
- Error states: no shaking or excessive movement.

Respect reduced-motion preferences.

## Accessibility

- Maintain visible focus rings using system blue.
- Do not rely on color alone for transaction or game states.
- Use semantic buttons for all betting and wallet actions.
- All game images need useful alt text unless purely decorative.
- Ensure copy remains readable on mobile and does not overlap controls.

## Frontend Rewrite Notes

Recommended first rewrite pass:

1. Replace inline styles with shared theme tokens.
2. Build a reusable app shell, button variants, status chips, game cards, modal, input, and transaction timeline.
3. Create feature folders for wallet, games, and transactions.
4. Implement the landing page using the same components as the authenticated app where possible.
5. Add mock states for wallet connection and transaction lifecycle before wiring contracts.

The design system should support both the marketing page and the real application experience. Treat the landing page as one surface of the product, not a separate visual language.
