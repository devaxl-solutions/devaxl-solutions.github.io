import type { MetadataRoute } from "next";

const BASE = "https://devaxl.com";

export default function robots(): MetadataRoute.Robots {
  return {
    // /api/contact is a POST-only form endpoint — a crawler GET returns 405,
    // so keep it out of the crawl budget. This does not affect the fetch the
    // contact form makes from the browser; robots.txt only advises crawlers.
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
