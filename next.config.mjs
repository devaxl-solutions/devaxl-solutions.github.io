/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Serve the real project screenshots directly from /public (no runtime
  // optimizer / sharp dependency) — fine for a static marketing site.
  images: {
    unoptimized: true,
  },
  // /insights/modernizing-a-legacy-monolith was a published, indexed URL until
  // it was replaced by the build-vs-buy article. Point it at the article that
  // took its slot rather than serving a 404 to anything that already linked it.
  // NOTE: Next.js redirects need a Node server. On a static export or GitHub
  // Pages this is inert — add the rule at the CDN or host level instead.
  async redirects() {
    return [
      {
        source: "/insights/modernizing-a-legacy-monolith",
        destination: "/insights/buy-the-software-unless-configuring-costs-more",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
