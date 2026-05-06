import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectCard";
import { StatusPill } from "@/components/ui/StatusPill";

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[55fr_45fr] md:items-center">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <p className="text-green/60 font-sans text-xs tracking-widest uppercase">
              ALEXA DUPIN · BROOKLYN, NY
            </p>

            {/* Headline */}
            <h1 className="text-green font-serif text-5xl leading-none md:text-7xl">
              Full-stack
              <br />
              engineer who
              <br />
              <span className="text-mustard italic">ships.</span>
            </h1>

            {/* Supporting paragraph */}
            <p className="text-green font-sans text-base leading-relaxed">
              TypeScript, React, Node, PostgreSQL. Currently running WeSwapCards, a production
              platform with 980+ users.
            </p>

            {/* Status pill */}
            <StatusPill variant="withDot" label="Available · Open to hybrid roles in NYC" />

            {/* CTA row */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/work"
                className="bg-mustard text-green rounded px-6 py-3 font-sans text-sm transition-opacity hover:opacity-90"
              >
                See my work →
              </Link>
              <a
                href="https://www.linkedin.com/in/alexa-dupin"
                target="_blank"
                rel="noopener noreferrer"
                className="border-green text-green hover:bg-green/5 rounded border px-6 py-3 font-sans text-sm transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Right column */}
          <Link href="/work/weswapcards" className="block">
            {/* Browser frame */}
            <div className="border-green/10 hover:border-green/25 overflow-hidden rounded-lg border transition-colors">
              <div className="border-green/10 bg-green/5 flex items-center gap-1.5 border-b px-3 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                <span className="text-green/40 ml-2 font-sans text-[11px]">weswapcards.com</span>
              </div>
              <Image
                src="/screenshots/wsc-home.jpg"
                alt="WeSwapCards homepage"
                width={2101}
                height={1164}
                className="h-auto w-full"
                priority
              />
            </div>

            {/* Metric badge — negative margin pulls it up to overlap the frame bottom */}
            <div className="bg-green relative z-10 -mt-10 ml-6 w-fit rounded-xl px-6 py-4">
              <div className="mb-1.5 flex items-center gap-1.5">
                <span className="bg-signal h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                <span className="text-mustard font-sans text-[10px] tracking-widest uppercase">
                  Live in Production
                </span>
              </div>
              <p className="text-cream font-serif text-lg whitespace-nowrap">
                980 users · 16K+ transactions
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Other Work */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="bg-green/10 h-px" />

        <div className="py-20">
          {/* Eyebrow with leading rule */}
          <div className="flex items-center gap-4">
            <div className="bg-mustard h-0.5 w-12" />
            <span className="text-green font-sans text-xs tracking-widest uppercase">
              OTHER WORK
            </span>
          </div>

          <h2 className="text-green mt-8 font-serif text-4xl">Also worth a look.</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <ProjectCard
              status={{ label: "IN PROGRESS", variant: "filled" }}
              title="WeSwapCards Mobile."
              body="A React Native rewrite in TypeScript with stricter type checking and a state-machine auth model. Same backend, new client."
              stack={["React Native", "TypeScript", "Expo Router"]}
              href="/work/weswapcards-mobile"
            />
            <ProjectCard
              status={{ label: "PORTFOLIO", variant: "outlined" }}
              title="Actiively."
              body="A full-stack web app built as a portfolio piece during my development training. Frontend, backend, database, and JWT auth."
              stack={["React", "Node", "PostgreSQL", "JWT"]}
              footerLabel="Case study coming soon →"
              href="/work/actiively"
            />
          </div>

          <div className="mt-10 flex justify-end">
            <Link
              href="/work"
              className="text-mustard font-sans text-sm transition-opacity hover:opacity-70"
            >
              See all work →
            </Link>
          </div>
        </div>

        <div className="bg-green/10 h-px" />
      </section>
    </main>
  );
}
