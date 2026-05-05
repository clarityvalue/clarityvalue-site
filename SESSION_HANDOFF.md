# Clarity Value site — Session handoff

Updated 2026-05-05. Read this top-to-bottom before doing any work on `clarityvalue-site/`. Operational notes for a fresh Claude session resuming the migration.

---

## What this project is

**Static marketing site** for Clarity Value (Cristian's govtech SaaS). Migrating from old Webflow site (`clarityvalue.co`, outdated 2024 design) to Netlify with new HTML/CSS designs from Claude Designer.

- **Stack**: vanilla HTML + CSS + light JS. No build step. Hosted on Netlify.
- **Live URL**: `clarityvalue.netlify.app` (DNS cutover to `clarityvalue.co` still pending)
- **Repo**: `clarityvalue/clarityvalue-site` on GitHub (public, free Netlify tier requires this)
- **GA**: tracking ID `G-91MDWR08NJ` baked into every page

## Working with Cristian

He's:
- **CEO of Clarity Value** (crobiou@clarityvalue.co), based in Miami
- **A git beginner** — walk him through `git status` → `git add -A` → `git commit -m "..."` → `git push` step-by-step every push. Never assume he knows what to do.
- Tests on **Pixel 9 XL Pro (412px viewport)**. Always design for that as the smallest screen.
- Wants the site to feel **"clean, fast, and sexy"** on mobile. Skim-first, click-Request-a-pilot oriented.
- Push triggers: ship a feature → flag the push proactively, walk him through it.

### Hard rules learned the hard way
1. **Audit → mockup → sign-off → code.** Even small changes — show what you're proposing first.
2. **Push at every feature boundary** so the team's review surface stays small.
3. **Verify via Chrome bridge** before claiming a UI fix is done. The Claude in Chrome MCP is connected — use `mcp__Claude_in_Chrome__navigate` + JS-based body-width constraint trick (set `document.body.style.width='412px'` then inspect). Note: this trick does NOT trigger `@media` queries — for that you need a real viewport. Use injected naked CSS without media wrappers if you need to preview mobile state at desktop viewport.
4. **Cache TTL bites.** `_headers` controls Netlify cache. CSS/JS now use `must-revalidate`, so deploys propagate fast. But if Cristian sees stale content, bump the `?v=N` query string on the asset link in HTML.

---

## File layout

```
clarityvalue-site/
├── index.html                  # Homepage (standalone, does NOT use module-shell)
├── land-management.html        # 7 module pages (Solutions dropdown destinations)
├── human-resources.html
├── budget-management.html
├── licensing.html
├── record-requests.html        # FOIA
├── 311.html
├── reports.html
├── contacts.html               # Netlify Forms (demo-request)
├── thanks.html                 # Form success page (action target)
├── privacy-policy.html
├── terms-of-use.html
├── 404.html                    # Custom Netlify 404 ("That record isn't on file.")
├── module-shell.css            # Shared nav/footer/CTA chrome for all non-homepage pages
├── module-shell.js             # JS that injects nav/footer/CTA via data-cm-slot pattern
├── tokens/                     # Design tokens (cached 1yr immutable)
│   ├── colors.css
│   ├── typography.css
│   ├── density.css
│   ├── components-controls.css
│   ├── components-display.css
│   └── components-shell.css
├── art/
│   ├── og-image.png            # 1200x630 OG/Twitter social card (currently wrong dim — see Open Items)
│   ├── og-card.html            # Source HTML for og-image.png — open in Chrome, capture full-size screenshot
│   ├── wash-hero.png           # Atmospheric hero background
│   ├── wash-mod-*.png          # Per-module hero washes
│   ├── customers/              # 12 customer logo PNGs
│   ├── clarity-mark.svg        # 12-ray sun (canonical brand mark)
│   └── clarity-mark-eye.svg    # Eye/arc variant (saved for future in-product use)
├── _headers                    # Netlify cache control
├── _redirects                  # Old Webflow URL → new page redirects
├── netlify.toml                # Minimal Netlify config (publish=".")
└── README.md
```

### Module page rendering pattern

Each module page is a static HTML file with `data-cm-module="land"` (or hr/budget/etc) on `<html>`. The page has slots: `<div data-cm-slot="nav"></div>`, `<div data-cm-slot="cta"></div>`, `<div data-cm-slot="xlinks"></div>`, `<div data-cm-slot="footer"></div>`. `module-shell.js` reads `data-cm-module` and injects the correct nav/footer/CTA HTML into those slots at runtime. This is why module pages share chrome but the homepage (which doesn't use module-shell) has its own inline nav/footer.

---

## Mobile design system (established this session)

### Breakpoints
- **Primary**: `@media (max-width:780px)` — covers all phones + small tablets
- **Smallest phones**: `@media (max-width:480px)` — finest tier
- Three pre-existing breakpoints in code: 980, 780, 560, 480 px

### Mobile rhythm
- `--cm-pad-h: 22px` (horizontal page padding, was 56px on desktop)
- `.cm-wrap{padding:0 22px}` (override of token)
- Nav-row gets extra +4px each side: `padding:10px 4px` for ~26px total breathing room
- Hero top padding: **16px** (homepage), **32px** (module pages)
- Hero bottom padding: 48px

### Mobile patterns locked in
- **Nav**: hide `.cm-nav-links` + `.cm-nav-signin`, keep brand + Request-a-pilot. Both get `white-space:nowrap` + `flex-shrink:0`.
- **Hero grids**: `.cm-hero-row`, `.cm-mhero-row` collapse to `1fr`. `.cm-hero-grid` (dotted bg) hidden. `.cm-hero-wash` extended to `inset:0` with opacity 0.45 (full coverage, no vertical seam at 30% from left).
- **Comparison "trench coat" `.cm-vs`**: 2-col → 1-col, drop middle "VS" chip
- **Module preview cards `.cm-mod-surface`**: `width:100%`, `position:relative`
- **`.cm-mod-row`** (text+preview 2-col): collapse to 1-col
- **Workflow timeline `.cm-flow`** (4-col): collapse to 1-col
- **Capability rows `.cm-cap-row` + `--reverse`**: collapse with order swap
- **Cross-link cards `.cm-xlink-grid`**: 3-col → 1-col
- **CTA `.cm-cta-row`**: 2-col → 1-col
- **Footer `.cm-footer-row`**: 5-col → 2-col @780, 1-col @480, brand block spans full width
- **Footer logo SVG**: `.cm-footer-brand .cm-logo svg{width:22px;height:22px;flex-shrink:0}` (was rendering at browser default ~300px)
- **Inline-style 2-col grids inside module HTML**: handled via attribute selectors with `!important` in module-shell.css mobile block. Patterns covered: `1fr 1fr;gap:64px`, `1fr 1fr;height:340px`, `1fr 280px/270px/240px/200px`, `200px 1fr;height`, `1.05fr 1fr;height`, `130px 1fr;gap:24px`.
- **Editorial elements hidden on mobile**:
  - `.cm-rose-wrap, .cm-rose-note` (homepage rosetta + captions — competing with the activity card)
  - `.cm-hero-grid` (dotted bg pattern)
- **All buttons**: `.cm-btn{white-space:nowrap}` so labels don't wrap

### Non-negotiable for mobile work
- Always test against 412px viewport (Pixel 9 XL Pro)
- Always check the live deploy via Chrome bridge before declaring done
- Always look at module pages AND contacts AND legal pages — they share `module-shell.css` so changes cascade

---

## Cache strategy (LOCKED 2026-05-05)

`_headers` config:

```
/art/*       Cache-Control: public, max-age=31536000, immutable
/fonts/*     Cache-Control: public, max-age=31536000, immutable
/tokens/*    Cache-Control: public, max-age=31536000, immutable
/module-shell.css  Cache-Control: public, max-age=0, must-revalidate
/module-shell.js   Cache-Control: public, max-age=0, must-revalidate
```

- **`?v=N` query bump**: All HTML files reference `module-shell.css?v=2` and `module-shell.js?v=2`. When you change either of those, bump to `?v=3` everywhere via:
  ```bash
  cd clarityvalue-site && for f in *.html; do sed -i '' 's|?v=2|?v=3|g' "$f"; done
  ```
  (Use `sed -i ''` on Mac, `sed -i` on Linux/Docker. The bash sandbox is Linux.)
- **Why must-revalidate**: 24-hour `max-age=86400` was burning Cristian's Pixel for a full day after every deploy. Now browsers always check the etag — fast for him, still cached when content is unchanged.

---

## What's deployed and working

- ✅ Homepage (`/`) with hero, customer logo wall (12 agencies), comparison "trench coat", modules section with 7 module previews, "Live across the platform" 4-row activity card, navy CTA, full footer
- ✅ 7 Solutions dropdown pages (Land / HR / Budget / Licensing / Record Requests / 311 / Reports) — each with their own hero, workflow timeline, capability rows, cross-link cards
- ✅ Solutions dropdown nav with module icons (replaces text abbreviations) — homepage + all module pages
- ✅ Contacts page (`/contacts.html`) with Netlify Forms wired to `/thanks.html`. Form name: `demo-request`. Honeypot: `bot-field`.
- ✅ Privacy + Terms pages (legal compliance)
- ✅ Mobile-responsive across all pages
- ✅ Open Graph + Twitter Card meta tags on every shareable page
- ✅ Google Analytics on every page
- ✅ Old Webflow URLs redirected to new paths (see `_redirects`)
- ✅ Custom 404 page

### Customer logos in wall (homepage)

12 real agencies, all PNG in `/art/customers/`:
NYC, Georgia DHS, Florida Health, Miami-Dade, City of Atlanta, Hialeah, Aurora IL, Orange County NY, North Miami, Riviera Beach, **Granite Falls** (state ambiguous — see Open Items), Georgia Office of Planning and Budget.

### Hero stamp ("Live across the platform" card)

Homepage hero floating preview. Now renders **4 static rows** showing module variety:
- SUB-2024-002 · Permit issued · Coral Way → Completion (green)
- FOIA-0421 · Records request · routed to Planning → In review (amber)
- SR-9128 · 311 · Pothole closed at SW 14th St → Resolved (blue)
- INS-118 · Inspection passed · 2210 NE 2nd Ave → Approved (green)

The previous single-row rotation JS was removed. If Cristian wants animation back, the cleanest path is rotating the WHOLE list (swap in fresh sets of 4 events every N seconds).

---

## OG/social card (Open Item — half-broken)

Every shareable page has full og:* + twitter:* meta tags pointing to `https://clarityvalue.netlify.app/art/og-image.png`. The PNG file exists and is reachable.

**Problem**: current PNG is 3170×2646 (Chrome captured the og-card.html with surrounding canvas). Should be exactly **1200×630**. The `og-card.html` source has been fixed (body now IS the card, no surrounding canvas) but Cristian needs to re-screenshot.

**To finish**:
1. Open `art/og-card.html` in Chrome → hard refresh (Cmd+Shift+R)
2. DevTools → Cmd+Shift+P → "Capture full size screenshot"
3. Resulting PNG should be 1200×630 exactly
4. `mv ~/Downloads/<filename>.png /Users/cfrobiou/Desktop/clarityapp/clarityvalue-site/art/og-image.png`
5. Push

To verify: paste site URL into [opengraph.xyz](https://www.opengraph.xyz/) — shows live preview as iMessage/Slack/LinkedIn would render it.

---

## Recently shipped (chronological, latest first)

- **Hero card → 4 rows + rosetta hidden on mobile + nav-hero gap 28→16px** — card now carries breadth message, rosetta retired from mobile (kept on desktop), nav→hero feels like one continuous strip
- **Hero gap 64→28px** — was reading as awkward whitespace below nav
- **Cache fix: ?v=2 + must-revalidate** — was burning 24-hr stale CSS on Pixel
- **Inline-grid mobile collapse via attribute selectors** — fixes column-breaking on 7 module HTML files without editing any of them
- **OG/Twitter meta tags on all shareable pages + branded social card** — was showing NYC's logo via fallback, now shows Clarity card (modulo the dimension fix above)
- **Footer logo constraint** (`.cm-footer-brand .cm-logo svg{width:22px;height:22px}`) — was rendering at browser default size on module pages
- **Padding 18→22px + nav 4px inset** — give logo + Request-a-pilot CTA visible breathing room from screen edges
- **Hero wash full-cover at <=780px** — removes vertical seam at 30%-from-left
- **Module pages mobile sweep** — all 7 module pages collapse to 1-col cleanly (cm-mhero-row, cm-flow, cm-cap-row, cm-xlink-grid, cm-cta-row, cm-footer-row)
- **Homepage mobile sweep** — hero/comparison/modules/CTA/footer all stack at <=780px, "VS" chip dropped, secondary nav links hidden
- **Solutions dropdown icons** — text abbreviations replaced with module SVG glyphs (building/person/dollar/shield/folder/chat/bar-chart)
- **OG card** + **og-image.png 404 fix** + **og-image dimensions follow-up**

---

## Open items / next session priorities

### High priority
1. **Fix og-image.png dimensions** to exactly 1200×630 (re-screenshot from updated og-card.html)
2. **Walk staging site, sign off** (task #7) — Cristian's actively doing this. He may flag more polish items.
3. **DNS cutover from Webflow to Netlify** (task #8) — the big move. Point clarityvalue.co apex + www at Netlify. Sunset Webflow.

### Medium priority
4. **Granite Falls logo verification** (task #19) — NC vs MN vs WA. Cristian to confirm.

### Low priority / open questions
5. **Mobile nav: hamburger menu?** Currently we hide secondary nav links on mobile (Cristian's call: "people on mobile are skimming and clicking Request a pilot"). If conversion data later shows people want to navigate to Product/About/Approach pages, add a hamburger. For now, hidden is fine.
6. **Card animation (was descoped)**: 4 static rows shipped. Could add a "live" feel with rotation if Cristian wants — rotate the whole list every 8-10s. Not urgent.

---

## Common gotchas

### Cache
- Cristian sees stale content → bump `?v=N` in all HTML files via the `sed` one-liner above
- Or wait — `must-revalidate` makes deploys propagate within seconds now

### Stale `.git/index.lock` from sandbox
The bash sandbox sometimes leaves stale `.git/index.lock` files. Cristian's terminal can't `rm` them (ownership mismatch). Recovery:
```bash
sudo rm /Users/cfrobiou/Desktop/clarityapp/clarityvalue-site/.git/*.lock
```

### "Nothing to commit" after Cristian thinks he edited
Means the file edit didn't actually save (or the bash sandbox modified files that don't sync to his local). Always verify by reading the file directly via Read tool before assuming a fix is in.

### Chrome body-constrain trick
Setting `document.body.style.width='412px'` doesn't trigger `@media (max-width:780px)` because media queries respond to actual viewport, not body width. Workaround: inject the desired CSS rules WITHOUT the @media wrapper to preview mobile state.

### Inline styles vs external CSS
Module HTML files have ~68 inline `style="grid-template-columns:..."` declarations (decorative product mockups). These BEAT external CSS by specificity. Mobile overrides require attribute selectors + `!important`:
```css
[style*="grid-template-columns:1fr 280px"]{
  grid-template-columns:1fr !important;
}
```

### Dropdown menu width
The Solutions dropdown panel has a `@media (max-width:780px)` rule making it `position:fixed` left:12 right:12 — already responsive, leave alone.

---

## Standard push workflow

For Cristian's terminal:
```bash
cd /Users/cfrobiou/Desktop/clarityapp/clarityvalue-site
git status                       # always start here so he sees what's about to ship
git add -A
git commit -m "<area>: <what changed>"
git push
```

Commit message style: lowercase area prefix, descriptive — examples in `git log`:
- `Mobile hero: tighten nav->hero gap to 16px + hide rosetta on mobile`
- `Cache fix: ?v=2 on module-shell css/js + reduce TTL to must-revalidate`
- `Footer logo: constrain sun SVG to 22x22 in module-shell.css`

---

## Test workflow

After every push, ~60s for Netlify to deploy. Then:
1. Hard-refresh `clarityvalue.netlify.app` on his Pixel 9 XL Pro
2. Walk the homepage + a representative module page (`/land-management.html` is the densest)
3. Test the contact form by submitting a real entry to verify it lands in `/thanks.html` cleanly
4. For OG previews: paste URL into [opengraph.xyz](https://www.opengraph.xyz/)
5. For SMS link previews: send the URL to himself in iMessage

---

## Tasks state at handoff (2026-05-05)

```
COMPLETED (28):
#1-6, 10-18, 20-30 — full migration scaffold, content, deploy, mobile sweep, OG, footer logo

IN PROGRESS:
#7 — Walk staging site, sign off (Cristian actively iterating)

PENDING:
#8 — DNS cutover from Webflow to Netlify (blocker: sign-off complete)
#9 — Post-cutover verification + Webflow sunset
#19 — Verify ambiguous Granite Falls logo (NC/MN/WA?)
```

---

## How to start the next session cold

```
1. Read this file end-to-end
2. cd /Users/cfrobiou/Desktop/clarityapp/clarityvalue-site
3. git log --oneline -20  # see what's been shipped
4. git status              # confirm clean working tree
5. Open clarityvalue.netlify.app on Cristian's Pixel + your desktop
6. Ask Cristian what he wants to work on
7. Always: audit → mockup → sign-off → code → push
```
