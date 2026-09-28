import { hobbies } from "../data/content";
import { Section, SectionHeader } from "./Section";
import { Reveal } from "./Reveal";
import { asset } from "../lib/asset";

export function Hobbies() {
  return (
    <Section id="hobbies" tone="paper">
      <SectionHeader heading={hobbies.heading} intro={hobbies.intro} />
      <div className="grid gap-6 md:grid-cols-3">
        {hobbies.items.map((item, i) => (
          <Reveal
            as="article"
            key={item.title}
            delay={i * 90}
            className="bezel group transition-transform duration-500 ease-fluid hover:-translate-y-1.5"
          >
            <div className="bezel-core overflow-hidden">
              <div className="h-52 overflow-hidden">
                <img
                  src={asset(item.image)}
                  alt={item.imageAlt}
                  width={420}
                  height={208}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-fluid group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
