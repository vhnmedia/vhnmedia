# VHN Media

Next.js 14 (App Router) + Tailwind CSS marketing site for VHN Media's
free 3-week AI lead-gen trial offer.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

Push this folder to a GitHub repo and import it in Vercel — no
environment variables or config needed. `npm run build` is the default
build command and works out of the box.

## Swapping in your real logo

No `logo.png` was provided with the brief, so `components/Logo.tsx`
currently renders a text wordmark ("VHN Media") instead. To use your
actual logo:

1. Drop the file at `public/logo.png`.
2. In `components/Logo.tsx`, replace the wordmark markup with:
   ```tsx
   <img src="/logo.png" alt="VHN Media" className="h-8 w-auto" />
   ```

## Editing the Calendly link

The booking URL (`https://calendly.com/vhnmedia`) is repeated as a
constant near the top of `Navbar.tsx`, `Hero.tsx`, `Offer.tsx`, and
`FinalCTA.tsx` — update all four if the URL ever changes.

## Structure

- `app/page.tsx` — assembles all sections in order
- `components/` — one file per section (Navbar, Hero, Problem,
  HowItWorks, Offer, Differentiators, Industries, FAQ, FinalCTA, Footer)
- `components/SignalTimeline.tsx` — the looping "lead → call → booked"
  animation used in the hero
- `components/RevealOnScroll.tsx` — lightweight scroll-reveal wrapper
  (no animation library dependency)

## Design notes

- Palette: deep navy `#0B1220` base, electric blue `#4F7FFF` for
  trust/AI cues, amber `#FFB020` reserved for urgency and the 60-second
  countdown motif.
- Type: Clash Display (headings), Satoshi (body), JetBrains Mono
  (timer digits, labels, stats) — loaded via `<link>` tags in
  `app/layout.tsx`, no extra npm packages required.
- Respects `prefers-reduced-motion` and has visible keyboard focus
  states throughout.
