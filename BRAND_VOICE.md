# Clarity Value — Brand voice

**Locked 2026-05-05.** Read this before writing any user-facing copy on this site.
Same role as the design-tokens folder, just for words instead of pixels.

---

## The disciplined hybrid

We use three voices, deliberately, on different surfaces.

**Voice A — Editorial outsider** is dominant. It's the smart insider who's been to too many vendor demos and is fed up. It uses literary flourishes in moderation, dunks on the rollup industrial complex with precision (not bile), and earns its metaphors. **Use it on:** hero, "the argument" (trench-coat) section, philosophy paragraphs, OG card, founder-led pitch surfaces.

**Voice B — Operator's tool** is the workhorse. Direct, concrete, ServiceNow-grade. Lead with verbs and numbers; every claim has a noun behind it. Never write a sentence a tired clerk can't parse. **Use it on:** capability grid, module pages, form labels, side panel info, contracts page, status copy.

**Voice C — Civic conviction** is the warmth. Mission-led, human-centered. Talks about agencies as partners. Never punches down, never opens with "we believe". **Use it on:** about page, closing CTA, follow-up emails, careers, press.

When in doubt: **Voice B for product surfaces. Voice A for argument surfaces. Voice C for relationship surfaces.**

---

## Voice rules (for all three)

1. **Sentence case.** Never Title Case. Never ALL CAPS except in caps-eyebrows (≤14 chars).
2. **Two weights only — 400 and 500.** Bold is for headings and labels. Never mid-sentence.
3. **Never use these words:** synergize, leverage, empower, unlock, transform (verb), seamless, robust, cutting-edge, world-class, best-in-class, holistic, ecosystem, paradigm.
4. **Prefer specific to abstract.** "Three-week pilot" not "fast deployment". "Miami-Dade" not "a major customer". "FOIA" not "open records workflow optimization".
5. **Numbers in copy must be defensible.** If you write "12 deployments," there are exactly 12. If you write "3–6 weeks to live," that's a real range. Don't bluff.
6. **Em-dashes (—) for parenthetical thought.** Hyphens (-) for compound modifiers. No en-dash for ranges in body copy — use "to" ("3 to 6 weeks").
7. **Avoid corporate plurals.** "Solutions," "stakeholders," "verticals," "deliverables" — read past them and say what you mean.
8. **Cut adverbs.** "Truly," "really," "very," "actually," "literally" — almost always strikable.

---

## Anti-patterns (don't write these)

- "We empower governments to..." → write what you do, don't claim to empower
- "Our innovative platform..." → if it's innovative the reader will notice
- "Industry-leading..." → no government CIO has ever made a decision based on this phrase
- "Reach out" → "email us" or "talk to us"
- "Contact us today" → "Talk to us"
- "In today's fast-paced world..." → just don't
- "Click here" → never. Use the actual destination ("see the platform")

---

## The Streisand rule — don't pre-emptively address concerns the buyer hasn't raised

**Foundational principle.** If a sophisticated buyer doesn't have a concern, raising it pre-emptively *plants the seed*. The announcement *is* the problem. "We don't steal your data, promise" makes the reader wonder if they should have been worried about that.

This applies to:
- "What about hallucinations?" — never. Don't bring it up. If procurement asks, answer in the sales call where context matters.
- "Will the AI replace my staff?" — never. The brand frame already says "the human still owns the call." That's enough.
- "Is this safe?" / "Can we trust it?" — never. The trust strip + the architecture answer this implicitly.
- "What happens if it goes wrong?" — never. Pre-defending against failure modes implies failure modes are likely.

**The rule:** if you're answering a question, the question itself becomes content. Pick the questions deliberately. If there's no good reason to raise a concern, don't raise it.

**The exception:** procurement-relevant facts that the buyer will need anyway (data residency, audit trail, deployment timeline, compliance certifications) — these are facts, not defenses. A trust strip stating "SOC 2 Type II · CJIS- and FedRAMP-aligned" is not pre-emptive defense; it's a fact the buyer needs.

**Tonal test:** if a paragraph starts with "What about..." or "Don't worry about..." or "Some might think..." — cut it. The brand never apologizes for itself in advance.

---

## Voice in action — paired examples

**Wrong (corporate):** "Our comprehensive platform empowers governments to streamline workflows across departments."

**Voice A:** "One product, built in-house, on one stack. Not seven companies in a trench coat."

**Voice B:** "Permits, records, 311, and budgets on one platform. One database, one login, one design system."

**Voice C:** "Built for the citizen who files once — and the clerk who opens it eighty times a day."

---

