import RevealOnScroll from "./RevealOnScroll";

const INDUSTRIES = [
  "Gyms & fitness studios",
  "Med-spas",
  "Roofers",
  "Landscapers",
  "Junk removal",
  "Dental clinics",
  "HVAC & plumbing",
  "Home remodeling",
];

export default function Industries() {
  return (
    <section className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <RevealOnScroll>
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-pulse">
            Industries we serve
          </span>
          <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-paper max-w-xl">
            Built for businesses that live and die by booked appointments.
          </h2>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {INDUSTRIES.map((industry, i) => (
            <RevealOnScroll key={industry} delay={i * 50}>
              <div className="h-full rounded-xl border border-line bg-surface px-5 py-6 text-center hover:border-signal/50 transition-colors">
                <span className="text-sm md:text-base text-paper font-medium">
                  {industry}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
