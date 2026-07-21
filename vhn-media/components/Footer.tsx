import Logo from "./Logo";

const CALENDLY_URL = "https://calendly.com/vhnmedia";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto max-w-content px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo />

        <div className="flex items-center gap-6 text-sm text-muted">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-paper transition-colors"
          >
            Book a Call
          </a>
          <a href="#" className="hover:text-paper transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-paper transition-colors">
            Facebook
          </a>
        </div>

        <p className="text-xs text-muted font-mono">
          © {new Date().getFullYear()} VHN Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
}