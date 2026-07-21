"use client";

import { useEffect, useState } from "react";

const CALENDLY = "https://calendly.com/vhnmedia";

const links = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#offer", label: "The Offer" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-gold/60 font-display text-base italic text-gold">
            V
          </span>
          <span className="font-display text-lg tracking-tight text-cream">
            VHN <span className="text-gold">Media</span>
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-[14px] font-medium text-slate-light transition-colors hover:text-cream"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
          <span className="btn-primary !py-2.5 !px-5 !text-[13px]">Book a Call</span>
        </a>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`h-px w-6 bg-cream transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-cream transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-hairline/60 bg-ink/95 backdrop-blur-md md:hidden">
          <div className="container-x flex flex-col gap-5 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-[15px] font-medium text-slate-light"
              >
                {l.label}
              </a>
            ))}
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
              <span className="btn-primary w-full">Book a Call</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
