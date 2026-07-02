import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { Section, Chip } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? project.title : "Project" };
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-lg font-bold">{title}</h2>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex gap-2 text-sm text-muted">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <Section className="max-w-3xl">
      <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground">
        <ArrowLeft size={15} /> All projects
      </Link>

      <Reveal className="mt-6">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">{project.year}</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{project.title}</h1>
        <p className="mt-4 text-lg text-muted">{project.overview}</p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
          <div className="flex gap-2">
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-accent/60">
                <GithubIcon size={15} /> Code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-accent/60">
                <ExternalLink size={15} /> Demo
              </a>
            )}
          </div>
        </div>
      </Reveal>

      <div className="mt-10 space-y-8">
        <List title="Objectives" items={project.objectives} />

        <div>
          <h2 className="text-lg font-bold">Architecture</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{project.architecture}</p>
        </div>

        <div>
          <h2 className="text-lg font-bold">Technologies</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </div>

        <List title="Development process" items={project.process} />
        <List title="Problems encountered" items={project.problems} />
        <List title="Solutions" items={project.solutions} />
        <List title="Results" items={project.results} />
        <List title="Future improvements" items={project.future} />
      </div>
    </Section>
  );
}
