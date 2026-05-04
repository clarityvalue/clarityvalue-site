# Customer logos — current status

**Folder**: `art/customers/`

## Final lineup on homepage (11 logos)

| File | Agency | Source | Status |
|---|---|---|---|
| `nyc.svg` | New York City | placeholder text wordmark | ⚠️ awaiting real asset from Cristian |
| `georgia-dhs.svg` | Georgia Department of Human Services | placeholder text wordmark | ⚠️ awaiting real asset |
| `florida-health.png` | Florida Department of Health | rescued from Webflow CDN | ✅ |
| `city-of-atlanta.svg` | City of Atlanta | placeholder text wordmark | ⚠️ awaiting real asset |
| `hialeah.png` | City of Hialeah | rescued from Webflow CDN | ✅ |
| `aurora-il.png` | City of Aurora, Illinois | rescued from Webflow CDN | ✅ |
| `orange-county-ny.svg` | Orange County, NY | placeholder text wordmark | ⚠️ awaiting real asset |
| `north-miami.png` | City of North Miami | rescued from Webflow CDN | ✅ |
| `riviera-beach.png` | City of Riviera Beach | rescued from Webflow CDN | ✅ |
| `granite-falls.png` | Granite Falls | rescued from Webflow CDN | ⚠️ which Granite Falls? (NC, MN, or WA) |
| `ga-opb.png` | Georgia Office of Planning and Budget | rescued (was misnamed "opb.png") | ✅ |

## Dropped from logo wall (2026-05-04)

- **Resurgens Atlanta** — was on Webflow site, not a real govtech customer (orthopedic healthcare group). The PNG file `art/customers/resurgens-atlanta.png` is orphaned in the repo (sandbox can't unlink it from here); safe to `git rm` from your Mac terminal: `git rm art/customers/resurgens-atlanta.png`

## What you owe me (when you have time)

Drop into `art/customers/` (replacing the .svg placeholders with same filenames):
- `nyc.svg` (or .png) — New York City seal/wordmark
- `georgia-dhs.svg` (or .png) — Georgia Department of Human Services seal/logo
- `city-of-atlanta.svg` (or .png) — City of Atlanta seal/wordmark
- `orange-county-ny.svg` (or .png) — Orange County NY seal

Alternatively just paste them in chat, I'll handle the file move.

## Naming convention rule (so future drops just work)

Filenames in `art/customers/` are referenced from `index.html` lines ~325-338 with the exact filename. If you replace `nyc.svg` with `nyc.png`, you'll also need to update the `<img src=...>` line in `index.html`. Keep the same filename when swapping (don't change extension) and you don't have to touch HTML.

For full-color PNGs (preferred for real seals): the homepage CSS automatically grayscale-filters them, color appears on hover. No prep needed.
