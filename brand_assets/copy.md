# Portfolio copy — locked

Last updated: May 2026

This file is the single source of truth for every word on the portfolio site. Do not paraphrase, summarize, or rewrite this copy when building components. Match exactly.

---

## Design system

- **Background:** cream `#F5EFE3`
- **Primary text:** dark green `#1F4239`
- **Accent:** mustard `#C68A14`
- **Display font:** editorial serif (Fraunces, Playfair Display, or Cormorant Garamond)
- **Body font:** Inter or system-ui sans

### Voice rules

- No em dashes anywhere in prose
- No "isn't X, it's Y" constructions
- Avoid colon-into-list patterns; prefer short sentences
- Plain, direct, declarative voice
- Italic typography is a styling choice, not a writing choice

---

## Global

### Nav

- **Logo:** AD. (period in mustard)
- **Links:** Work · About · Contact
- **CTA button (right side, dark green pill):** Get in touch

### Footer

- **Left:** Brooklyn, NY · Available for hybrid roles
- **Left, second line, smaller:** © 2026 Alexa Dupin
- **Right:** LinkedIn · GitHub

---

## Homepage (/)

### Hero

- **Eyebrow (small caps, letter-spaced):** ALEXA DUPIN · BROOKLYN, NY

- **Headline (3 lines, large serif, third line italic mustard):**
  Full-stack
  engineer who
  _ships._

- **Supporting paragraph (sans, two lines):**
  TypeScript, React, Node, PostgreSQL. Currently running WeSwapCards, a production platform with 980+ users.

- **Status pill (outlined, with green dot):**
  Available · Open to hybrid roles in NYC

- **CTAs:**
  - Primary (mustard fill): See my work →
  - Secondary (outlined): Connect on LinkedIn

- **Text-link row (small, faded, below CTAs):**
  GitHub · LinkedIn

- **Right column visual:**
  WeSwapCards screenshot in a browser frame (URL bar reads "weswapcards.com")

- **Metric badge (dark green slab, overlapping bottom of screenshot):**
  - Top label (small caps, mustard dot): LIVE IN PRODUCTION
  - Body (serif): 980 users · 16K+ transactions

- **Decorative element:** dashed serpentine curve between the two columns (purely typographic ornament)

### Other Work section

- **Eyebrow:** OTHER WORK
- **Heading (serif):** Also worth a look.
- **Section footer link (small text-link, mustard, below the two cards):** See all work → (links to `/work`)

#### Card 1 — WeSwapCards Mobile

- **Status pill:** IN PROGRESS (mustard fill)
- **Title (serif):** WeSwapCards Mobile.
- **Body:** A React Native rewrite in TypeScript with stricter type checking and a state-machine auth model. Same backend, new client.
- **Stack chips:** React Native · TypeScript · Expo Router

#### Card 2 — Actiively

- **Status pill:** PORTFOLIO (outlined)
- **Title (serif):** Actiively.
- **Body:** A full-stack web app built as a portfolio piece during my development training. Frontend, backend, database, and JWT auth.
- **Stack chips:** React · Node · PostgreSQL · JWT
- **Footer label (small, faded, below stack chips):** Case study coming soon
- **Card click target:** GitHub repo (until case study ships, then update to `/work/actiively`)

---

## WeSwapCards case study (/work/weswapcards)

### Section 1 — Hero

- **Eyebrow left (with mustard rule):** 01 · CASE STUDY
- **Eyebrow right (faded):** PROJECT · FULL STACK

- **Title (very large serif):** WeSwapCards.

- **Italic line (serif italic, 2 lines, second line mustard):**
  Built and operated solo. Used by 980 people
  _to swap WeWard cards._

- **Status pill (dark green fill, mustard dot):**
  Live since Feb 2025 · 980+ members

- **CTAs:**
  - Primary (mustard fill): Visit live site
  - Secondary (outlined): View on GitHub

- **Below CTAs:** Hero screenshot of WeSwapCards in a browser frame

### Section 2 — Overview

- **Eyebrow:** 02 · OVERVIEW
- **Heading (serif):** A real product, not a portfolio piece.

- **Two columns of body prose:**
  - **Left column:**
    WeSwapCards is a platform where collectors of WeWard cards find swap partners, message about trades, and track progress toward complete sets. It launched in February 2025 after four months of development.

  - **Right column:**
    I built it because no good tool existed for the WeWard community. Collectors were coordinating swaps across scattered group chats and losing track of who had what. WeSwapCards gave them one place to find each other, talk, and trade. A year later, WeWard launched the same feature inside their own app.

