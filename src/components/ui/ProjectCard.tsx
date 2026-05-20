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
  screenshot?: {
    src: string;
    alt: string;
    orientation?: "landscape" | "portrait";
  };
  headingLevel?: "h2" | "h3";
}

export default function ProjectCard({
  status,
  title,
  body,
  stack,
  footerLabel,
  href,
  screenshot,
  headingLevel,
}: ProjectCardProps) {
  const Heading = headingLevel ?? "h3";
  const className = clsx(
    "flex h-full flex-col rounded-2xl border border-green/10 bg-card transition-all duration-200 hover:scale-[1.02] hover:border-green/25"
  );

  const screenshotEl = screenshot ? (
    screenshot.orientation === "portrait" ? (
      <div className="bg-green/[0.08] flex aspect-video items-center justify-center rounded-t-2xl">
        <div className="border-green/25 relative aspect-[9/16] h-[82%] overflow-hidden rounded-2xl border">
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            fill
            sizes="(max-width: 768px) 50vw, 200px"
            className="object-cover"
          />
        </div>
      </div>
    ) : (
      <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
    )
  ) : null;

  const inner = (
    <>
      {screenshotEl}
      <div className="flex flex-1 flex-col gap-4 p-7">
        <StatusPill variant={status.variant} label={status.label} />
        <div className="flex flex-col gap-3">
          <Heading className="text-green font-serif text-2xl">{title}</Heading>
          <p className="text-green font-sans text-base leading-relaxed">{body}</p>
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
          {footerLabel && <p className="text-mustard font-sans text-base italic">{footerLabel}</p>}
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
