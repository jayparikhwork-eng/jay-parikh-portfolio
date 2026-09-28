import { useEffect, useRef, useState } from "react";
import { X } from "@phosphor-icons/react";
import { contact, site } from "../data/content";
import { CtaButton } from "./CtaButton";

type Props = { onClose: () => void };

export function ContactDialog({ onClose }: Props) {
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [message, setMessage] = useState("");

  const f = contact.dialog.fields;

  useEffect(() => {
    firstFieldRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = purpose || "Portfolio inquiry";
    const body = `${message}\n\nFrom: ${email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  const field =
    "rounded-2xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus-visible:border-sage focus-visible:outline-none";

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-dialog-title"
    >
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="bezel relative z-10 my-auto w-full max-w-md animate-scale-in shadow-lift">
        <div className="bezel-core p-6 sm:p-7">
          <div className="mb-6 flex items-center justify-between">
            <h2
              id="contact-dialog-title"
              className="font-serif text-2xl font-medium text-ink"
            >
              {contact.dialog.title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:text-ink"
            >
              <X size={18} weight="light" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="cf-email"
                className="text-sm font-medium text-ink"
              >
                {f.email.label}
              </label>
              <input
                ref={firstFieldRef}
                id="cf-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                spellCheck={false}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={f.email.placeholder}
                className={field}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="cf-purpose"
                className="text-sm font-medium text-ink"
              >
                {f.purpose.label}
              </label>
              <input
                id="cf-purpose"
                name="purpose"
                type="text"
                required
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                placeholder={f.purpose.placeholder}
                className={field}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="cf-message"
                className="text-sm font-medium text-ink"
              >
                {f.message.label}
              </label>
              <textarea
                id="cf-message"
                name="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={f.message.placeholder}
                className={`${field} resize-y`}
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-1">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full px-5 py-2 text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
              >
                {contact.dialog.cancel}
              </button>
              <CtaButton type="submit">{contact.dialog.submit}</CtaButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
