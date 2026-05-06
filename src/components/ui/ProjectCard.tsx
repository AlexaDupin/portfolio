import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { StatusPill } from "@/components/ui/StatusPill";

interface CardStatus {
  label: string;
  variant: "filled" | "outlined" | "darkFilled";
}

interface ProjectCardProps {
  status: CardStatus;
  title: string;
  body: string;
  stack: string[];
  footerLabel?: string;
  href: string;
  screenshot?: { src: string; alt: string };
}

export default function ProjectCard({
  status,
  title,
  body,
  stack,
  footerLabel,
  href,
  screenshot,
}: ProjectCardProps) {
  const className = clsx(
    "flex h-full flex-col rounded-2xl border border-green/10 bg-card transition-all duration-200 hover:scale-[1.02] hover:border-green/25"
  );

  const inner = (
    <>
      {screenshot && (
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          width={800}
          height={450}
          className="h-auto w-full rounded-t-2xl object-cover"
        />
      )}
      <div className="flex flex-1 flex-col gap-4 p-7">
        <StatusPill variant={status.variant} label={status.label} />
        <div className="flex flex-col gap-3">
          <h3 className="text-green font-serif text-2xl">{title}</h3>
          <p className="text-green font-sans text-sm leading-relaxed">{body}</p>
        </div>
        <div className="mt-auto flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="border-green/20 text-green rounded-full border px-3 py-1 font-sans text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
          {footerLabel && <p className="text-mustard font-sans text-xs italic">{footerLabel}</p>}
        </div>
      </div>
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  );
}