- **Metrics strip (three numbers in serif with small-caps labels, separated by hairline rules):**
  - 980+ MEMBERS
  - 16K+ TRADES COORDINATED
  - 200K+ MESSAGES EXCHANGED

- **Italic engagement line (serif italic, below the metrics strip, smaller than headings):**
  _Averaged 317 monthly active users from July 2025 to February 2026, peaking at 334 in January 2026, the month before WeWard launched a competing feature inside their own app._

### Section 3 — My Role

- **Eyebrow:** 03 · MY ROLE

- **Italic body (large serif italic, 3 lines, prominent):**
  _I designed, built, and operate WeSwapCards solo:_
  _architecture, frontend, backend, database, auth,_
  _deployment, and ongoing user support._

### Section 4 — Architecture

- **Eyebrow:** 04 · ARCHITECTURE
- **Heading (serif):** A clean separation of concerns.

- **Body:**
  A React frontend talks to an Express REST API backed by PostgreSQL, with Clerk handling authentication. The shape is deliberately conventional. The decisions worth talking about live in the highlights below.

- **Layered stack graphic (three horizontal bands stacked vertically, each labeled):**
  - **Frontend (purple band):** React 18, React Router 6, Context + useReducer
  - **API (teal band):** Node 22, Express 4, Clerk authentication middleware
  - **Data (gray band):** PostgreSQL, pg driver

### Section 5 — Technical highlights

- **Eyebrow:** 05 · TECHNICAL HIGHLIGHTS
- **Heading (serif):** Three decisions worth a closer look.
- **Subheading (small, sans):** Tap any card to read the deep-dive.

- **Layout:** Three-column row of cards, equal width. Each card expands in place on click (or links to a sub-page) to reveal the deep-dive content. Card itself is the click target.

#### Card 01 — Production ops

**Card preview (visible by default):**

- **Number (large, faded mustard):** 01.
- **Eyebrow:** PRODUCTION OPS
- **Title (serif):** Debugging a Node/OpenSSL mismatch in production.
- **Summary (sans, ~40 words):**
  The API stopped responding. The frontend kept loading, but every request returned a Passenger error page. The crash was happening before my code ran. The fix was in the runtime, not the application.
- **CTA:** Read the deep-dive →

**Deep-dive (revealed on click):**

The first sign was a Passenger error page at `api.weswapcards.com`. No 5xx, no Express error. The runtime itself wasn't starting, which narrowed the problem space immediately. Whatever was wrong was happening before any of my code had a chance to run.

o2switch exposes raw log files per subdomain. I pulled the most recent one for the API and found the error pattern repeating:

```
/opt/alt/alt-nodejs16/root/usr/bin/node:
/opt/alt/alt-nodejs16/root/usr/lib64/libcrypto.so.1.1:
version `OPENSSL_1_1_1e' not found
(required by /opt/alt/alt-nodejs16/root/usr/lib64/libnode.so.93)
```

Three things stood out. The path still referenced `alt-nodejs16` (Node 16, well past EOL). The missing symbol was an OpenSSL version the system no longer provided. And the failure was in `node` itself, before any JavaScript got evaluated.

This was an ABI mismatch. The Node binary was linked against one version of `libcrypto` and the system had moved to another. Nothing in my Express app, my dependencies, or my route handlers could have caused it or fixed it.

o2switch lets you choose the Node version per application from its technical panel. I updated the API from Node 16 to Node 22 and restarted. Service was back up.

**What I'd do differently:** Set up structured logging with Pino or Winston, and external uptime monitoring, before the next runtime bump. Logs in the host's file manager, manually grep'd, is not a sustainable ops loop. I'd rather learn about the next outage from a Slack ping than from a user email.

#### Card 02 — Authentication & identity

**Card preview:**

- **Number:** 02.
- **Eyebrow:** AUTHENTICATION & IDENTITY
- **Title:** Decoupling auth identity from domain identity.
- **Summary (~30 words):**
  Clerk handles authentication, but Clerk users and application users aren't the same thing. I separated them from the start. Authorization runs in four layers, joined by a single column.
- **CTA:** Read the deep-dive →

**Deep-dive:**

A common mistake in apps that use third-party auth is to treat the auth provider's user object as the application user. It works at first. Then you need to swap providers, support multiple auth methods, store domain-specific user data, or write tests that don't depend on the auth provider being available, and the cost of the shortcut shows up.

The two identities:

- **Clerk** owns authentication: sessions, credentials, OAuth, password resets.
- **The `explorer` table** owns domain identity: the username, the foreign-key target for swaps, messages, and card collections.

They're joined by `explorer.userid`, which holds the Clerk UID. The consequence: Clerk could be replaced with another provider by changing what populates that column. Domain logic doesn't move.

Authorization runs in four layers:

```js
app.use(clerkMiddleware()); // populates req.auth
router.post('/login/user', requireAuth(), handler); // unauthenticated → reject
const explorer = await getExplorerIdByClerkId(req.auth.userId);
if (explorer.id !== Number(req.params.explorerId))
  // ownership check
  return res.status(403).end();
