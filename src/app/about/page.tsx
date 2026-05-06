export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      {/* Eyebrow */}
      <div className="flex items-center gap-4">
        <div className="bg-mustard h-0.5 w-12" />
        <span className="text-green font-sans text-xs tracking-widest uppercase">ABOUT</span>
      </div>

      {/* Hero typographic statement */}
      <p className="text-green mt-12 font-serif text-4xl leading-tight md:text-5xl">
        I build production software in TypeScript, <br className="hidden xl:inline" />
        React, and Node.{" "}
        <span className="text-mustard italic">
          Before that, 13 years <br className="hidden xl:inline" />
          in international product at Booking.com.
        </span>
      </p>

      {/* Short accent hairline */}
      <div className="bg-green/25 mt-12 h-px w-20" />

      {/* Body prose */}
      <div className="mt-10 max-w-2xl space-y-6">
        <p className="text-green font-sans text-base leading-relaxed">
          I&apos;m a full-stack engineer working in TypeScript, React, Node, and PostgreSQL.
          WeSwapCards has been the center of my technical work for the last year and a half.
          Designing the architecture was the start. Operating it has taught me the rest.
        </p>
        <p className="text-green font-sans text-base leading-relaxed">
          Before this, I spent thirteen years as a Localization Specialist at Booking.com, where my
          work touched the systems that served millions of users in dozens of markets. I came to
          engineering through software development training, and most of what I bring beyond the
          code itself comes from the years I spent watching and contributing to how a global product
          actually works.
        </p>
      </div>

      {/* Divider */}
      <div className="bg-green/10 mt-16 h-px" />

      {/* Practical details */}
      <div className="mt-16">
        <div className="flex items-center gap-4">
          <div className="bg-mustard h-0.5 w-12" />
          <span className="text-green font-sans text-xs tracking-widest uppercase">
            PRACTICAL DETAILS
          </span>
        </div>
        <p className="text-green mt-8 max-w-2xl font-serif text-2xl leading-snug">
          Based in Brooklyn, NY. Open to hybrid roles in the New York area.{" "}
          <span className="text-mustard italic">No sponsorship required.</span>
        </p>
      </div>

      {/* Divider */}
      <div className="bg-green/10 mt-16 h-px" />

      {/* Contact */}
      <div className="mt-16">
        <div className="flex items-center gap-4">
          <div className="bg-mustard h-0.5 w-12" />
          <span className="text-green font-sans text-xs tracking-widest uppercase">CONTACT</span>
        </div>
        <p className="text-green mt-8 max-w-2xl font-serif text-2xl">
          The best way to reach me is on LinkedIn.
        </p>
        <div className="mt-8">
          <a
            href="https://www.linkedin.com/in/alexa-dupin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mustard text-green max-w-2xl rounded-md px-6 py-3 font-sans text-sm transition-opacity hover:opacity-90"
          >
            Connect on LinkedIn →
          </a>
        </div>
      </div>
    </main>
  );
}
