import { philosophy } from "../data/content";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Philosophy() {
  return (
    <Section tone="deep">
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <span className="eyebrow mb-5">{philosophy.eyebrow}</span>
            <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
              {philosophy.heading}
            </h2>
          </div>
        </div>

        <ol className="md:col-span-8">
          {philosophy.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 90}
              className="grid grid-cols-[auto_1fr] gap-6 border-t border-line py-9 first:border-t-0 first:pt-0 md:gap-10"
            >
              <span className="font-serif text-2xl font-medium italic text-sage">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-2xl font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
