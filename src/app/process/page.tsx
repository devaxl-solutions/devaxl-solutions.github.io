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
        title="From takeover to shipping again."
        intro="Most engagements start with a product another team left unstable. We audit it, stabilize it, fix how it ships, and then build on it with a demo you can use every week."
      />
      <Process />
      <Cadence />
      <Engagement />
      <Faq />
      <FinalCta />
    </main>
  );
}
