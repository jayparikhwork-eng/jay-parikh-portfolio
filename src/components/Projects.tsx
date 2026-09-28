import { useState } from "react";
import { ArrowUpRight, Plus } from "@phosphor-icons/react";
import { projects, type Project } from "../data/content";
import { Section, SectionHeader } from "./Section";
import { Reveal } from "./Reveal";
import { CaseStudyPanel } from "./CaseStudyPanel";
import { asset } from "../lib/asset";

// Asymmetric bento spans + image heights per card (mobile collapses to 1 col).
const layout = [
  { span: "md:col-span-7", img: "h-64 sm:h-72" },
  { span: "md:col-span-5", img: "h-64 sm:h-72" },
  { span: "md:col-span-4", img: "h-52" },
  { span: "md:col-span-4", img: "h-52" },
  { span: "md:col-span-4", img: "h-52" },
  { span: "md:col-span-12", img: "h-56 sm:h-64" },
];

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = projects.items.find((p) => p.id === openId) ?? null;

  return (
    <Section id="projects" tone="paper">
      <SectionHeader
        eyebrow={projects.eyebrow}
        heading={projects.heading}
        intro={projects.intro}
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
        {projects.items.map((project, i) => (
          <Reveal
            key={project.id}
            delay={(i % 3) * 90}
            className={layout[i]?.span ?? "md:col-span-4"}
          >
            <ProjectCard
              project={project}
              imgClass={layout[i]?.img ?? "h-52"}
              expanded={openId === project.id}
              onOpen={() => setOpenId(project.id)}
            />
          </Reveal>
        ))}
      </div>

      {open && <CaseStudyPanel project={open} onClose={() => setOpenId(null)} />}
    </Section>
  );
}

function ProjectCard({
  project,
  imgClass,
  expanded,
  onOpen,
}: {
  project: Project;
  imgClass: string;
  expanded: boolean;
  onOpen: () => void;
}) {
  return (
    <article className="bezel group h-full transition-transform duration-500 ease-fluid hover:-translate-y-1.5">
      <div className="bezel-core flex h-full flex-col overflow-hidden">
        <button
          type="button"
          onClick={onOpen}
          aria-expanded={expanded}
          aria-label={`Open case study: ${project.title}`}
          className="block text-left"
        >
          <div className={`overflow-hidden ${imgClass}`}>
            <img
              src={asset(project.image)}
              alt={project.title}
              width={654}
              height={288}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-fluid group-hover:scale-[1.04]"
            />
          </div>
          <div className="p-6">
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-faint"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-serif text-2xl font-medium text-ink">
              {project.title}
            </h3>
            <p className="mt-2 leading-relaxed text-ink-soft">{project.blurb}</p>
          </div>
        </button>

        <div className="mt-auto flex items-center justify-between gap-3 px-6 pb-6">
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-sage transition-colors hover:text-sage-deep"
              >
                {link.label}
                <ArrowUpRight size={14} weight="light" aria-hidden="true" />
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={onOpen}
            aria-expanded={expanded}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-sage"
          >
            Case study
            <span className="sr-only"> for {project.title}</span>
            <Plus size={15} weight="light" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