// + DB unique constraints as the final guard
```

Two pieces of this design I'm proud of:

A **Clerk webhook** with Svix signature verification handles `user.deleted`. When a user removes their Clerk account, the matching `explorer` is deleted, preventing orphan domain data.

A frontend route guard called `RequireUsername` catches the "Clerk-authenticated but no Explorer record yet" state on every protected route. If signup is interrupted partway through, the system recovers on the next navigation rather than silently breaking.

**What I'd do differently:** The duplicate-UID branch in the registration flow is a `409` fallback. A single `INSERT ... ON CONFLICT` upsert at the database level would be cleaner. It's one query instead of two and removes a class of race conditions entirely.

#### Card 03 — Frontend architecture

**Card preview:**

- **Number:** 03.
- **Eyebrow:** FRONTEND ARCHITECTURE
- **Title:** Lifting identity and session state to App-level Context.
- **Summary (~28 words):**
  State was scattered across components. I migrated to an App-level store on Context and useReducer, deliberately not Redux. The discipline is in what's global and what isn't.
- **CTA:** Read the deep-dive →

**Deep-dive:**

The deliberate call was not to introduce Redux. The global slice I actually needed was small: two namespaces (`explorer` and `swap`) and around eleven actions. Redux's biggest wins (devtools time-travel, middleware ecosystem, RTK Query) are real but priced for applications with much larger global state than mine.

The known tax with Context is re-renders. Every consumer re-renders when any part of the value changes. I solved it by splitting state and dispatch into two separate contexts:

```jsx
<StateContext.Provider value={state}>
  <DispatchContext.Provider value={dispatch}>
    <AuthWatcher />
    <BootAuthLoader hasExplorer={hasExplorer} />
    {children}
  </DispatchContext.Provider>
