import { Counter } from "@/components/ui/Counter";

// Only numbers we can back up on a reference call. The first two come from the
// aNinja takeover (see /work/aninja-crm); the reviews are on Upwork and Fiverr.
const STATS = [
  { value: 6, suffix: "", unit: "weeks", label: "from takeover to aNinja's first stable release" },
  { value: 4, suffix: "x", unit: "releases", label: "a month at aNinja after we took over (up from 1)" },
  { value: 27, suffix: "", unit: "five-star", label: "reviews from clients" },
];

export function Proof() {
  return (
    <section className="border-b border-faint py-11">
      <div className="wrap">
        <div className="grid grid-cols-3 gap-7 max-md:grid-cols-1 max-md:gap-6">
          {STATS.map((s) => (
            <div key={s.label} data-reveal className="border-l border-[var(--line)] pl-5">
              <div className="text-[clamp(2rem,1.4rem+1.6vw,2.75rem)] font-semibold tracking-tight">
                <span className="text-accent">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>{" "}
                {s.unit}
              </div>
              <div className="mt-1.5 text-[14px] text-secondary">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
