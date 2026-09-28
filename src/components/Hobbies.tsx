import { hobbies } from "../data/content";
import { Section, SectionHeader } from "./Section";
import { Reveal } from "./Reveal";
import { asset } from "../lib/asset";

export function Hobbies() {
  return (
    <Section id="hobbies" tone="a">
      <SectionHeader heading={hobbies.heading} intro={hobbies.intro} />
      <div className="grid gap-6 md:grid-cols-3">
        {hobbies.items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 80}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="h-44 overflow-hidden">
              <img
                src={asset(item.image)}
                alt={item.imageAlt}
                width={420}
                height={176}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