</StateContext.Provider>
```

Components that only dispatch, the majority, never re-render when state changes.

The discipline is in what's global and what isn't.

| State                                        | Lives in         |
| -------------------------------------------- | ---------------- |
| `explorer.id`, `explorer.name`               | Global store     |
| Active swap: target user, card, conversation | Global store     |
| Page-scoped async data                       | Feature reducers |
| Loading flags, alerts, form values           | Local `useState` |

State that crosses routes goes global. State scoped to a single feature stays in that feature. Ephemeral UI stays in `useState`. Nothing in the global store is a data cache.

UI components don't consume context directly. Feature logic lives in `useXLogic` hooks (`useSwapLogic`, `useDashboardLogic`), and only those hooks touch the store. UI receives plain values and callbacks. The store could be swapped for Zustand or Redux by editing the logic hooks alone.

**What I'd do differently:** The migration left a few leftovers. An unused `explorer/created` reducer case. A `state.userUID` field that's written but never read. Worth a cleanup pass. None of them is causing a bug, which is itself evidence the architecture's seams are sound.

### Section 6 — Reflection

- **Eyebrow:** 06 · REFLECTION

- **Italic body (large serif italic, prominent):**
  _A year of operating WeSwapCards taught me where I'd build differently. I started with Sqitch migrations and drifted off them; the conversation and message tables exist only in the database now, not in version control. Testing was an afterthought I keep meaning to come back to. None of it is breaking anything in production, but each one is something I'd do from day one if I rebuilt it. Activity has dropped since WeWard launched their native version, and the mobile rebuild I'm working on now is partly a response: making the experience good enough on a different surface to compete on different terms._

### Section 7 — Mobile callout

This section is a dark slab (dark green fill) sitting after the reflection. White text, mustard accents.

- **Eyebrow (mustard, small caps):** WHAT'S NEXT
- **Title (large serif, cream):** WeSwapCards Mobile.
- **Italic supporting line (cream, 2 lines):**
  _Same backend, new client. A React Native rewrite in TypeScript,_
  _and the architectural lessons from a year of running the web app._
- **Button (mustard fill, dark text):** Continue to the mobile rebuild →

### Section 8 — Footer (case study only)

- **Left:** ← PREVIOUS / Back to all work
- **Right:** NEXT PROJECT → / Actiively (mustard)

---

## About page (/about)

### Eyebrow

ABOUT

### Hero — typographic statement

Three-line large serif. Italic mustard starts mid-line on line 2 and continues through line 3.

- Line 1 (regular, dark green): `I build production software in TypeScript,`
- Line 2 (regular, dark green): `React, and Node. ` followed by italic mustard: `Before that, 13 years`
- Line 3 (italic, mustard): `in international product at Booking.com.`

### Body prose

Two paragraphs, single column, Inter sans, dark green.

**Paragraph 1:**
I'm a full-stack engineer working in TypeScript, React, Node, and PostgreSQL. WeSwapCards has been the center of my technical work for the last year and a half. Designing the architecture was the start. Operating it has taught me the rest.

**Paragraph 2:**
Before this, I spent thirteen years as a Localization Specialist at Booking.com, where my work touched the systems that served millions of users in dozens of markets. I came to engineering through software development training, and most of what I bring beyond the code itself comes from the years I spent watching and contributing to how a global product actually works.

### Practical details

- **Eyebrow:** PRACTICAL DETAILS
- **Statement (serif, two lines):**
  - Line 1: `Based in Brooklyn, NY. Open to hybrid roles in the`
  - Line 2: `New York area. ` followed by italic mustard: `No sponsorship required.`

### Contact

- **Eyebrow:** CONTACT
- **Statement (serif, single line):** `The best way to reach me is on LinkedIn.`
- **CTA button (mustard fill, dark green text):** `Connect on LinkedIn →` linking to `https://www.linkedin.com/in/alexa-dupin` (new tab)

---

## Mobile case study (/work/weswapcards-mobile)

Status: not yet drafted. For v1 launch, mark as "Coming soon" in the homepage Other Work card and disable the link in the WeSwapCards case study mobile callout.

---

## Actiively case study (/work/actiively)

Status: not yet drafted. Structure outlined below for future drafting. Lighter template than WeSwapCards: four sections instead of eight, focused on team and process rather than solo ownership.

### Section 1 — Hero

- **Eyebrow left (with mustard rule):** 02 · CASE STUDY
- **Eyebrow right (faded):** PROJECT · TEAM
- **Title:** Actiively.
- **Italic line (2 lines, second line mustard):**
  [TBD: a positioning line that signals the team dimension]
  _[TBD: italic mustard close]_
- **Status pill:** [TBD: e.g., "Bootcamp final project · Team of 4"]
- **CTAs:**
  - Primary: View on GitHub
  - Secondary: View live (if applicable, otherwise drop)

### Section 2 — My Role

- **Eyebrow:** MY ROLE

This section needs to do something different from WeSwapCards. WeSwapCards establishes ownership ("I designed, built, and operate solo"). Actiively needs to establish _contribution within a team_. Worth distinguishing what was individually authored versus collaboratively decided.

Suggested shape:

- One sentence on team size and structure
- One sentence on the parts you owned individually
- One sentence on cross-team contributions (concept pitch, technical support to teammates, stand-up facilitation)

### Section 3 — Team & process

- **Eyebrow:** TEAM & PROCESS
- **Heading:** [TBD]

This is the section that justifies why Actiively gets its own page. Should cover:

- Team size and roles (4 people)
- Gitflow as the branching model: feature branches, develop branch, release process, merge strategy
- Agile/scrum cadence: sprint length, stand-up format, retros
- Tooling: GitHub (PRs, code review), Jira (or whichever issue tracker), Slack/Discord (or whichever async channel)
- One concrete example of a cross-team coordination moment (a merge conflict resolved, a feature scoped down, a teammate unblocked)

This is where to lean into specifics. "Used agile" is generic. "Two-week sprints, daily 15-minute stand-ups, Friday retros" is concrete. Specificity is what makes the team experience feel real to a hiring manager who's evaluating whether you can work with their existing team.

### Section 4 — Technical highlights

