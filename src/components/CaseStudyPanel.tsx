import { useEffect, useRef } from "react";
import { X } from "@phosphor-icons/react";
import type { Project } from "../data/content";
import { asset } from "../lib/asset";
import { CtaButton } from "./CtaButton";

type Props = {
  project: Project;
  onClose: () => void;
};

export function CaseStudyPanel({ project, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const cs = project.caseStudy;

  useEffect(() => {
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
    <div ref={ref} className="bezel mt-6 animate-scale-in">
      <div
        role="region"
        aria-label={`Case study: ${project.title}`}
        className="bezel-core overflow-hidden"
      >
        {/* header */}
        <div className="flex items-start gap-5 border-b border-line p-6 sm:p-8">
          <img
            src={asset(project.image)}
            alt={project.title}
            width={144}
            height={96}
            loading="lazy"
            className="hidden h-24 w-36 shrink-0 rounded-2xl object-cover sm:block"
          />
          <div className="flex-1">
            <div className="mb-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-faint"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="font-serif text-3xl font-medium text-ink">
              {project.title}
            </h2>
            <p className="mt-1 text-ink-soft">{project.blurb}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-ink-soft transition-colors hover:text-ink"
          >
            <X size={18} weight="light" />
          </button>
        </div>

        {/* body */}
        <div className="grid gap-x-12 gap-y-9 p-6 sm:grid-cols-2 sm:p-8">
          {sections.map((s) => (
            <div key={s.heading}>
              <h3 className="mb-3 font-serif text-lg font-medium italic text-sage">
                {s.heading}
              </h3>
              {s.body && (
                <p className="leading-relaxed text-ink-soft">{s.body}</p>
              )}
              {s.list && (
                <ul className="space-y-3">
                  {s.list.map((li, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[auto_1fr] gap-3 leading-relaxed text-ink-soft"
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-sage" />
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* footer links */}
        <div className="flex flex-wrap gap-3 border-t border-line p-6 sm:p-8">
          {project.links.map((link) => (
            <CtaButton key={link.label} href={link.href} external>
              {link.label}
            </CtaButton>
          ))}
        </div>
      </div>
    </div>
  );
}
