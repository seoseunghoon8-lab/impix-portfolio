"use client";

import { motion } from "framer-motion";
import { PageHeader, Section } from "@/components/ui";
import { skills } from "@/data/skills";
import { EASE } from "@/lib/motion";

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills Progress"
        title="How I'm growing"
        subtitle="A self-assessment of where my skills stand this internship — updated as I learn."
      />
      <Section>
        <div className="mx-auto max-w-2xl space-y-6">
          {skills.map((s, i) => (
            <div key={s.name}>
              <div className="mb-2 flex items-baseline justify-between">
                <span className="font-semibold">{s.name}</span>
                <span className="text-sm text-muted">{s.level}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-surface-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.08, ease: EASE }}
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                />
              </div>
              <p className="mt-1.5 text-xs text-muted">{s.note}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
