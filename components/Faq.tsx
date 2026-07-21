"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is it really free?",
    a: "Yes. We run your ads and handle the AI voice agent for a full 3 weeks at no cost. No setup fee, no ad-spend markup, no card required to start. You only decide whether to continue after you've seen real booked appointments come in.",
  },
  {
    q: "What happens after the trial?",
    a: "If you're happy with the appointments coming in, we move to a flat monthly rate to keep running ads and the AI voice agent for you. If it's not a fit, you walk away — nothing owed, no long-term contract signed upfront.",
  },
  {
    q: "Do I need to do anything?",
    a: "Almost nothing. We handle ad creative, targeting, and the AI voice agent setup end to end. You show up to appointments that are already on your calendar. We'll ask for a short kickoff call to learn your services, pricing, and availability.",
  },
  {
    q: "What if I already run ads?",
    a: "That's fine — we can run alongside your existing campaigns during the trial so you can compare directly, or pause yours for those 3 weeks. Either way, you'll see exactly what our lead flow and instant follow-up adds.",
  },
  {
    q: "How does the AI voice agent work?",
    a: "The moment someone submits a lead form, our voice agent calls them, answers common questions, and books them straight into an open slot on your calendar. No hold music, no call center, and no lead sitting untouched waiting on a callback.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-hairline/50 border-y border-hairline/50">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <span className="font-display text-lg text-cream md:text-xl">
                {item.q}
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-dark/70 font-mono text-sm text-gold transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="overflow-hidden pr-10 text-[15px] leading-relaxed text-slate-light">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
