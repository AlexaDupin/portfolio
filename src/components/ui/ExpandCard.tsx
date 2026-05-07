"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ExpandCardProps {
  number: string;
  eyebrow: string;
  title: string;
  summary: string;
  children: ReactNode;
}

export function ExpandCard({ number, eyebrow, title, summary, children }: ExpandCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "bg-card rounded-2xl border p-7 transition-colors duration-200",
        open ? "border-green/20" : "border-green/10 hover:border-green/20 cursor-pointer"
      )}
    >
      <button onClick={() => setOpen((o) => !o)} aria-expanded={open} className="w-full text-left">
        <p
          aria-hidden="true"
          className="text-mustard/25 font-serif text-8xl leading-none italic select-none"
        >
          {number}
        </p>
        <p className="text-green mt-4 font-sans text-xs tracking-widest uppercase">{eyebrow}</p>
        <h3 className="text-green mt-3 font-serif text-xl leading-snug">{title}</h3>
        <p className="text-green mt-3 font-sans text-sm leading-relaxed">{summary}</p>
        <p className="text-mustard mt-5 font-sans text-sm">
          {open ? "Close ↑" : "Read the deep-dive →"}
        </p>
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-in-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="bg-green/10 my-6 h-px" />
          <div className="space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default ExpandCard;
