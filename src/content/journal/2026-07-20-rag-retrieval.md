---
title: "Making RAG actually helpful"
date: "2026-07-20"
summary: "Naive chunking gave irrelevant answers. Here's how semantic chunking and re-ranking fixed retrieval quality."
tags: ["rag", "ai", "python"]
---

## What I built

A retrieval pipeline that grounds answers in our internal docs instead of letting the model guess.

## The problem

My first version split documents into fixed 500-character chunks. Retrieval returned *technically related* but **useless** context, so answers were vague.

## The fix

Two changes made the difference:

1. **Semantic chunking with overlap** so ideas aren't cut mid-sentence.
2. **Re-ranking + a similarity threshold** so weak matches never reach the prompt.

```python
def select_context(query, chunks, k=5, threshold=0.78):
    ranked = rerank(query, chunks)
    return [c for c in ranked[:k] if c.score >= threshold]
```

> Retrieval quality caps generation quality. Fix the inputs before tuning the model.

## What I learned

- Measure answer quality *before and after* a change — intuition lies.
- The cheapest wins were in data preparation, not the model.

## Next goals

- Add thumbs-up/down feedback to tune retrieval.
- Cache embeddings to cut latency.
