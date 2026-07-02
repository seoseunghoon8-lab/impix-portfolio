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

export const projects: Project[] = [
  {
    slug: "ai-support-assistant",
    title: "AI Support Assistant",
    summary:
      "A retrieval-augmented assistant that answers customer questions from internal docs.",
    tags: ["RAG", "LLM", "FastAPI"],
    year: "2026",
    overview:
      "An internal assistant that grounds answers in IMPIX documentation using retrieval-augmented generation, cutting the time support engineers spend searching.",
    objectives: [
      "Answer questions using only trusted internal sources",
      "Keep p95 latency under 2 seconds",
      "Make answers cite their sources",
    ],
    architecture:
      "Next.js frontend → FastAPI gateway → retrieval service (vector DB) → LLM generation with cited context. Embeddings are precomputed and refreshed nightly.",
    tech: ["Python", "FastAPI", "LangChain", "Vector Databases", "OpenAI API", "Next.js"],
    process: [
      "Prototyped the retrieval pipeline in a notebook",
      "Wrapped it in a FastAPI service with streaming responses",
      "Built a chat UI with source citations",
    ],
    problems: [
      "Irrelevant chunks polluted the context window",
      "Streaming responses dropped on reconnect",
    ],
    solutions: [
      "Added re-ranking and a similarity threshold before injecting context",
      "Implemented resumable server-sent events with heartbeat pings",
    ],
    results: [
      "Reduced average lookup time from minutes to seconds",
      "Answers now include clickable source links",
    ],
    future: [
      "Add feedback thumbs to fine-tune retrieval",
      "Support multi-turn memory across a session",
    ],
    repo: "https://github.com/seoseunghoon8",
  },
  {
    slug: "prompt-template-registry",
    title: "Prompt Template Registry",
    summary:
      "A typed, versioned home for every prompt used across our AI endpoints.",
    tags: ["LLM", "DX", "Python"],
    year: "2026",
    overview:
      "A central registry that stores prompts as versioned, typed templates so every service pulls from one source of truth instead of copy-pasting strings.",
    objectives: [
      "Eliminate duplicated prompt strings",
      "Make prompt changes reviewable and testable",
      "Allow safe rollbacks between prompt versions",
    ],
    architecture:
      "A small library exposing typed template objects, backed by files under version control, with a tiny evaluation harness that runs example inputs on each change.",
    tech: ["Python", "pytest", "OpenAI API"],
    process: [
      "Audited existing endpoints for duplicated prompts",
      "Designed a typed template interface",
      "Migrated endpoints one at a time behind tests",
    ],
    problems: [
      "Different endpoints had subtly different copies of the same prompt",
    ],
    solutions: [
      "Unified them into a single parameterized template with versioning",
    ],
    results: [
      "One place to change a prompt",
      "Prompt diffs now show up clearly in code review",
    ],
    future: ["Add A/B evaluation between prompt versions"],
    repo: "https://github.com/seoseunghoon8",
  },
];
