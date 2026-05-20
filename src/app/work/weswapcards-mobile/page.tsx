import type { Metadata } from "next";
import { StatusPill } from "@/components/ui/StatusPill";

export const metadata: Metadata = {
  title: "WeSwapCards Mobile",
  description:
    "A React Native rewrite in TypeScript with stricter type checking and a state-machine auth model.",
  robots: { index: false, follow: true },
};

export default function WeSwapCardsMobilePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-mustard h-0.5 w-10" />
          <span className="text-green font-sans text-xs tracking-widest uppercase">
            02 · CASE STUDY
          </span>
        </div>
        <span className="text-green/40 font-sans text-xs tracking-widest uppercase">
          PROJECT · MOBILE
        </span>
      </div>

      <h1 className="text-green mt-12 font-serif text-6xl leading-none md:text-8xl">
        WeSwapCards Mobile.
      </h1>

      <p className="text-green mt-8 font-serif text-xl leading-snug md:text-2xl">
        Same backend, new client. A React Native rewrite
        <br />
        <span className="text-mustard italic">coming soon.</span>
      </p>

      <div className="mt-6">
        <StatusPill variant="filled" label="IN PROGRESS" />
      </div>

      <div className="mt-8">
        <a
          href="https://github.com/AlexaDupin/WeSwapCards-native"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-mustard text-green rounded px-6 py-3 font-sans text-base transition-opacity hover:opacity-90"
        >
          View on GitHub →
        </a>
      </div>

      <div className="bg-green/10 mt-12 h-px" />

      <p className="text-green mt-8 font-sans text-base leading-relaxed">
        Full case study coming soon. In the meantime, the source is on GitHub.
      </p>
    </main>
  );
}
