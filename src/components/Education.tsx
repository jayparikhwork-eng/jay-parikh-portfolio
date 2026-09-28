import { education } from "../data/content";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { asset } from "../lib/asset";

export function Education() {
  return (
    <Section id="education" tone="a">
      <div className="mb-10 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {education.heading}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {education.intro}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {education.items.map((item, i) => (
          <Reveal
            key={item.degree}
            delay={i * 80}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="flex items-start gap-4">
              <img
                src={asset(item.logo)}
                alt={item.logoAlt}
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-12 shrink-0 rounded-lg object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold leading-snug text-card-foreground">
                  {item.degree}
                </h3>
                <p className="text-sm font-medium text-primary">{item.school}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {item.period}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {item.detail}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
