export type GalleryItem = {
  title: string;
  caption: string;
  /** Tailwind gradient classes used as a placeholder until a real image is added. */
  gradient: string;
  src?: string;
};

export const gallery: GalleryItem[] = [
  { title: "RAG architecture", caption: "System diagram for the support assistant", gradient: "from-violet-500/30 to-cyan-500/30" },
  { title: "Chat UI", caption: "Answer view with source citations", gradient: "from-indigo-500/30 to-fuchsia-500/30" },
  { title: "Latency dashboard", caption: "p95 response time after re-ranking", gradient: "from-cyan-500/30 to-emerald-500/30" },
  { title: "Prompt registry", caption: "Versioned templates in review", gradient: "from-amber-500/30 to-rose-500/30" },
  { title: "Embedding space", caption: "2D projection of document clusters", gradient: "from-sky-500/30 to-violet-500/30" },
  { title: "Evaluation run", caption: "Before/after answer quality", gradient: "from-fuchsia-500/30 to-indigo-500/30" },
];
