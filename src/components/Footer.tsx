import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { site, navLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <div className="text-lg font-bold">
            <span className="text-gradient">{site.name}</span>
          </div>
          <p className="mt-2 text-sm text-muted">{site.tagline}</p>
        </div>

        <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-muted transition-colors hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-3">
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent">
            <GithubIcon size={17} />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email" className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent">
            <Mail size={17} />
          </a>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. Built with Next.js &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
