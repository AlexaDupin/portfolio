"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-cream w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-green font-serif text-2xl">
          AD<span className="text-mustard">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/work"
            className="text-green hover:text-mustard font-sans text-sm transition-colors"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-green hover:text-mustard font-sans text-sm transition-colors"
          >
            About
          </Link>
          <a
            href="https://github.com/AlexaDupin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green hover:text-mustard font-sans text-sm transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alexa-dupin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green text-cream rounded-full px-5 py-2 font-sans text-sm transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile: CTA + hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <a
            href="https://www.linkedin.com/in/alexa-dupin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green text-cream rounded-full px-4 py-2 font-sans text-sm"
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
        <div className="border-green/10 bg-cream flex flex-col gap-5 border-t px-6 py-5 md:hidden">
          <Link
            href="/work"
            onClick={() => setOpen(false)}
            className="text-green font-sans text-sm"
          >
            Work
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-green font-sans text-sm"
          >
            About
          </Link>
          <a
            href="https://github.com/AlexaDupin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green font-sans text-sm"
          >
            GitHub
          </a>
        </div>
      )}
    </header>
  );
}
