"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  /** decimals to render, e.g. 98 -> "98", 99.98 -> "99.98" */
  decimals?: number;
  className?: string;
};

/**
 * Animated number counter. Counts from 0 -> value when it scrolls into
 * view (transform-free; only textContent changes). Renders the final value
 * immediately when reduced motion is on or the number is already on screen.
 */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const format = (n: number) =>
      `${prefix}${n.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}${suffix}`;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      el.textContent = format(value);
      return;
    }

    // Already on screen at mount (e.g. just above the fold): keep the final
    // value the server rendered. Resetting it to 0 here is what made the stats
    // read "0+" and "0 five-star" in screenshots and on slow devices.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.textContent = format(value);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    el.textContent = format(0);
    const counter = { n: 0 };

    const tween = gsap.to(counter, {
      n: value,
      duration: 1.4,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = format(counter.n);
      },
      scrollTrigger: {
        trigger: el,
        // Start as soon as the number enters the viewport, so the 0 it was
        // reset to is never sitting on screen waiting for a trigger.
        start: "top bottom",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value, prefix, suffix, decimals]);

  // Tabular figures prevent width jitter while counting.
  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefix}
      {value.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
