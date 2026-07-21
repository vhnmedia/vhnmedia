import SignalTimeline from "./SignalTimeline";

const CALENDLY_URL = "https://calendly.com/vhnmedia";

export default function Hero() {
  return (
    <section className="relative wash overflow-hidden pt-16 md:pt-24 pb-20 md:pb-28">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-mono uppercase tracking-wide text-muted mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-pulse" />
            Free for local service businesses — 3 weeks, no cost
          </span>

          <h1 className="font-display font-semibold text-[2.5rem] leading-[1.05] md:text-6xl md:leading-[1.05] text-paper text-balance">
            Every lead gets a callback in under{" "}
            <span className="text-signal">60 seconds</span> — free for
            3 weeks.
          </h1>

          <p className="mt-6 text-base md:text-lg text-muted max-w-xl mx-auto">
            We run your Facebook &amp; Instagram lead ads. The moment someone
            fills out the form, our AI voice agent calls, qualifies them, and
            books the appointment on your calendar — no one on your team lifts
            a finger.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center rounded-full bg-pulse px-7 py-3.5 font-semibold text-ink hover:brightness-110 transition-all"
            >
              Claim Your Free 3-Week Trial
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto text-center rounded-full border border-line px-7 py-3.5 font-medium text-paper hover:border-signal hover:text-signal transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div className="mt-16 md:mt-20 max-w-2xl mx-auto">
          <SignalTimeline />
        </div>
      </div>
    </section>
  );
}