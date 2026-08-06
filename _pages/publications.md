---
layout: portfolio_page
portfolio_page: true
portfolio_variant: publications
permalink: /publications/
title: publications
description: Research notes, working papers, and the mathematics behind the experiments.
nav: true
nav_order: 2
---

<div class="portfolio-shell">
  <header class="portfolio-hero">
    <div class="portfolio-hero-copy">
      <p class="portfolio-kicker">— Bibliography / 2026</p>
      <h1>Publications<br><em>in progress.</em></h1>
      <p class="portfolio-hero-description">{{ page.description }}</p>
    </div>
    <p class="portfolio-hero-aside">The work is still<br>becoming precise.</p>
    <p class="portfolio-index" aria-hidden="true">— 02 / 04 · Publications</p>
  </header>

  <div class="portfolio-toolbar" aria-label="Publication source and actions">
    <p class="portfolio-source"><code>/_bibliography/papers.bib</code> · jekyll-scholar</p>
    <div class="portfolio-action-list">
      <a class="portfolio-filter is-active" href="#research-directions">Research directions</a>
      <a class="portfolio-filter" href="{{ '/blog/' | relative_url }}">Read the notes →</a>
    </div>
  </div>

  {% capture bibliography_count_raw %}{% bibliography_count %}{% endcapture %}
  {% assign bibliography_count = bibliography_count_raw | strip | plus: 0 %}
  {% if bibliography_count > 0 %}
    <section aria-labelledby="published-work-heading">
      <div class="portfolio-section-heading">
        <h2 id="published-work-heading">Published<br><em class="portfolio-display-accent">work.</em></h2>
        <p>Entries are rendered by Jekyll Scholar from the BibTeX source of truth.</p>
      </div>
      <div class="portfolio-publication-list publications">
        {% bibliography %}
      </div>
    </section>
  {% else %}
    <section aria-labelledby="empty-publications-heading">
      <div class="portfolio-publication-state">
        <div class="portfolio-empty-state">
          <p class="portfolio-section-label">— Current state</p>
          <h2 id="empty-publications-heading">No published<br><em class="portfolio-display-accent">entries yet.</em></h2>
          <p>The bibliography is taking shape in public — the next entry will appear here when it is ready.</p>
        </div>
        <div class="portfolio-code-card" aria-label="BibTeX example">
          <span class="portfolio-code-label">papers.bib · preview</span>
          <pre><code><span class="code-keyword">@article</span>{nhat_research,
  author  = {Nguyen, Nhat},
  title   = {A question worth testing},
  year    = {2026},
  <span class="code-string">selected = {true}</span>
}</code></pre>
        </div>
      </div>
    </section>
  {% endif %}

  <section id="research-directions" aria-labelledby="research-directions-heading">
    <div class="portfolio-section-heading">
      <h2 id="research-directions-heading">Research<br><em class="portfolio-display-accent">directions.</em></h2>
      <p>Working notes are not publications. They are the path toward a better question.</p>
    </div>

    <ul class="portfolio-research-list">
      <li class="portfolio-research-row">
        <span class="portfolio-meta-label">Working note</span>
        <span><h3>Diffusion models as stochastic systems</h3><p>From SDE intuition to score-based experiments.</p></span>
        <span class="portfolio-tags"><span class="portfolio-tag">diffusion</span><span class="portfolio-tag">math</span></span>
      </li>
      <li class="portfolio-research-row">
        <span class="portfolio-meta-label">Working note</span>
        <span><h3>Computer vision experiments</h3><p>Architectures, datasets, and what the error says next.</p></span>
        <span class="portfolio-tags"><span class="portfolio-tag">vision</span><span class="portfolio-tag">in prep</span></span>
      </li>
      <li class="portfolio-research-row">
        <span class="portfolio-meta-label">Working note</span>
        <span><h3>Optimal control / HJB derivations</h3><p>Following the equations until the control law becomes legible.</p></span>
        <span class="portfolio-tags"><span class="portfolio-tag">calculus</span><span class="portfolio-tag">notes</span></span>
      </li>
    </ul>
  </section>

  <p class="portfolio-note">Rendered by Jekyll Scholar · add entries to <code>papers.bib</code> when the work is ready.</p>
</div>
