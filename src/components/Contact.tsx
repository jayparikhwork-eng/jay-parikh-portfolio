import { useState } from "react";
import { Mail, Linkedin } from "lucide-react";
import { contact } from "../data/content";
import { ContactDialog } from "./ContactDialog";

export function Contact() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section id="contact" className="bg-section-dark py-16 text-white md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary-glow">
            {contact.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            {contact.body}
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
          {contact.cards.map((card) => {
            const Icon = card.kind === "email" ? Mail : Linkedin;
            const isExternal = card.kind !== "email";
            return (
              <a
                key={card.label}
                href={card.href}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/10"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary-glow">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-white/60">{card.label}</span>
                  <span className="block truncate font-medium text-white">
                    {card.value}
                  </span>
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setDialogOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-glow active:translate-y-px"
          >
            {contact.cta}
          </button>
        </div>
      </div>

      {dialogOpen && <ContactDialog onClose={() => setDialogOpen(false)} />}
    </section>
  );
}
