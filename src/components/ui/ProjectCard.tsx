import Link from "next/link";

interface StatusPillProps {
  label: string;
  variant: "filled" | "outlined" | "darkFilled";
}

interface ProjectCardProps {
  status: StatusPillProps;
  title: string;
  body: string;
  stack: string[];
  footerLabel?: string;
  href: string;
}

function StatusPill({ label, variant }: StatusPillProps) {
  const base =
    "inline-flex self-start items-center gap-1.5 rounded-full px-3 py-1 font-sans text-[11px] uppercase tracking-widest";

  if (variant === "filled") {
    return <span className={`${base} bg-mustard text-green`}>{label}</span>;
  }
  if (variant === "outlined") {
    return <span className={`${base} border-green text-green border`}>{label}</span>;
  }
  return (
    <span className={`${base} bg-green text-mustard`}>
      <span className="bg-mustard h-1.5 w-1.5 rounded-full" />
      {label}
    </span>
  );
}

export default function ProjectCard({
  status,
  title,
  body,
  stack,
  footerLabel,
  href,
}: ProjectCardProps) {
  const className =
    "flex h-full flex-col gap-4 rounded-2xl border border-green/10 bg-card p-7 transition-all duration-200 hover:scale-[1.02] hover:border-green/25";

  const inner = (
    <>
      <StatusPill {...status} />
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
