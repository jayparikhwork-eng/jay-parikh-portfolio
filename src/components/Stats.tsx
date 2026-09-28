import { Rocket, BrainCircuit, FlaskConical } from "lucide-react";
import { stats } from "../data/content";
import { CountUp } from "./CountUp";

const icons = [Rocket, BrainCircuit, FlaskConical];

export function Stats() {
  return (
    <section className="border-y border-white/10 bg-section-dark text-white">
      <div className="container grid grid-cols-1 gap-8 py-12 sm:grid-cols-3">
        {stats.map((stat, i) => {
          const Icon = icons[i] ?? Rocket;
          return (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <Icon className="mb-3 h-6 w-6 text-primary-glow" aria-hidden="true" />
              <div className="text-4xl font-bold text-primary">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-sm text-white/70">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
