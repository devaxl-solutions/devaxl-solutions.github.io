import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { WorkFilter } from "@/components/work/WorkFilter";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCta } from "@/components/site/FinalCta";
import { getAllCases } from "@/lib/work";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SaaS & AI Development Case Studies",
  description:
    "15 case studies with numbers: a 300,000-member community platform, SOC 2 Type II in 6 months, an $800k deal closed, 74% lower CRM cost, 40% faster dispatch.",
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
