import type { Metadata } from "next";
import { GraduationCap, Code2, Brain, Target, Sparkles } from "lucide-react";
import { PageHeader, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

const blocks = [
  {
    icon: GraduationCap,
    title: "Education",
    body: "Computer Science student with a focus on algorithms and machine learning. Years of competitive programming taught me to reason carefully about correctness and complexity.",
  },
  {
    icon: Code2,
    title: "Programming experience",
    body: "Hundreds of solved algorithm problems in C++ and Python, plus full-stack work with React, Next.js, and FastAPI. I care about clean, readable, well-tested code.",
  },
  {
    icon: Brain,
    title: "Technical interests",
    body: "Applied AI — retrieval-augmented generation, LLM tooling, and turning models into reliable products rather than demos.",
  },
  {
    icon: Target,
    title: "Career goals",
    body: "To become an AI software engineer who ships production systems end to end: data, model, backend, and the interface people actually touch.",
  },
  {
    icon: Sparkles,
    title: "Why AI",
    body: "AI is the rare field where a single engineer can build something that feels genuinely new. I want to be at that frontier while it's still being drawn.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Who I am"
        subtitle={`${site.role} at ${site.company}, based in ${site.location}. Here's the longer version.`}
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.06}>
              <div className="card h-full p-6">
                <b.icon className="text-accent" size={22} />
                <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
