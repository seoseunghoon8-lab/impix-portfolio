import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { PageHeader, Section, Chip } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="What I've built"
        subtitle="Each project has its own page with the full story — architecture, problems, solutions, and results."
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                href={`/projects/${p.slug}`}
                className="card group flex h-full flex-col p-6 transition-colors hover:border-accent/50"
              >
                <div className="flex items-center justify-between">
                  <FolderGit2 className="text-accent" size={22} />
                  <ArrowUpRight className="text-muted transition-colors group-hover:text-accent" size={18} />
                </div>
                <h3 className="mt-4 text-lg font-semibold group-hover:text-accent">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
