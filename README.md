# Deploying clarityvalue.co to Netlify

A one-evening playbook. Total time: ~45 minutes if DNS cooperates, ~24h if it doesn't.

---

## What's in this folder

| File | Purpose |
|---|---|
| `index.html` | Homepage |
| `land-management.html`, `human-resources.html`, … | The 7 module pages |
| `404.html` | Friendly not-found page (uses the Solstice mark) |
| `module-shell.css`, `module-shell.js` | Shared nav + footer for module pages |
| `art/`, `fonts/`, `tokens/` | Logo, watercolor washes, fonts, design tokens |
| `_redirects` | Netlify URL rewrites (pretty URLs + future Webflow→Netlify redirects) |
| `_headers` | Cache + security headers |
| `netlify.toml` | Build config (none needed — this is plain static HTML) |

You can open `index.html` directly in a browser to verify locally before deploying.

---

## Step 1 — Get a Netlify account (5 min)

1. Go to **netlify.com** → Sign up (use GitHub or email)
2. You'll land in your dashboard. The free "Starter" tier is plenty.

## Step 2 — Deploy this folder (2 min, no joke)

There are two ways. Both work. **Drag-and-drop is fastest for a first deploy.**

### Option A — Drag and drop (simplest)

1. In your Netlify dashboard, click **"Add new site" → "Deploy manually"**
2. Drag the entire `deploy/` folder into the upload zone
3. Wait ~30 seconds. Netlify gives you a temporary URL like `silly-name-12345.netlify.app`
4. Open it. Verify it looks right.

### Option B — Git connected (recommended once you're past step 2A)

If you push this project to GitHub:
1. Netlify → "Add new site" → "Import from Git"
2. Pick the repo, set **Publish directory: `deploy`**, no build command needed
3. Every git push auto-deploys

---

## Step 3 — Connect your domain (10 min + DNS wait)

This is the only "scary" step. Before you do it, **double-check the homepage on the temporary Netlify URL** — once DNS flips, your live site is what's here.

1. In Netlify, your site → **Domain management** → "Add custom domain" → `clarityvalue.co`
2. Netlify will show you DNS records to set. **Two paths:**

   ### Path 1 — Move DNS to Netlify (cleaner)
   - Go to your domain registrar (where you bought clarityvalue.co — probably GoDaddy, Namecheap, Cloudflare, or Google Domains)
   - Find "Nameservers" — change them to Netlify's (Netlify shows you the four, e.g. `dns1.p01.nsone.net`)
   - DNS propagation: 1–24 hours
   - Netlify auto-provisions a free Let's Encrypt SSL cert once DNS resolves

   ### Path 2 — Keep DNS at registrar, just point an A record
   - At your registrar, create an A record: `@ → 75.2.60.5` (Netlify's load balancer)
   - And a CNAME: `www → your-site.netlify.app`
   - Same SSL provisioning happens automatically

   Path 1 is recommended. Less to manage.

3. **Disable Webflow's hosting** for clarityvalue.co — in Webflow, project settings → Hosting → either downgrade to "Site Plan: None" or remove the custom domain mapping. **Do this AFTER Netlify confirms DNS is live**, otherwise you'll have a few hours of downtime.

---

## Step 4 — Set up forms (15 min, optional but you'll want this)

Webflow forms won't migrate. Netlify Forms is the easy replacement — free up to 100 submissions/month.

For any `<form>` on the site, add `data-netlify="true"`:

```html
<form name="demo-request" data-netlify="true">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <button type="submit">Request a demo</button>
</form>
```

That's it — submissions appear in your Netlify dashboard under "Forms." You can also wire email notifications and Slack pings.

The current homepage doesn't have a working form yet — the "Request a pilot" buttons are placeholders. When we want a real form, I'll add one.

---

## Step 5 — What you keep, what you lose vs. Webflow

### You keep
- Full design control (every change I make goes live the same day)
- Speed (Netlify's CDN is faster than Webflow's by ~2x in most regions)
- HTTPS / SSL (automatic, free, renews itself)
- Free tier covers your traffic for years

### You lose
- **Webflow CMS** — if you have blog posts or case studies as CMS items, they don't carry over. Two options:
  1. Hard-code them as static pages (fine for low-volume content like 5 case studies)
  2. Add a headless CMS later (Sanity, Contentful, or just a Markdown folder in git)
- **Webflow Designer** — no more visual editing. Edits happen in code. For you that's been working with me; for a future marketing hire, that's a hiring constraint
- **Webflow Forms** — replace with Netlify Forms (above)

---

## Step 6 — Things to do AFTER you go live

1. **Submit to Google Search Console** — add clarityvalue.co, upload sitemap (I'll generate one when we're ready)
2. **Add analytics** — Plausible (privacy-friendly, $9/mo) or just use Netlify's free built-in analytics
3. **Cancel Webflow billing** once you're confident the migration stuck (don't rush this — keep it for a month as a fallback)
4. **Tell me anything that breaks** — I'll fix it

---

## Common gotchas

- **DNS still pointing at Webflow after 24h** — usually means TTL is set high at your registrar. Lower it to 300s the day before you switch.
- **Some images don't load** — likely a path issue. Static hosting is case-sensitive. If you renamed anything, double-check.
- **Webflow keeps "stealing" the domain back** — make sure you've removed the custom domain inside Webflow's project settings, not just hidden it.

---

## If you get stuck

Send me the error message or a screenshot. The whole thing is recoverable — even if you point DNS at Netlify and panic, you can flip back to Webflow's nameservers in five minutes.
