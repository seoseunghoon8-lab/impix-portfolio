import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui";
import { JournalList } from "@/components/JournalList";
import { getAllPosts, getAllTags } from "@/lib/journal";

export const metadata: Metadata = { title: "Daily Journal" };

export default function JournalPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <>
      <PageHeader
        eyebrow="Daily Journal"
        title="Learning, logged"
        subtitle="Short entries on what I built, what I learned, and what tripped me up. Written in Markdown, searchable and tagged."
      />
      <Section className="max-w-3xl">
        <JournalList posts={posts} tags={tags} />
      </Section>
    </>
  );
}
