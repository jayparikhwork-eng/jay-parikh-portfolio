import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects, type Project } from "../data/content";
import { Section, SectionHeader } from "./Section";
import { Reveal } from "./Reveal";
import { CaseStudyPanel } from "./CaseStudyPanel";
import { asset } from "../lib/asset";

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = projects.items.find((p) => p.id === openId) ?? null;

  return (
    <Section id="projects" tone="b">
      <SectionHeader
        eyebrow={projects.eyebrow}
        heading={projects.heading}
        intro={projects.intro}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.items.map((project, i) => (
          <Reveal key={project.id} delay={(i % 2) * 80}>
            <ProjectCard
              project={project}
              expanded={openId === project.id}
              onOpen={() => setOpenId(project.id)}
            />
          </Reveal>
        ))}
      </div>

      {open && (
        <CaseStudyPanel project={open} onClose={() => setOpenId(null)} />
      )}
    </Section>
  );
}

function ProjectCard({
  project,
  expanded,
  onOpen,
}: {
  project: Project;
  expanded: boolean;
  onOpen: () => void;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_16px_48px_-12px_hsl(234_89%_74%/0.3)]">
      <button
        type="button"
        onClick={onOpen}
        aria-expanded={expanded}
        aria-label={`Open case study: ${project.title}`}
        className="block text-left"
      >
        <div className="h-48 overflow-hidden">
          <img
            src={asset(project.image)}
            alt={project.title}
            width={654}
            height={192}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <div className="mb-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-card-foreground">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {project.blurb}
          </p>
        </div>
      </button>

      <div className="mt-auto flex items-center justify-between gap-3 px-5 pb-5">
        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              {link.label}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={onOpen}
          aria-expanded={expanded}
          className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          Case study
          <span className="sr-only"> for {project.title}</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
