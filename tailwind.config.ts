import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

/**
 * Editorial Luxury design system.
 * Warm paper surfaces, espresso ink, a single sage accent, high-contrast
 * serif display (Playfair Display) paired with a clean grotesk (Plus Jakarta
 * Sans). Tokens are HSL triplets exposed as hsl(var(--token)).
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1240px" },
    },
    extend: {
      fontFamily: {
        serif: ['"Playfair Display Variable"', "Georgia", "Cambria", "serif"],
        sans: [
          '"Plus Jakarta Sans Variable"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        paper: "hsl(var(--paper))",
        "paper-deep": "hsl(var(--paper-deep))",
        card: "hsl(var(--card))",
        ink: {
          DEFAULT: "hsl(var(--ink))",
          soft: "hsl(var(--ink-soft))",
          faint: "hsl(var(--ink-faint))",
        },
        sage: {
          DEFAULT: "hsl(var(--sage))",
          deep: "hsl(var(--sage-deep))",
          soft: "hsl(var(--sage-soft))",
        },
        line: "hsl(var(--line))",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        soft: "0 24px 60px -28px hsl(28 25% 15% / 0.28), 0 8px 24px -16px hsl(28 25% 15% / 0.14)",
        lift: "0 40px 90px -40px hsl(28 25% 15% / 0.35), 0 12px 30px -18px hsl(28 25% 15% / 0.18)",
        inset: "inset 0 1px 1px hsl(40 50% 100% / 0.6)",
      },
      transitionTimingFunction: {
        fluid: "cubic-bezier(0.32, 0.72, 0, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.97)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.32,0.72,0,1) both",
        "scale-in": "scale-in 0.5s cubic-bezier(0.32,0.72,0,1) both",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
