// schema.org JSON-LD builders.
//
// Rules we hold to here:
//  - Only mark up things that are actually visible on the page.
//  - No aggregateRating / Review on our own Organization. Google's review-snippet
//    guidelines make a page ineligible for the star review feature when the entity
//    being reviewed controls the reviews about itself, so self-serving markup here
//    would buy nothing — and our reviews live on Upwork and Fiverr anyway.
//  - Everything is server-rendered so crawlers and LLMs see it without JS.

import { CONTACT, SOCIALS } from "@/lib/site";
import { FAQS } from "@/lib/faq";

export const SITE_URL = "https://devaxl.com";

const abs = (path: string) => new URL(path, SITE_URL).toString();

export const ORG_ID = `${SITE_URL}/#organization`;
export const SITE_ID = `${SITE_URL}/#website`;

/** The company entity. Referenced by @id from every other node. */
export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Devaxl",
    alternateName: "Devaxl Solutions",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: abs("/devaxl-logo.png"),
    },
    image: abs("/devaxl-logo.png"),
    slogan: "Development accelerated",
    description:
      "An AI-native product studio that designs, builds, and scales SaaS and AI products for founders and CTOs — MVP builds, embedded product teams, and platform modernization.",
    email: CONTACT.email,
    telephone: CONTACT.phone,
    sameAs: SOCIALS.map((s) => s.href),
    // Topic entity-linking for AI engines. Every value here is something the
    // site actually shows: the six Industries cards, the four TechStack groups,
    // and the AI-native columns. Nothing inferred, nothing aspirational.
    knowsAbout: [
      "SaaS product development",
      "AI product engineering",
      "Retrieval-augmented generation",
      "AI agents and copilots",
      "LLM evaluation and guardrails",
      "Platform modernization",
      "Logistics and fleet software",
      "Transportation management systems",
      "B2B SaaS platforms",
      "Fintech engineering",
      "Marketplace platforms",
      "Healthcare software",
      "React and Next.js",
      "Node.js",
      "AWS cloud infrastructure",
    ],
    // "Remote, worldwide" — stated on the contact page and in public/llms.txt.
    // Same claim the Service nodes already carry.
    areaServed: "Worldwide",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: CONTACT.email,
        telephone: CONTACT.phone,
        availableLanguage: ["English"],
      },
    ],
  };
}

/** The site entity, so search engines can attribute pages to one property. */
export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE_URL,
    name: "Devaxl",
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

/**
 * The three engagement models, as they appear on /services.
 * No `offers` node — we publish no prices, and inventing them would make the
 * markup inaccurate. Add `offers` here the day a price signal ships.
 */
export function servicesSchema() {
  const services = [
    {
      name: "SaaS & AI MVP build",
      description:
        "Take an idea to a first release real users can pay for — AI built in where it earns its place, scoped tight, delivered to the plan we agreed.",
    },
    {
      name: "Scale & modernization",
      description:
        "Take ownership of a slow, buggy codebase serving thousands of users — speed, reliability, and a roadmap you can build on.",
    },
    {
      name: "Embedded product team",
      description:
        "A dedicated senior team — design, engineering, PM — that works inside your org against your roadmap, week after week.",
    },
  ];

  return services.map((s) => ({
    "@type": "Service",
    name: s.name,
    description: s.description,
    serviceType: "Software product engineering",
    audience: {
      "@type": "Audience",
      audienceType: "Founders and CTOs at seed to Series-B software companies",
    },
    provider: { "@id": ORG_ID },
    areaServed: "Worldwide",
    url: abs("/services"),
  }));
}

/** FAQPage built from the same array the accordion renders. */
export function faqSchema(items: { q: string; a: string }[] = FAQS) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Breadcrumbs for nested pages. Pass the trail excluding "Home". */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

/** Blog posts on /insights/[slug]. */
export function articleSchema(a: {
  slug: string;
  title: string;
  dek: string;
  dateISO: string;
  author: string;
  category: string;
}) {
  const url = abs(`/insights/${a.slug}`);
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    url,
    headline: a.title,
    description: a.dek,
    articleSection: a.category,
    datePublished: a.dateISO,
    dateModified: a.dateISO,
    inLanguage: "en",
    author: { "@type": "Organization", name: a.author, url: SITE_URL },
    publisher: { "@id": ORG_ID },
    // Articles render a generated cover glyph rather than a stored image file,
    // so we point at the brand logo — a real asset — instead of a 404.
    image: abs("/devaxl-logo.png"),
  };
}

/** Case studies on /work/[slug]. */
export function caseStudySchema(c: {
  slug: string;
  name: string;
  oneLiner: string;
  categories?: string[];
  thumbnail?: string;
}) {
  const url = abs(`/work/${c.slug}`);
  return {
    "@type": "Article",
    "@id": `${url}#case-study`,
    mainEntityOfPage: url,
    url,
    headline: `${c.name} — case study`,
    description: c.oneLiner,
    // Tells an engine what kind of article this is without it having to guess
    // from the URL, and ties the page back to the one site entity.
    articleSection: "Case study",
    inLanguage: "en",
    isPartOf: { "@id": SITE_ID },
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    // The same discipline chips the page renders in the hero — no new claims.
    ...(c.categories?.length ? { keywords: c.categories.join(", ") } : {}),
    // One case (BRB) has no screenshot and renders a generated poster, so we
    // fall back to the brand logo — a real asset — instead of omitting image
    // and leaving the node without one.
    image: c.thumbnail ? abs(c.thumbnail) : abs("/devaxl-logo.png"),
  };
}

/** Wrap any set of nodes into a single @graph document. */
export function graph(...nodes: unknown[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.flat(),
  };
}
