import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-4 pt-14 sm:pt-20">
      <Reveal>
        {eyebrow && (
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">{subtitle}</p>}
      </Reveal>
    </div>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-6xl px-5 py-10 ${className}`}>{children}</section>;
}

export function Chip({ children, active = false }: { children: ReactNode; active?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
        active
          ? "border-accent/60 bg-accent/10 text-accent"
          : "border-border bg-surface text-muted"
      }`}
    >
      {children}
    </span>
  );
}
