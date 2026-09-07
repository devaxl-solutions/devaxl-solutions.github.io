import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import SmoothScroll from "@/components/site/SmoothScroll";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { JsonLd } from "@/components/site/JsonLd";
import { Analytics } from "@/components/site/Analytics";
import { graph, organizationSchema, websiteSchema } from "@/lib/schema";

const SITE_DESCRIPTION =
  "Devaxl builds SaaS and AI products for founders and CTOs — MVP builds, embedded development teams, and platform modernization. 21+ products shipped.";
const SITE_TITLE = "SaaS & AI Development Company for Founders — Devaxl";

export const metadata: Metadata = {
  metadataBase: new URL("https://devaxl.com"),
  title: {
    default: SITE_TITLE,
    template: "%s — Devaxl",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Devaxl",
  keywords: [
    "AI development agency",
    "SaaS development company",
    "product engineering",
    "MVP development",
    "RAG",
    "AI agents",
    "LLM features",
    "platform modernization",
    "dedicated development team",
    "software modernization",
    "logistics software development",
  ],
  authors: [{ name: "Devaxl" }],
  // NOTE: no `alternates.canonical` here on purpose. Next.js merges metadata
  // SHALLOWLY — top-level key by top-level key — so a page that omits `alternates`
  // entirely inherits the root layout's, canonical included. That pointed /work,
  // /services, /insights/* and the rest at the homepage. Each content page now
  // declares its own. Note the shallow rule cuts the other way too: a page that
  // sets `alternates` for any reason replaces this whole key, so it must supply
  // its own canonical.
  robots: { index: true, follow: true },
  // No `url` here. Next.js merges metadata shallowly, so a root-level
  // openGraph.url is inherited by every page that doesn't set its own — the
  // same trap the canonical bug fell into, and it made every shared link
  // resolve to the homepage. Next derives og:url from the page when omitted.
  // Only siteName and type here. Setting title/description/url at the root
  // makes every page that omits its own openGraph share as the HOMEPAGE —
  // /work was posting to Slack and LinkedIn as "SaaS & AI Development Company".
  // Omitted, Next derives og:title and og:description from each page's own
  // title and description, which is what we want everywhere.
  openGraph: {
    type: "website",
    siteName: "Devaxl",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* Site-wide entity graph: who Devaxl is, and what property this is.
            Every page-level node references these by @id. */}
        <JsonLd data={graph(organizationSchema(), websiteSchema())} />
      </head>
      <body>
        <SmoothScroll />
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
