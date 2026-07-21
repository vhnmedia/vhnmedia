import RevealOnScroll from "./RevealOnScroll";

const CALENDLY_URL = "https://calendly.com/vhnmedia";

const INCLUDED = [
  "Facebook & Instagram lead ad campaigns, built and managed for you",
  "AI voice agent calling every lead in under 60 seconds, 24/7",
  "Appointments booked straight onto your calendar",
  "Zero setup cost, zero ad-spend markup during the trial",
];

export default function Offer() {
  return (
    <section id="offer" className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <RevealOnScroll className="lg:col-span-2">
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-pulse">
              The offer
            </span>
            <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-paper">
              3 weeks, fully done for you, completely free.
            </h2>
            <p className="mt-4 text-muted text-base leading-relaxed">
              We front the work because we're confident in the result. Once
              your trial ends, it moves to a flat monthly rate — no
              renegotiation, no surprise fees, no pressure if it's not a fit.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={120} className="lg:col-span-3">
            <div className="rounded-2xl border border-line bg-surface p-7 md:p-9">
              <ul className="space-y-4">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal text-xs font-mono">
                      ✓
                    </span>
                    <span className="text-paper text-sm md:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="hairline my-7" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wide text-muted">
                    After the trial
                  </p>
                  <p className="mt-1 text-paper text-sm md:text-base">
                    Flat monthly rate. Cancel any time — no long-term
                    contract.
                  </p>
                </div>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-center rounded-full bg-pulse px-6 py-3 font-semibold text-ink hover:brightness-110 transition-all"
                >
                  Claim Your Free Trial
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
