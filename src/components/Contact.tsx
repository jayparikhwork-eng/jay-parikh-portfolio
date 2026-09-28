import { useState } from "react";
import { EnvelopeSimple, LinkedinLogo, ArrowUpRight } from "@phosphor-icons/react";
import { contact } from "../data/content";
import { Reveal } from "./Reveal";
import { CtaButton } from "./CtaButton";
import { ContactDialog } from "./ContactDialog";

export function Contact() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section id="contact" className="bg-paper-deep px-4 py-24 md:py-32">
      <Reveal className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow mb-6">{contact.eyebrow}</span>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl">
            {contact.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {contact.body}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
          {contact.cards.map((card) => {
            const Icon = card.kind === "email" ? EnvelopeSimple : LinkedinLogo;
            const isExternal = card.kind !== "email";
            return (
              <a
                key={card.label}
                href={card.href}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="bezel group block transition-transform duration-500 ease-fluid hover:-translate-y-1"
              >
                <div className="bezel-core flex items-center gap-4 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage-soft text-sage-deep">
                    <Icon size={20} weight="light" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs uppercase tracking-[0.14em] text-ink-faint">
                      {card.label}
                    </span>
                    <span className="block truncate font-medium text-ink">
                      {card.value}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    weight="light"
                    aria-hidden="true"
                    className="shrink-0 text-ink-faint transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton onClick={() => setDialogOpen(true)} icon={EnvelopeSimple}>
            {contact.cta}
          </CtaButton>
        </div>
      </Reveal>

      {dialogOpen && <ContactDialog onClose={() => setDialogOpen(false)} />}
    </section>
  );
}
