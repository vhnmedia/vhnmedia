import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import AppointmentSlip from "@/components/AppointmentSlip";

const CALENDLY = "https://calendly.com/vhnmedia";

const problems = [
  { stat: "78%", label: "of buyers go with whoever calls first" },
  { stat: "5 min", label: "avg. response time drops conversion by 8×" },
  { stat: "$0", label: "revenue from leads nobody ever called back" },
];

const steps = [
  {
    n: "01",
    title: "We launch your ads",
    body: "We build and run Facebook & Instagram lead ads targeted at your local service area — creative, copy, and targeting handled for you.",
  },
  {
    n: "02",
    title: "A lead submits the form",
    body: "Someone in your area sees the ad and fills out a short form. Their contact details land in your system instantly.",
  },
  {
    n: "03",
    title: "Our AI voice agent calls",
    body: "Within moments, our AI voice agent calls the lead, answers their questions, and confirms interest — no manual dialing required.",
  },
  {
    n: "04",
    title: "The appointment gets booked",
    body: "The agent books the lead directly into an open slot on your calendar. You just show up.",
  },
];

const included = [
  "Facebook & Instagram ad management",
  "AI voice agent calling every lead",
  "Appointments booked to your calendar",
  "Zero setup cost, zero ad markup",
];

const differentiators = [
  {
    title: "24/7 instant response",
    body: "Leads get called day or night, weekends included — no lead ever sits waiting on a callback.",
  },
  {
    title: "AI-powered, not a call center",
    body: "Every call is handled by our voice agent — consistent, on-script, and never having an off day.",
  },
  {
    title: "Built for local service businesses",
    body: "We don't run generic campaigns. Every account is set up around how your specific service gets booked.",
  },
  {
    title: "Done-for-you, start to finish",
    body: "Ad creative, targeting, voice agent setup, and calendar integration — we handle the whole stack.",
  },
];

const industries = [
  "Gyms & Studios",
  "Med-Spas",
  "Roofers",
  "Landscapers",
  "Junk Removal",
  "Dental Clinics",
  "HVAC & Plumbing",
  "Auto Detailing",
];

export default function Home() {
  return (
    <main id="top" className="bg-navy">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#8FA0B3 1px, transparent 1px), linear-gradient(90deg, #8FA0B3 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="container-x relative grid gap-16 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div>
            <Reveal>
              <span className="eyebrow">Free 3-Week Lead Generation Trial</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-[42px] leading-[1.08] tracking-tight text-cream sm:text-[52px] md:text-[60px]">
                Three weeks of free leads,{" "}
                <span className="italic text-gold">booked straight</span> onto
                your calendar.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-light">
                We run Facebook &amp; Instagram ads for your business and
                generate leads for free — for a full 3 weeks. The moment a
                lead comes in, our AI voice agent calls them and books the
                appointment directly onto your calendar. No cost, no risk.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
                  <span className="btn-primary w-full sm:w-auto">
                    Book a Free Strategy Call
                  </span>
                </a>
                <a href="#how-it-works">
                  <span className="btn-secondary w-full sm:w-auto">
                    See How It Works
                  </span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.16em] text-slate">
                Free for 3 weeks · No contract to start · You approve every ad
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="hidden justify-self-center md:flex">
            <AppointmentSlip animate className="w-[300px]" />
          </Reveal>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-pad border-t border-hairline/50 bg-ink">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">The Problem</span>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-cream md:text-4xl">
              Most local businesses lose the appointment before they ever
              pick up the phone.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {problems.map((p, i) => (
              <Reveal key={p.stat} delay={i * 100}>
                <div className="border-l border-gold/60 pl-6">
                  <div className="font-display text-4xl text-gold">
                    {p.stat}
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-light">
                    {p.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="section-pad">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">How It Works</span>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-cream md:text-4xl">
              From ad click to booked appointment, without you lifting a
              finger.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="flex flex-col gap-4">
                  <span className="font-mono text-sm text-gold">{s.n}</span>
                  <h3 className="font-display text-xl text-cream">
                    {s.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-slate-light">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section id="offer" className="section-pad border-y border-hairline/50 bg-ink">
        <div className="container-x grid gap-16 md:grid-cols-2 md:items-center">
          <Reveal>
            <span className="eyebrow">The Free Trial Offer</span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-cream md:text-4xl">
              Everything included. Nothing charged. For three full weeks.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-light">
              We front the work so you can see real, booked appointments
              before you spend a dollar with us.
            </p>

            <ul className="mt-8 space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-gold/70 font-mono text-[9px] text-gold">
                    ✓
                  </span>
                  <span className="text-[15px] text-cream">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 border-l border-hairline pl-4 text-[13px] leading-relaxed text-slate">
              After the 3-week trial, continuing is simple: we move to a flat
              monthly rate to keep the ads and AI voice agent running. No
              pressure, no surprise fees.
            </p>

            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block"
            >
              <span className="btn-primary">Claim Your Free 3-Week Trial</span>
            </a>
          </Reveal>

          <Reveal delay={150} className="justify-self-center">
            <AppointmentSlip className="w-[300px] rotate-[3deg]" />
          </Reveal>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Why VHN Media</span>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-cream md:text-4xl">
              An agency built around one job: filling your calendar.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <div className="h-full rounded-sm border border-hairline/60 bg-panel p-7">
                  <h3 className="font-display text-xl text-cream">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-light">
                    {d.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section-pad border-t border-hairline/50 bg-ink">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Industries We Serve</span>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-cream md:text-4xl">
              Built for businesses that live or die by booked appointments.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-hairline/60 bg-hairline/60 sm:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind} delay={i * 40}>
                <div className="flex h-28 items-center justify-center bg-ink px-4 text-center">
                  <span className="font-body text-[14px] font-medium text-slate-light">
                    {ind}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-pad">
        <div className="container-x max-w-3xl">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-cream md:text-4xl">
              Common questions
            </h2>
          </Reveal>
          <div className="mt-12">
            <Faq />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-pad border-t border-hairline/50 bg-ink">
        <div className="container-x flex flex-col items-center text-center">
          <Reveal>
            <span className="eyebrow">Get Started</span>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-cream md:text-5xl">
              Three weeks of free leads. Booked for you automatically.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-slate-light">
              Book a short strategy call and we'll have your trial campaign
              live within days.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block"
            >
              <span className="btn-primary">Book a Free Strategy Call</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-hairline/50 py-12">
        <div className="container-x flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-sm border border-gold/60 font-display text-sm italic text-gold">
              V
            </span>
            <span className="font-display text-base text-cream">
              VHN <span className="text-gold">Media</span>
            </span>
          </a>

          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[14px] font-medium text-slate-light hover:text-gold"
          >
            Book a call →
          </a>

          <p className="font-mono text-[11px] text-slate">
            © {new Date().getFullYear()} VHN Media. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
