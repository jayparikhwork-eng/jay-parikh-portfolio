import { Users, LineChart, Rocket } from "lucide-react";
import { philosophy } from "../data/content";
import { Section, SectionHeader } from "./Section";
import { Reveal } from "./Reveal";

const icons = [Users, LineChart, Rocket];

export function Philosophy() {
  return (
    <Section tone="a">
      <SectionHeader
        eyebrow={philosophy.eyebrow}
        heading={philosophy.heading}
        align="center"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {philosophy.items.map((item, i) => {
          const Icon = icons[i] ?? Users;
          return (
            <Reveal
              key={item.title}
              delay={i * 80}
              className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
