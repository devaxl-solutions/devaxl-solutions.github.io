import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { SectionHead } from "@/components/site/SectionHead";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { JsonLd } from "@/components/site/JsonLd";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CALENDLY_URL } from "@/lib/site";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";
import {
  RESCUE_FAQS,
  RESCUE_FOR,
  RESCUE_QUOTES,
  RESCUE_SIGNS,
  RESCUE_STEPS,
  RESCUE_WEEK_ONE,
} from "@/lib/rescue";

// The one page every LinkedIn post, outreach email and profile link points to.
// Everything on it is about taking over a live product; new builds live on
// /services.
export const metadata: Metadata = {
  title: "SaaS Rescue & Codebase Takeover for B2B Founders",
  description:
    "Your SaaS has paying customers and a codebase nobody trusts. Devaxl takes over from the previous team, stabilizes the product, and gets releases shipping again.",
  alternates: { canonical: "/rescue" },
};

const card =
  "rounded-lg border border-subtle bg-surface-1 p-7 shadow-[var(--shadow-sm),var(--inner-top)]";

export default function RescuePage() {
  return (
    <main>
      <JsonLd
        data={graph(faqSchema(RESCUE_FAQS), breadcrumbSchema([{ name: "SaaS rescue", path: "/rescue" }]))}
      />

      <PageHeader
        eyebrow="SaaS rescue"
        title="Take back a SaaS product another team left broken."
        intro="We take over live B2B SaaS codebases, stabilize them, and put a release process in place that your customers can feel."
      >
        <div className="mt-9 flex flex-wrap gap-3.5 max-md:flex-col max-md:items-stretch" data-reveal>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="book-call-rescue-hero"
            className={cn(buttonVariants({ size: "lg" }), "max-md:w-full")}
          >
            Book a codebase review call
          </a>
          <Link
            href="/work/aninja-crm"
            data-cta="see-rescue-case"
            className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "max-md:w-full")}
          >
            See the aNinja rescue
          </Link>
        </div>
      </PageHeader>

      {/* Who it's for */}
      <section className="border-b border-faint py-24 max-md:py-16">
        <div className="wrap">
          <SectionHead eyebrow="Who it's for" title="Built for products that already have customers.">
            We work with B2B SaaS that has paying customers. If you&rsquo;re
            pre-launch, see our MVP builds on the services page.
          </SectionHead>
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 max-md:gap-4">
            {RESCUE_FOR.map((f) => (
              <div key={f.title} data-reveal className={card}>
                <h3 className="text-[19px] font-semibold tracking-[-0.01em]">{f.title}</h3>
                <p className="mt-3 text-[14px] leading-normal text-secondary">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className="border-b border-faint py-24 max-md:py-16">
        <div className="wrap">
          <SectionHead eyebrow="Warning signs" title="Sound familiar?">
            If three of these are true, the codebase needs an outside review before
            it needs new features.
          </SectionHead>
          <ul className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            {RESCUE_SIGNS.map((s) => (
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
        </div>
      </section>

      {/* How a rescue works */}
      <section className="border-b border-faint py-24 max-md:py-16">
        <div className="wrap">
          <SectionHead eyebrow="How it works" title="How a rescue works." />
          <ol className="grid grid-cols-5 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
            {RESCUE_STEPS.map((s) => (
              <li key={s.n} data-reveal className={card}>
                <div className="flex items-baseline justify-between font-mono text-[12px] text-tertiary">
                  <span className="text-accent">{s.n}</span>
                  <span>{s.when}</span>
                </div>
                <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.01em]">{s.title}</h3>
                <p className="mt-3 text-[14px] leading-normal text-secondary">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Week 1 + case study */}
      <section className="border-b border-faint py-24 max-md:py-16">
        <div className="wrap grid grid-cols-2 gap-6 max-md:grid-cols-1">
          <div data-reveal className={card}>
            <span className="eyebrow">What you get in week 1</span>
            <ul className="mt-6 flex flex-col gap-3.5">
              {RESCUE_WEEK_ONE.map((w) => (
                <li key={w} className="flex items-start gap-2.5 text-[15px] leading-normal text-primary">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2} />
                  {w}
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal className={card}>
            <span className="eyebrow">Case study</span>
            <h3 className="mt-5 text-[24px] font-semibold tracking-tight">aNinja</h3>
            <p className="mt-3 text-[15px] leading-normal text-secondary">
              A US CRM for service businesses came to us after a failed development
              partnership had stalled the product. We audited and stabilized the
              codebase, rebuilt the release process, and got features shipping again.
            </p>
            <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-faint pt-6">
              <div>
                <dt className="text-[12px] text-tertiary">To first stable release</dt>
                <dd className="mt-1 text-[24px] font-semibold text-accent">6 weeks</dd>
              </div>
              <div>
                <dt className="text-[12px] text-tertiary">Releases a month</dt>
                <dd className="mt-1 text-[24px] font-semibold text-accent">1 &rarr; 4</dd>
              </div>
              <div>
                <dt className="text-[12px] text-tertiary">Production incidents</dt>
                <dd className="mt-1 text-[24px] font-semibold text-accent">&minus;23%</dd>
              </div>
            </dl>
            <Link
              href="/work/aninja-crm"
              data-cta="see-rescue-case-card"
              className="mt-6 inline-flex items-center gap-[7px] text-[14px] font-semibold text-accent"
            >
              Read the case study <ArrowRight className="size-[15px]" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </section>

      {/* Rewrite vs repair */}
      <section className="border-b border-faint py-24 max-md:py-16">
        <div className="wrap">
          <SectionHead eyebrow="Rewrite or repair" title="We usually talk founders out of a rewrite.">
            A rewrite means months where customers get nothing new while you rebuild
            features that already work. We replace the parts causing the most pain
            first and keep the rest under test until there&rsquo;s a reason to change
            it. When the stack genuinely can&rsquo;t be saved, the audit says so.
          </SectionHead>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-faint py-24 max-md:py-16">
        <div className="wrap">
          <SectionHead eyebrow="Clients" title="What clients said after we took over." />
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 max-md:gap-4">
            {RESCUE_QUOTES.map((q) => (
              <figure key={q.name} data-reveal className={card}>
                <blockquote className="text-[15px] leading-relaxed text-primary">&ldquo;{q.quote}&rdquo;</blockquote>
                <figcaption className="mt-5 flex items-center justify-between border-t border-faint pt-4 text-[14px]">
                  <span className="font-semibold text-primary">{q.name}</span>
                  <span className="font-mono text-[11px] text-tertiary">{q.src}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Faq items={RESCUE_FAQS} title="What founders ask before a takeover." />
      <FinalCta />
    </main>
  );
}
