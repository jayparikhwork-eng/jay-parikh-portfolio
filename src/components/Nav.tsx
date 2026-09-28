import { useEffect, useState } from "react";
import { nav, site } from "../data/content";

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className="pointer-events-auto mt-5 flex w-full max-w-3xl items-center justify-between gap-4 rounded-full border border-line bg-paper/70 py-2 pl-5 pr-2 shadow-soft backdrop-blur-xl"
      >
        <a
          href="#top"
          className="font-serif text-lg font-semibold tracking-tight text-ink"
        >
          {site.brand}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors duration-300 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={nav.cta.href}
            className="hidden rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper transition-all duration-500 ease-fluid hover:shadow-lift active:scale-[0.98] sm:inline-flex"
          >
            {nav.cta.label}
          </a>

          {/* Morphing hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-overlay"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-[1.5px] w-4 bg-ink transition-all duration-500 ease-fluid ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 block h-[1.5px] w-4 bg-ink transition-all duration-500 ease-fluid ${
                  open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Full-screen overlay */}
      <div
        id="mobile-overlay"
        className={`pointer-events-auto fixed inset-0 z-40 flex flex-col justify-center bg-paper/85 px-8 backdrop-blur-2xl transition-all duration-500 ease-fluid md:hidden ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2">
          {nav.links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              className={`font-serif text-4xl font-medium text-ink transition-all duration-500 ease-fluid ${
                open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${120 + nav.links.length * 60}ms` : "0ms" }}
            className={`mt-6 inline-flex w-max rounded-full bg-ink px-7 py-3 text-base font-semibold text-paper transition-all duration-500 ease-fluid ${
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {nav.cta.label}
          </a>
        </div>
      </div>
    </header>
  );
}
