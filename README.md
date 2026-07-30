# TECHBRANZZO SERVICES — website

Static site. No build step, no dependencies, no framework. Serve the folder:

```bash
python3 -m http.server 8899
```

Palette is black and white only. The single exception is the logo mark, which uses an
indigo→cyan gradient — change `--logo-a` / `--logo-b` at the top of `assets/css/style.css`
to rebrand it (the favicon in each page's `<link rel="icon">` uses the same two hex values).

## Pages

| File | What it is |
|---|---|
| `index.html` | Home — positioning, 12 verticals, stats, process, industries, staff augmentation, AI assistant section |
| `services.html` | All 20 verticals with the full service list (accordion), engagement models, tech stack. Each vertical has an anchor id, e.g. `services.html#ai-solutions` |
| `templates.html` | Template marketplace — search, category filter, sort, rent/buy toggle, licence table, FAQ |
| `template.html` | Product detail — reads `?id=<template-id>`, plan picker, rent-vs-buy table |
| `pricing.html` | Project packages, per-service price list, template licences, dedicated team rates, retainers (monthly/yearly toggle), **payment methods** at `#payments`, pricing FAQ |
| `about.html` | Company, delivery process, global coverage, industries |
| `contact.html` | Project brief form. Prefills from `?tpl=<id>&plan=<rent\|buy\|extended\|demo>` or `?service=<name>` |
| `legal.html` | Privacy, terms, licence agreement, refunds, support hours — one page, five anchors |
| `test-bot.html` | Self-check for the assistant's intent matcher. Open it; it must say 17/17 passed |

## Shared header & footer

Rendered once in `assets/js/main.js` (`NAV` array + footer template) and injected into the
`<div id="site-header">` / `<div id="site-footer">` slots on every page. Add a nav item in one
place and it appears everywhere — links cannot drift out of sync between pages.

## AI assistant

Floating widget on every page, injected by `main.js`. It matches questions against the `BOT`
knowledge base by scoring keyword overlap (not first-match), so "how much for a forex platform"
routes to the forex platform rather than generic pricing.

- **Edit answers**: the `BOT.intents` array in `assets/js/main.js`. Each entry is `{k: [keywords], a: 'answer html', q: [quick replies]}`.
- **After editing**, open `test-bot.html` and confirm it still passes.
- **Trigger it from a button**: add `data-ask="your question"` to any element.
- **To make it a real LLM agent**: replace the lookup in `send()` with a `fetch()` to your own
  endpoint and stream the reply back. Never put an API key in this file — it ships to the browser.

## Editing

- **Templates/prices** — `assets/js/data.js`. Categories and the filter bar derive from the `cat` field automatically.
- **Colours, spacing, fonts** — CSS variables at the top of `assets/css/style.css`.
- **Contact email** — `CONTACT_EMAIL` at the top of `assets/js/main.js`. **Empty by default**, so the
  form currently tells visitors enquiries aren't connected. Set it to your address to receive briefs.
  No email address or phone number is published anywhere in the markup — this constant is the only place one lives.
- **Social links** — placeholder profile URLs in the footer template in `main.js`. Point them at your real accounts.
- **Phone number** — removed. The site publishes no phone number; all routes lead to the contact form.

## Known gaps (deliberate)

- The contact form has no backend — it opens the visitor's mail client. Point it at Formspree or your API when you have one (marked with a `ponytail:` comment in `main.js`).
- No payment checkout is wired up. `pricing.html#payments` documents accepted methods; "Continue" on a template routes to the contact form with the template and plan prefilled. Add Stripe Checkout or PayPal buttons when you have merchant accounts.
- Template previews are generated greyscale mockups, not screenshots. Drop real images into `assets/img/` and swap the `mockup()` function in `main.js`.
- Prices, rates and stats throughout are placeholders based on your brief — review them before going live.
