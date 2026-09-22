// Content for the /rescue landing page. Kept in one place so the visible FAQ
// and its FAQPage JSON-LD can't drift (same pattern as src/lib/faq.ts).
import type { Faq } from "@/lib/faq";

export const RESCUE_FOR = [
  { title: "Your agency or freelancer stopped delivering.", body: "Deadlines slip, estimates grow, and replies get slower every week." },
  { title: "The original developer left.", body: "Nobody on the team understands the code well enough to change it safely." },
  { title: "Every release breaks something.", body: "Customers are noticing, and your roadmap has stalled behind firefighting." },
];

export const RESCUE_SIGNS = [
  "Every estimate grows and nobody can explain why.",
  "Customers find bugs before your team does.",
  "Only one developer knows how to deploy.",
  "Releases eat weekends and still break something.",
  "The agency that built it is slow to reply, or gone.",
];

export const RESCUE_STEPS = [
  { n: "01", when: "Week 1", title: "Audit", body: "Get access, produce a clean build, map what runs in production, and read the last 90 days of errors and support tickets." },
  { n: "02", when: "Next", title: "Stabilize", body: "Fix the issues that break most often. Rotate secrets, remove stale access, and confirm backups actually restore." },
  { n: "03", when: "In parallel", title: "Fix the release process", body: "Code review on every change, a staging environment that matches production, CI checks, and one owner per release." },
  { n: "04", when: "Then", title: "Ship again", body: "Features restart on a predictable cadence, with a demo you can click through every week." },
  { n: "05", when: "After", title: "Stay or hand back", body: "Continue as your engineering team, or hand a documented codebase to your own hires." },
];

export const RESCUE_WEEK_ONE = [
  "A written codebase health report: architecture map, top risks, security findings, and test coverage.",
  "A ranked fix list with effort estimates.",
  "Confirmation we can build and deploy from your repo, or a list of what blocks it.",
  "A dated plan for the first 30 days.",
];

export const RESCUE_QUOTES = [
  { quote: "Our app was full of bugs; they took ownership and resolved everything fast, with excellent communication.", name: "John", src: "Upwork" },
  { quote: "More than a five-star team — exceptional communication and understanding. They transformed our application.", name: "Mateen", src: "Upwork" },
  { quote: "They moved our whole architecture to AWS and set up video hosting — our streaming is better than ever.", name: "Anthony", src: "Upwork" },
];

export const RESCUE_FAQS: Faq[] = [
  {
    q: "Will you rewrite everything?",
    a: "Rarely. A rewrite stalls your customers for months while you rebuild features that already work. We replace the parts causing the damage first and keep the rest under test until there's a reason to change it. If the stack genuinely can't be saved, we'll tell you in the audit.",
  },
  {
    q: "The last agency won't hand over access. Can you still help?",
    a: "Yes. We'll help you recover your repositories, domains and cloud accounts, and tell you exactly what's missing before any work starts.",
  },
  {
    q: "What stacks do you take on?",
    a: "Mostly React, Next.js and Angular on the front end; Node.js, Go and Python on the back end; PostgreSQL and Redis; and AWS. If yours is outside that, we'll say so on the first call.",
  },
  {
    q: "How fast will we see a difference?",
    a: "At aNinja, the first stable release shipped 6 weeks after we took over. Every codebase is different, so the week-1 audit ends with a dated plan rather than a promise.",
  },
  {
    q: "Do we own the code?",
    a: "Yes. Everything stays in your repositories and cloud accounts from day one, under work-for-hire terms.",
  },
  {
    q: "Can you work alongside our in-house developers?",
    a: "Yes. We can lead the rescue and hand back, or stay embedded next to your team.",
  },
];
