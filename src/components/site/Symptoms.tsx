import { CALENDLY_URL } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionHead } from "./SectionHead";

// The founder a rescue page is for usually recognises themselves in a list of
// symptoms before they read a word about services. Keep these concrete and
// in the buyer's words.
const SYMPTOMS = [
  "Every estimate grows and nobody can explain why.",
  "Customers find bugs before your team does.",
  "Only one developer knows how to deploy.",
  "Releases eat weekends and still break something.",
  "The agency that built it is slow to reply, or gone.",
];

export function Symptoms() {
  return (
    <section id="symptoms" className="border-b border-faint py-24 max-md:py-16">
      <div className="wrap">
        <SectionHead eyebrow="Sound familiar?" title="Signs your product needs a rescue.">
          If three of these are true, the codebase needs an outside review before
          it needs new features.
        </SectionHead>

        <ul className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          {SYMPTOMS.map((s) => (
            <li
              key={s}
              data-reveal
              className="flex items-start gap-3.5 rounded-lg border border-subtle bg-surface-1 px-6 py-5 text-[16px] leading-[1.55] text-primary"
            >
              <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-10" data-reveal>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="book-call-symptoms"
            className={cn(buttonVariants({ size: "lg" }), "max-md:w-full")}
          >
            Book a codebase review call
          </a>
        </div>
      </div>
    </section>
  );
}
