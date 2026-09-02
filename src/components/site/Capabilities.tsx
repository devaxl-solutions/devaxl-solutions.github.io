import { ArrowRight, Gauge, Rocket, Users } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SectionHead } from "./SectionHead";

const CARDS = [
  {
    icon: Rocket,
    title: "SaaS & AI MVP → launch",
    out: "Take an idea to a first release real users can pay for — AI built in where it earns its place, scoped tight, delivered to the plan we agreed.",
    outcome: "Outcome: a live app people can pay for",
  },
  {
    icon: Gauge,
    title: "Scale & modernize",
    out: "Take ownership of a slow, buggy codebase serving thousands of users — speed, reliability, and a roadmap you can build on.",
    outcome: "Outcome: fast, stable, easy to extend",
  },
  {
    icon: Users,
    title: "Embed a product team",
    out: "A dedicated senior team — design, engineering, PM — that works inside your org against your roadmap, week after week.",
    outcome: "Outcome: steady, predictable delivery",
  },
];

export function Capabilities() {
  return (
    <section id="services" className="border-b border-faint py-24 max-md:py-16">
      <div className="wrap">
        <SectionHead eyebrow="Services" title="One senior team, from first commit to scale.">
          We plug in where you need us — a first release, a rescue on an app
          that has gone brittle, or a long-term embedded team.
        </SectionHead>

        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 max-md:gap-4">
          {CARDS.map(({ icon: Icon, ...c }) => (
            <SpotlightCard
              key={c.title}
              data-reveal
              className="flex cursor-pointer flex-col rounded-lg border border-subtle bg-surface-1 p-7 shadow-[var(--shadow-sm),var(--inner-top)] transition-[transform,border-color,box-shadow] duration-[180ms] ease-out hover:-translate-y-[3px] hover:border-[var(--line)] hover:shadow-[var(--shadow-lg),var(--inner-top)]"
            >
              <div className="mb-5 flex size-11 items-center justify-center rounded-md border border-[rgba(255,182,0,0.25)] bg-accent-quiet text-accent">
                <Icon className="size-[21px]" strokeWidth={1.75} />
              </div>
              <h3 className="text-[20px] font-semibold tracking-[-0.01em]">
                {c.title}
              </h3>
              <p className="mt-3.5 flex-1 text-[14px] leading-normal text-secondary">
                {c.out}
              </p>
              <span className="mt-[18px] inline-flex items-center gap-[7px] text-[13px] font-semibold text-accent">
                {c.outcome}
                <ArrowRight className="size-[15px] transition-transform duration-[180ms] ease-out group-hover:translate-x-1" strokeWidth={1.75} />
              </span>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
