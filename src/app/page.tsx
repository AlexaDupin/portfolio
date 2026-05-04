import Image from "next/image";
import Link from "next/link";

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
              platform with 965+ users.
            </p>

            {/* Status pill */}
            <div className="border-green/60 text-green inline-flex items-center gap-2 self-start rounded border px-4 py-2 font-sans text-sm">
              <span className="bg-signal h-2 w-2 flex-shrink-0 rounded-full" />
              Available · Open to hybrid roles in NYC
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/work"
                className="bg-mustard text-green rounded-full px-6 py-3 font-sans text-sm transition-opacity hover:opacity-90"
              >
                See my work →
              </Link>
              <a
                href="https://www.linkedin.com/in/alexa-dupin"
                target="_blank"
                rel="noopener noreferrer"
                className="border-green text-green hover:bg-green/5 rounded-full border px-6 py-3 font-sans text-sm transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Right column */}
          <div>
            {/* Browser frame */}
            <div className="border-green/10 overflow-hidden rounded-lg border">
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
                965 users · 15K+ transactions
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
