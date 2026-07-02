import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, CalendarDays } from "lucide-react";
import { Markdown } from "@/components/Markdown";
import { getPost, getPostSlugs } from "@/lib/journal";
import { extractHeadings } from "@/lib/toc";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  return post ? { title: post.title, description: post.summary } : { title: "Journal" };
}

export default async function JournalPostPage(props: PageProps<"/journal/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <Link href="/journal" className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground">
        <ArrowLeft size={15} /> All entries
      </Link>

      <div className="mt-6 lg:grid lg:grid-cols-[1fr_16rem] lg:gap-10">
        <article className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={14} className="text-accent" /> {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} className="text-accent" /> {post.readingTime}
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{post.title}</h1>
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs text-muted">
                #{t}
              </span>
            ))}
          </div>

          <hr className="my-8 border-border" />

          <Markdown content={post.content} />
        </article>

        {headings.length > 0 && (
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">On this page</p>
              <nav className="space-y-1.5 border-l border-border">
                {headings.map((h) => (
                  <a
                    key={h.id}
                    href={`#${h.id}`}
                    className={`block border-l-2 border-transparent py-0.5 text-sm text-muted transition-colors hover:border-accent hover:text-foreground ${
                      h.depth === 3 ? "pl-6" : "pl-4"
                    }`}
                  >
                    {h.text}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
