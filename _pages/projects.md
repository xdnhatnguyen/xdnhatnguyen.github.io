---
layout: portfolio_page
portfolio_page: true
portfolio_variant: projects
permalink: /projects/
title: projects
description: Experiments that make the next question clearer.
nav: true
nav_order: 3
display_categories: [competitions, research, study]
horizontal: false
---

<div class="portfolio-shell">
  <header class="portfolio-hero">
    <div class="portfolio-hero-copy">
      <p class="portfolio-kicker">— Research lab / index</p>
      <h1>Projects<br><em>that move.</em></h1>
      <p class="portfolio-hero-description">{{ page.description }}</p>
    </div>
    <p class="portfolio-hero-aside">A small archive<br>of useful attempts.</p>
    <p class="portfolio-index" aria-hidden="true">— 03 / 04 · Projects</p>
  </header>

  <div class="portfolio-toolbar" aria-label="Project source and categories">
    <p class="portfolio-source"><code>site.projects</code> · sort: importance</p>
    <nav aria-label="Project categories">
      <ul class="portfolio-filter-list">
        <li><a class="portfolio-filter is-active" href="#all">all</a></li>
        {% for category in page.display_categories %}
          <li><a class="portfolio-filter" href="#{{ category }}">{{ category }}</a></li>
        {% endfor %}
      </ul>
    </nav>
  </div>

  {% assign vr_project = site.projects | where: 'title', 'Video Retrieval Pipeline — AI Challenge HCMC 2026' | first %}
  <section id="all" aria-labelledby="primary-project-heading">
    <div class="portfolio-section-heading">
      <h2 id="primary-project-heading">The main<br><em class="portfolio-display-accent">experiment.</em></h2>
      <p>Featured competition and research projects, followed by ongoing exploration.</p>
    </div>

    <div class="portfolio-project-primary">
      <div>
        <p class="portfolio-meta-label">Competition / 01 · Team lead · Active Competition</p>
        <h2>Video Retrieval Pipeline<br>AIC HCMC 2026.</h2>
        <p>{% if vr_project %}{{ vr_project.description }}{% else %}Multimodal video search pipeline (KIS, VQA, TRAKE) using LanceDB hybrid indexing and Temporal Dynamic Programming.{% endif %}</p>
        <div class="portfolio-tags" aria-label="Video retrieval project technologies">
          <span class="portfolio-tag">LanceDB</span>
          <span class="portfolio-tag">PyTorch</span>
          <span class="portfolio-tag">CLIP</span>
          <span class="portfolio-tag">DP</span>
        </div>
        <div class="portfolio-action-list portfolio-project-actions">
          {% if vr_project %}<a class="portfolio-button" href="{{ vr_project.url | relative_url }}">Read project overview →</a>{% endif %}
          <span class="portfolio-button portfolio-button--ghost" style="opacity: 0.7; cursor: not-allowed;" title="Active competition — Source code is confidential">Private Repo 🔒</span>
        </div>
      </div>
      <div class="portfolio-terminal" aria-label="Video retrieval project terminal preview">
        <div class="portfolio-terminal-bar" aria-hidden="true"><span></span><span></span><span></span></div>
        <pre><span class="terminal-accent">$</span> python pipeline.py --task KIS --hybrid
db        lancedb / 512-dim
encoder   clip-vit / siglip
query     "person wearing blue jacket"
rerank    bm25 + vector fusion

status    <span class="terminal-accent">Active Competition (Private Repo)</span>
latency   sub-second response</pre>
      </div>
    </div>
  </section>

  <section id="projects-grid" aria-labelledby="related-projects-heading">
    <div class="portfolio-section-heading">
      <h2 id="related-projects-heading">Selected<br><em class="portfolio-display-accent">initiatives.</em></h2>
      <p>Deep learning architectures, generative diffusion models, and benchmark experiments.</p>
    </div>

    <ul class="portfolio-project-list">
      <li>
        <a class="portfolio-project-row" href="{{ '/blog/2026/style-transfer/' | relative_url }}">
          <span class="portfolio-project-index">02</span>
          <span><h3>Latent Patch-Shuffle Style Transfer</h3><p>Research / Generative · training-free · latent diffusion & flow matching</p></span>
          <span class="portfolio-project-arrow" aria-hidden="true">→</span>
        </a>
      </li>
      <li>
        <a class="portfolio-project-row" href="{{ '/projects/2_project/' | relative_url }}">
          <span class="portfolio-project-index">03</span>
          <span><h3>Digits Classification Project</h3><p>Study / PyTorch · CNN vs MLP benchmark · MNIST</p></span>
          <span class="portfolio-project-arrow" aria-hidden="true">→</span>
        </a>
      </li>
      <li>
        <a class="portfolio-project-row" href="{{ '/blog/' | relative_url }}">
          <span class="portfolio-project-index">04</span>
          <span><h3>ODE / SDE Atlas</h3><p>Notes / Calculus 2 · optimal control · stochastic systems</p></span>
          <span class="portfolio-project-arrow" aria-hidden="true">→</span>
        </a>
      </li>
    </ul>
  </section>

  <p class="portfolio-note">Projects are rendered from <code>_projects/</code> with importance sorting and collection metadata.</p>
</div>
