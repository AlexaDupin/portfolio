import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[55fr_45fr] md:items-center">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <p className="font-sans text-xs uppercase tracking-widest text-green/60">
              ALEXA DUPIN · BROOKLYN, NY
            </p>

            {/* Headline */}
            <h1 className="font-serif text-5xl leading-none text-green md:text-7xl">
              Full-stack
              <br />
              engineer who
              <br />
              <span className="italic text-mustard">ships.</span>
            </h1>

            {/* Supporting paragraph */}
            <p className="font-sans text-base leading-relaxed text-green">
              TypeScript, React, Node, PostgreSQL. Currently running
              WeSwapCards, a production platform with 965+ users.
            </p>

            {/* Status pill */}
            <div className="inline-flex items-center gap-2 self-start rounded border border-green/60 px-4 py-2 font-sans text-sm text-green">
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-signal" />
              Available · Open to hybrid roles in NYC
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/work"
                className="rounded-full bg-mustard px-6 py-3 font-sans text-sm text-green transition-opacity hover:opacity-90"
              >
                See my work →
              </Link>
              <a
                href="https://www.linkedin.com/in/alexa-dupin"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-green px-6 py-3 font-sans text-sm text-green transition-colors hover:bg-green/5"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Right column */}
          <div>
            {/* Browser frame */}
            <div className="overflow-hidden rounded-lg border border-green/10">
              <div className="flex items-center gap-1.5 border-b border-green/10 bg-green/5 px-3 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                <span className="ml-2 font-sans text-[11px] text-green/40">
                  weswapcards.com
                </span>
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
            <div className="relative z-10 -mt-10 ml-6 w-fit rounded-xl bg-green px-6 py-4">
              <div className="mb-1.5 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-signal" />
                <span className="font-sans text-[10px] uppercase tracking-widest text-mustard">
                  Live in Production
                </span>
              </div>
              <p className="whitespace-nowrap font-serif text-lg text-cream">
                965 users · 15K+ transactions
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
