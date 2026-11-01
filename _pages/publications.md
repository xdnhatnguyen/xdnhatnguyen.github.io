---
layout: portfolio_page
portfolio_page: true
portfolio_variant: publications
permalink: /publications/
title: publications
description: Peer-reviewed conference proceedings, project pages, and research directions in generative models and computer vision.
nav: true
nav_order: 2
---

<div class="portfolio-shell">
  <header class="portfolio-hero">
    <div class="portfolio-hero-copy">
      <p class="portfolio-kicker">— Bibliography / 2026</p>
      <h1>Publications &<br><em>projects.</em></h1>
      <p class="portfolio-hero-description">{{ page.description }}</p>
    </div>
    <p class="portfolio-hero-aside">Conference papers.<br>Symposium proceedings.<br>Project pages.</p>
    <p class="portfolio-index" aria-hidden="true">— 02 / 04 · Publications</p>
  </header>

  <div class="portfolio-toolbar" aria-label="Publication filters and actions">
    <div class="portfolio-action-list">
      <a class="portfolio-filter is-active" href="#published-work-heading">Published work</a>
      <a class="portfolio-filter" href="https://xdnhatnguyen.github.io/OrthoStyle/" target="_blank" rel="noopener noreferrer">OrthoStyle Project ↗</a>
      <a class="portfolio-filter" href="#research-directions">Research directions</a>
      <a class="portfolio-filter" href="{{ '/blog/' | relative_url }}">Read notes →</a>
    </div>
  </div>

  <section aria-labelledby="published-work-heading">
    <div class="portfolio-section-heading">
      <h2 id="published-work-heading">Published<br><em class="portfolio-display-accent">work.</em></h2>
      <p>Peer-reviewed conference papers and international symposium proceedings.</p>
    </div>
    <div class="portfolio-publication-list publications">
      {% bibliography %}
    </div>
  </section>

  <!-- Featured Project Page -->
  <section id="featured-project" aria-labelledby="project-page-heading" style="margin-top: 3.5rem;">
    <div class="portfolio-section-heading">
      <h2 id="project-page-heading">Featured<br><em class="portfolio-display-accent">project page.</em></h2>
      <p>Interactive project demo, visual results matrix, and source code.</p>
    </div>

    <div class="portfolio-feature" style="display: flex; flex-direction: column; gap: 1.25rem; padding: 2rem; border: 1px solid var(--portfolio-border); border-radius: 12px; background: var(--portfolio-surface-subtle, var(--portfolio-surface));">
      <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 0.5rem;">
        <span class="portfolio-kicker" style="color: var(--portfolio-accent); font-weight: 600;">Oral Presentation · SOICT 2026 (The 15th)</span>
        <span class="portfolio-year">October 2026</span>
      </div>

      <div style="width: 100%; overflow: hidden; border-radius: 8px; border: 1px solid var(--portfolio-border);">
        <img
          src="{{ '/assets/img/publication_preview/OrthoStyle_ Manifold-Preserved Style Transfer.png' | relative_url }}"
          alt="OrthoStyle Framework: Manifold-Preserved Guidance & Semantic Gating"
          style="width: 100%; height: auto; display: block;"
          loading="eager"
        >
      </div>

      <h3 style="font-size: 1.5rem; margin: 0; color: var(--portfolio-fg);">
        <a href="https://xdnhatnguyen.github.io/OrthoStyle/" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">
          OrthoStyle: Manifold-Preserving Training-Free Style Transfer via Score-Orthogonal Guidance ↗
        </a>
      </h3>
      <p style="margin: 0; color: var(--portfolio-muted); line-height: 1.6;">
        A training-free framework balancing style fidelity and content preservation without network fine-tuning or DDIM inversion. Extensive quantitative and qualitative comparisons with both OC-based baselines and representative stylization methods show that OrthoStyle achieves a favorable balance between style fidelity and content preservation while maintaining structural consistency, outperforming the Stable Cascade backbone.
      </p>
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 0.25rem;">
        <a class="portfolio-button" href="https://xdnhatnguyen.github.io/OrthoStyle/" target="_blank" rel="noopener noreferrer">
          Visit Project Page ↗
        </a>
        <a class="portfolio-button portfolio-button--ghost" href="https://github.com/xdnhatnguyen/OrthoStyle" target="_blank" rel="noopener noreferrer">
          GitHub Code ↗
        </a>
      </div>
    </div>
  </section>

  <section id="research-directions" aria-labelledby="research-directions-heading">
    <div class="portfolio-section-heading">
      <h2 id="research-directions-heading">Research<br><em class="portfolio-display-accent">directions.</em></h2>
      <p>Core theoretical and applied areas under active exploration.</p>
    </div>

    <ul class="portfolio-research-list">
      <li class="portfolio-research-row">
        <span class="portfolio-meta-label">Theory</span>
        <span>
          <h3>Generative Modeling Theory</h3>
          <p>Optimal Control, Optimal Transport, and Schrödinger Bridge formulations.</p>
        </span>
        <span class="portfolio-tags">
          <span class="portfolio-tag">Optimal Control</span>
          <span class="portfolio-tag">Optimal Transport</span>
          <span class="portfolio-tag">Schrödinger Bridge</span>
        </span>
      </li>
      <li class="portfolio-research-row">
        <span class="portfolio-meta-label">Application</span>
        <span>
          <h3>Generative Models' Applications</h3>
          <p>Diffusion models, Flow Matching, and VAEs for conditional synthesis and style transfer.</p>
        </span>
        <span class="portfolio-tags">
          <span class="portfolio-tag">Diffusion</span>
          <span class="portfolio-tag">Flow Matching</span>
          <span class="portfolio-tag">VAE</span>
        </span>
      </li>
      <li class="portfolio-research-row">
        <span class="portfolio-meta-label">Vision</span>
        <span>
          <h3>Vision Foundation Models</h3>
          <p>Multimodal retrieval, object detection, YOLO variants, representation embedding models, and point learning.</p>
        </span>
        <span class="portfolio-tags">
          <span class="portfolio-tag">Retrieval</span>
          <span class="portfolio-tag">Detection</span>
          <span class="portfolio-tag">YOLO</span>
          <span class="portfolio-tag">Embeddings</span>
        </span>
      </li>
    </ul>
  </section>
</div>
