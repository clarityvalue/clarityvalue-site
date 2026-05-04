# Contact / Demo Request form

> Source: https://www.clarityvalue.co/contacts
> Captured: 2026-05-04

## Page hero

> Need a demo? Want a consultation? We've got you covered.

Our team is here to answer your questions. Drop us a note to request more information or set up a demo. We'll get back to you ASAP.

## HubSpot form (currently in production)

```
Region:    na1
Portal ID: 22373530
Form ID:   6e7e2585-5856-4ec6-b4c7-2cc5902e533c
```

Embed snippet (live):
```html
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "22373530",
    formId: "6e7e2585-5856-4ec6-b4c7-2cc5902e533c"
  });
</script>
```

## Backup webflow form (also on the page, fallback)

Fields:
- Name (required)
- Work email (required)
- Department/Jurisdiction (required)
- Tell us more about your needs (optional, textarea)

Submit → "Get your free demo"
Success: "Thank you! We'll be in touch shortly to schedule a time to chat."

## Replacement options for new site

1. **Keep HubSpot embed** — most consistent with existing pipeline; demo requests still flow into Cristian's HubSpot CRM. One <script> tag and a wrapper div.
2. **Switch to Netlify Forms** — free up to 100/mo, captures into Netlify dashboard. Loses HubSpot CRM auto-creation. Add `data-netlify="true"` to a vanilla `<form>`.
3. **Hybrid** — Netlify Form for capture, Zapier or HubSpot API webhook to push to CRM. More moving parts.

Recommendation: keep HubSpot embed for v1 (zero CRM disruption), evaluate later.
