export type TimelineEntry = {
  date: string;
  title: string;
  tasks: string[];
  tech: string[];
  challenge: string;
  solution: string;
  lesson: string;
};

export const timeline: TimelineEntry[] = [
  {
    date: "2026-07-01",
    title: "Internship kickoff & environment setup",
    tasks: [
      "Onboarded to the IMPIX engineering workflow",
      "Set up local dev: Node.js, Git, and the internal repos",
      "Read through the existing AI service architecture",
    ],
    tech: ["Git", "Docker", "Python", "Next.js"],
    challenge:
      "The monorepo had several services and it wasn't obvious where the AI inference layer lived.",
    solution:
      "Traced requests from the API gateway down to the model server and drew an architecture diagram to anchor my mental model.",
    lesson:
      "A 30-minute diagram saves days of confusion. Map the system before touching it.",
  },
  {
    date: "2026-07-08",
    title: "First feature: prompt template service",
    tasks: [
      "Designed a reusable prompt-template module",
      "Added unit tests and a small evaluation harness",
      "Opened my first PR and iterated on review feedback",
    ],
    tech: ["Python", "FastAPI", "OpenAI API", "pytest"],
    challenge:
      "Prompts were duplicated across endpoints, making changes error-prone.",
    solution:
      "Centralized prompts behind a typed template registry with versioning so every endpoint pulls from one source of truth.",
    lesson:
      "Treat prompts like code — version them, test them, review them.",
  },
  {
    date: "2026-07-20",
    title: "Retrieval-augmented answers (RAG)",
    tasks: [
      "Built an embedding + vector-search pipeline",
      "Wired retrieval context into the generation step",
      "Measured answer quality before/after retrieval",
    ],
    tech: ["LangChain", "Vector Databases", "PostgreSQL", "Python"],
    challenge:
      "Naive chunking returned irrelevant context and hurt answer quality.",
    solution:
      "Switched to semantic chunking with overlap and re-ranking, then filtered by a similarity threshold.",
    lesson:
      "Retrieval quality caps generation quality. Fix the inputs before tuning the model.",
  },
];
