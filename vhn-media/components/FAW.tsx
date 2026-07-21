"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

const QUESTIONS = [
  {
    q: "Is it really free?",
    a: "Yes. Ad management, the AI voice agent, and appointment booking are all free for your first 3 weeks. There's no setup fee and no card required to start.",
  },
  {
    q: "What happens after the trial?",
    a: "It moves to a flat monthly rate. No renegotiation, no surprise charges, and no obligation to continue if it's not delivering booked appointments.",
  },
  {
    q: "Do I need to do anything?",
    a: "You'll approve the ad creative and targeting up front, then just show up to the appointments that land on your calendar. We handle the rest.",
  },
  {
    q: "What if I already run ads?",
    a: "That's fine — we can run alongside your existing efforts during the trial, or take over entirely. Most businesses use the trial to compare results directly.",
  },
  {
    q: "How fast is the AI really?",
    a: "Under 60 seconds from form submission to phone ringing, 24 hours a day, every day of the week — including nights, weekends, and holidays.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <RevealOnScroll>
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-signal">
            FAQ
          </span>
          <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-paper max-w-xl">
            Questions we hear before businesses sign up.
          </h2>
        </RevealOnScroll>

        <div className="mt-12 max-w-2xl divide-y divide-line border-t border-b border-line">
          {QUESTIONS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display font-medium text-base md:text-lg text-paper">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 font-mono text-signal transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm md:text-base text-muted leading-relaxed pr-8">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
