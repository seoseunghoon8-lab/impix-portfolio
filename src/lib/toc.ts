import GithubSlugger from "github-slugger";

export type Heading = { depth: number; text: string; id: string };

/** Extract h2/h3 headings from markdown, matching rehype-slug's ids. */
export function extractHeadings(markdown: string): Heading[] {
  const slugger = new GithubSlugger();
  const headings: Heading[] = [];
  const lines = markdown.split("\n");
  let inFence = false;

  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^(#{2,3})\s+(.*)$/.exec(line);
    if (match) {
      const text = match[2].replace(/[*_`]/g, "").trim();
      headings.push({ depth: match[1].length, text, id: slugger.slug(text) });
    }
  }
  return headings;
}
