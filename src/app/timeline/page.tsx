import type { Metadata } from "next";
import { CalendarDays, Wrench, Lightbulb, CheckCircle2 } from "lucide-react";
import { PageHeader, Section, Chip } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { timeline } from "@/data/timeline";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = { title: "Internship Timeline" };

export default function TimelinePage() {
  return (
    <>
      <PageHeader
        eyebrow="Internship Timeline"
        title="Week by week"
        subtitle="A chronological record of what I worked on, what got hard, and what I took away from it."
      />
      <Section>
        <div className="relative ml-3 border-l border-border pl-8 sm:ml-4">
          {timeline.map((e, i) => (
            <Reveal key={e.date} delay={i * 0.05} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[41px] top-1 grid h-6 w-6 place-items-center rounded-full border border-accent/50 bg-background">
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-accent to-accent-2" />
              </span>

              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-accent">
                <CalendarDays size={14} /> {formatDate(e.date)}
              </div>
              <h3 className="mt-2 text-xl font-bold">{e.title}</h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {e.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>

              <div className="mt-4 card p-5">
                <p className="text-sm font-semibold">Tasks completed</p>
                <ul className="mt-2 space-y-1.5">
                  {e.tasks.map((t) => (
                    <li key={t} className="flex gap-2 text-sm text-muted">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-2" /> {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="flex items-center gap-1.5 text-sm font-semibold">
                      <Wrench size={14} className="text-accent" /> Challenge
                    </p>
                    <p className="mt-1 text-sm text-muted">{e.challenge}</p>
                  </div>
                  <div>
                    <p className="flex items-center gap-1.5 text-sm font-semibold">
                      <Lightbulb size={14} className="text-accent-2" /> Solution
                    </p>
                    <p className="mt-1 text-sm text-muted">{e.solution}</p>
                  </div>
                </div>

                <p className="mt-4 border-t border-border pt-3 text-sm">
                  <span className="font-semibold text-accent">Lesson · </span>
                  <span className="text-muted">{e.lesson}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
