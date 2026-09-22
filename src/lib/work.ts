// Real Devaxl projects. Long-form case studies sourced from the official
// Devaxl case-study set. Metrics quoted here come from those case studies —
// not invented. Structural fields (slug, categories, thumbnail) are curated.

export type CaseStudy = {
  slug: string;
  name: string;
  categories: string[]; // real tags — also used as filter keys + chips
  industry?: string; // vertical, used to link related cases (see getRelatedCase)
  category: string; // display string, e.g. "Branding · Web Development"
  oneLiner: string;
  overview: string;
  thumbnail?: string; // /projects/*.png — omit to render the branded poster
  role?: string;
  collaboration?: string;
  link?: { label: string; href: string };
  stack?: string[];
  highlights?: string[];
  outcome?: string;
  quote?: string;
  rating?: string;
  metrics?: { value: string; label: string }[];
  challenge?: string;
  approach?: { title: string; body: string }[];
  results?: { title: string; body: string }[];
  verdict?: string;
};

export const WORK_FILTERS = [
  "All",
  "SaaS",
  "AI",
  "Web Development",
  "Web Design",
  "Branding",
  "Security",
  "Mobile App Development",
] as const;

export const CASES: CaseStudy[] = [
  {
    "slug": "apolloe",
    "industry": "Logistics",
    "name": "Apolloe",
    "categories": [
      "SaaS",
      "Web Development"
    ],
    "category": "SaaS · Web Development",
    "oneLiner": "A dispatcher's decades of trucking expertise turned into a production-ready TMS SaaS that earns recurring revenue.",
    "overview": "Devaxl partnered with Apollo-e to turn a founder's hands-on logistics expertise into a market-ready Transportation Management System. We guided him through the full product lifecycle, from concept and architecture to deployment and go-to-market, building a revenue-generating SaaS for the trucking industry.",
    "collaboration": "Apollo-e (TMS SaaS for trucking)",
    "link": {
      "label": "apolloe.com",
      "href": "https://apolloe.com"
    },
    "challenge": "The founder had deep, battle-tested dispatching knowledge and understood trucking's pain points intimately: fragmented systems, manual dispatch, no real-time tracking, and zero data-driven decisions. But knowing the problem isn't the same as building the solution. He lacked the technical infrastructure and product expertise to execute a complex, scalable SaaS, and needed a partner who could translate industry insight into enterprise-grade architecture without diluting his vision.",
    "approach": [
      {
        "title": "Discovery & Product Architecture",
        "body": "We converted the founder's industry knowledge into a technical blueprint, architecting what Apollo-e's actual customers needed rather than assumptions. We mapped dispatcher workflows, real-time tracking and communication requirements, scalability assumptions, and enterprise security standards into a scalable SaaS architecture built for growth from day one."
      },
      {
        "title": "Full-Cycle Product Development",
        "body": "We built Apollo-e from the ground up with modern product standards: intuitive dispatcher interfaces honoring the founder's field UX instincts, real-time tracking, scalable backend infrastructure, and enterprise data security. An API-first architecture enabled future integrations while the founder stayed deeply involved to keep the product true to his vision."
      },
      {
        "title": "Deployment & Go-To-Market Support",
        "body": "Beyond production deployment, we supported launch and marketing strategy. We delivered zero-downtime production deployment, customer onboarding workflows, marketing support to reach trucking dispatchers, and launch coordination to ensure smooth early adoption."
      }
    ],
    "results": [
      {
        "title": "Successful Product Launch",
        "body": "Apollo-e safely deployed to production and immediately began acquiring early adopters, resonating with dispatchers because it was built by someone who knew their workflow intimately."
      },
      {
        "title": "Recurring Revenue & Career Freedom",
        "body": "The TMS generated sustainable recurring revenue within months, letting the founder step away from active dispatching to run a SaaS business full-time."
      },
      {
        "title": "Enterprise-Grade Foundation",
        "body": "Apollo-e was a scalable, production-ready product, not a quick MVP, so the infrastructure was ready as the customer base grew with no technical debt to unwind."
      },
      {
        "title": "Market Validation",
        "body": "Early customers validated the founder's thesis, with word-of-mouth adoption and an expanding user base demonstrating genuine product-market fit."
      }
    ],
    "verdict": "Apollo-e shows what's possible when deep industry expertise meets rigorous technical execution: a thriving business generating real revenue, a founder freed from operational work, and a product built to scale. The founder brought the vision and credibility; Devaxl brought the discipline and modern infrastructure to make it real."
  },
  {
    "slug": "aninja-crm",
    "industry": "Sales & CRM",
    "name": "aNinja AI",
    "categories": [
      "SaaS",
      "Web Development"
    ],
    "category": "SaaS · Web Development",
    "oneLiner": "We rescued aNinja's stalled CRM platform from a broken dev partnership, restoring stability and shipping features that fueled real user growth.",
    "overview": "After aNinja's growth stalled under a failed development partnership, Devaxl stepped in to salvage their CRM platform, stabilizing the codebase and accelerating feature delivery to turn a stalled product into a reliable, high-performing SaaS.",
    "thumbnail": "/projects/aninjaCrm.png",
    "collaboration": "aNinja CRM",
    "link": {
      "label": "app.aninja.com",
      "href": "https://app.aninja.com/"
    },
    "challenge": "aNinja had a strong vision for a specialized CRM for service-oriented businesses, but execution was broken. Their previous development partner left missed deadlines, incomplete features, and code quality issues that were actively hurting the product. Users were frustrated, growth had stalled, and trust in the engineering team had evaporated. The core problem was an engineering capability gap, not the product idea.",
    "approach": [
      {
        "title": "Codebase Audit & Stabilization",
        "body": "We ran a comprehensive audit to surface critical bugs, code quality problems, technical debt, and performance bottlenecks. Then we systematically refactored and addressed these issues, establishing quality standards that would stick. You can't accelerate on a shaky foundation."
      },
      {
        "title": "Process Overhaul & Timeline Discipline",
        "body": "We implemented a strict, milestone-driven development process with realistic sprint planning, deadline accountability, code review gates, and regular stakeholder updates. Agile workflows allowed course corrections without derailing timelines. The goal wasn't moving slower, but moving reliably so commitments were consistently met."
      },
      {
        "title": "Feature Expansion & Industry-Specific Development",
        "body": "With a stable platform and proven delivery process, we accelerated features for high-demand use cases, including social media management integrations and CRM features tailored to service businesses. We also shipped API enhancements and scalability improvements to handle growing user loads. Every release reinforced the platform's reliability."
      }
    ],
    "results": [
      {
        "title": "Significant Revenue Growth",
        "body": "With a stable, improving product and a reliable engineering team, aNinja could confidently acquire and retain customers, translating directly into user growth and recurring revenue expansion."
      },
      {
        "title": "Diverse Industry Adoption",
        "body": "aNinja's CRM is now active across multiple sectors, from service businesses to social media agencies, with a prominent social media management company relying on it for daily operations."
      },
      {
        "title": "Restored Engineering Credibility",
        "body": "By delivering on every commitment, we transformed aNinja's engineering reputation from a liability into an asset, a team that could be counted on."
      },
      {
        "title": "Scalable, Maintainable Codebase",
        "body": "The platform is no longer held back by technical debt, with an engineering foundation that supports continued growth without constant firefighting or rewrites."
      }
    ],
    "verdict": "aNinja's story is one of redemption through engineering discipline. By combining rigorous code quality, predictable processes, and focused feature development, we transformed a stalled SaaS into a thriving one, proving the biggest unlock is often an engineering partner you can trust to deliver."
  },
  {
    "slug": "agencii",
    "name": "Agencii",
    "categories": [
      "AI",
      "SaaS"
    ],
    "category": "AI · SaaS",
    "oneLiner": "Agencii's coordinated AI agent swarm automated a digital agency's entire proposal pipeline, turning week-long deliverables into a single business day.",
    "overview": "A mid-sized digital agency was drowning in manual work for every client pitch, with deliverables that should take a day stretching into a week. By integrating Agencii's AI agent swarm, the team automated its full pipeline from research to presentation to visuals to video, all coordinated automatically.",
    "thumbnail": "/projects/agencii.png",
    "collaboration": "Built on Agencii's AI agent swarm",
    "link": {
      "label": "agencii.ai",
      "href": "https://agencii.ai/"
    },
    "challenge": "The agency's pitch process was sequential, manual, and disconnected: research lived in one tool, presentation design in another, and video in a third, with no automation tying them together.",
    "approach": [
      {
        "title": "Unified Agent Orchestration",
        "body": "An Orchestrator Agent takes the client brief, breaks it into subtasks like research, TAM modeling, deck building, social assets, and explainer video, then manages dependencies and sequencing automatically. It retries on failure so human intervention isn't constant."
      },
      {
        "title": "Specialized Agents Per Deliverable",
        "body": "A Deep Research Agent runs live web research with sourced, auditable TAM/SAM models in hours. The Slides, Image, Video, and Docs Agents then turn those findings into branded decks, social mockups, explainer videos, and executive summaries, each in minutes."
      },
      {
        "title": "Phased Rollout & Refinement",
        "body": "We integrated Agencii and wired the outputs together, from research to deck to visuals to video."
      }
    ],
    "results": [
      {
        "title": "Proposals in a Day, Not a Week",
        "body": "A full proposal package of research, slides, visuals, video, and docs now takes a morning of setup and a few hours of orchestration instead of a full week."
      }
    ],
    "verdict": "The agency didn't replace its strategists, it multiplied them: coordinated AI agents now handle the execution, so the bottleneck moved from production to strategy. Automate the workflow, not individual tasks, and let agents give people back their time."
  },
  {
    "slug": "nrtur",
    "industry": "Sales & CRM",
    "name": "Nrtur",
    "categories": [
      "SaaS",
      "Web Development"
    ],
    "category": "SaaS · Web Development",
    "oneLiner": "A lightweight CRM for small B2B service teams, with texting, email, calls and follow-up in one inbox.",
    "overview": "We built Nrtur as a lightweight CRM sized for small, fast-moving teams that find enterprise CRMs too heavy: a pipeline that matches how small teams sell, two-way email sync, and follow-up automation a founder can set up without a consultant.",
    "thumbnail": "/projects/nrtur.png",
    "collaboration": "A four-person creative agency, name withheld",
    "link": {
      "label": "nrtur.io",
      "href": "https://www.nrtur.io/"
    },
    "approach": [
      {
        "title": "Pipeline & Email That Match Reality",
        "body": "A kanban-style pipeline with drag-and-drop cards, status labels, and deal scoring matched exactly how the team sells. Two-way Gmail and Outlook sync automatically attached every client thread to the right contact and deal."
      },
      {
        "title": "Automations That Stick",
        "body": "A visual workflow builder let their founder set up follow-up sequences without a consultant: proposal reminders, task assignments on stage changes, and email templates. It freed up mental overhead that had been eating her day."
      }
    ],
    "verdict": "Nrtur is about removing friction rather than adding features: contact management that works, a pipeline that matches reality, automatic email sync, and time-saving automations sized for a small team."
  },
  {
    "slug": "pma",
    "industry": "Community & Media",
    "name": "Product Marketing Alliance",
    "categories": [
      "SaaS",
      "Web Development"
    ],
    "category": "SaaS · Web Development",
    "oneLiner": "The SaaS platform behind Product Marketing Alliance, a professional community of 300,000+ product marketers.",
    "overview": "Product Marketing Alliance partnered with Devaxl to rebuild its community platform into a unified, scalable SaaS system. We architected and built the full stack powering certifications, memberships, events, and 24/7 engagement for PMA's global community.",
    "thumbnail": "/projects/pma.png",
    "collaboration": "Product Marketing Alliance (PMA)",
    "link": {
      "label": "productmarketingalliance.com",
      "href": "https://www.productmarketingalliance.com/"
    },
    "challenge": "PMA had grown to 300,000+ product marketers, but rapid expansion exposed critical infrastructure gaps. Certifications, membership tiers, events, and engagement were spread across disconnected systems and manual workarounds. The technical foundation simply couldn't scale with demand, and the team was spending more time managing infrastructure than growing the community.",
    "approach": [
      {
        "title": "Unified Membership Platform",
        "body": "We designed a modular SaaS architecture consolidating PMA's fragmented systems into one platform. It handled tiered membership (Insider, Pro, Pro+, Exec+), payment processing, automated provisioning, a certification engine, and a real-time analytics dashboard."
      },
      {
        "title": "Events & Community Infrastructure",
        "body": "We built the connective tissue for PMA's events, meetups, and mentorship."
      },
      {
        "title": "Growth & Monetization Systems",
        "body": "With the platform solid, we built systems to unlock revenue. Multi-tier subscriptions with automated billing and renewals, integration with the PMA jobs board, a partner marketplace for sponsored content, attribution tracking, and customer success tools all let PMA confidently expand its business model."
      }
    ],
    "results": [
      {
        "title": "A Platform Built for Scale",
        "body": "The platform serves PMA's global membership across Asia, Europe, and North America and holds up during growth surges."
      },
      {
        "title": "Sustainable Membership Revenue",
        "body": "The unified billing system handles recurring subscriptions across all four membership tiers, powering reliable recurring revenue."
      }
    ],
    "verdict": "Product Marketing Alliance had the community; we built the foundation sturdy enough to support it and flexible enough to evolve with member needs."
  },
  {
    "slug": "securepoint360",
    "industry": "IT & Security",
    "name": "SecurePoint 360",
    "categories": [
      "Security",
      "SaaS"
    ],
    "category": "Security · SaaS",
    "oneLiner": "A Series A SaaS reached SOC 2 Type II certification and unlocked its largest enterprise deal without hiring a full-time CISO.",
    "overview": "A Series A SaaS company needed SOC 2 Type II certification to close its largest enterprise prospect. With no security team, it partnered with SecurePoint 360, achieved certification, landed the deal and built a lasting security program.",
    "thumbnail": "/projects/securepoint360.png",
    "collaboration": "SecurePoint 360 Virtual CISO partnership with a Series A B2B SaaS company",
    "link": {
      "label": "securepoint360.com",
      "href": "https://www.securepoint360.com/"
    },
    "challenge": "The company's largest pipeline opportunity hinged on a non-negotiable SOC 2 Type II requirement, but it had no security infrastructure, no compliance framework, and no in-house expertise in security operations like audit readiness and evidence collection.",
    "approach": [
      {
        "title": "Audit Readiness Assessment",
        "body": "SecurePoint 360 assessed the company's posture across technical controls, organizational controls, and evidence/documentation, mapping every gap against SOC 2 requirements. The output was a prioritized remediation roadmap leading with high-impact quick wins before tackling complex technical work."
      },
      {
        "title": "Gap Remediation & Policy Development",
        "body": "Working in parallel with the internal team, they drafted security policies and procedures from SOC 2 templates and implemented technical controls: automated logging and monitoring, access request workflows, vulnerability scanning, and incident response. All employees completed practical security training, and evidence repositories were built so controls could be proven to auditors."
      },
      {
        "title": "Audit Execution & Ongoing Security",
        "body": "SecurePoint 360 coordinated with the external auditor, organized evidence for fast verification, and joined auditor calls to translate technical architecture into audit-friendly language. After rapidly clearing a few minor first-time findings, the company received SOC 2 Type II certification, then transitioned to an ongoing Virtual CISO model with monthly reviews and continuous vulnerability management."
      }
    ],
    "results": [
      {
        "title": "Enterprise Deal Closed",
        "body": "With SOC 2 Type II certification in hand, the prospect's risk committee approved the contract, the company's largest deal to date, opening doors to other enterprise opportunities previously blocked by compliance."
      },
      {
        "title": "Enterprise Sales Acceleration",
        "body": "SOC 2 became a competitive advantage, letting sales confidently tell prospects the company is audit-ready and shifting pipeline momentum."
      }
    ],
    "verdict": "Enterprise expansion demands security maturity most companies haven't built yet. SecurePoint 360 prioritized relentlessly and stayed involved through audit execution, closing the deal and leaving behind security practices that compound over time."
  },
  {
    "slug": "itboost",
    "industry": "IT & Security",
    "name": "ITBoost",
    "categories": [
      "SaaS",
      "AI",
      "Web Development"
    ],
    "category": "SaaS · AI · Web Development",
    "oneLiner": "Backend lead on an enterprise IT-documentation SaaS — scalable systems, secure auth, and high-load API integrations.",
    "overview": "As Backend Project Lead for ITBoost — an MSP documentation SaaS by ConnectWise — built scalable systems with Node.js, JWT, Redis, Async, and Passport, integrated with .NET services and third-party APIs under high load. Also contributed across the frontend (React, Redux, Bootstrap, Angular), with SaaS and AI automation and integrations to n8n, Make.com, Zapier, and GoHighLevel.",
    "thumbnail": "/projects/itboost.png",
    "role": "Full-Stack Engineer & Backend Project Lead",
    "collaboration": "An MSP documentation SaaS by ConnectWise.",
    "link": {
      "label": "itboost.com",
      "href": "https://www.itboost.com"
    },
    "stack": [
      "Node.js",
      "JWT",
      "Redis",
      "Passport",
      "Async",
      ".NET integrations",
      "React",
      "Redux",
      "Angular",
      "Bootstrap",
      "RAG",
      "Vector databases",
      "n8n",
      "Make.com",
      "Zapier",
      "GoHighLevel (GHL)"
    ],
    "highlights": [
      "Designed a robust backend with Node.js, JWT auth, Redis caching, async processing, and Passport authorization.",
      "Integrated .NET services and multiple third-party APIs to extend functionality under high load.",
      "Contributed to the frontend with React, Redux, Bootstrap, and Angular for a seamless, responsive SaaS experience.",
      "Specialized in SaaS and AI automation, RAG, vector databases, and workflow automation (n8n, Make.com, Zapier).",
      "Implemented secure authentication, caching strategies, and asynchronous workflows.",
      "Delivered enterprise-grade performance, reliability, and security at scale."
    ],
    "outcome": "A feature-rich, scalable, and secure IT-documentation SaaS used by IT professionals worldwide — improving documentation workflows and positioning ITBoost as a reliable, high-performance product within the ConnectWise ecosystem.",
    "quote": "He got good skills and is also an intelligent person. Will hire him for my next projects. Job well done!",
    "rating": "4.9"
  },
  {
    "slug": "brb",
    "industry": "Marketplace",
    "name": "BeautyRightBack (BRB)",
    "categories": [
      "AI",
      "SaaS",
      "Web Development"
    ],
    "category": "AI · SaaS · Web Development",
    "oneLiner": "We built an AI beauty discovery platform that turns a very large product catalog into personalized recommendations customers actually trust.",
    "overview": "Devaxl replaced BeautyRightBack's one-size-fits-all recommendation engine with an AI-powered discovery platform combining visual analysis, preference learning, and real-time inventory matching. We turned a transactional beauty retailer into a personalized beauty consultant.",
    "collaboration": "BeautyRightBack (BRB)",
    "role": "AI recommendation engine, computer vision, and full-stack platform build",
    "challenge": "Beauty is the ultimate personalization problem - skin tone, type, undertone, concerns, allergies, and budget make popularity-based recommendations useless. They needed to become a personal beauty consultant, not a product catalog.",
    "approach": [
      {
        "title": "Visual & Preference Learning Foundation",
        "body": "We built computer vision that analyzes a customer photo for skin tone, undertone, texture, and concerns - no manual forms. Our preference graph tracks every view, save, purchase, and return, and we matched recommendations to live inventory with transparent confidence scores."
      },
      {
        "title": "Personalized Discovery Experience",
        "body": "We added virtual try-on, ingredient and allergen matching, brand and price alternatives, and dynamically generated smart collections to give customers confidence to buy."
      },
      {
        "title": "Post-Purchase Engagement & Loyalty",
        "body": "We shipped replenishment intelligence that reminds customers before products run out, plus complementary recommendations pairing foundation with matching concealer, primer, and setting spray. The seasonal swaps and personalized loyalty offers we built turn one-time buyers into repeat customers."
      }
    ],
    "results": [],
    "verdict": "BeautyRightBack stopped treating customers as browsers and started treating them as people with complex preferences it actually understood, becoming a trusted advisor at scale."
  },
  {
    "slug": "authority-alert",
    "industry": "Marketplace",
    "name": "Authority Alert",
    "categories": [
      "SaaS",
      "AI",
      "Web Development"
    ],
    "category": "SaaS · AI · Web Development",
    "oneLiner": "We built a transparent, ranked marketplace that verifies coaches, aggregates real feedback, and tracks outcomes so clients can hire with confidence.",
    "overview": "Devaxl built Authority Alert, a transparent, ranked marketplace for coaches with verified credentials, real feedback, and outcome tracking. It brought standards to a fragmented industry, connecting clients with vetted coaches across every specialty.",
    "collaboration": "Authority Alert coaching marketplace",
    "role": "Marketplace architecture, verification and matching systems, and full-stack build",
    "challenge": "The coaching industry faced a credibility crisis: anyone could call themselves a coach, with no standards, no verification, and no way to know if one was legitimate or effective. Good coaches stayed hidden while mediocre ones thrived through aggressive marketing, scattered across LinkedIn, Facebook groups, and personal networks.",
    "approach": [
      {
        "title": "Credibility Infrastructure",
        "body": "We built trust from the ground up with third-party verified credentials, a structured feedback system rating coaches on specific dimensions, and outcome tracking against measurable goals set with clients. Our transparent ranking algorithm and dispute resolution created real accountability instead of pay-to-play visibility."
      },
      {
        "title": "Discovery & Intelligent Matching",
        "body": "We made finding the right coach instant with advanced filtering by specialty, experience, price, and certifications. Our machine-learning match scoring suggests coaches most likely to help each client succeed, backed by transparent pricing, low-friction trials, and dedicated industry-specific marketplaces."
      },
      {
        "title": "Coach Growth & Success Tools",
        "body": "We turned the platform into a business-building engine with marketing visibility, integrated booking and secure payments, and client management for sessions, goals, and feedback. Coaches could document real client wins and collaborate with peers, replacing slow word-of-mouth with consistent client flow."
      },
      {
        "title": "Network Effects & Scale",
        "body": "As more coaches and clients joined, the platform grew through compounding network effects. A specialization flywheel grew niche markets, and the anonymized data we collected on what coaching actually works built a defensible competitive moat."
      }
    ],
    "results": [
      {
        "title": "Coaches Joined the Platform",
        "body": "From boutique practitioners to established names, coaches seeking credibility, visibility, and scale listed on Authority Alert."
      },
      {
        "title": "Clients Matched with Coaches",
        "body": "Clients found coaches through the transparent, ranked discovery we built, and got better at their craft, business, health, or life."
      }
    ],
    "verdict": "Authority Alert proved that transparency and accountability create thriving markets. By removing information asymmetry with verified credentials, real feedback, and actual outcomes, it gave the coaching industry standards, made invisible coaches visible, and helped clients hire with confidence."
  },
  {
    "slug": "carrier-network",
    "industry": "Logistics",
    "name": "Carrier Network",
    "categories": [
      "SaaS",
      "Web Development",
      "AI"
    ],
    "category": "SaaS · Web Development · AI",
    "oneLiner": "We built a unified carrier intelligence dashboard that turns scattered trucking data into one source of truth for dispatch.",
    "overview": "Devaxl built Carrier Network, consolidating fragmented carrier data (profiles, performance metrics, compliance records, and communication history) into one dashboard for freight brokers and logistics companies, so carrier selection runs on data instead of memory.",
    "thumbnail": "/projects/careerNetwork.png",
    "collaboration": "Carrier Network carrier intelligence platform",
    "role": "Data integration architecture, full-stack build, and recommendation engine development",
    "challenge": "The trucking industry runs on 1990s infrastructure, with carrier data scattered across spreadsheets, emails, contact apps, and government sites—no single source of truth on reliability, cost, capacity, or compliance. Loads went to unreliable carriers, premium rates were paid for mediocre service, and compliance risks went unmanaged. The data existed from every interaction; it was just trapped in disconnected systems.",
    "approach": [
      {
        "title": "Data Consolidation & Unification",
        "body": "We pulled carrier data from every source into one complete profile per carrier—contacts, equipment, capacity, rates, certifications, and insurance. We integrated load history, safety ratings, customer feedback, cost performance, and reliability metrics, plus government DOT compliance data and full communication logs."
      },
      {
        "title": "Intelligent Dashboard & Decision Support",
        "body": "We turned raw data into actionable intelligence with a recommendation engine that surfaces the best carriers per load by service area, equipment, reliability, cost, and compliance."
      },
      {
        "title": "Network Effects & Insights",
        "body": "As adoption grew, we used anonymized data to power market intelligence on pricing and capacity trends, benchmarking against industry averages, and predictive insights on no-show risk and capacity limits. We built proactive flagging so carriers approaching compliance violations were caught before they happened."
      }
    ],
    "results": [
      {
        "title": "Compliance & Relationship Visibility",
        "body": "The compliance monitoring we built catches issues immediately, eliminating accidental bookings of non-compliant carriers, while preferred carriers earn steady, data-backed work instead of relationship luck."
      }
    ],
    "verdict": "Carrier Network shows what's possible when transparency and data replace chaos and tribal knowledge—shifting an entire industry from guesswork to systematic, performance-based carrier management. For logistics companies it meant better selection, faster dispatch, and lower costs; for carriers, transparent opportunities to earn more by performing better."
  },
  {
    "slug": "trucking-guru",
    "industry": "Logistics",
    "name": "Trucking Guru",
    "categories": [
      "Branding",
      "Web Development"
    ],
    "category": "Branding · Web Development",
    "oneLiner": "We built the brand system and platform for an education business teaching trucking dispatchers and truck owners to think like entrepreneurs and build thriving businesses.",
    "overview": "Trucking Guru is a personal brand and education platform teaching trucking professionals the business fundamentals their industry never taught them. The founder brought the curriculum and the audience; Devaxl built the brand system, website, and learning platform that carry it.",
    "thumbnail": "/projects/truckingGuru.png",
    "collaboration": "Trucking Guru",
    "role": "Brand identity, website, and the learning and community platform behind the programs",
    "challenge": "The trucking industry is full of capable people making poor business decisions. Business schools train corporate MBAs, but nobody teaches business fundamentals to trucking professionals, so dispatchers stay employees and truck owners stay small.",
    "approach": [
      {
        "title": "Personal Brand & Credibility",
        "body": "The founder built deep industry credibility on a proven track record, backing taught strategies with real P&L statements. We turned it into a brand. Free, practical content across social media, YouTube, and email grew an audience, while forums and groups replaced isolation with peer support and authentic, transparent storytelling."
      },
      {
        "title": "Structured Education & Programs",
        "body": "Trucking Guru converted the audience into paying students through Dispatcher Bootcamp and Truck Owner Mastery, covering load economics, broker relationships, pricing, financial management, and scaling. Advanced cohorts added group coaching and accountability, with student results meticulously documented as case studies. We built the learning platform that delivers the programs."
      },
      {
        "title": "Community & Network Effects",
        "body": "We built the platform for a self-sustaining ecosystem where students partnered, referred, and collaborated across the country. We shipped a job board, and financing options and service-provider partnerships completed the resource network around it, while celebrated alumni success stories drove word-of-mouth enrollment without expensive marketing."
      },
      {
        "title": "Scale & Industry Impact",
        "body": "It ran on the LMS and community platforms we built, alongside financing partnerships, and earned media features and conference speaking engagements."
      }
    ],
    "results": [],
    "verdict": "Trucking Guru proves that teaching people to make better business decisions changes what they can build. The founder brought the curriculum and the credibility; we built the brand, the site, and the platform that carries it to trucking professionals."
  },
  {
    "slug": "chat-center",
    "industry": "Logistics",
    "name": "Chat Center",
    "categories": [
      "SaaS",
      "Mobile App Development",
      "Web Development"
    ],
    "category": "SaaS · Mobile App Development · Web Development",
    "oneLiner": "We built a trucking-native communication platform that unifies driver-dispatcher coordination into one real-time, fully documented app.",
    "overview": "Devaxl built Chat Center, a unified communication and data platform made specifically for trucking that centralizes all driver-dispatcher interaction in one app. It combines real-time messaging, task tracking, load coordination, and complete data visibility to replace fragmented, unreliable channels.",
    "thumbnail": "/projects/chatCenter.png",
    "collaboration": "Chat Center (trucking communication platform)",
    "role": "Product design, mobile and web engineering, and third-party systems integration",
    "challenge": "Driver-dispatcher communication was fragmented across phone calls, texts, WhatsApp, email, and CB radio, with critical updates getting lost and no record of conversations. The result was constant miscommunication delays, slow assignments, data loss, and frustrated customers. Most trucking companies accepted this chaos as simply how the industry worked.",
    "approach": [
      {
        "title": "Unified Messaging & Real-Time Notifications",
        "body": "We consolidated all communication into a single hub with instant messaging, read receipts, and delivery confirmation, ending the fragmented mix of calls, texts, and WhatsApp. We built structured task assignments that carry full load details accepted or declined with one tap, plus live status indicators and priority messaging that keep dispatchers aware and urgent updates seen immediately."
      },
      {
        "title": "Data & Coordination Intelligence",
        "body": "We turned every message, assignment, and update into logged, actionable data with complete communication history attached to each load record. We added driver performance tracking and route-and-availability optimization to suggest the right driver for the right load, and put document, compliance, and safety logs inside the platform for built-in accountability."
      },
      {
        "title": "Integration & Workflow Automation",
        "body": "We connected Chat Center to TMS, GPS/telematics, customer-facing tracking, and payment systems so load data, location, and ETAs sync automatically with no manual entry. We built automated alerts that flag issues like approaching service limits, low fuel, delivery delays, or reported damage so dispatchers can intervene early."
      },
      {
        "title": "Scale & Industry Adoption",
        "body": "Based on user feedback, we added group messaging, voice/video calls, and push notifications alongside a mobile-first design, offline sync, and multi-language support for a diverse workforce. Better coordination made drivers feel respected and valued, turning the platform into both a retention tool and a new industry standard."
      }
    ],
    "results": [],
    "verdict": "Chat Center proves that communication which is clear, real-time, and documented transforms operational efficiency. By making driver-dispatcher coordination instant, visible, and recorded, it became the backbone of operational success for an industry where coordination is everything."
  },
  {
    "slug": "driver-app",
    "industry": "Logistics",
    "name": "Driver App",
    "categories": [
      "Mobile App Development",
      "AI",
      "SaaS"
    ],
    "category": "Mobile App Development · AI · SaaS",
    "oneLiner": "We built the real-time location, dashcam footage, and AI safety monitoring that turn trucking fleets from reactive to proactive — cutting accidents and insurance costs.",
    "overview": "Trucking companies operated blind, with no visibility into driver behavior, location, or safety. Devaxl built Driver App, a real-time collaboration platform giving dispatchers live location tracking, continuous dashcam footage, and performance data — shifting fleets from reacting to problems to preventing them.",
    "thumbnail": "/projects/driverapp.png",
    "collaboration": "Driver App",
    "role": "Mobile app development, real-time tracking and video infrastructure, and AI safety monitoring",
    "challenge": "Trucking companies faced an expensive visibility crisis. Accidents happened with no footage to explain why, so insurers questioned claims and drivers disputed fault — driving up premiums companies couldn't defend. Dispatchers had no view into driver behavior or real-time location, leaving unsafe driving uncorrected and routes impossible to optimize. The prevailing culture assumed accidents could only be managed after the fact, never prevented.",
    "approach": [
      {
        "title": "Real-Time Location & Tracking",
        "body": "We put every driver on a map in real time with live GPS, replacing guesswork with accurate ETAs. Dispatchers optimized routes on the fly, set geofencing alerts, and confirmed deliveries automatically."
      },
      {
        "title": "Dashcam & Safety Footage",
        "body": "We streamed continuous front- and optional rear-facing dashcam video to secure cloud storage, with live feed access for dispatchers. Our AI flagged risky events like hard braking and tailgating in real time, while saved accident footage delivered undeniable evidence for coaching and insurance disputes."
      },
      {
        "title": "Performance Data & Accountability",
        "body": "We scored driving behavior and surfaced it on individual driver and fleet dashboards, turning safety into friendly competition. Our aggregate analytics pinpointed risky drivers, lanes, and times of day, flagged predictive maintenance needs, and automated DOT compliance documentation."
      },
      {
        "title": "Culture & Scale",
        "body": "Transparency reframed monitoring as coaching, not punishment, supported by incentive programs that rewarded the safest drivers. New-driver onboarding set standards upfront, improving recruitment, retention, and customer trust."
      }
    ],
    "results": [
      {
        "title": "Data-Driven Operations",
        "body": "Real-time location enabled route optimization and accurate ETAs, while real performance data replaced anecdote — showing which drivers, routes, and times were safest."
      }
    ],
    "verdict": "Driver App proved that making the invisible visible prevents accidents before they happen. By combining GPS, dashcam footage, AI risk detection, and transparent performance data, fleets moved from reacting to incidents to preventing them."
  },
  {
    "slug": "sound-space",
    "industry": "Community & Media",
    "name": "Sound Space",
    "categories": [
      "SaaS",
      "Web Development",
      "Web Design"
    ],
    "category": "SaaS · Web Development · Web Design",
    "oneLiner": "A free, professionally curated sound effects library built for video creators.",
    "overview": "SoundSpace built a professional, organized, free sound effects library with a large set of high-quality audio files properly categorized and searchable. It became the go-to resource for YouTubers, TikTokers, and video creators worldwide.",
    "thumbnail": "/projects/soundAddress.png",
    "collaboration": "SoundSpace sound effects library",
    "challenge": "No single library existed that was free, well-organized, professionally produced, legally clear, and continuously updated.",
    "approach": [
      {
        "title": "Library Building & Curation",
        "body": "Collected thousands of high-quality, professionally produced sound effects organized into logical categories like nature, games, alarms, and transitions. Every sound was tagged by category, type, mood, and use case for instant discovery, with clear licensing on each file. Weekly additions kept the library growing with creator needs."
      },
      {
        "title": "Creator Access & Distribution",
        "body": "Made browsing, previewing, and downloading free on the web with no login or paywall for basic access. Hover-to-preview and one-click downloads removed all friction. A dedicated YouTube channel and video integrations showed sounds in action and drove organic discoverability."
      },
      {
        "title": "Community & Network Effects",
        "body": "Built community through creator testimonials, trending sounds that drove FOMO adoption, and sound requests where creators voted on what to add next. Remix features and revenue sharing with top contributors expanded the library while incentivizing quality."
      },
      {
        "title": "Distribution & Growth",
        "body": "TikTok and influencer integrations helped the library spread among creators."
      }
    ],
    "results": [
      {
        "title": "Adopted by Creators",
        "body": "From podcasters to YouTubers to TikTokers, creators use SoundSpace as a go-to source of free sound effects."
      }
    ],
    "verdict": "SoundSpace proves that solving a creator's friction point brilliantly makes you indispensable. By removing the cost, quality, and licensing barriers around audio at once, it grew from a niche problem into the first place creators look, a resource so essential that competing with it is nearly impossible."
  },
  {
    "slug": "propforce",
    "name": "Propforce",
    "categories": [
      "SaaS",
      "Web Development"
    ],
    "category": "SaaS · Web Development",
    "oneLiner": "A unified property management portal that turns spreadsheets and phone tag into automated workflows, tenant self-service, and financial intelligence.",
    "overview": "PropForce centralizes tenant communication, rent collection, maintenance workflows, lease tracking, and financial reporting in one portal. It shifts property managers from reactive, paper-based admin to proactive, data-driven operations.",
    "thumbnail": "/projects/propforce.png",
    "collaboration": "PropForce property management platform",
    "challenge": "Property management ran on spreadsheets, phone calls, and scattered email threads, so maintenance requests got lost, rent collection was manual and unreliable, and true per-property profitability was invisible. Tenants had no way to pay online or track requests, driving churn toward professionally-managed competitors.",
    "approach": [
      {
        "title": "Tenant Self-Service & Communication Hub",
        "body": "Every tenant got portal access to lease details, payment history, maintenance status, and documents. Online rent payment, in-portal maintenance requests, and automated reminders freed managers from constant calls while keeping all communication in one place per tenant."
      },
      {
        "title": "Operational Workflow Automation",
        "body": "Maintenance requests auto-route to approved contractors with status tracking, and rent collection runs on automatic reminders, processing, and late-payment escalation. Lease lifecycle, vendor management, and inspection scheduling were systematized, turning managers from administrators into strategists."
      },
      {
        "title": "Financial Insights & Analytics",
        "body": "A real-time dashboard surfaces per-property profitability, rent collected vs. late, and year-to-date P&L by property. Maintenance cost analysis, tenant quality metrics, and forecasting let managers make strategic decisions from data instead of gut feel."
      }
    ],
    "results": [],
    "verdict": "PropForce shows what's possible when you digitize an industry still running on paper and phone calls. By automating communication, centralizing operations, and exposing real profitability, it moved property managers from reactive firefighting to proactive, data-driven management."
  }
];

