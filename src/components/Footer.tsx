import { footer } from "../data/content";

export function Footer() {
  return (
    <footer className="bg-section-dark text-white">
      <div className="container flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
        <p className="text-sm text-white/60">{footer.copyright}</p>
        <nav aria-label="Footer" className="flex gap-6">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-primary-glow"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
