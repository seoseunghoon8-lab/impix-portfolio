"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, NotebookPen } from "lucide-react";
import { motion } from "framer-motion";
import type { JournalMeta } from "@/lib/journal";
import { formatDate } from "@/lib/format";

export function JournalList({ posts, tags }: { posts: JournalMeta[]; tags: string[] }) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesTag = !tag || p.tags.includes(tag);
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesTag && matchesQuery;
    });
  }, [posts, query, tag]);

  return (
    <>
      <div className="mb-6 flex flex-col gap-4">
        <div className="relative max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search entries…"
            className="w-full rounded-lg border border-border bg-surface py-2.5 pl-9 pr-3 text-sm outline-none transition-colors focus:border-accent/60"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setTag(null)}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              !tag ? "border-accent/60 bg-accent/10 text-accent" : "border-border bg-surface text-muted hover:text-foreground"
            }`}
          >
            All
          </button>
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                tag === t ? "border-accent/60 bg-accent/10 text-accent" : "border-border bg-surface text-muted hover:text-foreground"
              }`}
            >
              #{t}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-sm text-muted">No entries match your search.</p>
      ) : (
        <div className="space-y-4">
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <Link href={`/journal/${p.slug}`} className="card group block p-6 transition-colors hover:border-accent/50">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <NotebookPen size={14} className="text-accent" />
                  {formatDate(p.date)} · {p.readingTime}
                </div>
                <h3 className="mt-2 text-lg font-semibold group-hover:text-accent">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs text-muted">
                      #{t}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
}
