import { Counter } from "@/components/ui/Counter";
import { Marquee } from "@/components/ui/Marquee";

// Decorative only. An earlier version put each logo's company name into its alt
// text — which asserted a commercial relationship to screen readers, Google and
// llms.txt. Three of these files still carry the words "YOUR TAGLINE HERE" in
// the artwork and none of the six names appears in any case study, so the claim
// could not be supported. Empty alt is correct for decorative imagery; put the
// names back only for logos of confirmed, nameable clients.
const CLIENTS = [1, 2, 3, 4, 5, 6];

export function Proof() {
  return (
    <section className="border-b border-faint py-11">
      <div className="wrap">
        {/* Logo wall — decorative, see the note on CLIENTS above */}
        <div className="mb-10 flex items-center gap-4" data-reveal>
          <Marquee>
            {CLIENTS.map((n) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={n}
                src={`/clients/client${n}.png`}
                alt=""
                loading="lazy"
                className="h-8 w-auto object-contain"
              />
            ))}
          </Marquee>
        </div>

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
