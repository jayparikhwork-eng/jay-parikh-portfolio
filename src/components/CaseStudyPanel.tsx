import { useEffect, useRef } from "react";
import { ExternalLink, X } from "lucide-react";
import type { Project } from "../data/content";
import { asset } from "../lib/asset";

type Props = {
  project: Project;
  onClose: () => void;
};

export function CaseStudyPanel({ project, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const cs = project.caseStudy;

  useEffect(() => {
    // Bring the newly opened panel into view and focus its close button.
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const sections: { heading: string; body?: string; list?: string[] }[] = [
    { heading: "Problem", body: cs.problem },
    { heading: "My Role", body: cs.role },
    { heading: "Process", body: cs.process },
    { heading: "Key Decisions", list: cs.decisions },
    { heading: "Outcome & Metrics", body: cs.outcome },
    { heading: "Learnings", body: cs.learnings },
  ];

  return (
    <div
      ref={ref}
      role="region"
      aria-label={`Case study: ${project.title}`}
      className="mt-8 animate-scale-in overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-elegant"
    >
      <div className="flex items-start gap-4 border-b border-border bg-secondary/40 p-6">
        <img
          src={asset(project.image)}
          alt={project.title}
          width={128}
          height={80}
          loading="lazy"
          className="hidden h-20 w-32 shrink-0 rounded-lg object-cover sm:block"
        />
        <div className="flex-1">
          <div className="mb-2 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-card-foreground">
            {project.title}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{project.blurb}</p>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-8">
        {sections.map((s) => (
          <div key={s.heading}>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
              {s.heading}
            </h3>
            {s.body && (
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            )}
            {s.list && (
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                {s.list.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 border-t border-border p-6">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:translate-y-px"
          >
            {link.label}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
}
