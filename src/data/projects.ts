export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  year: string;
  overview: string;
  objectives: string[];
  architecture: string;
  tech: string[];
  process: string[];
  problems: string[];
  solutions: string[];
  results: string[];
  future: string[];
  repo?: string;
  demo?: string;
};

// Real projects only. Add a new object here for each project you actually build.
export const projects: Project[] = [
  {
    slug: "developer-portfolio",
    title: "Developer Portfolio & Internship Journal",
    summary: "This site — where I document what I build and learn during my internship.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    year: "2026",
    overview:
      "A dark-mode-first portfolio and Markdown-powered journal built to record my growth during the IMPIX internship.",
    objectives: [
      "Have one place that shows what I actually did, not just a resume",
      "Make it dead simple to add a journal entry",
      "Deploy it so it updates automatically when I push code",
    ],
    architecture:
      "A Next.js App Router site styled with Tailwind CSS. Journal entries are plain Markdown files, and the whole thing deploys on Vercel.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Git"],
    process: [
      "Wrote out what I wanted the site to do",
      "Built the pages and components",
      "Learned Git & GitHub to publish it",
    ],
    problems: ["I had never used Git, GitHub, or Next.js before."],
    solutions: ["Learned each tool step by step and shipped a working site on day one."],
    results: ["A site I can update with a single `git push`."],
    future: ["Add real internship projects and screenshots as I go."],
    repo: "https://github.com/seoseunghoon8-lab/impix-portfolio",
  },
];
