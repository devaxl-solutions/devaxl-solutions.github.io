import { Counter } from "@/components/ui/Counter";

export function Proof() {
  return (
    <section className="border-b border-faint py-11">
      <div className="wrap">
        {/* Honest proof numbers */}
        <div className="grid grid-cols-3 gap-7 max-md:grid-cols-1 max-md:gap-6">
          <div data-reveal className="border-l border-[var(--line)] pl-5">
            <div className="text-[clamp(2rem,1.4rem+1.6vw,2.75rem)] font-semibold tracking-tight">
              <span className="text-accent">
                <Counter value={21} suffix="+" />
              </span>{" "}
              products
            </div>
            <div className="mt-1.5 text-[14px] text-secondary">shipped to production</div>
          </div>
          <div data-reveal className="border-l border-[var(--line)] pl-5">
            <div className="text-[clamp(2rem,1.4rem+1.6vw,2.75rem)] font-semibold tracking-tight">
              <span className="text-accent">
                <Counter value={27} />
              </span>{" "}
              five-star
            </div>
            <div className="mt-1.5 text-[14px] text-secondary">reviews from clients</div>
          </div>
          <div data-reveal className="border-l border-[var(--line)] pl-5">
            <div className="text-[clamp(2rem,1.4rem+1.6vw,2.75rem)] font-semibold tracking-tight">
              <span className="text-accent">Weeks</span> not months
            </div>
            <div className="mt-1.5 text-[14px] text-secondary">AI-native build velocity</div>
          </div>
        </div>
      </div>
    </section>
  );
}
