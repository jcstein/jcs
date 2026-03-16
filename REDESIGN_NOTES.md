# Redesign Notes — jcstein.dev

## Overview

Complete redesign of Josh Stein's personal portfolio site. The goal was to fix the main issues (weak hero, no navigation, poor scanability, undifferentiated project list, hollow writing/design sections, no visual identity) while preserving the site's strengths (authentic voice, breadth of work, lightweight performance).

## Design Choices

### Art Direction
- **Palette:** Purple accent (#7c5cfc light / #9b80ff dark) on warm neutral surfaces. The purple nods to the Celestia/crypto ecosystem without being literal, and distinguishes the site from generic blue-link portfolios.
- **Typography:** JetBrains Mono for display/headings (technical developer personality), Satoshi from Fontshare for body text (clean, modern, underused). The monospace display font adds personality without being gimmicky.
- **Dark mode:** Full dark theme with explicit toggle. Dark mode uses deeper purples and warm dark surfaces (#0e0d10 bg).

### Structure
- **Hero:** Two-column layout with name, role badge, description, social CTAs on the left; animated code terminal window on the right showing a Celestia light node starting. Communicates "builder" identity immediately.
- **Sticky nav:** Anchor navigation with scroll-aware active states and background blur on scroll. Collapses to logo + theme toggle on mobile (< 640px).
- **About:** Two-column grid — bio text left, tech stack tags right. Condensed from the original 5-paragraph sprawl to 3 focused paragraphs.
- **Projects:** Featured grid with 1 hero card (2-col span) + 5 regular cards with category tags, descriptions, and tech meta. Collapsible `<details>` section for 20+ additional projects in two-column list.
- **Talks:** Grouped by year (2024, 2023, 2022) with title/venue in a clean row layout. Linked talks get hover states.
- **Writing & Tutorials:** Two-column split — blogs left, tutorials right — with arrow-link rows.
- **Design & Art:** Image gallery with captions + NFT gallery links.
- **Footer:** Green "available for collaboration" status indicator, verify/LinkedIn/GitHub links, Perplexity attribution.

### Custom SVG Wordmark
Inline SVG "jcs" in JetBrains Mono with a purple cursor bar — minimal, monospace, technical. Used in the nav.

## Ideas Reused from redesign-terminal

The `redesign-terminal` branch was reviewed and selectively drew from:

1. **Featured project cards** — The concept of differentiating featured projects into cards with category tags, descriptions, and tech metadata. Refined with a featured/hero card layout and better visual hierarchy.
2. **Tech stack tags** — The grid of technology pills. Kept the concept, refined the styling.
3. **Social link buttons** — CTA-style social links in the hero instead of inline text links.
4. **Theme toggle** — Manual dark/light toggle with icon swap. Improved with system preference detection.
5. **Section fade-in animation** — Intersection Observer-based reveal. Kept subtle.
6. **Status indicator in footer** — "Available for collaboration" with pulsing dot.
7. **Condensed about text** — The redesign-terminal version tightened the bio; this version follows that approach.

**Not reused:** Terminal-style `~/`, `$`, `#` prefixes on all headings (too gimmicky for broad appeal), the emoji-heavy project meta (`⚡`, `📁`), and the full terminal aesthetic throughout.

## Files Changed

| File | Change |
|---|---|
| `index.html` | Complete rewrite — new structure, nav, hero, sections, footer, attribution, JS |
| `style.css` | Complete rewrite — design tokens, custom palette, dark mode, responsive layout |
| `verify.html` | Updated to match new design system, added nav bar, attribution, theme toggle |
| `REDESIGN_NOTES.md` | New file (this document) |

## How to Run

```bash
# Install serve if not available
npm i -g serve

# Start dev server
serve . -l 3000 --no-clipboard

# Open http://localhost:3000
```

No build step required. Static HTML/CSS/JS only.

## QA Summary

Tested at:
- **Desktop:** 1440×900 — all sections, both themes, "More projects" toggle, nav active states
- **Mobile:** 390×844 — all sections, responsive layout, no horizontal overflow
- **Dark mode:** Verified hero, about, projects, talks, writing, design, footer
- **Verify page:** Confirmed styling consistency and functionality

No horizontal overflow on either viewport. All interactive elements (theme toggle, nav links, details toggle, project cards) function correctly.

## Remaining Notes

- The existing images (`dd.png`, `pn.png`, `vibes.png`, `jcs.png`) are preserved and referenced.
- Analytics (Plausible) is preserved.
- The site remains zero-dependency static HTML — no framework, no build tools.
- Perplexity Computer attribution is included in both `<head>` (meta tags + ASCII art comment) and `<footer>` (visible link) on all pages.
