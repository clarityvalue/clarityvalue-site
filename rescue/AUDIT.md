# Live-site audit — clarityvalue.co → new bundle

Captured 2026-05-04. Live Webflow site last published 2024-04-11.

## What the new bundle covers (✅ ready to ship)

| Old URL | New URL | Status |
|---|---|---|
| `/` (homepage) | `/index.html` | ✅ redesigned |
| `/land-management` | `/land-management.html` | ✅ redesigned |
| `/human-resources` | `/human-resources.html` | ✅ redesigned |
| `/budget-management` | `/budget-management.html` | ✅ redesigned |
| `/licensing` | `/licensing.html` | ✅ redesigned |
| `/record-request` | `/record-requests.html` | ✅ redesigned (slug pluralized) |
| `/reports-and-dashboards` | `/reports.html` | ✅ redesigned (slug shortened) |
| `/citizen-service-requests` | `/311.html` | ✅ redesigned (slug shortened) |

All 7 module pages plus a polished homepage. Net win: tighter slugs, modern design, consistent chrome via module-shell.{css,js}.

## What's at risk (deciding before cutover)

### Compliance-required pages — MISSING from new bundle

| Old URL | Why it matters | Captured to |
|---|---|---|
| `/privacy-policy` | Legal requirement (GDPR/CCPA), referenced from existing emails + customer contracts | `rescue/privacy-policy.md` |
| `/terms-of-use` | Legal requirement, governs customer use of clarityvalue.co | `rescue/terms-of-use.md` |

**Impact if not addressed**: external links in old emails, customer contracts, and SOC2-related references would 404 after cutover. Recommend rebuilding these as polished standalone pages BEFORE DNS flip.

### Credibility / sales-required pages — MISSING from new bundle

| Old URL | Why it matters | Captured to |
|---|---|---|
| `/about` | Founder story, mission, values, geographic footprint, news/press mentions | `rescue/about.md` |
| `/contacts` | The PRIMARY conversion surface — HubSpot demo-request form, "Get your free demo" CTA target | `rescue/contact-form-spec.md` |
| `/product` | General product overview separate from per-module pages | (not yet captured — does it still exist?) |

**Impact**: every CTA on the new homepage points at "Request a pilot" — that needs a destination. Today the old site funnels demo requests through `/contacts` (HubSpot form). New site has no equivalent yet.

### Other content the new bundle drops

- **Customer logo wall**: live site has 8 logos (Florida Health, City of North Miami, Aurora IL, Resurgens Atlanta, Riviera Beach, OPB, Granite Falls, Hialeah). New homepage v2 doesn't include a logo wall.
  - **Asset hosting**: logo PNGs are on Webflow CDN (`cdn.prod.website-files.com`). They'll keep working post-cutover via the Webflow CDN, but if Webflow is fully cancelled the URLs eventually break. Worth downloading + self-hosting before sunset.

- **Hero Vimeo product video** (live site): video 733636771. New hero uses watercolor washes + product stamp instead. Probably intentional, but flag — the video shows actual product screen recordings which are credibility.

- **Press / news section**: 3 article links on `/about`. The articles themselves are at `/articles/<slug>` URLs not yet checked. May be live, may be 404 — worth a sweep.

### Tracking + integrations — silently disappearing

| Service | Status | Recommendation |
|---|---|---|
| Google Analytics G-91MDWR08NJ | New bundle has zero analytics | Add gtag.js back, OR migrate to Plausible (privacy-friendly, $9/mo, simpler) |
| HubSpot demo-request form (portal 22373530, form 6e7e2585-5856-4ec6-b4c7-2cc5902e533c) | No equivalent on new site | Rebuild Contact page + embed same HubSpot form OR migrate to Netlify Forms |

### URL drift — needs 301 redirects

Old slugs and new ones differ for 3 pages. Visitors hitting old URLs from emails, search results, or bookmarks will 404 unless we add redirects:

```
/citizen-service-requests   →   /311.html              (301)
/record-request             →   /record-requests.html  (301)
/reports-and-dashboards     →   /reports.html          (301)
```

The existing `_redirects` file in the bundle has a commented-out template (`/modules/foo` → `/foo.html`) but the actual old URLs are bare `/foo`, not `/modules/foo` — so that template is wrong. Needs rewrite.

### Inconsistencies on the live site (a chance to clean up)

- **Office address**: header shows "120 SW 8th St. Miami FL 33130" but footer + privacy + contacts show "31 NE 17th St. Miami FL 33132". Pick one and use it everywhere.
- **Email**: `info@clarityvalue.co` (marketing) vs `support@clarityvalue.co` (legal pages — including a `EMAIL` placeholder typo in the privacy policy that was supposed to be substituted). Confirm both are actually monitored before linking from new site.

## DNS picture (good news)

- **Registrar**: unknown yet — Cristian to confirm (likely GoDaddy / Cloudflare / Namecheap).
- **Nameservers**: NSone (`dns1.p01.nsone.net` etc) — that's Webflow's enterprise DNS. Cutover means either:
  1. Update nameservers at registrar to Netlify's 4 NS records (cleaner, recommended path)
  2. Keep nameservers wherever they are, just edit A + CNAME records to point at Netlify
- **CDN**: Cloudflare in front of Webflow. Drops out automatically when DNS flips.

