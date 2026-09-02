import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { Cadence } from "@/components/site/Cadence";
import { Engagement } from "@/components/site/Engagement";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Software Development Process",
  description:
    "Our software development process: discovery, design, build, launch, scale. A written plan up front, weekly demoable increments, and code you own from day one.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <main>
      <JsonLd
        data={graph(
          faqSchema(),
          breadcrumbSchema([{ name: "Process", path: "/process" }]),
        )}
      />
      <PageHeader
        eyebrow="How we work"
        title="From first call to lasting scale."
        intro="A senior team, a written plan, and tight demoable increments you can use every week. Here is the path."
      />
      <Process />
      <Cadence />
      <Engagement />
      <Faq />
      <FinalCta />
    </main>
  );
}
