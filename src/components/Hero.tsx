import { hero } from "../data/content";
import { asset } from "../lib/asset";
import { CtaButton } from "./CtaButton";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-16 pt-32 md:pb-24 md:pt-40"
    >
      {/* soft sage aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-24 h-[36rem] w-[36rem] rounded-full bg-sage/10 blur-[120px]"
      />
      <div className="container relative grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="animate-fade-up">
          <span className="eyebrow mb-6">{hero.eyebrow}</span>
          <h1 className="mt-2 font-serif text-5xl font-medium leading-[0.98] tracking-[-0.02em] text-ink sm:text-6xl lg:text-7xl">
            {hero.headingLine1}
            <br />
            <span className="italic text-sage">{hero.headingLine2}</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {hero.body}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <CtaButton href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </CtaButton>
            <CtaButton href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </CtaButton>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <div className="bezel mx-auto max-w-sm rotate-1 transition-transform duration-700 ease-fluid hover:rotate-0 md:ml-auto">
            <div className="bezel-core overflow-hidden">
              <img
                src={asset(hero.image)}
                alt={hero.imageAlt}
                width={480}
                height={560}
                fetchPriority="high"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
