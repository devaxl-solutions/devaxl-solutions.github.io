"use client";

import { useEffect } from "react";
import Script from "next/script";

/**
 * Analytics + conversion tracking.
 *
 * The site had no measurement of any kind, which meant no conversion rate, no
 * traffic source, and no way to tell whether any marketing change worked. This
 * is the smallest thing that fixes that.
 *
 * Provider-agnostic and fully env-gated — with no env vars set it renders
 * nothing and costs nothing, so local dev and previews stay clean.
 *
 *   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=devaxl.com   # privacy-first, no cookie banner
 *   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX            # GA4, if you need Google Ads later
 *
 * Set either, or both. Plausible is the recommended default for this site: it
 * needs no consent banner in the EU/UK, which matters because a cookie prompt
 * on a premium studio homepage costs conversions.
 *
 * CONVERSION EVENTS
 * Any element carrying `data-cta="<name>"` is tracked on click — no per-component
 * wiring, no server components forced into client components. The tracked CTAs
 * are the ones that actually represent pipeline:
 *   book-call-hero · book-call-nav · book-call-final · book-call-engagement
 *   contact-form-submit · email-click · phone-click
 */

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Record<string, string> }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fire a conversion event to whichever providers are configured. */
export function trackEvent(name: string, props: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  window.plausible?.(name, Object.keys(props).length ? { props } : undefined);
  window.gtag?.("event", name, props);
}

export function Analytics() {
  // One delegated listener for every [data-cta] on the page, present or future.
  useEffect(() => {
    if (!PLAUSIBLE_DOMAIN && !GA_ID) return;

    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cta]");
      if (!el) return;
      trackEvent(el.dataset.cta!, { location: window.location.pathname });
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return (
    <>
      {PLAUSIBLE_DOMAIN ? (
        <Script
          defer
          data-domain={PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      ) : null}

      {GA_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      ) : null}
    </>
  );
}