## Recommended pre-cutover work order

1. **Rebuild `/privacy-policy` and `/terms-of-use`** as new pages matching the design system. Content is in `rescue/*.md`. Estimate: 2 hours per page.
2. **Rebuild `/contacts`** with HubSpot embed (or Netlify Form, decide). Content: `rescue/contact-form-spec.md`. Estimate: 1-2 hours.
3. **Rebuild `/about`** OR drop it temporarily and 301 → homepage. Content: `rescue/about.md`. Estimate: 4 hours for a real about page.
4. **Patch `_redirects`** with the 3 slug-drift mappings.
5. **Decide on tracking**: keep GA, switch to Plausible, or none. Add to all pages before launch.
6. **Audit footer links** — current `module-shell.js` footer renders links to `#` for Security/Compliance/Privacy/Status. Wire Privacy + Terms once those pages exist.
7. **Deploy to Netlify staging** under temp URL, walk on phone + desktop, sign off.
8. **DNS cutover** — update registrar to Netlify nameservers, wait for propagation, verify SSL provisions.
9. **Verify and sunset** Webflow.


---

## Decisions locked 2026-05-04

**Pre-cutover page set (must ship before DNS flip):**
- ✅ /privacy-policy (legal)
- ✅ /terms-of-use (legal)
- ✅ /contacts (form must work or every "Request a pilot" CTA dies)

**Deferred (rebuild after first cutover, OK to 301 → / temporarily):**
- /about — has rich content (founder quote, values, footprint, press mentions). Worth a real polish pass; not blocking launch.
- /product — overview page; only blocks if there are external links pointing here. Need to confirm.

**Form decision: Netlify Forms** (drop HubSpot embed). Free up to 100 submissions/mo, captures into the Netlify dashboard. Trade-off: lose automatic creation of HubSpot CRM contacts; gain simpler ownership + no third-party JS on the contact page. Can re-bridge to HubSpot later via Zapier if needed.

**Logo wall on homepage: YES.** Bring the existing 8 + add 3 new:
- Existing: Florida Health, City of North Miami, Hialeah, Aurora IL, Riviera Beach, Resurgens Atlanta (?), OPB (?), Granite Falls
- New: Georgia DHS, New York City, Orange County NY
- Two existing logos worth re-confirming with Cristian: "Resurgens Atlanta" (Resurgens is a healthcare/orthopedic group in Atlanta — odd fit for a govtech client list?) and "OPB" (Oregon Public Broadcasting? if so, also odd; could be Office of Public Broadcasting? need to verify).

**Tracking: TBD.** Cristian to confirm whether to keep GA `G-91MDWR08NJ`, switch to Plausible ($9/mo, privacy-friendly), or none. Default = none until decided.

**Pacing: NOT a rush.** Cristian wants to learn each step so the cutover is clean. Phase plan baked into next steps below.


---

## Lunch-break progress — 2026-05-04

Built and tested locally (Cristian: at lunch). All 13 pages + all critical assets return 200 on local http server. Nothing committed to git yet — sandbox `.git/index.lock` is wedged again (same recurring sandbox-bridge issue). Cristian will need one `sudo rm` + `git add -A && git commit` to land everything.

**Files added/changed (uncommitted):**

```
NEW   art/customers/                     (folder, 11 logos: 8 PNG rescued + 3 SVG placeholders)
NEW   art/customers/florida-health.png    24KB  rescued from Webflow CDN
NEW   art/customers/aurora-il.png         9.6KB rescued
NEW   art/customers/north-miami.png       7.8KB rescued
NEW   art/customers/riviera-beach.png     35KB  rescued
NEW   art/customers/hialeah.png           35KB  rescued
NEW   art/customers/granite-falls.png     216KB rescued (verify customer)
NEW   art/customers/opb.png               29KB  rescued (verify customer)
NEW   art/customers/resurgens-atlanta.png 16KB  rescued (verify customer)
NEW   art/customers/georgia-dhs.svg       PLACEHOLDER text wordmark
NEW   art/customers/nyc.svg               PLACEHOLDER text wordmark
NEW   art/customers/orange-county-ny.svg  PLACEHOLDER text wordmark
NEW   privacy-policy.html                 15KB  full content from rescue/
NEW   terms-of-use.html                   13KB  full content from rescue/
NEW   contacts.html                       11KB  Netlify Forms wired
NEW   thanks.html                         4KB   form submit success page
NEW   rescue/logos-todo.md                customer logo verification + sourcing notes
EDIT  index.html                          +logo wall section, +CSS, footer links
EDIT  module-shell.js                     footer Privacy/Terms/Contact links wired
EDIT  _redirects                          full URL drift mappings active
EDIT  311.html .. reports.html (7 files)  "Request a pilot" CTAs → /contacts.html
```

**Local verification status:** ✅ 27/27 paths tested return HTTP 200 (every page, every critical asset, every customer logo).

**Still requires Cristian's input before staging deploy:**
1. Clear `sudo rm .git/index.lock` and run `git status` so we can commit
2. Tracking decision (GA / Plausible / skip)
3. Drop or keep: OPB, Resurgens Atlanta, Granite Falls (verify-or-drop)
4. Real logo files for GA DHS, NYC, Orange County NY (placeholders in place — homepage layout is preview-able)
