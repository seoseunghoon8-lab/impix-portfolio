# IMPIX AI Developer Portfolio & Internship Journal

A modern, dark-mode-first portfolio + internship journal built from `IDEA.md`.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide · Markdown (react-markdown).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000  (this project was verified on PORT=3020)
npm run build    # production build
npm run start    # serve the production build
```

## Pages

Home · About · Timeline · Projects (+ detail) · Journal (+ article) · Tech · Skills · Gallery · Contact + a custom 404.

## Features

Dark/light toggle (defaults to dark, no flash) · scroll reveal animations · responsive nav ·
Markdown journal with syntax highlighting, copy-code button, reading time, and a table of contents ·
tag filtering + search on the journal · back-to-top · SEO metadata.

## How to customize

| What | Where |
| --- | --- |
| Name, role, email, GitHub, LinkedIn, resume link | `src/lib/site.ts` |
| Internship timeline entries | `src/data/timeline.ts` |
| Projects | `src/data/projects.ts` |
| Tech stack | `src/data/tech.ts` |
| Skills bars | `src/data/skills.ts` |
| Gallery items | `src/data/gallery.ts` |
| Colors / theme tokens | `src/app/globals.css` (`:root` and `.dark`) |

### Add a journal entry

Create a Markdown file in `src/content/journal/`, e.g. `2026-08-01-my-post.md`:

```markdown
---
title: "My post title"
date: "2026-08-01"
summary: "One-line summary shown on cards."
tags: ["ai", "backend"]
---

## What I built
...
```

It appears automatically in the journal, sorted by date, with reading time and tags.

## To finish before sharing

- Update `src/lib/site.ts` (GitHub URL and LinkedIn are placeholders).
- Drop a real `public/resume.pdf` (the Resume button links to `/resume.pdf`).
- Replace the gradient placeholders in the Gallery with real screenshots.

## Deploy (GitHub + Vercel)

```bash
git init && git add -A && git commit -m "Initial portfolio"
# push to a GitHub repo, then import it at vercel.com — every push to main auto-deploys.
```
