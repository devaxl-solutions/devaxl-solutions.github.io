import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { WorkFilter } from "@/components/work/WorkFilter";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCta } from "@/components/site/FinalCta";
import { getAllCases } from "@/lib/work";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SaaS, AI & Logistics Case Studies",
  description:
    "Case studies in SaaS, AI and logistics software: the problem, the approach and the outcome for products Devaxl built, rebuilt or took over.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const cases = getAllCases();

  return (
    <main>
      <JsonLd data={graph(breadcrumbSchema([{ name: "Work", path: "/work" }]))} />
      <PageHeader
        eyebrow="Selected work"
        title="Real products we've shipped."
        intro="Branding, design, and engineering work delivered for our clients. Filter by discipline."
      />

      <section className="py-16 max-md:py-12">
        <div className="wrap">
          <WorkFilter cases={cases} />
        </div>
      </section>

      <Testimonials />
      <FinalCta />
    </main>
  );
}
