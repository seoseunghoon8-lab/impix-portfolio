"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader, Section } from "@/components/ui";
import { techStack, techCategories } from "@/data/tech";

const filters = ["All", ...techCategories] as const;

export default function TechPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const shown = active === "All" ? techStack : techStack.filter((t) => t.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Tech Stack"
        title="Tools I work with"
        subtitle="The languages, frameworks, and platforms I've used during the internship."
      />
      <Section>
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                active === f
                  ? "border-accent/60 bg-accent/10 text-accent"
                  : "border-border bg-surface text-muted hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((t) => (
            <motion.div
              key={t.name}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="card group p-5 transition-colors hover:border-accent/50"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold group-hover:text-accent">{t.name}</h3>
                <span className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted">
                  {t.category}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted">{t.blurb}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}
