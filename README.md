# VHN Media — Marketing Site

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Built from the brief: a one-page site centered on the free 3-week lead generation trial, with the AI voice agent positioned as the supporting mechanism.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or push this folder to a GitHub repo and import it at vercel.com/new — zero config needed, Vercel auto-detects Next.js.

## Logo

`logo.png` wasn't included in the upload, so the navbar/footer currently use a styled text wordmark ("V" mark + "VHN Media"). To swap in your real logo:

1. Drop `logo.png` into `/public`
2. In `components/Nav.tsx` and the footer in `app/page.tsx`, replace the `<span>` wordmark block with:
   ```tsx
   import Image from "next/image";
   <Image src="/logo.png" alt="VHN Media" width={32} height={32} />
   ```

## Structure

- `app/page.tsx` — all page sections, in the order specified in the brief
- `app/layout.tsx` — fonts (Fraunces / Inter / IBM Plex Mono) + metadata
- `components/Nav.tsx` — sticky nav with mobile menu
- `components/Faq.tsx` — accordion
- `components/AppointmentSlip.tsx` — the signature "booked appointment slip" visual (hero + offer section)
- `components/Reveal.tsx` — scroll fade-in wrapper, respects `prefers-reduced-motion`

## Design notes

- Dark navy (#0D1B2A) background, warm gold (#C89B3C) accent, cream text — a premium-agency palette rather than the generic "AI startup" purple-blue gradient look the brief asked to avoid.
- Display face is Fraunces (serif, used with restraint in headlines); body is Inter; a monospace face (IBM Plex Mono) is used for labels, stats, and the appointment-slip data fields — a nod to the paperwork/ledger feel of a service business.
- No countdown timers, clocks, or robot/circuit imagery anywhere, per the brief.
- All primary CTAs link to `https://calendly.com/vhnmedia` in a new tab — update this in `components/Nav.tsx` and `app/page.tsx` (`CALENDLY` constant) if the booking link changes.
