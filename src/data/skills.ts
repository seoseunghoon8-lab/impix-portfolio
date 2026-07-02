export type Skill = { name: string; level: number; note: string };

export const skills: Skill[] = [
  { name: "Programming", level: 82, note: "Comfortable across Python, TS, and C++." },
  { name: "AI / LLMs", level: 74, note: "Prompting, RAG, and evaluation." },
  { name: "Backend", level: 70, note: "FastAPI services and data modeling." },
  { name: "Frontend", level: 68, note: "React and Next.js interfaces." },
  { name: "Cloud", level: 55, note: "Deploying and observing services." },
  { name: "Databases", level: 66, note: "SQL, indexing, and vector search." },
  { name: "DevOps", level: 58, note: "Docker, CI, and Git workflows." },
];
