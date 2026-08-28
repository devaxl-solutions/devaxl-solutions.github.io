import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { AboutStory } from "@/components/site/AboutStory";
import { Principles } from "@/components/site/Principles";
import { TechStack } from "@/components/site/TechStack";
import { Industries } from "@/components/site/Industries";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCta } from "@/components/site/FinalCta";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Our Product Engineering Studio",
  description:
    "Devaxl is a small, senior product engineering studio building SaaS and AI products for founders and CTOs — a written plan, weekly demos, and code you fully own.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={graph(breadcrumbSchema([{ name: "About", path: "/about" }]))} />
      <PageHeader
        eyebrow="About"
        title="Senior engineers who have shipped."
        intro="Devaxl is a small, senior product engineering studio. We sound like the people who build the software — because we are. No layers, no hand-offs."
      />
      <AboutStory />
      <Principles />
      <TechStack />
      <Industries />
      <Testimonials />
      <FinalCta />
    </main>
  );
}
