import RevealOnScroll from "./RevealOnScroll";

const STATS = [
  {
    value: "78%",
    label: "of customers buy from whoever calls them back first",
  },
  {
    value: "8 hrs",
    label: "average time a small business takes to return a lead's call",
  },
  {
    value: "10x",
    label: "drop in conversion odds after just 5 minutes of silence",
  },
];

export default function Problem() {
  return (
    <section className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <RevealOnScroll>
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-pulse">
              The problem
            </span>
            <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-paper">
              Slow follow-up is quietly killing your ad spend.
            </h2>
            <p className="mt-4 text-muted text-base md:text-lg">
              You pay for the click. You pay for the lead. Then it sits in an
              inbox or a voicemail queue until someone finally has five
              minutes — by which point they've already booked with a
              competitor who called first.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STATS.map((stat, i) => (
            <RevealOnScroll key={stat.value} delay={i * 100}>
              <div className="h-full rounded-2xl border border-line bg-surface p-6">
                <div className="font-display font-semibold text-4xl text-signal">
                  {stat.value}
                </div>
                <p className="mt-3 text-sm text-muted leading-snug">
                  {stat.label}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}