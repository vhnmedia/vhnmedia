import RevealOnScroll from "./RevealOnScroll";

const STEPS = [
  {
    n: "01",
    title: "We launch your ads",
    detail:
      "We build and run Facebook & Instagram lead-generation campaigns targeted at people ready to book in your area.",
  },
  {
    n: "02",
    title: "A lead submits the form",
    detail:
      "Someone sees your ad and fills out a short form — no landing page to build, no funnel to manage.",
  },
  {
    n: "03",
    title: "AI calls within 60 seconds",
    detail:
      "Our voice agent calls immediately, has a real qualifying conversation, and answers the questions people actually ask.",
  },
  {
    n: "04",
    title: "Appointment lands on your calendar",
    detail:
      "Qualified leads are booked directly into your calendar. You just show up to the appointment.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <RevealOnScroll>
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-signal">
            How it works
          </span>
          <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-paper max-w-xl">
            From ad click to booked appointment, without you doing anything.
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-line rounded-2xl overflow-hidden">
          {STEPS.map((step, i) => (
            <RevealOnScroll key={step.n} delay={i * 90} className="bg-ink">
              <div className="h-full bg-surface p-7 md:p-8 flex flex-col gap-4">
                <span className="font-mono text-sm text-pulse">{step.n}</span>
                <h3 className="font-display font-semibold text-xl text-paper">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}