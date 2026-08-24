---
layout: page
title: Video Retrieval Pipeline — AI Challenge HCMC 2026
description: Team Lead | Active Competition. Multi-modal video retrieval (KIS, VQA, TRAKE) with LanceDB, CLIP/SigLIP, and Temporal DP.
img: assets/img/MNIST.png
importance: 1
category: competitions
giscus_comments: true
---

![Python](https://img.shields.io/badge/python-3.10+-blue.svg?style=for-the-badge&logo=python&logoColor=white) ![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white) ![LanceDB](https://img.shields.io/badge/LanceDB-Vector%20Search-black.svg?style=for-the-badge) ![HuggingFace](https://img.shields.io/badge/HuggingFace-CLIP%20%2F%20SigLIP-yellow.svg?style=for-the-badge&logo=huggingface&logoColor=black)

> **AI Challenge Ho Chi Minh City 2026 (AIC-2026)**
> **Status:** Active Competition (Private Repository — Source Code Confidential)
> **Role:** Team Lead & Pipeline Architect

---

## 📌 Overview

The **AI Challenge Ho Chi Minh City 2026** is a major AI competition centered around large-scale multimodal video retrieval. Teams are tasked with searching, answering visual questions, and aligning temporal actions across large video repositories.

As Team Lead, I architected and implemented an end-to-end Python pipeline capable of processing visual embeddings, detected metadata, and complex temporal sequence queries under strict competition latency constraints.

*Note: Since the competition is currently active, all repository code and proprietary heuristics remain private and confidential.*

---

## 🎯 Core Challenge Tasks

1. **Textual KIS (Known-Item Search):**
   - Natural language description search for exact video segments and keyframes.
   - Powered by hybrid retrieval combining **Dense Vector Search (OpenAI CLIP / Google SigLIP)** and **Sparse Keyword / Metadata Search (BM25 via LanceDB FTS)**.

2. **Visual Question Answering (VQA):**
   - Candidate frame identification combined with question-directed visual entity recognition and OCR filtering.

3. **TRAKE (Temporal Action Alignment / Sequence Matching):**
   - Given a chronological sequence of text descriptions (e.g., *Action 1 → Action 2 → Action 3*), the system discovers matching continuous video sequences.
   - Solved via **Dynamic Programming (DANTE algorithm)** over candidate frame distance matrices with temporal regularization ($\lambda$-penalty).

---

## 🛠️ Architecture & Key Engineering Highlights

```
Raw Video Stream / Keyframes
       │
       ├──► Vision Encoder (CLIP-ViT / SigLIP) ──► 512-dim Dense Vector
       ├──► Object Detection & OCR Engine     ──► Structured Metadata / Text
       │
       ▼
[LanceDB High-Performance Vector Database]
  ├── Inverted FTS Index (BM25 Text Search)
  └── Vector Index (Cosine / L2 Similarity)
       │
       ▼
Hybrid Search & Reranking Engine ──► Temporal Alignment (DP / DANTE) ──► Interactive Web UI & Submission
```

* **High-Throughput Vector DB:** Leveraged LanceDB for serverless, zero-copy querying over hundreds of thousands of video keyframes with sub-second retrieval latency.
* **Hybrid Search Strategy:** Balanced reciprocal rank fusion (RRF) between semantic visual similarity and textual entity match scores.
* **Temporal Dynamic Programming:** Implemented sequence alignment to eliminate out-of-order temporal anomalies in multi-step video action queries.
* **Robust Pipeline Management:** Designed modular modules for automated query parsing, batch evaluation on Kaggle/local GPU environments, and interactive result visualization.
