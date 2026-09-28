import { education } from "../data/content";
import { Section, SectionHeader } from "./Section";
import { Reveal } from "./Reveal";
import { asset } from "../lib/asset";

export function Education() {
  return (
    <Section id="education" tone="deep">
      <SectionHeader heading={education.heading} intro={education.intro} />
      <div className="grid gap-6 md:grid-cols-2">
        {education.items.map((item, i) => (
          <Reveal
            key={item.degree}
            delay={i * 90}
            className="bezel h-full transition-transform duration-500 ease-fluid hover:-translate-y-1"
          >
            <div className="bezel-core h-full p-7">
              <div className="flex items-start gap-5">
                <div className="rounded-2xl border border-line bg-paper p-2.5">
                  <img
                    src={asset(item.logo)}
                    alt={item.logoAlt}
                    width={44}
                    height={44}
                    loading="lazy"
                    className="h-11 w-11 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium leading-snug text-ink">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sage">{item.school}</p>
                  <p className="mt-0.5 font-mono text-xs tracking-wide text-ink-faint">
                    {item.period}
                  </p>
                </div>
              </div>
              <p className="mt-6 leading-relaxed text-ink-soft">{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
