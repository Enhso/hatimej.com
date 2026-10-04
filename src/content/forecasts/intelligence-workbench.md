---
title: Intelligence Workbench
date: 2026-09-23
summary: A Rust and Python service that turns a research question into a sourced, as-of-queryable evidence graph and an analytical briefing that never forecasts.
---

Intelligence Workbench takes a research question, fetches source documents,
extracts a structured graph of entities, claims, evidence and causal links from
them, and stores it in a bitemporal corpus that can be queried as of any earlier
time. From that graph it renders an 11-section analytical briefing.

The system does not forecast. The briefing renderer is deterministic code, not a
language model, and cannot produce a probability by construction; the worker also
drops any model-written claim that uses forecasting language. What it surfaces is
evidence, causal structure, consensus, dissent and how well each claim is
supported, and it leaves the judgment to the reader.

It runs as two processes that share one contract. A Rust service owns the
database, the HTTP API and the briefing renderer. A stateless Python worker
fetches the documents and extracts claims with a language model; through optional
gates it also drops irrelevant or prompt-injected documents and scores each
claim's support. It is built to be embedded in a forecasting pipeline; the
Betomcat bot is one caller.

Built with: Rust (Axum), Python, the mnestic graph store queried with Datalog,
SQLite, AskNews.

Code: [github.com/Enhso/iw](https://github.com/Enhso/iw)
