"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl text-green">
          AD<span className="text-mustard">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/work"
            className="font-sans text-sm text-green hover:text-mustard transition-colors"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="font-sans text-sm text-green hover:text-mustard transition-colors"
          >
            About
          </Link>
          <a
            href="https://github.com/AlexaDupin"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-green hover:text-mustard transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alexa-dupin"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm bg-green text-cream rounded-full px-5 py-2 hover:opacity-90 transition-opacity"
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile: CTA + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <a
            href="https://www.linkedin.com/in/alexa-dupin"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm bg-green text-cream rounded-full px-4 py-2"
          >
            Get in touch
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-green"
          >
            {open ? (
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M5 5l12 12M17 5L5 17" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M3 7h16M3 12h16M3 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-green/10 bg-cream px-6 py-5 flex flex-col gap-5">
          <Link
            href="/work"
            onClick={() => setOpen(false)}
            className="font-sans text-sm text-green"
          >
            Work
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="font-sans text-sm text-green"
          >
            About
          </Link>
          <a
            href="https://github.com/AlexaDupin"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-green"
          >
            GitHub
          </a>
        </div>
      )}
    </header>
  );
}
