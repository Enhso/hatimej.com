---
title: Betomcat
date: 2026-09-21
summary: A Metaculus forecasting bot, forked from the Metaculus bot template, that researches each question through the Intelligence Workbench and forecasts it with two models drawn from a pool.
tracings:
  - to: forecasts/intelligence-workbench
    note: "The workbench is built to feed this bot: it gathers and grades the evidence, the bot makes the forecast."
  - to: forecasts/ensemble-forecasting-bot
---

Betomcat is a bot that forecasts on Metaculus. It is a fork of the Metaculus bot
template, entered in the FutureEval Fall 2026 AI forecasting tournament, including its
MiniBench rounds.

For each open question it classifies the question into a family of recurring
questions and researches it through the Intelligence Workbench, which returns sourced,
time-stamped claims. It then draws two models at random from a pool listed in a
YAML file, asks each for a forecast, and submits the two combined as a weighted
average, with a private comment on the question.

The bot runs unattended as a chain of GitHub Actions jobs of about five and a half
hours each, with its state carried from one job to the next. It never submits a
made-up default: if no model forecast exists by the final deadline before a
question closes, the question is recorded as missed.

An unmodified copy of the Metaculus template bot runs alongside it as a control, to
compare the two on the same questions.

Built with: Python, OpenRouter, AskNews, SQLite, GitHub Actions.

Code: [github.com/Enhso/betomcat](https://github.com/Enhso/betomcat)
