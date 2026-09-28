import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { contact, site } from "../data/content";

type Props = { onClose: () => void };

export function ContactDialog({ onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
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
    // Static-friendly: open the visitor's email client pre-filled.
    const subject = purpose || "Portfolio inquiry";
    const body = `${message}\n\nFrom: ${email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-dialog-title"
    >
      <div
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        className="relative z-10 w-full max-w-md animate-scale-in rounded-2xl border border-border bg-card p-6 shadow-elegant"
      >
        <div className="mb-5 flex items-center justify-between">
          <h2
            id="contact-dialog-title"
            className="text-xl font-bold text-card-foreground"
          >
            {contact.dialog.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="cf-email"
              className="text-sm font-medium text-card-foreground"
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
              className="rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="cf-purpose"
              className="text-sm font-medium text-card-foreground"
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
              className="rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="cf-message"
              className="text-sm font-medium text-card-foreground"
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
              className="resize-y rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none"
            />
          </div>

          <div className="flex justify-end gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              {contact.dialog.cancel}
            </button>
            <button
              type="submit"
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:translate-y-px"
            >
              {contact.dialog.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
