---
layout: portfolio_page
portfolio_page: true
portfolio_variant: cv
permalink: /cv/
title: CV
nav: true
nav_order: 4
cv_format: rendercv
description: First-year CS student and aspiring AI researcher building from mathematics toward computer vision and diffusion models.
---

<div class="portfolio-shell" id="cv-document">
  <header class="portfolio-cv-header">
    <div>
      <p class="portfolio-kicker">— Profile / 2026</p>
      <h1>Nhat M.<br><em>Nguyen.</em></h1>
      <p class="portfolio-cv-subtitle">First-year CS student · aspiring AI researcher</p>
      <p class="portfolio-hero-description">{{ page.description }}</p>
    </div>
    <div class="portfolio-cv-actions" aria-label="CV actions">
      <button class="portfolio-button" type="button" onclick="window.print()">Print / save</button>
      <a class="portfolio-button portfolio-button--ghost" href="https://github.com/xdnhatnguyen" rel="noopener noreferrer">View GitHub ↗</a>
    </div>
    <p class="portfolio-index" aria-hidden="true">— 04 / 04 · CV</p>
  </header>

  <div class="portfolio-cv-grid">
    <aside class="portfolio-cv-sidebar" aria-label="Profile details">
      <section>
        <h2>Contact</h2>
        <ul class="portfolio-contact-list">
          <li>Ho Chi Minh City, Vietnam</li>
          <li><a href="https://github.com/xdnhatnguyen" rel="noopener noreferrer">github.com/xdnhatnguyen</a></li>
          <li><a href="{{ '/' | relative_url }}#contact">Start a conversation</a></li>
        </ul>
      </section>

      <section>
        <h2>Focus</h2>
        <div class="portfolio-tags">
          <span class="portfolio-tag">computer vision</span>
          <span class="portfolio-tag">diffusion models</span>
          <span class="portfolio-tag">calculus</span>
          <span class="portfolio-tag">open source</span>
        </div>
      </section>

      <section>
        <h2>Languages / tooling</h2>
        <ul>
          <li>Python</li>
          <li>PyTorch</li>
          <li>Jekyll / Liquid</li>
          <li>LaTeX</li>
          <li>Git</li>
        </ul>
      </section>
    </aside>

    <main class="portfolio-cv-main">
      <section class="portfolio-cv-section" aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>
        <ol class="portfolio-timeline">
          <li class="portfolio-timeline-item">
            <p class="portfolio-year">2025 — present</p>
            <h3>VNU-HCM University of Science</h3>
            <p>Information Technology · first-year computer science student</p>
          </li>
        </ol>
      </section>

      <section class="portfolio-cv-section" aria-labelledby="research-heading">
        <h2 id="research-heading">Research direction</h2>
        <ol class="portfolio-timeline">
          <li class="portfolio-timeline-item">
            <p class="portfolio-year">Now</p>
            <h3>Generative models, stochastic systems, and vision</h3>
            <p>Following the mathematics from differential equations and optimal control toward diffusion models and computer vision experiments.</p>
          </li>
        </ol>
      </section>

      <section class="portfolio-cv-section" aria-labelledby="selected-work-heading">
        <h2 id="selected-work-heading">Selected work</h2>
        <ol class="portfolio-timeline">
          <li class="portfolio-timeline-item">
            <p class="portfolio-year">Study / 2026</p>
            <h3>Digits Classification Project</h3>
            <p>Team lead for a CNN vs. MLP benchmark on MNIST, with reproducible training, evaluation, and visualization.</p>
          </li>
        </ol>
      </section>

      <section class="portfolio-cv-section" aria-labelledby="writing-heading">
        <h2 id="writing-heading">Writing</h2>
        <ol class="portfolio-timeline">
          <li class="portfolio-timeline-item">
            <p class="portfolio-year">May 2026</p>
            <h3>Calculus 2 · Optimal Control · Differential Equations</h3>
            <p>Research notes on vector calculus, Pontryagin’s Maximum Principle, HJB equations, ODEs, SDEs, and PDEs.</p>
          </li>
        </ol>
      </section>
    </main>
  </div>

  <div class="portfolio-cv-footer-note">
    <span>Rendered from <code>_data/cv.yml</code> · available as RenderCV or JSONResume</span>
    <span>Last updated 2026</span>
  </div>
</div>
