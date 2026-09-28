import { stats } from "../data/content";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

export function Stats() {
  return (
    <section className="px-4 pb-8">
      <Reveal className="container">
        <div className="grid grid-cols-1 divide-y divide-line rounded-4xl border border-line bg-card/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-6 py-10 text-center"
            >
              <span className="mb-3 font-mono text-xs tracking-[0.2em] text-ink-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-6xl font-medium text-ink">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </span>
              <span className="mt-2 text-sm text-ink-soft">{stat.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
