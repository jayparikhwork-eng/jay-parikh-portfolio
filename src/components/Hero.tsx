import { ArrowRight } from "lucide-react";
import { hero } from "../data/content";
import { asset } from "../lib/asset";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-section-dark text-white"
    >
      {/* Decorative background glows (purely visual) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="container relative grid items-center gap-10 py-16 text-center md:grid-cols-[1.2fr_0.8fr] md:gap-12 md:py-28 md:text-left">
        <div className="order-2 animate-fade-in md:order-1">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-glow">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {hero.headingLine1}
            <br />
            <span className="text-primary">{hero.headingLine2}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 md:mx-0">
            {hero.body}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-glow active:translate-y-px"
            >
              {hero.primaryCta.label}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 active:translate-y-px"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 scale-110 rounded-full bg-gradient-primary opacity-40 blur-2xl"
            />
            <img
              src={asset(hero.image)}
              alt={hero.imageAlt}
              width={208}
              height={208}
              fetchPriority="high"
              className="h-48 w-48 rounded-full object-cover shadow-2xl ring-4 ring-primary/40 sm:h-52 sm:w-52"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
