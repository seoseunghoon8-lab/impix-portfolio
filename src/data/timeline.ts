export type TimelineEntry = {
  date: string;
  title: string;
  tasks: string[];
  tech: string[];
  challenge: string;
  solution: string;
  lesson: string;
};

// Real entries only. Add a new object to the top of this array for each milestone.
export const timeline: TimelineEntry[] = [
  {
    date: "2026-07-02",
    title: "Set up my portfolio & learned Git/GitHub",
    tasks: [
      "Built this Next.js portfolio + journal site",
      "Installed Node.js, Git, and the GitHub CLI for the first time",
      "Made my first commit and pushed the code to GitHub",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git", "GitHub"],
    challenge: "I had never used Git or the terminal before.",
    solution:
      "Learned the add → commit → push flow and used the GitHub CLI to publish the repository.",
    lesson: "Version control is just shareable save points. Commit small, commit often.",
  },
];
