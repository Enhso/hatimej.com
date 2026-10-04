---
title: Context Tree Switching implementation
date: 2025-10-13
summary: An implementation of the Context Tree Switching algorithm, written from scratch in Python for sequential-prediction research.
tracings:
  - to: forecasts/ensemble-forecasting-bot
    note: "Both combine many predictors instead of trusting one. CTS mixes context models as data arrives; the bot combines forecasts from different personas."
---

Context Tree Switching (CTS) is an algorithm for sequential prediction, and this
project is an implementation of it written from scratch in Python.

It was written for sequential-prediction research, as part of work on AIXI.

Built with: Python.
