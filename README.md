# Bella's Spice Kitchen — Static Landing Page

A responsive one-page website for Bella's Spice Kitchen (DS Styling Car Wash, Witkoppen Road). It is plain HTML and CSS with no frameworks, CDNs, external fonts or build step. The only JavaScript is `script.js`, about 40 lines, for the site-menu dialog.

**Status: review build. Not yet approved for publication and not deployed.** It is pending owner visual approval and confirmation of menu prices, card photo variants and photo publication rights.

## Run locally
- Open `index.html` directly in a browser, or
- from this folder run `python -m http.server 8000` (or `npx http-server -p 8000`) and visit http://localhost:8000.

## Structure
| Path | Purpose |
|---|---|
| `index.html` | Page markup: header, hero, featured cards, Our Food, Menu, Find Us, footer, menu dialog |
| `styles.css` | Readable sectioned stylesheet with design tokens in `:root`. Breakpoints are 1180 / 900 / 640px |
| `script.js` | Native `<dialog>` site menu, with focus trap, Esc to close and in-page navigation |
| `assets/img/` | Responsive WebP images derived from Bella's own photographs, plus the supplied logo (lossless) |
| `assets/favicon-32.png`, `assets/apple-touch-icon.png` | Icons generated from the supplied compact logo |

All food imagery is Bella's own photography; no stock or AI-generated food is used. The image pipeline, asset register, design references and QA evidence are kept in the agency workspace, outside this repository.

## Hosting notes
- Any static host works. Publish this folder as the site root; no build command is needed.
- `README.md`, `.gitignore` and `.gitattributes` don't need to be published if the host allows excluding them.

## Motion readiness (not active)
Hero layers carry `data-layer="panel|dish|copy|cards"`, and each translates by `var(--shift-y, 0px)`. A future, separately approved motion pass only needs to set `--shift-y` per layer inside a `prefers-reduced-motion: no-preference` guard.

## Content not shown, by design
Opening hours, delivery or ordering claims, map pin, street number, email, reviews and historic specials are left out until confirmed by the owner. Enquiries go to WhatsApp +27 76 401 8249.
