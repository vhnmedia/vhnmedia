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

1. Push this folder to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign in and click "Add New..." → "Project"
4. Import your GitHub repo
5. Vercel auto-detects Next.js — just click Deploy

Every push to main auto-redeploys.

## Swapping in your real logo

No logo.png was provided with the brief. To add yours:

1. Drop the file at `public/logo.png`
2. In `components/Logo.tsx`, replace the wordmark section with:
   ```tsx
   <img src="/logo.png" alt="VHN Media" className="h-8 w-auto" />
   ```

## Editing the Calendly URL

If your Calendly link isn't `https://calendly.com/vhnmedia`, update it in:
- `components/Navbar.tsx`
- `components/Hero.tsx`
- `components/Offer.tsx`
- `components/FinalCTA.tsx`
- `components/Footer.tsx`

## File structure

```
vhn-media/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx (main page)
├── components/
│   ├── Logo.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── HowItWorks.tsx
│   ├── Offer.tsx
│   ├── Differentiators.tsx
│   ├── Industries.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   ├── RevealOnScroll.tsx (scroll reveal helper)
│   └── SignalTimeline.tsx (animated 60-second counter)
├── public/ (drop logo.png here)
└── [config files]
```

## Design notes

- **Colors**: Navy base (#0B1220), electric blue (#4F7FFF) for trust/AI, amber (#FFB020) for urgency
- **Fonts**: Clash Display (headings), Satoshi (body), JetBrains Mono (data/timers)
- **Motion**: Scroll-reveal animations via IntersectionObserver (no library dependency)
- **Accessibility**: Respects `prefers-reduced-motion`, has visible focus states