## Headline & CTA conventions

**The pilot CTA, on every page, reads exactly:** `Request a pilot`
- Nav button: `Request a pilot →`
- Hero CTA: `Request a pilot →`
- Closing CTA: `Request a pilot →`
- Form button: `Request a pilot →`
- Never "Get a demo," "Schedule a call," "Get started," "Book now."

**Page titles use this pattern:** `[What it is] — Clarity Value`
- ✅ `Run government on one platform — Clarity Value`
- ✅ `Talk to us — Clarity Value`
- ❌ `Clarity Value | The Best Government Software`

**Headline rhythm (heroes + section h2s):** one concrete idea + one editorial pull-quote. Example: `Run government on one platform.` (concrete) + `The system underneath the system.` (editorial pull). The em.cm-script gold-italic is reserved for the editorial half — use sparingly, one per heading max.

---

## Audience-specific framing

**For ops leaders / department heads:** lead with cycle-time, ease of use, what the clerk's day looks like. Don't lead with architecture.

**For CIOs / IT directors:** lead with one-codebase-one-stack, security, total cost vs. the rollup. Architecture and trust strip is gold here.

**For procurement / finance:** lead with deployment timeline, cooperative contracts, vendor stability. Numbers > narrative.

**For everybody:** the homepage hero + closing CTA must speak to all three within one scroll.

---

## When tone fights — defer to the audience

If the page is for a specific buyer (module pages → ops; about → procurement & founder; product → CIOs), let that buyer's preferred voice dominate. The hero is the only place all three voices coexist.

---

## AI for the work — the foundational pillar (locked 2026-05-05)

Clarity Value is the first govtech platform engineered with LLMs as a first-class architectural primitive. Not a chatbot bolted onto a 1990s database. The model is in the platform — drafting workflows, pre-checking plans, parsing FOIA requests, summarizing case histories. **The AI is the first set of eyes on every record. The clerk still owns the call.**

This is a foundational brand pillar, not a feature paragraph. Talk about AI everywhere it's relevant. But talk about it correctly.

### Anti-patterns — never use these phrases

- ❌ "AI-powered" — empty signal, reads like incumbent vendor marketing
- ❌ "AI-driven insights" — corporate filler
- ❌ "Intelligent automation" — meaningless
- ❌ "Smart assistant" / "smart [anything]" — diminishes the model
- ❌ "Leverage AI" / "harness AI" — gross verbs
- ❌ "Revolutionary AI" / "next-generation AI" — uninhabitable adjectives
- ❌ "AI takes care of it" — implies the human is removed; we never imply that
- ❌ "Automatically" without saying who reviews — reads as no-human-in-the-loop

### Always use these patterns

- ✅ "Drafted by the model" — when AI produces a first draft
- ✅ "Pre-checked by AI" — when AI evaluates before a human
- ✅ "Suggested by the system" — when AI recommends an action
- ✅ "Summarized for the reviewer" — when AI condenses content
- ✅ "Surfaced by the model" — when AI flags something noteworthy
- ✅ "The clerk still owns the call" / "the planner verifies" / "the FOIA officer signs off" — always show the human in the loop
- ✅ "First set of eyes, not the final decision" — the brand frame in nine words

### The two-sided rule

Every AI claim should specify which side of the counter benefits. Citizen-side, staff-side, or both. **The AI helps both — and we always say which.**

- ✅ "The model surfaces likely exemptions for the FOIA officer." (staff-side)
- ✅ "The form helps the citizen pick the right department." (citizen-side)
- ✅ "Same model, both sides — citizens get faster service, staff get amplified judgment." (both)

### The architectural moat — claim it explicitly

These three claims are uniquely defensible because of how the platform is built. **Use them when the audience is technical (CIOs, engineers, procurement IT):**

1. **One database = AI sees across modules.** Stitched-together platforms can't reason across Permits, FOIA, and 311 because those are different products glued together with ETLs. Ours can — same database, same model, every record.
2. **One data model = AI is calibrated to your statute.** Your FOIA classifier reads against your state's open-records law. Per-tenant calibration with shared platform improvements.
3. **Every AI suggestion is logged.** Audit trail at the model level. Defensible at FOIA, defensible at audit, defensible in court.

### The outputs

Every visible AI surface gets:
- A clear human-in-the-loop sentence
- A specific use case (not generic "AI helps...")
- An honesty caveat where appropriate ("likely," "approximately," "estimated") — never overclaim

Audit anything you write against these rules before it ships. If you wrote "AI-powered intake" — stop, rewrite as "intake forms pre-checked by the model — your reviewer sees flagged fields first."
