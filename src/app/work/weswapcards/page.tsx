import Image from "next/image";
import Link from "next/link";
import { ExpandCard } from "@/components/ui/ExpandCard";
import { StatusPill } from "@/components/ui/StatusPill";

export default function WeSwapCardsPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Eyebrow row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-mustard h-0.5 w-10" />
            <span className="text-green font-sans text-xs tracking-widest uppercase">
              01 · CASE STUDY
            </span>
          </div>
          <span className="text-green/40 font-sans text-xs tracking-widest uppercase">
            PROJECT · FULL STACK
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-green mt-12 font-serif text-6xl leading-none md:text-8xl">
          WeSwapCards.
        </h1>

        {/* Italic statement */}
        <p className="text-green mt-8 font-serif text-xl leading-snug md:text-2xl">
          Built and operated solo. Used by 980 people
          <br />
          <span className="text-mustard italic">to swap WeWard cards.</span>
        </p>

        {/* Status pill */}
        <div className="mt-6">
          <StatusPill
            variant="darkFilled"
            label="Live since Feb 2025 · 980+ members"
            className="text-cream tracking-normal normal-case"
          />
        </div>

        {/* CTA row */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://weswapcards.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mustard text-green rounded px-6 py-3 font-sans text-sm transition-opacity hover:opacity-90"
          >
            Visit live site
          </a>
          <a
            href="https://github.com/AlexaDupin/WeSwapCards"
            target="_blank"
            rel="noopener noreferrer"
            className="border-green text-green hover:bg-green/5 rounded border px-6 py-3 font-sans text-sm transition-colors"
          >
            View on GitHub
          </a>
        </div>

        {/* Browser frame */}
        <div className="border-green/10 mt-16 overflow-hidden rounded-lg border">
          <div className="border-green/10 bg-green/5 flex items-center gap-1.5 border-b px-3 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
            <span className="text-green/40 ml-2 font-sans text-[11px]">weswapcards.com</span>
          </div>
          <Image
            src="/screenshots/wsc-swap.jpg"
            alt="WeSwapCards swap interface"
            width={2103}
            height={1174}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      {/* Section 2 — Overview */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
        <div className="bg-green/10 h-px" />
        <div className="pt-20 md:pt-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="bg-mustard h-0.5 w-10" />
            <span className="text-green font-sans text-xs tracking-widest uppercase">
              02 · OVERVIEW
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-green mt-8 font-serif text-4xl">
            A real product, not a portfolio piece.
          </h2>

          {/* Two-column prose */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <p className="text-green font-sans text-base leading-relaxed">
              WeSwapCards is a platform where collectors of WeWard cards find swap partners, message
              about trades, and track progress toward complete sets. It launched in February 2025
              after four months of development.
            </p>
            <p className="text-green font-sans text-base leading-relaxed">
              I built it because no good tool existed for the WeWard community. Collectors were
              coordinating swaps across scattered group chats and losing track of who had what.
              WeSwapCards gave them one place to find each other, talk, and trade. A year later,
              WeWard launched the same feature inside their own app.
            </p>
          </div>

          {/* Metrics strip */}
          <div className="divide-green/15 mt-16 flex flex-col divide-y md:flex-row md:divide-x md:divide-y-0">
            <div className="flex flex-col gap-2 py-8 md:flex-1 md:py-6 md:pr-10">
              <p className="text-green font-serif text-6xl leading-none">
                980<span className="text-mustard italic">+</span>
              </p>
              <p className="text-green/70 font-sans text-xs tracking-widest uppercase">Members</p>
            </div>
            <div className="flex flex-col gap-2 py-8 md:flex-1 md:px-10 md:py-6">
              <p className="text-green font-serif text-6xl leading-none">
                16K<span className="text-mustard italic">+</span>
              </p>
              <p className="text-green/70 font-sans text-xs tracking-widest uppercase">
                Trades coordinated
              </p>
            </div>
            <div className="flex flex-col gap-2 py-8 md:flex-1 md:py-6 md:pl-10">
              <p className="text-green font-serif text-6xl leading-none">
                200K<span className="text-mustard italic">+</span>
              </p>
              <p className="text-green/70 font-sans text-xs tracking-widest uppercase">
                Messages exchanged
              </p>
            </div>
          </div>

          {/* Engagement line */}
          <p className="text-green mt-10 font-serif text-xl leading-relaxed italic">
            Averaged 317 monthly active users from July 2025 to February 2026,
            <br />
            peaking at 334 in January 2026, the month before WeWard launched a<br />
            competing feature inside their own app.
          </p>
        </div>
      </section>

      {/* Section 3 — My Role */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
        <div className="bg-green/10 h-px" />
        <div className="pt-20 md:pt-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="bg-mustard h-0.5 w-10" />
            <span className="text-green font-sans text-xs tracking-widest uppercase">
              03 · MY ROLE
            </span>
          </div>

          {/* Large italic block */}
          <p className="text-green mt-10 font-serif text-3xl leading-relaxed italic md:text-4xl">
            I designed, built, and operate WeSwapCards solo:
            <br />
            architecture, frontend, backend, database, auth,
            <br />
            deployment, and ongoing user support.
          </p>
        </div>
      </section>

      {/* Section 4 — Architecture */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
        <div className="bg-green/10 h-px" />
        <div className="pt-20 md:pt-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="bg-mustard h-0.5 w-10" />
            <span className="text-green font-sans text-xs tracking-widest uppercase">
              04 · ARCHITECTURE
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-green mt-8 font-serif text-4xl">A clean separation of concerns.</h2>

          {/* Body */}
          <p className="text-green mt-6 font-sans text-base leading-relaxed">
            A React frontend talks to an Express REST API backed by PostgreSQL, with Clerk handling
            authentication. The shape is deliberately conventional.
          </p>

          {/* API Load strip */}
          <div className="mt-12">
            <p className="text-green/60 font-sans text-[10px] tracking-widest uppercase">
              API LOAD
            </p>
            <div className="divide-green/15 mt-4 flex flex-col divide-y md:flex-row md:items-center md:divide-x md:divide-y-0">
              <div className="flex items-baseline gap-2 py-5 md:py-4 md:pr-10">
                <p className="text-green font-serif text-4xl leading-none">
                  35K<span className="text-mustard italic">+</span>
                </p>
                <p className="text-green/70 font-sans text-xs tracking-widest uppercase">
                  Daily Calls
                </p>
              </div>
              <div className="flex items-baseline gap-2 py-5 md:py-4 md:pl-10">
                <p className="text-green font-serif text-4xl leading-none">
                  1M<span className="text-mustard italic">+</span>
                </p>
                <p className="text-green/70 font-sans text-xs tracking-widest uppercase">
                  Peak Monthly Requests
                </p>
              </div>
            </div>
            <p className="text-green/70 mt-5 font-serif text-sm italic">
              Sustained across a year in production.
            </p>
          </div>

          {/* Stack diagram */}
          <div className="mt-12 flex flex-col gap-5">
            {/* Frontend */}
            <div className="rounded-lg border border-[#534AB7] bg-[#EEEDFE] px-6 py-5 md:px-8">
              <p className="font-sans text-[15px] leading-tight font-medium text-[#26215C]">
                Frontend
              </p>
              <p className="mt-1 font-sans text-[13px] leading-tight text-[#3C3489]">
                React 18, React Router 6, Context + useReducer
              </p>
            </div>
            {/* API */}
            <div className="rounded-lg border border-[#0F6E56] bg-[#E1F5EE] px-6 py-5 md:px-8">
              <p className="font-sans text-[15px] leading-tight font-medium text-[#04342C]">API</p>
              <p className="mt-1 font-sans text-[13px] leading-tight text-[#085041]">
                Node 22, Express 4, Clerk authentication middleware
              </p>
            </div>
            {/* Data */}
            <div className="rounded-lg border border-[#5F5E5A] bg-[#F1EFE8] px-6 py-5 md:px-8">
              <p className="font-sans text-[15px] leading-tight font-medium text-[#2C2C2A]">Data</p>
              <p className="mt-1 font-sans text-[13px] leading-tight text-[#444441]">
                PostgreSQL, pg driver
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Technical highlights */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
        <div className="bg-green/10 h-px" />
        <div className="pt-20 md:pt-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="bg-mustard h-0.5 w-10" />
            <span className="text-green font-sans text-xs tracking-widest uppercase">
              05 · TECHNICAL HIGHLIGHTS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-green mt-8 font-serif text-4xl">
            Three decisions worth a closer look.
          </h2>

          {/* Subheading */}
          <p className="text-green/60 mt-3 font-sans text-sm">
            Tap any card to read the deep-dive.
          </p>

          {/* Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Card 01 — Production ops */}
            <ExpandCard
              number="01."
              eyebrow="PRODUCTION OPS"
              title="Debugging a Node/OpenSSL mismatch in production."
              summary="The API stopped responding. The frontend kept loading, but every request returned a Passenger error page. The crash was happening before my code ran. The fix was in the runtime, not the application."
            >
              <p className="text-green font-sans text-sm leading-relaxed">
                The first sign was a Passenger error page at{" "}
                <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                  api.weswapcards.com
                </code>
                . No 5xx, no Express error. The runtime itself wasn&apos;t starting, which narrowed
                the problem space immediately. Whatever was wrong was happening before any of my
                code had a chance to run.
              </p>
              <p className="text-green font-sans text-sm leading-relaxed">
                o2switch exposes raw log files per subdomain. I pulled the most recent one for the
                API and found the error pattern repeating:
              </p>
              <pre className="overflow-x-auto rounded-lg bg-[#F0EAD9] p-4 font-mono text-[13px] leading-relaxed">
                <code>{`/opt/alt/alt-nodejs16/root/usr/bin/node:\n/opt/alt/alt-nodejs16/root/usr/lib64/libcrypto.so.1.1:\nversion \`OPENSSL_1_1_1e' not found\n(required by /opt/alt/alt-nodejs16/root/usr/lib64/libnode.so.93)`}</code>
              </pre>
              <p className="text-green font-sans text-sm leading-relaxed">
                Three things stood out. The path still referenced{" "}
                <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                  alt-nodejs16
                </code>{" "}
                (Node 16, well past EOL). The missing symbol was an OpenSSL version the system no
                longer provided. And the failure was in{" "}
                <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                  node
                </code>{" "}
                itself, before any JavaScript got evaluated.
              </p>
              <p className="text-green font-sans text-sm leading-relaxed">
                This was an ABI mismatch. The Node binary was linked against one version of{" "}
                <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                  libcrypto
                </code>{" "}
                and the system had moved to another. Nothing in my Express app, my dependencies, or
                my route handlers could have caused it or fixed it.
              </p>
              <p className="text-green font-sans text-sm leading-relaxed">
                o2switch lets you choose the Node version per application from its technical panel.
                I updated the API from Node 16 to Node 22 and restarted. Service was back up.
              </p>
              <p className="text-green font-sans text-sm leading-relaxed">
                <strong>What I&apos;d do differently:</strong> Set up structured logging with Pino
                or Winston, and external uptime monitoring, before the next runtime bump. Logs in
                the host&apos;s file manager, manually grep&apos;d, is not a sustainable ops loop.
                I&apos;d rather learn about the next outage from a Slack ping than from a user
                email.
              </p>
            </ExpandCard>

            {/* Card 02 — Authentication & identity */}
            <ExpandCard
              number="02."
              eyebrow="AUTHENTICATION & IDENTITY"
              title="Decoupling auth identity from domain identity."
              summary="Clerk handles authentication, but Clerk users and application users aren't the same thing. I separated them from the start. Authorization runs in four layers, joined by a single column."
            >
              <p className="text-green font-sans text-sm leading-relaxed">
                A common mistake in apps that use third-party auth is to treat the auth
                provider&apos;s user object as the application user. It works at first. Then you
                need to swap providers, support multiple auth methods, store domain-specific user
                data, or write tests that don&apos;t depend on the auth provider being available,
                and the cost of the shortcut shows up.
              </p>
              <p className="text-green font-sans text-sm leading-relaxed">The two identities:</p>
              <ul className="text-green marker:text-mustard list-outside list-disc space-y-2 pl-5 font-sans text-sm leading-relaxed">
                <li>
                  <strong>Clerk</strong> owns authentication: sessions, credentials, OAuth, password
                  resets.
                </li>
                <li>
                  <strong>
                    The{" "}
                    <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                      explorer
                    </code>{" "}
                    table
                  </strong>{" "}
                  owns domain identity: the username, the foreign-key target for swaps, messages,
                  and card collections.
                </li>
              </ul>
              <p className="text-green font-sans text-sm leading-relaxed">
                They&apos;re joined by{" "}
                <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                  explorer.userid
                </code>
                , which holds the Clerk UID. The consequence: Clerk could be replaced with another
                provider by changing what populates that column. Domain logic doesn&apos;t move.
              </p>
              <p className="text-green font-sans text-sm leading-relaxed">
                Authorization runs in four layers:
              </p>
              <pre className="overflow-x-auto rounded-lg bg-[#F0EAD9] p-4 font-mono text-[13px] leading-relaxed">
                <code>{`app.use(clerkMiddleware()); // populates req.auth\nrouter.post('/login/user', requireAuth(), handler); // unauthenticated → reject\nconst explorer = await getExplorerIdByClerkId(req.auth.userId);\nif (explorer.id !== Number(req.params.explorerId))\n  // ownership check\n  return res.status(403).end();\n// + DB unique constraints as the final guard`}</code>
              </pre>
              <p className="text-green font-sans text-sm leading-relaxed">
                Two pieces of this design I&apos;m proud of:
              </p>
              <p className="text-green font-sans text-sm leading-relaxed">
                A <strong>Clerk webhook</strong> with Svix signature verification handles{" "}
                <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                  user.deleted
                </code>
                . When a user removes their Clerk account, the matching{" "}
                <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                  explorer
                </code>{" "}
                is deleted, preventing orphan domain data.
              </p>
              <p className="text-green font-sans text-sm leading-relaxed">
                A frontend route guard called{" "}
                <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                  RequireUsername
                </code>{" "}
                catches the &ldquo;Clerk-authenticated but no Explorer record yet&rdquo; state on
                every protected route. If signup is interrupted partway through, the system recovers
                on the next navigation rather than silently breaking.
              </p>
              <p className="text-green font-sans text-sm leading-relaxed">
                <strong>What I&apos;d do differently:</strong> The duplicate-UID branch in the
                registration flow is a{" "}
                <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                  409
                </code>{" "}
                fallback. A single{" "}
                <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                  INSERT ... ON CONFLICT
                </code>{" "}
                upsert at the database level would be cleaner. It&apos;s one query instead of two
                and removes a class of race conditions entirely.
              </p>
            </ExpandCard>

            {/* Card 03 — Frontend architecture */}
            <ExpandCard
              number="03."
              eyebrow="FRONTEND ARCHITECTURE"
              title="Lifting identity and session state to App-level Context."
              summary="State was scattered across components. I migrated to an App-level store on Context and useReducer, deliberately not Redux. The discipline is in what's global and what isn't."
            >
              <p className="text-green font-sans text-sm leading-relaxed">
                The deliberate call was not to introduce Redux. The global slice I actually needed
                was small: two namespaces (
                <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                  explorer
                </code>{" "}
                and{" "}
                <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                  swap
                </code>
                ) and around eleven actions. Redux&apos;s biggest wins (devtools time-travel,
                middleware ecosystem, RTK Query) are real but priced for applications with much
                larger global state than mine.
              </p>
              <p className="text-green font-sans text-sm leading-relaxed">
                The known tax with Context is re-renders. Every consumer re-renders when any part of
                the value changes. I solved it by splitting state and dispatch into two separate
                contexts:
              </p>
              <pre className="overflow-x-auto rounded-lg bg-[#F0EAD9] p-4 font-mono text-[13px] leading-relaxed">
                <code>{`<StateContext.Provider value={state}>\n  <DispatchContext.Provider value={dispatch}>\n    <AuthWatcher />\n    <BootAuthLoader hasExplorer={hasExplorer} />\n    {children}\n  </DispatchContext.Provider>\n</StateContext.Provider>`}</code>
              </pre>
              <p className="text-green font-sans text-sm leading-relaxed">
                Components that only dispatch, the majority, never re-render when state changes.
              </p>
              <p className="text-green font-sans text-sm leading-relaxed">
                The discipline is in what&apos;s global and what isn&apos;t.
              </p>
              <table className="w-full border-collapse font-sans text-sm">
                <thead>
                  <tr>
                    <th className="text-green/70 border-green/20 border-b pb-2 text-left text-xs tracking-widest uppercase">
                      State
                    </th>
                    <th className="text-green/70 border-green/20 border-b pb-2 text-left text-xs tracking-widest uppercase">
                      Lives in
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-green/10 border-b">
                    <td className="text-green py-2 pr-4">
                      <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                        explorer.id
                      </code>
                      ,{" "}
                      <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                        explorer.name
                      </code>
                    </td>
                    <td className="text-green py-2">Global store</td>
                  </tr>
                  <tr className="border-green/10 border-b">
                    <td className="text-green py-2 pr-4">
                      Active swap: target user, card, conversation
                    </td>
                    <td className="text-green py-2">Global store</td>
                  </tr>
                  <tr className="border-green/10 border-b">
                    <td className="text-green py-2 pr-4">Page-scoped async data</td>
                    <td className="text-green py-2">Feature reducers</td>
                  </tr>
                  <tr>
                    <td className="text-green py-2 pr-4">Loading flags, alerts, form values</td>
                    <td className="text-green py-2">
                      Local{" "}
                      <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                        useState
                      </code>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="text-green font-sans text-sm leading-relaxed">
                State that crosses routes goes global. State scoped to a single feature stays in
                that feature. Ephemeral UI stays in{" "}
                <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                  useState
                </code>
                . Nothing in the global store is a data cache.
              </p>
              <p className="text-green font-sans text-sm leading-relaxed">
                UI components don&apos;t consume context directly. Feature logic lives in{" "}
                <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                  useXLogic
                </code>{" "}
                hooks (
                <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                  useSwapLogic
                </code>
                ,{" "}
                <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                  useDashboardLogic
                </code>
                ), and only those hooks touch the store. UI receives plain values and callbacks. The
                store could be swapped for Zustand or Redux by editing the logic hooks alone.
              </p>
              <p className="text-green font-sans text-sm leading-relaxed">
                <strong>What I&apos;d do differently:</strong> The migration left a few leftovers.
                An unused{" "}
                <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                  explorer/created
                </code>{" "}
                reducer case. A{" "}
                <code className="rounded bg-[#F0EAD9] px-1.5 py-0.5 font-mono text-[13px]">
                  state.userUID
                </code>{" "}
                field that&apos;s written but never read. Worth a cleanup pass. None of them is
                causing a bug, which is itself evidence the architecture&apos;s seams are sound.
              </p>
            </ExpandCard>
          </div>
        </div>
      </section>

      {/* Section 6 — Reflection */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
        <div className="bg-green/10 h-px" />
        <div className="pt-20 md:pt-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="bg-mustard h-0.5 w-10" />
            <span className="text-green font-sans text-xs tracking-widest uppercase">
              06 · REFLECTION
            </span>
          </div>

          {/* Large italic paragraph */}
          <p className="text-green mt-10 font-serif text-2xl leading-relaxed italic md:text-3xl">
            A year of operating WeSwapCards taught me where I&apos;d build differently. I started
            with Sqitch migrations and drifted off them; the conversation and message tables exist
            only in the database now, not in version control. Testing was an afterthought I keep
            meaning to come back to. None of it is breaking anything in production, but each one is
            something I&apos;d do from day one if I rebuilt it. Activity has dropped since WeWard
            launched their native version, and the mobile rebuild I&apos;m working on now is partly
            a response: making the experience good enough on a different surface to compete on
            different terms.
          </p>
        </div>
      </section>

      {/* Section 7 — Mobile callout */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
        <div className="bg-green rounded-2xl px-10 py-16 md:px-16 md:py-20">
          {/* Eyebrow */}
          <p className="text-mustard font-sans text-xs tracking-widest uppercase">
            WHAT&apos;S NEXT
          </p>

          {/* Title */}
          <h2 className="text-cream mt-6 font-serif text-4xl md:text-5xl">WeSwapCards Mobile.</h2>

          {/* Italic supporting line */}
          <p className="text-cream mt-6 font-serif text-xl leading-snug italic md:text-2xl">
            Same backend, new client. A React Native rewrite in TypeScript,
            <br />
            and the architectural lessons from a year of running the web app.
          </p>

          {/* Button */}
          <Link
            href="/work/weswapcards-mobile"
            className="bg-mustard text-green mt-10 inline-flex rounded px-6 py-3 font-sans text-sm transition-opacity hover:opacity-90"
          >
            Continue to the mobile rebuild →
          </Link>
        </div>
      </section>

      {/* Section 8 — Case study footer */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20">
        <div className="bg-green/15 h-px" />
        <div className="mt-16 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Left: back to all work */}
          <Link href="/work" className="flex flex-col gap-1">
            <span className="text-mustard font-sans text-xs tracking-widest uppercase">
              ← PREVIOUS
            </span>
            <span className="text-green font-sans text-sm">Back to all work</span>
          </Link>

          {/* Right: next project */}
          <Link
            href="/work/weswapcards-mobile"
            className="flex flex-col gap-1 md:items-end md:text-right"
          >
            <span className="text-mustard font-sans text-xs tracking-widest uppercase">NEXT →</span>
            <span className="text-green font-sans text-sm">WeSwapCards Mobile</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
