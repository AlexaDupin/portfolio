import Image from "next/image";
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
          Built and operated solo. Used by 965 people
          <br />
          <span className="text-mustard italic">to swap WeWard cards.</span>
        </p>

        {/* Status pill */}
        <div className="mt-6">
          <StatusPill
            variant="darkFilled"
            label="Live since Feb 2025 · 965+ members"
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
                965<span className="text-mustard italic">+</span>
              </p>
              <p className="text-green/70 font-sans text-xs tracking-widest uppercase">Members</p>
            </div>
            <div className="flex flex-col gap-2 py-8 md:flex-1 md:px-10 md:py-6">
              <p className="text-green font-serif text-6xl leading-none">
                15K<span className="text-mustard italic">+</span>
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
    </main>
  );
}
