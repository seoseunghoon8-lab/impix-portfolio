---
title: "Building a personal planner app (todos + memos)"
date: "2026-07-02"
summary: "Built a browser-based planner to replace scattered notes — deadline todos with a calendar, plus Markdown memos organized into tag folders."
tags: ["react", "nextjs", "side-project"]
---

## What I built

A personal planner web app to keep everything I need to remember in one place, instead of scattered notes.

- **Todos** — add with a due date and time; they auto-group by deadline (overdue / today / this week / later), with both an agenda list and a month **calendar** view.
- **Memos** — written in Markdown, organized by **category**, and grouped into **tag "folders"**. Hovering a folder slides the file up to reveal the first note's title.
- Plus **search**, category filters, a "clear completed" button, browser (`localStorage`) persistence, and **JSON export/import** for backup.

## What I learned

- Managing app state with **React Context + localStorage**, and keeping the storage layer isolated so it can move to a real server later without rewriting the UI.
- Building a **drill-down** interface (category → tag folders → memos) and small CSS animations for the folder effect.

## Difficulties

- Deciding *where* to store data — I went with browser storage for now, structured so cross-device sync can be added later.
- Getting the folder animation geometry right so **only the file lifts** to peek the first note's title, not the whole folder.

## Next goals

- Deploy the planner to GitHub + Vercel.
- Consider real cross-device sync (a backend) down the line.
