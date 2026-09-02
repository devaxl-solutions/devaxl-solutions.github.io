// Insights (blog) content.
//
// "buy-the-software-unless-configuring-costs-more" is REAL — written from the
// Nrtur engagement in work.ts, fact-checked against it, client unnamed.
//
// The other two are still SEED PLACEHOLDERS — replace their prose, dates and
// authors with real content.
//
// WARNING on the two seeds: there is no visible placeholder marker. They render
// as finished, dated articles, sit in the sitemap, and carry BlogPosting
// structured data (src/lib/schema.ts) asserting their datePublished and author
// to search engines and LLMs. Either byline them to a real person or pull them.

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  // In-body image. `icon` selects a glyph from FIGURE_ICONS; the figure renders
  // an on-brand generated illustration tinted to the article's category.
  | { type: "figure"; icon: string; caption: string };

export type Article = {
  slug: string;
  category: string;
  title: string;
  dek: string; // standfirst / excerpt
  readTime: string;
  date: string; // display
  dateISO: string; // for <time datetime>
  author: string;
  body: ArticleBlock[];
};

export const ARTICLES: Article[] = [
  {
    slug: "shipping-a-production-v1-in-nine-weeks",
    category: "Engineering",
    title: "Shipping a production v1 in nine weeks without cutting corners.",
    dek: "How a tight scope, weekly demoable increments, and a few non-negotiable foundations let a small senior team ship a real product — not a prototype — fast.",
    readTime: "9 min read",
    date: "Feb 18, 2026",
    dateISO: "2026-02-18",
    author: "Devaxl Engineering",
    body: [
      { type: "p", text: "Speed and quality are usually framed as a trade-off — go fast and you accrue debt, go careful and you miss the window. In practice, the teams that ship fast and well aren't choosing between those two. They're cutting a third thing entirely: scope. They decide early what a v1 must do to earn revenue, and they refuse to build anything that doesn't serve that. Everything else is real, valuable, and deliberately not now." },
      { type: "p", text: "We've run this play enough times to know the failure mode it avoids. Most v1s die not because the team was slow, but because the team was busy — busy building settings screens nobody asked for, busy gold-plating an onboarding flow before a single customer existed, busy turning a two-week feature into a six-week platform. Nine weeks is not a heroic sprint. It's what's left when you stop doing the work that doesn't matter yet." },
      { type: "h2", text: "Scope is the lever, not hours" },
      { type: "p", text: "When a deadline is at risk, the instinct is to add hours — nights, weekends, another contractor. That lever barely moves the date and it quietly lowers quality, because tired people writing code under pressure is how you manufacture the exact debt you were trying to avoid. The lever that actually works is scope. Removing a feature is instant, free, and reversible. It is the only variable on a software project you can change without paying for it later." },
      { type: "p", text: "So the first week isn't coding — it's an honest discovery. What is the smallest product a real customer will pay for, and what can wait? We write that line down explicitly, and everything that falls outside it gets a date in a backlog, not a place in the sprint. The backlog isn't a graveyard; it's a promise that the idea survives. It just doesn't get to slow down the thing that earns the right to build it." },
      { type: "figure", icon: "gauge", caption: "Week-by-week, scope is the burndown that matters — not hours logged. Every cut feature is capacity returned to the one workflow that earns revenue." },
      { type: "h2", text: "Find the one workflow that earns revenue" },
      { type: "p", text: "Every product has a single path that creates value — the thing a customer does that makes them willing to pay. For a billing tool it's \"send an invoice and get paid.\" For a marketplace it's \"list, get matched, transact.\" Find that path and trace it end to end, because that one workflow is your actual product. Everything else — dashboards, settings, reporting, integrations — is supporting cast that can arrive later." },
      { type: "ul", items: [
        "Define the one workflow that creates value, end to end, in a single sentence.",
        "Map every screen and state that workflow touches — and only those.",
        "Cut every feature that doesn't touch it, with a backlog date attached.",
        "Ship a demoable increment every week the client can actually click through.",
      ] },
      { type: "p", text: "That last point is the discipline that keeps the other three honest. If something has to be demoable every Friday, you can't disappear into a three-week refactor or a half-built abstraction. The cadence forces the work to stay close to something a human can use, which is exactly where scope creep gets caught early — when it's a conversation, not a rewrite." },
      { type: "h2", text: "The foundations you don't skip" },
      { type: "p", text: "Cutting scope is not the same as cutting corners, and the difference is entirely about what you cut. Scope is features. Foundations are the properties that make software trustworthy regardless of how many features it has — and those you build right the first time, because retrofitting them is where the real cost lives." },
      { type: "p", text: "Authentication, billing, an admin console, structured error handling, and basic observability are not v2 features. They're the difference between a product and a demo. A demo falls over the first time a real user does something unexpected; a product absorbs it, logs it, and tells you what happened. Built in from day one, these cost days. Bolted on after launch — once there's real data, real customers, and real money flowing through paths that never expected them — they cost weeks and a few incidents." },
      { type: "figure", icon: "shield", caption: "Auth, billing, an admin surface, error handling, and observability aren't features you add later — they're the load-bearing layer everything else sits on." },
      { type: "p", text: "Observability deserves a special mention because it's the one teams skip most and regret fastest. The first production incident is not the time to discover you have no logs, no traces, and no way to see what a user actually did. A few hours wiring up structured logging and a basic error tracker buys you the ability to debug production from your desk instead of from a screen-share with a frustrated customer." },
      { type: "quote", text: "Cutting scope is how you go fast. Cutting foundations is how you go backwards." },
      { type: "h2", text: "What \"demoable\" actually buys you" },
      { type: "p", text: "Weekly demoable increments aren't a project-management ritual — they're a risk instrument. Every Friday the client sees the real thing, in a real browser, doing real work. That does two things at once: it catches a wrong assumption while it's cheap to fix, and it builds the kind of trust that makes the hard scope conversations easy. A client who has watched the product take shape week over week believes you when you say a feature should wait. A client who has seen nothing for two months does not." },
      { type: "p", text: "It also changes the team's relationship with done. When the bar is \"working software a person can use this Friday,\" you stop accumulating half-finished branches and start finishing things. Small, complete, shippable slices compound. Big, impressive, almost-done ones don't ship at all." },
      { type: "h2", text: "How this holds up after launch" },
      { type: "p", text: "The real test of a fast build isn't the launch — it's the month after. A v1 built by cutting corners gets slower every week as the team pays down the shortcuts they took. A v1 built by cutting scope gets faster, because the foundations are solid and the deferred features slot into a codebase that was designed to receive them. The team keeps building on it instead of around it." },
      { type: "p", text: "That's the whole point. Nine weeks isn't about how hard you can push — it's about how clearly you can choose. Pick the one workflow that earns revenue, build the foundations that make it trustworthy, defer everything else with a real date, and show working software every week. The product looks small. It stands up to real use. And the team that built it is faster on week ten than they were on week one — which is the only kind of speed that's worth anything." },
    ],
  },
  {
    slug: "buy-the-software-unless-configuring-costs-more",
    category: "Architecture",
    title: "Buy the software, unless configuring it costs more than building it.",
    dek: "Buying is the right answer for almost every tool a company runs. Four checkable questions for the narrow cases where it isn't — and one four-person agency where the answer came back build.",
    readTime: "9 min read",
    date: "Sep 2, 2026",
    dateISO: "2026-09-02",
    author: "Devaxl Engineering",
    body: [
      { type: "p", text: "Almost every build-versus-buy argument should end in buy, and the reasons aren't close. Someone else has already handled the edge cases you haven't thought of yet — the timezone bug, the tax rule, the date picker that breaks in one browser. Someone else carries the pager at 2am. And a wrong decision is cancellable: a bad subscription costs a month's notice; a bad internal tool costs every engineer-week it took to build, plus every one it takes to keep alive." },
      { type: "p", text: "That's worth saying plainly coming from us, because building custom software is what clients pay us for, and buy is still the advice we give most often. What follows is where that default stops holding — and one client where it didn't." },
      { type: "h2", text: "The comparison most teams get wrong" },
      { type: "p", text: "The comparison usually runs as a price against an estimate: a monthly fee versus the six weeks an engineer thinks it'll take. Both numbers are wrong in the same direction, because neither contains what costs the most." },
      { type: "p", text: "On the buy side, the license fee is the smallest part. The rest is time the tool takes from people forever: onboarding, configuration, the person who quietly becomes its unofficial admin, the quarterly re-tidy when pipeline stages drift from how you sell. On the build side, the estimate is the smallest part too: the rest is hosting, patches, dependency upgrades, and someone still being here in two years who understands it. Neither column appears on an invoice, which is why teams argue about the two numbers that do." },
      { type: "figure", icon: "chart", caption: "The license fee and the build estimate are the two numbers everyone compares, and the two smallest in the decision. What decides it is hours, on both sides." },
      { type: "h2", text: "Four questions that flip the default" },
      { type: "p", text: "The default is buy, and moving off it takes real evidence. These four questions are deliberately answerable: you can either name the thing or you can't." },
      { type: "ul", items: [
        "Are you paying for the shape of a company you aren't? Not extra features — the wrong ones. Enterprise tools assume approvals, handoffs and reporting lines a small team doesn't have.",
        "Is the configuration cost recurring rather than one-off? Setup you do once is a purchase; setup that comes back every quarter is rent, charged in hours instead of dollars.",
        "Does what you need fit in one sentence, and still fit a month later? Write it down, then check it after real use rather than on the day the tool annoys you.",
        "Are you already maintaining the glue that keeps the bought tool usable? A spreadsheet beside it, a scheduled export, someone reconciling two systems — an unbudgeted internal product.",
      ] },
      { type: "p", text: "One yes is noise. Three or four, sustained over months rather than one bad week, is the case for building something." },
      { type: "h2", text: "What that looked like for one client" },
      { type: "p", text: "A four-person creative agency came to us paying $360 a month for HubSpot. The number wasn't the problem — $360 is fair for a working sales system. The problem was everything arranged around it." },
      { type: "p", text: "Run the questions. Were they paying for the shape of a company they weren't? Yes: HubSpot is built for sales organizations with handoffs and reporting upward; there were four of them. Was the configuration cost recurring? Yes — weeks of onboarding, then complex configuration and constant training, and with a 30-to-90-day sales cycle nobody's hands stayed warm on the tool. Did what they needed fit in one sentence? Yes, and you can read it off what they built: track the contacts, see where the deals are, don't lose the follow-up." },
      { type: "p", text: "The fourth question — whether they were already maintaining glue — we're leaving unscored; we don't have an honest answer to it. Three is enough. They were paying for automation, reporting and integration complexity they never used, and paying twice over: on the invoice, and in the hours it took to keep a tool that size configured for a team that small." },
      { type: "p", text: "So their answer was build. Not in-house: nobody at a four-person creative agency was going to become a part-time software maintainer. They hired us; we built them Nrtur, and they own it. A CRM sized to the sentence — contact management, a pipeline that matches how they sell, automatic email sync, a visual workflow builder for follow-ups. That was the whole scope; setup took five minutes against weeks for the thing it replaced." },
      { type: "figure", icon: "boxes", caption: "Contacts, a pipeline shaped like their sales, email that syncs itself, follow-ups that fire on their own. The scope of the build was the scope of the sentence." },
      { type: "p", text: "Their CRM spend fell 74%, saving about $3,180 a year — the easiest number to quote and the least interesting one. The team estimates three to four hours a week recovered from CRM admin, and for a four-person shop that's the figure that mattered. The saving was never really the license." },
      { type: "h2", text: "The sentence is the hard part" },
      { type: "p", text: "All of this rests on the sentence, and the sentence is where these projects fail. Not during the build — three months later, when the thing that was supposed to do one job gets asked to do a second one that is obviously, reasonably related." },
      { type: "quote", text: "Nobody proposes complexity. It arrives as the obvious next commit, from someone being helpful." },
      { type: "p", text: "It's always defensible in the moment: if we're tracking deals we may as well track invoices. Each step is small, each has a good argument, and six in a row is how you arrive at a worse version of the product you left, with the maintenance bill now yours. The test isn't whether a feature would be useful — almost anything would be. The test is whether it was in the sentence." },
      { type: "h2", text: "What this framework doesn't say" },
      { type: "p", text: "It doesn't say HubSpot is bad software. It's very good software for the company it was designed for: one with a sales team, a marketing function, handoffs between the two, and enough deal volume that reporting is a real question. A tool being wrong for you isn't the same as a tool being wrong. The agency wasn't overcharged; they were mis-sized, and they'd sized themselves." },
      { type: "p", text: "Run the same four questions at 200 people and every answer reverses: you are that company now, configuration is somebody's actual job, and the sentence stopped being one sentence long ago. At that size a small custom CRM is what slows you down, and moving to something like HubSpot is the boring, correct next decision." },
      { type: "p", text: "And it doesn't say building is cheap because someone else writes the code. Commissioned software is a standing obligation: a hosting bill, a day when a dependency needs updating, and an owner, who is you. The agency didn't get zero maintenance; they got maintenance proportional to what they use rather than to what they were sold. Let it grow and you've bought back the complexity you were escaping, with the patching now yours." },
      { type: "h2", text: "Running it against your own stack" },
      { type: "p", text: "This is an afternoon, not a project, and it's worth doing whether or not you ever hire anyone: most of what it produces is a decision to leave things alone with better reasons than before." },
      { type: "ul", items: [
        "List every recurring tool and what it costs a month. That column you already have.",
        "Beside each, estimate the hours: onboarding, configuration, admin, training, and the reconciliation nobody counts as work.",
        "Write the sentence for each tool. If you can't get it down to one, the answer is buy. Stop there.",
        "Check the sentence again a month later. If it grew, the answer is buy.",
      ] },
      { type: "p", text: "Most of your stack will pass, and that's the correct result. The value is in the one line item where the numbers don't work." },
      { type: "p", text: "If one doesn't pass, what's in front of you is smaller than it sounds. It isn't becoming a software company. It's writing one sentence, paying for exactly that sentence, and defending it for as long as you own the result. The agency's problem was never the price of a CRM; it was the price of a CRM built for somebody else." },
    ],
  },
  {
    slug: "embedded-product-squad-for-a-cto",
    category: "Team",
    title: "What an embedded product squad actually changes for a CTO.",
    dek: "An embedded team is not staff augmentation. The difference is ownership — and it shows up in velocity, quality, and how much you have to manage.",
    readTime: "8 min read",
    date: "Jan 12, 2026",
    dateISO: "2026-01-12",
    author: "Devaxl Engineering",
    body: [
      { type: "p", text: "Hiring contractors gives you hands. An embedded squad gives you a team that owns outcomes. The distinction sounds like a marketing nuance and turns out to be the whole thing: one model waits for tickets, the other moves the roadmap. For a CTO deciding how to add capacity, getting this distinction right is the difference between buying yourself time and buying yourself a second job managing the people who were supposed to give you time back." },
      { type: "p", text: "The confusion is understandable, because on paper they look the same — external people, billed by the month, writing code for your product. But the operating model underneath is completely different, and you feel that difference in exactly the places that matter: how much you have to specify, how much you have to check, and how much of the outcome you're actually on the hook for after they've gone." },
      { type: "h2", text: "Ownership over tasks" },
      { type: "p", text: "Staff augmentation runs on a queue. You define the work, break it into tickets, hand them over, and review what comes back. The contractor's job is to clear the queue you maintain — which means the thinking, the prioritization, and the judgment all stay your responsibility. You haven't added a teammate; you've added throughput that requires you to feed it. When the work is well-defined and you have the bandwidth to define it, that's a fine trade. When it isn't, the queue becomes the bottleneck and you are the queue." },
      { type: "p", text: "An embedded squad works against goals, not a queue. You hand them an outcome — \"get self-serve signup live and converting\" — and the breakdown, sequencing, and trade-offs become theirs to own. They surface risks before they become problems, push back on scope that doesn't serve the goal, and care whether the thing they shipped actually moved the metric, because they'll be there next sprint to live with the consequences either way. Ownership changes what people notice. A team that owns the outcome catches the edge case you forgot to specify; a team clearing tickets ships exactly what the ticket said and moves on." },
      { type: "figure", icon: "workflow", caption: "Staff augmentation clears a queue you maintain. An embedded squad owns the outcome — the breakdown, the sequencing, and the trade-offs move off your plate." },
      { type: "h2", text: "Less to manage, not more" },
      { type: "p", text: "The counterintuitive part — the part that makes embedded teams worth more than the day rate suggests — is that a good one reduces a CTO's management load instead of adding to it. That runs against the instinct that more people means more to coordinate. It holds because the squad absorbs the coordination internally instead of pushing it up to you." },
      { type: "p", text: "There's a single accountable lead who owns delivery, so when you need an answer you ask one person, not a project manager who has to go ask the people doing the work. The people on the kickoff call are the people who actually ship — there's no bait-and-switch where senior names win the engagement and juniors execute it. And there are no layers of account management to route through, which means you get progress reports about working software rather than status meetings about the project of building it." },
      { type: "ul", items: [
        "One senior squad — design, engineering, and product working as a unit, not a handoff chain.",
        "A single accountable lead, not a rotating cast of juniors you have to re-onboard.",
        "Works inside your tools, your rituals, and your roadmap — not a parallel process you have to reconcile.",
      ] },
      { type: "figure", icon: "users", caption: "Design, engineering, and product as one accountable unit working inside your roadmap — so coordination is absorbed by the squad, not pushed up to you." },
      { type: "h2", text: "What you're actually buying" },
      { type: "p", text: "It helps to be precise about what changes hands. With staff augmentation, you're buying execution capacity and keeping all of the judgment. With an embedded squad, you're buying judgment and execution together — which is more expensive per head and almost always cheaper per outcome, because the most costly thing on a software project is rarely the coding. It's the wrong call about what to build, the risk nobody flagged, the rework from a misread requirement. A team that owns the outcome is incentivized to get those right; a team clearing a queue is incentivized to clear the queue." },
      { type: "p", text: "This is also why the embedded model works best precisely when the path isn't fully mapped. If you already know exactly what to build and just need more hands, augmentation is the honest answer. If the roadmap has ambiguity in it — and most do — you want a team that treats the ambiguity as theirs to resolve rather than yours to spec out in advance." },
      { type: "quote", text: "The right team doesn't add to what you manage — it takes something off your plate." },
      { type: "h2", text: "The real change for a CTO" },
      { type: "p", text: "Add it up and the shift is not really about staffing — it's about where the ownership of outcomes lives. Staff augmentation leaves it with you and lends you hands. An embedded squad takes a slice of the roadmap and owns it end to end, which is the only arrangement that genuinely gives a CTO time back rather than relocating the work into management overhead." },
      { type: "p", text: "That's the durable version of velocity: a team you don't have to babysit, shipping outcomes you don't have to spec in exhaustive detail, run by a lead who's accountable for the result. You stop being the queue, and you get to go back to being the CTO." },
    ],
  },
];

export function getAllArticles(): Article[] {
  return ARTICLES;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

/** Other articles, for the "related" rail. */
export function getRelatedArticles(slug: string, n = 2): Article[] {
  return ARTICLES.filter((a) => a.slug !== slug).slice(0, n);
}
