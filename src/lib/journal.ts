import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const JOURNAL_DIR = path.join(process.cwd(), "src", "content", "journal");

export type JournalMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  readingTime: string;
};

export type JournalPost = JournalMeta & { content: string };

function readAll(): JournalPost[] {
  if (!fs.existsSync(JOURNAL_DIR)) return [];
  return fs
    .readdirSync(JOURNAL_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(JOURNAL_DIR, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.md$/, ""),
        title: String(data.title ?? file),
        date: String(data.date ?? ""),
        summary: String(data.summary ?? ""),
        tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
        readingTime: readingTime(content).text,
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPosts(): JournalMeta[] {
  return readAll().map(({ content: _content, ...meta }) => meta);
}

export function getAllTags(): string[] {
  return Array.from(new Set(readAll().flatMap((p) => p.tags))).sort();
}

export function getPost(slug: string): JournalPost | undefined {
  return readAll().find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return readAll().map((p) => p.slug);
}
