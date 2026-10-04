---
title: Protein function prediction for CAFA 6
date: 2026-01-19
summary: A deep learning solution for the CAFA 6 Kaggle competition, predicting Gene Ontology terms for proteins from language-model embeddings of their sequences.
tracings:
  - to: notes/calibrated-exposure
    note: "The essay explains why I left bioinformatics. CAFA 6 is where I came back to it with different tools."
---

A deep learning solution for CAFA 6, a Kaggle competition on predicting protein
function. Given a protein sequence, the model predicts the Gene Ontology terms
that annotate it.

Each protein is first turned into an embedding by the ESM-2 protein language
model, in its three-billion-parameter version. A multi-layer perceptron is then
trained on those embeddings as a multi-label classifier over Gene Ontology terms,
with class weights to offset the imbalance between common and rare terms.

Training and validation sets are split by sequence clustering with MMseqs2, and
the decision threshold for each term is tuned separately.

Built with: Python, PyTorch, Transformers (ESM-2 embeddings), MMseqs2.

Code: [github.com/Enhso/cafa](https://github.com/Enhso/cafa)
