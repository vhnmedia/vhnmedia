import RevealOnScroll from "./RevealOnScroll";

const ITEMS = [
  {
    title: "24/7 instant response",
    detail:
      "Leads get called nights, weekends, and holidays — not just during business hours.",
  },
  {
    title: "AI, not a call center",
    detail:
      "A consistent voice agent that qualifies every lead the same way, every time — no scripts read off a whiteboard.",
  },
  {
    title: "Built for local service businesses",
    detail:
      "Tuned for the appointment-driven trades — not a generic marketing playbook borrowed from e-commerce.",
  },
  {
    title: "Done-for-you, start to finish",
    detail:
      "We handle ad creative, targeting, and the voice agent setup. You handle the appointment.",
  },
];

export default function Differentiators() {
  return (
    <section className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <RevealOnScroll>
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-signal">
            Why VHN Media
          </span>
          <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-paper max-w-xl">
            Speed and consistency your team can't match manually.
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ITEMS.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-line bg-surface p-7 hover:border-signal/50 transition-colors">
                <h3 className="font-display font-semibold text-lg text-paper">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-muted leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}