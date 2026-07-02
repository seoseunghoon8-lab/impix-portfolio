export const site = {
  name: "Seunghoon Seo",
  role: "AI Software Engineering Intern",
  company: "IMPIX",
  tagline: "Documenting how I grow as an AI engineer.",
  intro:
    "AI software engineering intern at IMPIX. I use this site to record what I actually build and learn during my internship — no filler, just real progress.",
  email: "seoseunghoon8@gmail.com",
  github: "https://github.com/seoseunghoon8-lab",
  linkedin: "", // no LinkedIn yet — leaving empty hides it from the site
  resumeUrl: "/resume.pdf", // TODO: put a real resume.pdf in the /public folder
  location: "Gyeonggi-do, South Korea",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/timeline", label: "Timeline" },
  { href: "/projects", label: "Projects" },
  { href: "/journal", label: "Journal" },
  { href: "/tech", label: "Tech" },
  { href: "/skills", label: "Skills" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;
