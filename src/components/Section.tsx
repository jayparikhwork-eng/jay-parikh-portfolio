import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  tone?: "paper" | "deep";
  className?: string;
  children: ReactNode;
};

/** Standard editorial section: heavy vertical rhythm, alternating warm tone. */
export function Section({
  id,
  tone = "paper",
  className = "",
  children,
}: SectionProps) {
  const bg = tone === "deep" ? "bg-paper-deep" : "bg-paper";
  return (
    <section id={id} className={`${bg} px-4 py-24 md:py-32 ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}

type HeaderProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: "left" | "center";
  headingClassName?: string;
};

export function SectionHeader({
  eyebrow,
  heading,
  intro,
  align = "left",
  headingClassName = "",
}: HeaderProps) {
  const isCenter = align === "center";
  return (
    <div
      className={`mb-14 max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <span className="eyebrow mb-5">{eyebrow}</span>}
      <h2
        className={`mt-3 font-serif text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl ${headingClassName}`}
      >
        {heading}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed text-ink-soft sm:text-lg ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
