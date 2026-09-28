import { footer, site } from "../data/content";

export function Footer() {
  return (
    <footer className="bg-paper px-4 pb-10 pt-16">
      <div className="container">
        <div className="border-t border-line pt-10">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <a
              href="#top"
              className="font-serif text-3xl font-medium tracking-tight text-ink"
            >
              {site.brand}
            </a>
            <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-2">
              {footer.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-ink-soft transition-colors hover:text-sage"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <p className="mt-10 font-mono text-xs tracking-wide text-ink-faint">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
