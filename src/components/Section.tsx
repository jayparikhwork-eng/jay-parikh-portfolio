import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  tone?: "a" | "b";
  className?: string;
  children: ReactNode;
};

/** Standard light content section with the source's alternating background tint. */
export function Section({ id, tone = "a", className = "", children }: SectionProps) {
  const bg = tone === "a" ? "bg-section-a" : "bg-section-b";
  return (
    <section id={id} className={`${bg} py-16 md:py-24 ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}

type HeaderProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  headingClassName?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  heading,
  intro,
  headingClassName = "",
  align = "left",
}: HeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`mb-12 max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${headingClassName}`}>
        {heading}
      </h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
    </div>
  );
}
