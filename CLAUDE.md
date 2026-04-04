# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML portfolio with no build system or dependencies. Open `index.html` directly in a browser, or serve with any HTTP server:

```bash
python -m http.server 8000
# or
npx http-server .
```

No npm, no build step, no tests.

## Architecture

The site is data-driven: content lives in `data/*.js` as plain JS objects, `js/render.js` reads them and injects HTML into the DOM. This separation means content changes almost never require touching rendering logic.

**Data layer** (`data/`):
- `personal.js` — Name, handle, hero text, nav links, footer
- `about.js`, `skills.js`, `projects.js`, `experience.js`, `education.js` — Section content
- `terminal-fs.js` — Virtual filesystem; auto-generates markdown file contents from the other data objects for use in the interactive terminal

**Rendering** (`js/render.js`): One function per section (`renderHero()`, `renderSkills()`, etc.), called on DOMContentLoaded.

**Behavior** (`js/`):
- `main.js` — Custom cursor (desktop only), scroll reveal via IntersectionObserver, smooth anchor scroll, mobile touch detection
- `terminal.js` — Full interactive terminal engine supporting `cd`, `ls`, `cat`, `help`, `history`, `clear`

**Styling** (`css/`):
- `base.css` — Design tokens (dark theme: `#0a0a0a` bg, `#00ff88` green accent), reset, nav, layout
- `sections.css` — Per-section styles (hero, about, skills, etc.)
- `terminal.css` — Terminal component
- `responsive.css` — Mobile/tablet breakpoints

Fonts: JetBrains Mono (monospace body) + Syne (display headings), loaded from Google Fonts.

## Making Changes

- **Content/copy** → edit the relevant file in `data/`
- **Terminal `cat` output** → edit `data/terminal-fs.js`
- **Styles** → edit the appropriate `css/*.css` file
- **Core logic** (`js/render.js`, `js/main.js`, `js/terminal.js`) — only touch these for behavioral/structural changes, not content

## Key Design Constraints

- No external JS dependencies — pure vanilla JS, no jQuery, no frameworks
- The virtual terminal (`terminal.js`) navigates the `TERMINAL_FS` object defined in `terminal-fs.js`; the filesystem structure must match what that object exposes
- Custom cursor is disabled on touch devices; the terminal shows a "tap to type" hint on mobile
