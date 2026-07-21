import RevealOnScroll from "./RevealOnScroll";

const CALENDLY_URL = "https://calendly.com/vhnmedia";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 border-t border-line wash">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <RevealOnScroll className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-paper leading-tight">
            Free for 3 weeks. Booked appointments from day one.
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg">
            Pick a time below and we'll walk you through how the trial works —
            no commitment, no pressure.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="max-w-3xl mx-auto rounded-2xl border border-line bg-surface overflow-hidden">
            <iframe
              src={CALENDLY_URL}
              title="Book a call with VHN Media"
              className="w-full h-[650px] md:h-[700px]"
              loading="lazy"
            />
          </div>
        </RevealOnScroll>

        <div className="mt-8 text-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-pulse px-7 py-3.5 font-semibold text-ink hover:brightness-110 transition-all"
          >
            Open Booking Page in a New Tab
          </a>
        </div>
      </div>
    </section>
  );
}