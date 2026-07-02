import Link from "next/link";
import { ArrowRight, FolderGit2, NotebookPen } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { Section, Chip } from "@/components/ui";
import { projects } from "@/data/projects";
import { getAllPosts } from "@/lib/journal";
import { formatDate } from "@/lib/format";

export default function Home() {
  const posts = getAllPosts().slice(0, 2);
  const featuredProjects = projects.slice(0, 2);

  return (
    <>
      <Hero />

      {/* Featured projects */}
      <Section>
        <Reveal className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">Selected work</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Featured projects</h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground">
            All projects <ArrowRight size={15} />
          </Link>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link href={`/projects/${p.slug}`} className="card group flex h-full flex-col p-6 transition-colors hover:border-accent/50">
                <FolderGit2 className="text-accent" size={22} />
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

      {/* Latest journal */}
      <Section>
        <Reveal className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">Learning in public</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">From the journal</h2>
          </div>
          <Link href="/journal" className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground">
            All entries <ArrowRight size={15} />
          </Link>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link href={`/journal/${p.slug}`} className="card group flex h-full flex-col p-6 transition-colors hover:border-accent/50">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <NotebookPen size={14} className="text-accent" />
                  {formatDate(p.date)} · {p.readingTime}
                </div>
                <h3 className="mt-3 text-lg font-semibold group-hover:text-accent">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Chip key={t}>#{t}</Chip>
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
