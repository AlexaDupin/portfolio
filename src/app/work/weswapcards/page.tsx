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
    </main>
  );
}
