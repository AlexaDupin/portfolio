@AGENTS.md

# Portfolio site — Claude Code context

## What this project is

A personal portfolio site for Alexa Dupin, a full-stack engineer based in Brooklyn, NY. Goal: get interviews and recruiter outreach for junior software engineering roles (React, Node, TypeScript, PostgreSQL).

Owner: Alexa Dupin. LinkedIn: linkedin.com/in/alexa-dupin. GitHub: github.com/AlexaDupin.

## Stack

- Next.js 16 (App Router) + TypeScript, React 19
- Tailwind CSS
- Deployed to Vercel (deploy connection deferred until homepage is ready)
- `src/` directory layout, `@/*` import alias

Do not install additional packages without asking first. If a feature requires a new dependency, propose it and wait for approval.

## Information architecture

Multi-page site. Routes:

- `/` — Homepage
- `/work/weswapcards` — Full case study (locked copy)
- `/work/weswapcards-mobile` — Placeholder, "Coming soon"
- `/work/actiively` — Placeholder, "Coming soon"
- `/about` — Placeholder for v1: single paragraph + LinkedIn link

## The single source of truth for copy

All site copy lives in `brand_assets/copy.md`. **Match exactly.** Do not paraphrase, summarize, rewrite, or improvise copy. If something seems missing from `copy.md`, ask before writing new copy.

## Voice rules (enforce in any generated prose)

- No em dashes anywhere in prose
- No "isn't X, it's Y" constructions
- Avoid colon-into-list patterns; prefer short sentences
- Plain, direct, declarative voice
- Italic typography is a styling choice, not a writing choice

These rules are easy to violate by default. Re-check generated copy against this list before finalizing.

## Design system

Defined in detail in `brand_assets/copy.md`. Summary:

- **Background:** cream `#F5EFE3`
- **Primary text:** dark green `#1F4239`
- **Accent:** mustard `#C68A14`
- **Signal:** bright green `#22c55e` — used only for availability/active/status indicators (e.g., the dot in the homepage "Available" pill). Not for general UI. Distinct from `green` which is the editorial brand color.
- **Display font:** editorial serif (Fraunces is the leading candidate; Playfair Display and Cormorant Garamond are alternates)
- **Body font:** Inter or system-ui sans

These are locked as Tailwind v4 `@theme` tokens inside `src/app/globals.css` before any UI is built. There is no `tailwind.config.ts` in this project (Tailwind v4 moved theme config into CSS). Do not introduce additional colors or fonts without asking.

## Assets

- `brand_assets/copy.md` — locked copy, source of truth
- `brand_assets/screenshots/` — high-res WeSwapCards captures

No resume PDF on this site. Do not add a resume link anywhere.

## Build conventions

- The Next.js scaffold did not create a `components/` folder. Create `src/components/ui/` when you build the first shared component.
- Page-specific components colocate under their route in `src/app/`.
- Shared primitives (Nav, Footer, StatusPill, MetricBadge, ExpandCard) go in `src/components/ui/`.
- The architecture diagram uses scoped illustration colors (purple, teal, gray from the case study mockup). These are inline Tailwind arbitrary values (`bg-[#EEEDFE]`, etc.), not brand tokens. Do not add them to `globals.css`.
- Visual diagrams should be implemented with HTML/CSS by default. SVG only when required for non-rectangular shapes, paths, or complex annotations. PNG/JPG raster is not allowed.
- Highlight cards in the case study expand in place on click. Build a controlled-state React component. **Do not** use `<details>`/`<summary>`.
- Mobile responsive: the asymmetric two-column hero collapses to stacked single column. The metrics strip re-flows to vertical. The three highlight cards stack vertically.

## Build order (phase 2)

1. Tailwind theme tokens + font setup (current step)
2. Nav and Footer as shared components
3. Homepage at `/`
4. WeSwapCards case study at `/work/weswapcards`
5. Wire and test outbound links (LinkedIn, GitHub)
6. Mark About, Mobile case study, and Actiively case study as "Coming soon"

Do not start a later step until I confirm the previous one is locked.

## How to work with me

- Make small, reviewable changes. One feature at a time.
- Show me the diff before applying any change that touches more than one file.
- If a decision isn't covered here or in `copy.md`, ask before improvising.
- If you notice something inconsistent between this file and `copy.md`, flag it — `copy.md` wins.

## Before finishing any task

After writing or modifying code, and before proposing a commit:

1. Run `npm run lint` — fix any errors. Warnings are case-by-case; flag them and ask.
2. Run `npm run format` — apply Prettier formatting.
3. If either tool reports issues you can't auto-fix, surface them to me before committing.

Do not skip these steps. Linted, formatted code is the bar for every commit.

## Commit conventions

Use Conventional Commits for every commit message. Format: `type(scope): subject`.

Common types: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `test`, `build`, `ci`.

Scope is optional but encouraged when the change is localized (e.g., `feat(nav): ...`, `fix(hero): ...`).

Subject is lowercase, imperative mood, no trailing period. Keep under ~70 chars.

Examples:

- `feat(nav): add shared nav component`
- `fix(hero): correct mobile breakpoint for two-column layout`
