import { Linkedin, FileText, Briefcase } from "lucide-react";
import { experience } from "../data/content";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <Section id="experience" tone="b">
      <div className="mb-10 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {experience.heading}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {experience.intro}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {experience.links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-all hover:border-primary/40 hover:text-primary active:translate-y-px"
            >
              {i === 0 ? (
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              ) : (
                <FileText className="h-4 w-4" aria-hidden="true" />
              )}
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <ol className="relative ml-3 border-l border-border">
          {experience.roles.map((role, i) => (
            <Reveal
              as="li"
              key={role.title}
              delay={i * 80}
              className="mb-8 pl-6 last:mb-0"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-card"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <div className="flex items-start gap-3">
                <Briefcase
                  className="mt-1 hidden h-4 w-4 shrink-0 text-primary sm:block"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {role.title}
                  </h3>
                  <p className="text-sm font-medium text-primary">{role.company}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {role.period}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
