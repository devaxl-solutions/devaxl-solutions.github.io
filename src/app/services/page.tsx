import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { Capabilities } from "@/components/site/Capabilities";
import { AiNative } from "@/components/site/AiNative";
import { TechStack } from "@/components/site/TechStack";
import { Engagement } from "@/components/site/Engagement";
import { Process } from "@/components/site/Process";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, faqSchema, graph, servicesSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SaaS, AI & MVP Development Services",
  description:
    "SaaS and AI MVP builds, embedded development teams, and platform modernization. One senior squad, AI in the product and the process, from first commit to scale.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <JsonLd
        data={graph(
          servicesSchema(),
          faqSchema(),
          breadcrumbSchema([{ name: "Services", path: "/services" }]),
        )}
      />
      <PageHeader
        eyebrow="Services"
        title="Ship SaaS & AI products."
        intro="We plug in where you need us — a first release, an AI feature your app needs, a rescue on a platform that has aged badly, or a long-term embedded team. One senior team, end to end."
      />
      <Capabilities />
      <AiNative />
      <TechStack />
      <Process />
      <Engagement />
      <Faq />
      <FinalCta />
    </main>
  );
}
