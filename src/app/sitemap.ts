import type { MetadataRoute } from "next";
import { CASES, type CaseStudy } from "@/lib/work";
import { ARTICLES } from "@/lib/insights";

const BASE = "https://devaxl.com";

// `lastModified` is the one sitemap hint Google still acts on, and only while
// it stays truthful — a `new Date()` here would claim the whole site changed on
// every build until crawlers stopped trusting the field entirely. So these are
// explicit dates tied to when each page's content actually moved: 2026-08-28
// for the static pages revised in the current copy pass, and git history for
// the case data, which has not changed since June. Bump an entry only when that
// page's content really changes — a stale-but-accurate date is worth far more
// than a fresh lie.
const REVISED = {
  home: "2026-08-28", // hero, selected-work and closing-CTA copy rewritten
  work: "2026-08-28", // title and description rewritten around the case numbers
  services: "2026-08-28", // FAQ expanded to 8 questions; capability copy revised
  process: "2026-08-28", // FAQ expanded to 8 questions; step copy revised
  insights: "2026-08-28", // title and description rewritten
  about: "2026-08-28", // story, principles and stack copy revised
  contact: "2026-08-28", // page copy and contact-form copy revised
  cases: "2026-06-23", // last update to the case data in src/lib/work.ts
} as const;

// Static-route priority follows one stated rule rather than a gut feel:
// proximity to the conversion action (book a scoping call), weighted by how
// much unique content the page carries. /services is what the buyer is
// deciding to buy and /work is the proof hub with 15 children, so both sit
// above /process, /insights and /about.

// Case studies are not equally strong and should not all carry one flat
// weight. Both signals below already exist in the repo rather than being
// judgement calls: how prominently a case is linked internally, and how much
// of the case is actually written.
// Cases featured on the homepage (SelectedWork.tsx) and in the nav mega-menu
// (Nav.tsx, which takes the first three of CASES). Keep this set in sync if
// either component's feature list — or the order of CASES — changes.
const FEATURED = new Set(["apolloe", "nrtur", "aninja-crm", "pma", "agencii"]);

function casePriority(c: CaseStudy): number {
  if (FEATURED.has(c.slug)) return 0.8;
  const longForm = Boolean(c.challenge && c.approach?.length && c.results?.length);
  const quantified = Boolean(c.metrics?.length);
  if (longForm && quantified) return 0.7;
  if (longForm) return 0.6; // no case sits here today; it catches future ones
  return 0.5; // short-form entries (highlights/outcome only, e.g. itboost)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: REVISED.home, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/work`, lastModified: REVISED.work, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services`, lastModified: REVISED.services, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/process`, lastModified: REVISED.process, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/insights`, lastModified: REVISED.insights, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/about`, lastModified: REVISED.about, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/contact`, lastModified: REVISED.contact, changeFrequency: "yearly", priority: 0.8 },
  ];

  const work: MetadataRoute.Sitemap = CASES.map((c) => ({
    url: `${BASE}/work/${c.slug}`,
    lastModified: REVISED.cases,
    changeFrequency: "yearly",
    priority: casePriority(c),
  }));

  const insights: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${BASE}/insights/${a.slug}`,
    lastModified: a.dateISO,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...work, ...insights];
}
