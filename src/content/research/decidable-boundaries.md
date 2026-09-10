---
title: Where prediction stops being computation
date: 2026-02-17
placeholder: true
summary: A working note on the difference between a system that is hard to predict and a system whose prediction problem has no answer.
tracings:
  - to: forecasts/resolution-criteria-are-the-question
    note: The formal version of the same problem. A question with no decision procedure and a question with no resolution criteria fail for the same reason, one rung apart.
  - to: poetry/a-proof-with-nothing-to-prove
  - to: research/compression-as-understanding
---

Forecasters and computer scientists both say a problem is hard, and they mean
different things, and the difference matters more than either field usually
admits.

A forecaster means: the outcome depends on many things, some of which I cannot
observe, and my estimate will be wide. This is a statement about the forecaster.
Given more data, better instruments, more time, the estimate narrows. Hardness
is a property of the relationship between the question and the person asking.

A computer scientist means: no procedure decides this, ever, for anyone. This is
a statement about the problem. More data does not help. Better instruments do
not help. The difficulty does not live in the observer.

## Why the confusion is productive anyway

I keep expecting the distinction to be clean and it keeps not being. Take a
system that is formally chaotic. Its long-run behaviour is not undecidable —
there is a procedure, it just requires infinite precision on the initial
condition. So the undecidability is not in the dynamics. It is in the
measurement. And once you say that, you have quietly moved the boundary from a
property of the problem to a property of the interface between a problem and
whoever is standing next to it, which is exactly where the forecaster had it.

I do not think this collapses the distinction. I think it means the distinction
is about *where you draw the system boundary*, and that most arguments about
predictability are really arguments about that, conducted by people who have not
noticed.
