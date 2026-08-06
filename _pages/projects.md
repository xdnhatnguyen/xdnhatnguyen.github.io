---
layout: portfolio_page
portfolio_page: true
portfolio_variant: projects
permalink: /projects/
title: projects
description: Experiments that make the next question clearer.
nav: true
nav_order: 3
display_categories: [live, study, work]
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

  {% assign digits_project = site.projects | where: 'title', 'Digits Classification Project' | first %}
  <section id="all" aria-labelledby="primary-project-heading">
    <div class="portfolio-section-heading">
      <h2 id="primary-project-heading">The main<br><em class="portfolio-display-accent">experiment.</em></h2>
      <p>One project in depth, then the smaller questions orbiting it.</p>
    </div>

    <div class="portfolio-project-primary">
      <div>
        <p class="portfolio-meta-label">Study / 01 · Team lead</p>
        <h2>Digits Classification<br>Project.</h2>
        <p>{% if digits_project %}{{ digits_project.description }}{% else %}CNN vs. MLP benchmark for digit recognition and architectural trade-offs.{% endif %}</p>
        <div class="portfolio-tags" aria-label="Digits project technologies">
          <span class="portfolio-tag">PyTorch</span>
          <span class="portfolio-tag">Python</span>
          <span class="portfolio-tag">MNIST</span>
        </div>
        <div class="portfolio-action-list portfolio-project-actions">
          {% if digits_project %}<a class="portfolio-button" href="{{ digits_project.url | relative_url }}">Read project →</a>{% endif %}
          <a class="portfolio-button portfolio-button--ghost" href="https://github.com/xdnhatnguyen/Digits-Classification-Project" rel="noopener noreferrer">Open GitHub ↗</a>
        </div>
      </div>
      <div class="portfolio-terminal" aria-label="Digits classification project terminal preview">
        <div class="portfolio-terminal-bar" aria-hidden="true"><span></span><span></span><span></span></div>
        <pre><span class="terminal-accent">$</span> python train.py --model cnn

model     cnn / mlp
metric    accuracy
status    reproducible

<span class="terminal-accent">cnn_interface.png</span>
<span class="terminal-accent">mlp_interface.png</span>
loss      ↓ 0.184
accuracy  ↑ 0.982</pre>
      </div>
    </div>
  </section>

  <section id="study" aria-labelledby="related-projects-heading">
    <div class="portfolio-section-heading">
      <h2 id="related-projects-heading">The next<br><em class="portfolio-display-accent">questions.</em></h2>
      <p>Research directions, notes, and experiments that are still finding their shape.</p>
    </div>

    <ul class="portfolio-project-list">
      <li>
        <a class="portfolio-project-row" href="{{ '/blog/' | relative_url }}">
          <span class="portfolio-project-index">02</span>
          <span><h3>Diffusion Notes</h3><p>Research / SDE · score matching · vision</p></span>
          <span class="portfolio-project-arrow" aria-hidden="true">→</span>
        </a>
      </li>
      <li>
        <a class="portfolio-project-row" href="{{ '/blog/' | relative_url }}">
          <span class="portfolio-project-index">03</span>
          <span><h3>ODE / SDE Atlas</h3><p>Notes / calculus · dynamics · PDE</p></span>
          <span class="portfolio-project-arrow" aria-hidden="true">→</span>
        </a>
      </li>
      <li>
        <a class="portfolio-project-row" href="{{ '/publications/' | relative_url }}">
          <span class="portfolio-project-index">04</span>
          <span><h3>Research in public</h3><p>Working papers / questions before conclusions</p></span>
          <span class="portfolio-project-arrow" aria-hidden="true">→</span>
        </a>
      </li>
    </ul>
  </section>

  <p class="portfolio-note">Projects are rendered from <code>_projects/</code> with importance sorting and collection metadata.</p>
</div>
