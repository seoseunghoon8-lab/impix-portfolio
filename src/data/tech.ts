export type Tech = {
  name: string;
  category: "Language" | "Frontend" | "Tools";
  blurb: string;
};

// Only tools you've actually used. Add more as you pick them up during the internship.
export const techStack: Tech[] = [
  { name: "Python", category: "Language", blurb: "Years of algorithm practice and scripting." },
  { name: "C++", category: "Language", blurb: "My main competitive-programming language." },
  { name: "TypeScript", category: "Language", blurb: "Type-safe JavaScript — used to build this site." },
  { name: "JavaScript", category: "Language", blurb: "The language the web runs on." },
  { name: "React", category: "Frontend", blurb: "Component-based UIs." },
  { name: "Next.js", category: "Frontend", blurb: "The framework powering this portfolio." },
  { name: "Tailwind CSS", category: "Frontend", blurb: "Utility-first styling." },
  { name: "Git", category: "Tools", blurb: "Version control — learned it building this site." },
  { name: "GitHub", category: "Tools", blurb: "Where my code lives and deploys from." },
  { name: "Node.js", category: "Tools", blurb: "Runs the dev server and tooling." },
];

export const techCategories: Tech["category"][] = ["Language", "Frontend", "Tools"];
