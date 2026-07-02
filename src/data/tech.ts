export type Tech = {
  name: string;
  category: "Language" | "Frontend" | "Backend" | "AI/ML" | "Data" | "DevOps";
  blurb: string;
};

export const techStack: Tech[] = [
  { name: "Python", category: "Language", blurb: "Primary language for AI services and tooling." },
  { name: "TypeScript", category: "Language", blurb: "Type-safe frontend and Node work." },
  { name: "JavaScript", category: "Language", blurb: "The runtime everything ships on." },
  { name: "React", category: "Frontend", blurb: "Component-driven UIs." },
  { name: "Next.js", category: "Frontend", blurb: "App Router, SSR, and this very site." },
  { name: "Tailwind CSS", category: "Frontend", blurb: "Utility-first styling system." },
  { name: "FastAPI", category: "Backend", blurb: "Async Python APIs for model serving." },
  { name: "PostgreSQL", category: "Data", blurb: "Relational storage with pgvector." },
  { name: "Vector Databases", category: "AI/ML", blurb: "Semantic search for retrieval." },
  { name: "OpenAI API", category: "AI/ML", blurb: "LLM generation and embeddings." },
  { name: "LangChain", category: "AI/ML", blurb: "Composing retrieval + generation." },
  { name: "Docker", category: "DevOps", blurb: "Reproducible dev and deploy." },
  { name: "Git", category: "DevOps", blurb: "Version control and collaboration." },
  { name: "GitHub", category: "DevOps", blurb: "Reviews, Actions, and hosting." },
];

export const techCategories: Tech["category"][] = [
  "Language",
  "Frontend",
  "Backend",
  "AI/ML",
  "Data",
  "DevOps",
];