- **Eyebrow:** TECHNICAL HIGHLIGHTS
- **Heading:** [TBD]

One or two highlights, not three. Actiively is supporting evidence, not the centerpiece. Pick the most distinctive technical decision you owned individually. Same card structure as WeSwapCards (number, eyebrow, title, summary, deep-dive on click).

Possible angles to consider when drafting:

- The JWT auth flow (if it's distinct from a tutorial implementation)
- A schema or query decision
- A specific React or Node pattern you introduced to the team
- A code review or refactoring contribution that the team adopted

### Section 5 — Footer

- **Left:** ← PREVIOUS / WeSwapCards (mustard)
- **Right:** NEXT PROJECT → / Back to all work

---

## Build notes

- The case study highlight cards expand in place on click rather than linking to separate pages. Build a controlled-state expand component in React; do not use `<details>`/`<summary>`.
- Mobile responsive: the asymmetric two-column hero collapses to stacked single column. The metrics strip re-flows to vertical. The three highlight cards stack vertically.
- All screenshots in `brand_assets/screenshots/` should be high-resolution captures of the real product. Replace placeholders before launch.
- Architecture diagram (the layered stack graphic) is implemented as SVG with the brand colors, not as static PNG.
- Test all outbound links (LinkedIn, GitHub) before deploying.

## Work index page (/work)

Status: minimalist grid layout. Three cards side by side on desktop, stacked on mobile. No intro prose.

### Page heading

- **Eyebrow (small caps, letter-spaced):** PORTFOLIO
- **Heading (very large serif):** Work.

### Cards

Three cards, equal width, displayed in a responsive grid (3 columns desktop, 1 column mobile).

#### Card 1 — WeSwapCards

- **Status pill (dark green fill, mustard dot):** LIVE
- **Title (serif):** WeSwapCards.
- **Body:** A production platform where collectors of WeWard cards find swap partners and trade. Built and operated solo. Live since February 2025.
- **Stack chips:** React · Node · PostgreSQL · Clerk
- **Card click target:** `/work/weswapcards`

#### Card 2 — WeSwapCards Mobile

Reuses the exact card from the Homepage Other Work section. Click target updated:

- **Status pill:** IN PROGRESS (mustard fill)
- **Title (serif):** WeSwapCards Mobile.
- **Body:** A React Native rewrite in TypeScript with stricter type checking and a state-machine auth model. Same backend, new client.
- **Stack chips:** React Native · TypeScript · Expo Router
- **Card click target:** `/work/weswapcards-mobile` (placeholder page, see below)

#### Card 3 — Actiively

Reuses the exact card from the Homepage Other Work section.

- **Status pill:** PORTFOLIO (outlined)
- **Title (serif):** Actiively.
- **Body:** A full-stack web app built as a portfolio piece during my development training. Frontend, backend, database, and JWT auth.
- **Stack chips:** React · Node · PostgreSQL · JWT
- **Footer label (small, faded, below stack chips):** Case study coming soon
- **Card click target:** `/work/actiively`

---

## WeSwapCards Mobile placeholder page (/work/weswapcards-mobile)

Minimal placeholder until the full case study is drafted later this week.

- **Eyebrow (with mustard rule):** 02 · CASE STUDY
- **Eyebrow right (faded):** PROJECT · MOBILE
- **Title (very large serif):** WeSwapCards Mobile.
- **Italic line (serif italic, 2 lines, second line mustard):**
  Same backend, new client. A React Native rewrite
  _coming soon._
- **Status pill:** IN PROGRESS (mustard fill)
- **CTA (single):** View on GitHub → links to `https://github.com/AlexaDupin/WeSwapCards-native`
- **Body paragraph:**
  Full case study coming soon. In the meantime, the source is on GitHub.

## Actiively placeholder page (/work/actiively)

Minimal placeholder, mirroring the WSC Mobile placeholder structure. Full case study to be drafted later.

- **Eyebrow (with mustard rule):** 03 · CASE STUDY
- **Eyebrow right (faded):** PROJECT · TEAM
- **Title (very large serif):** Actiively.
- **Italic line (serif italic, 2 lines, second line mustard):**
  A full-stack web app built with a team of four
  _coming soon._
- **Status pill:** PORTFOLIO (outlined)
- **CTA (single):** View on GitHub → links to `https://github.com/AlexaDupin/actiively`
- **Body paragraph:**
  Full case study coming soon. In the meantime, the source is on GitHub.
