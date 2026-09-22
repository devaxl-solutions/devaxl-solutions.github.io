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
  title: "SaaS Rescue, Modernization & Product Teams",
  description:
    "Rescue and takeover of live SaaS codebases, modernization retainers, embedded product teams and MVP builds. One senior team that stabilizes first, then scales.",
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
        title="Take it over, stabilize it, then scale it."
        intro="Most of our work starts with a B2B SaaS product another team left unstable. We audit it, fix what breaks most, put a release process in place, and stay on as your engineering team. We also build MVPs and embed long-term teams."
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
