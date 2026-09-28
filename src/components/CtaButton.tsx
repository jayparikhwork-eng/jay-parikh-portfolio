import type { ReactNode } from "react";
import { ArrowUpRight, type Icon } from "@phosphor-icons/react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: Icon;
  className?: string;
};

type AsLink = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
};

type AsButton = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: never;
};

/**
 * Pill CTA with the "button-in-button" trailing icon: the glyph lives inside
 * its own circular wrapper flush with the pill's right edge, and shifts
 * diagonally on hover for internal kinetic tension.
 */
export function CtaButton(props: AsLink | AsButton) {
  const {
    children,
    variant = "primary",
    icon: IconCmp = ArrowUpRight,
    className = "",
  } = props;

  const base =
    "group inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-sm font-semibold transition-all duration-500 ease-fluid active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:shadow-lift"
      : "border border-line bg-card text-ink hover:border-ink/30";

  const circle =
    variant === "primary"
      ? "bg-paper/15 text-paper"
      : "bg-ink/5 text-ink";

  const inner = (
    <>
      <span className="pl-0">{children}</span>
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105 ${circle}`}
        aria-hidden="true"
      >
        <IconCmp size={16} weight="light" />
      </span>
    </>
  );

  if (props.href) {
    const ext = props.external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <a href={props.href} {...ext} className={`${base} ${styles} ${className}`}>
        {inner}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={`${base} ${styles} ${className}`}
    >
      {inner}
    </button>
  );
}
