// FAQ content lives here (not inside the component) so the visible accordion and
// the FAQPage JSON-LD are rendered from the same source. Google requires schema
// to match what's on the page — one array guarantees it can't drift.

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "How does an engagement start?",
    a: "Every engagement opens with a short scoping call, then a fixed-fee discovery: we pressure-test the problem, agree on success metrics, and return a written plan with scope, timeline, and team. You decide to proceed with full information — no open-ended retainers to find out what you are buying.",
  },
  {
    q: "How much does an engagement cost?",
    a: "Discovery is a fixed fee, and it produces a written plan with the full build cost in it before you commit to anything. Builds are quoted as fixed scope for a fixed price; embedded teams and modernization work run as a monthly retainer sized to the squad. We share real numbers on the scoping call — the answer depends on scope, and we would rather quote your project than a range that fits nobody.",
  },
  {
    q: "How long does it take to build an MVP?",
    a: "A focused MVP reaches a production v1 in roughly 8–12 weeks. Modernization and embedded-team work run continuously in two-week increments you can use and review each sprint. We commit to dates in writing and report against them weekly.",
  },
  {
    q: "Who owns the IP and the code?",
    a: "You do — fully. All code, design, and infrastructure are yours from day one, delivered in your repositories and cloud accounts. We work under standard work-for-hire terms with mutual NDAs, and we never reuse client code across engagements.",
  },
  {
    q: "Who actually works on my project?",
    a: "You work with a single senior squad — design, engineering, and product — led by an accountable engagement lead. No layers of account managers, no junior hand-offs. The people on your kickoff call are the people who ship.",
  },
  {
    q: "You're remote — how does that work across time zones?",
    a: "We overlap with your working hours for standups, demos, and anything that needs a real conversation, and we work asynchronously in your tools — your repo, your tracker, your Slack — the rest of the time. Clients get a weekly demo they can click through and a written status against the plan, so progress is visible without needing a meeting to find it.",
  },
  {
    q: "What happens if it isn't working out?",
    a: "Retainers run month to month with a 30-day notice — no long lock-in — and whatever we've built is already in your repositories and cloud accounts, so leaving costs you nothing but the notice period. Discovery is deliberately the first commitment, so you see how we scope, write, and communicate before signing a build.",
  },
  {
    q: "How do you use AI — in the product, or in delivery?",
    a: "Both. We build AI into the products we ship — RAG and semantic search, agents and copilots, LLM pipelines, and the evals and guardrails that keep them accurate, safe, and cost-controlled in production. And we use AI intensively across our own delivery — scoping, code and test generation, and review — so a small senior team ships like a much larger one. AI features go in only where they earn their place, never as a checkbox.",
  },
];