export function getAllCases(): CaseStudy[] {
  return CASES;
}

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}

/** The next case in the list (wraps around) — for the "next project" CTA. */
export function getNextCase(slug: string): CaseStudy {
  const i = CASES.findIndex((c) => c.slug === slug);
  return CASES[(i + 1) % CASES.length];
}

/**
 * The most closely related case, by shared discipline tags.
 *
 * The "next project" link used to walk the array in order, which chained all 15
 * cases into a ring but linked them by accident of position. That left the
 * strongest cluster on the site — five trucking and logistics builds (Apolloe,
 * Carrier Network, Chat Center, Driver App, Trucking Guru) — with no thematic
 * path between them. Preferring a case that shares tags means a reader deep in
 * one logistics story is offered another, which is both better for them and the
 * internal-linking signal that vertical was missing.
 *
 * Falls back to the next case in order, so every case still links somewhere and
 * the ring property is preserved.
 */
export function getRelatedCase(slug: string): { case: CaseStudy; related: boolean } {
  const current = getCaseBySlug(slug);
  if (!current) return { case: getNextCase(slug), related: false };

  const scored = CASES.filter((c) => c.slug !== slug)
    .map((c) => ({
      c,
      // A shared vertical beats any number of shared disciplines: two trucking
      // builds belong together more than two things that both happen to be SaaS.
      shared:
        (current.industry && c.industry === current.industry ? 10 : 0) +
        c.categories.filter((cat) => current.categories.includes(cat)).length,
    }))
    .filter((x) => x.shared > 0)
    .sort((a, b) => b.shared - a.shared);

  // Rotate among equally-related cases by position, so the five logistics cases
  // form a cycle rather than all pointing at the same one.
  if (scored.length) {
    const top = scored.filter((x) => x.shared === scored[0].shared).map((x) => x.c);
    const i = CASES.findIndex((c) => c.slug === slug);
    return { case: top[i % top.length], related: true };
  }

  return { case: getNextCase(slug), related: false };
}
