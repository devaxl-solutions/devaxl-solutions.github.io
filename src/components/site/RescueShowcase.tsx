"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { Check, GitPullRequest } from "lucide-react";

/**
 * Hero visual for the rescue positioning: a code-review diff that replaces the
 * kind of code a founder inherits (swallowed errors, "fix later" timers) with
 * code that retries and logs, plus a release-checks card showing the pipeline
 * passing. Illustrative only — not a screenshot of client code. Same pointer
 * tilt and idle float as the previous showcase; reduced motion freezes both.
 */

type Line = { kind: "del" | "add" | "ctx"; text: string };

const DIFF: Line[] = [
  { kind: "ctx", text: "export async function syncInvoices(account) {" },
  { kind: "del", text: "  // TODO: fix later (2022)" },
  { kind: "del", text: "  setTimeout(() => retrySync(account), 5000)" },
  { kind: "del", text: "  try { await push(account) } catch (e) {}" },
  { kind: "add", text: "  await queue.enqueue(syncJob(account), {" },
  { kind: "add", text: "    retries: 3, backoff: \"exponential\"," },
  { kind: "add", text: "  })" },
  { kind: "add", text: "  logger.info(\"invoice sync queued\", { account })" },
  { kind: "ctx", text: "}" },
];

const CHECKS = ["Build", "Unit tests", "Staging matches prod", "Review approved"];

const lineStyle: Record<Line["kind"], string> = {
  del: "bg-danger-quiet text-danger",
  add: "bg-success-quiet text-success",
  ctx: "text-secondary",
};

const marker: Record<Line["kind"], string> = { del: "-", add: "+", ctx: " " };

export function RescueShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 120, damping: 18, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 120, damping: 18, mass: 0.4 });

  const diffRotY = useTransform(sx, [-0.5, 0.5], [7, -7]);
  const diffRotX = useTransform(sy, [-0.5, 0.5], [-5, 5]);
  const diffX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const checkRotY = useTransform(sx, [-0.5, 0.5], [12, -12]);
  const checkRotX = useTransform(sy, [-0.5, 0.5], [-8, 8]);
  const checkX = useTransform(sx, [-0.5, 0.5], [22, -22]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="showcase relative h-[476px] max-md:h-[336px] max-md:origin-top-left max-md:scale-[0.7]"
      style={{ perspective: 1200 }}
      aria-hidden="true"
    >
      {/* Code-review diff */}
      <div className={`absolute left-[-10px] top-6 w-[520px] ${reduce ? "" : "floaty-a"}`}>
        <motion.div
          className="mock w-[520px]"
          style={{
            rotateZ: -3,
            rotateX: diffRotX,
            rotateY: diffRotY,
            x: diffX,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="winbar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="addr !text-[10px]">billing/sync.ts &middot; stabilize-release</span>
          </div>
          <div className="py-3 font-mono text-[12.5px] leading-[1.85]">
            {DIFF.map((l, i) => (
              <div key={i} className={`whitespace-pre px-4 ${lineStyle[l.kind]}`}>
                <span className="inline-block w-4 opacity-70">{marker[l.kind]}</span>
                {l.text}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-faint px-4 py-3 font-mono text-[11px] text-secondary">
            <span className="flex items-center gap-2">
              <GitPullRequest className="h-3.5 w-3.5" /> main &larr; stabilize-release
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-success-quiet px-2.5 py-1 text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success" /> All checks passing
            </span>
          </div>
        </motion.div>
      </div>

      {/* Release checks */}
      <div className={`absolute bottom-[-28px] right-0 z-[2] h-[214px] w-[236px] max-md:hidden ${reduce ? "" : "floaty-b"}`}>
        <motion.div
          className="mock w-[236px] p-4"
          style={{
            rotateZ: 4,
            rotateX: checkRotX,
            rotateY: checkRotY,
            x: checkX,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="mb-3 text-[12px] font-semibold text-primary">Release checks</div>
          <ul className="space-y-2.5">
            {CHECKS.map((c) => (
              <li key={c} className="flex items-center gap-2.5 text-[12px] text-secondary">
                <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-success-quiet text-success">
                  <Check className="h-3 w-3" />
                </span>
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-md bg-accent-quiet px-3 py-2 text-[11.5px] font-medium text-accent">
            Ready to ship
          </div>
        </motion.div>
      </div>
    </div>
  );
}
