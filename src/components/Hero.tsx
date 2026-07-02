"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { site } from "@/lib/site";
import { staggerContainer as container, fadeUp as item } from "@/lib/motion";

const featured = ["Python", "TypeScript", "Next.js", "FastAPI", "LangChain", "OpenAI API"];

export function Hero() {
  return (
    <section className="glow-grid relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-20 sm:pb-24 sm:pt-28">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
              <Sparkles size={13} className="text-accent" />
              {site.role} @ {site.company}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl"
          >
            Hi, I&apos;m {site.name.split(" ")[0]}. <br />
            I build <span className="text-gradient">AI-powered</span> products.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-2xl text-lg text-muted">
            {site.intro}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5"
            >
              View projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={site.resumeUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:border-accent/60"
            >
              <FileText size={16} /> Resume
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:border-accent/60"
            >
              <GithubIcon size={16} /> GitHub
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <p className="text-xs uppercase tracking-widest text-muted">Featured tech</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {featured.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-foreground/90"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
