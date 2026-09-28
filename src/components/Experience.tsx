import { LinkedinLogo, FilePdf } from "@phosphor-icons/react";
import { experience } from "../data/content";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { CtaButton } from "./CtaButton";

export function Experience() {
  return (
    <Section id="experience" tone="paper">
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <h2 className="font-serif text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
              {experience.heading}
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
              {experience.intro}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CtaButton
                href={experience.links[0].href}
                variant="secondary"
                external
                icon={LinkedinLogo}
              >
                {experience.links[0].label}
              </CtaButton>
              <CtaButton
                href={experience.links[1].href}
                variant="secondary"
                external
                icon={FilePdf}
              >
                {experience.links[1].label}
              </CtaButton>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          {experience.roles.map((role, i) => (
            <Reveal
              key={role.title}
              delay={i * 90}
              className="grid gap-2 border-t border-line py-8 first:border-t-0 first:pt-0 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
            >
              <div>
                <h3 className="font-serif text-2xl font-medium text-ink">
                  {role.title}
                </h3>
                <p className="mt-1 text-sage">{role.company}</p>
              </div>
              <p className="font-mono text-xs tracking-wide text-ink-faint sm:text-right">
                {role.period}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
