import Logo from "./Logo";

const CALENDLY_URL = "https://calendly.com/vhnmedia";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto max-w-content px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="shrink-0">
          <Logo />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#how-it-works" className="hover:text-paper transition-colors">
            How It Works
          </a>
          <a href="#offer" className="hover:text-paper transition-colors">
            Offer
          </a>
          <a href="#faq" className="hover:text-paper transition-colors">
            FAQ
          </a>
        </div>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-signal px-4 py-2 text-sm font-medium text-white hover:bg-signal-soft transition-colors"
        >
          Start Free Trial
        </a>
      </nav>
    </header>
  );
}