---
title: Viva
date: 2026-09-26
summary: "An oral-style exam generated from a student's own JavaScript: predict what small mutations of the code return, say how sure you are, and be graded by running the code."
tracings:
  - to: notes/the-noise-is-the-system
    note: "Viva is built on the essay's point that you only learn where you stand from contact with reality. Here that means running the code instead of asking a model."
---

Viva generates an oral-style exam from a student's own JavaScript. It makes small,
mechanical changes to a function, such as turning `<` into `<=` or removing a
`return`. A language model picks the changed versions worth asking about and names
the misconception each one probes.

The student sees the changed code and an input, predicts the output, and says how
confident they are. Viva then runs both versions and reveals the result. The answer
key always comes from executing the code, never from a model's opinion.

The report sorts the answers into four calibration buckets (confidently right,
confidently wrong, uncertain and right, uncertain and wrong) and gives a Brier
score, so the student can see where their confidence misled them.

Built with: TypeScript, React, Vite, acorn, fast-check, Vercel.

Code: [github.com/Enhso/viva](https://github.com/Enhso/viva)
