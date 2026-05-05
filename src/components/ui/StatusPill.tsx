import clsx from "clsx";

export type StatusPillVariant = "filled" | "outlined" | "darkFilled" | "withDot";

export interface StatusPillProps {
  label: string;
  variant: StatusPillVariant;
  className?: string;
}

export function StatusPill({ label, variant, className }: StatusPillProps) {
  if (variant === "withDot") {
    return (
      <span
        className={clsx(
          "border-green/60 text-green inline-flex items-center gap-2 self-start rounded-full border px-4 py-2 font-sans text-sm",
          className
        )}
      >
        <span className="bg-signal h-2 w-2 flex-shrink-0 rounded-full" />
        {label}
      </span>
    );
  }

  const base =
    "inline-flex self-start items-center gap-1.5 rounded-full px-3 py-1 font-sans text-[11px] uppercase tracking-widest";

  if (variant === "filled") {
    return <span className={clsx(base, "bg-mustard text-green", className)}>{label}</span>;
  }

  if (variant === "outlined") {
    return <span className={clsx(base, "border-green text-green border", className)}>{label}</span>;
  }

  return (
    <span className={clsx(base, "bg-green text-mustard", className)}>
      <span className="bg-mustard h-1.5 w-1.5 flex-shrink-0 rounded-full" />
      {label}
    </span>
  );
}

export default StatusPill;
