---
layout: portfolio_page
portfolio_page: true
portfolio_variant: about
title: about
permalink: /
nav: false

profile:
  image: avt.png

announcements:
  enabled: true
  limit: 3
---

<div class="portfolio-shell">

  <!-- ═══════════════════════════════════════════════════
       HERO — Name + profile photo + concise bio + contact
  ════════════════════════════════════════════════════ -->
  <header class="about-hero" data-reveal>
    <div class="about-hero-copy">
      <p class="portfolio-kicker">— About / 2026</p>
      <h1>Minh Nhat<br><em>Nguyen.</em></h1>
      <p class="about-subtitle">Undergraduate Researcher · Computer Science</p>
      <div class="portfolio-hero-description" style="display: flex; flex-direction: column; gap: 0.75rem;">
        <p>
          Undergraduate student in Computer Science at the <strong>Faculty of Information Technology, VNUHCM - University of Science</strong>.
        </p>
        <p>
          My research focuses on <strong>generative models</strong>, <strong>optimal control</strong>, and <strong>computer vision</strong>. I work in public — sharing research notes, mathematical proofs, and experimental findings on my <a href="{{ '/blog/' | relative_url }}" style="color: var(--portfolio-accent); font-weight: 600; text-decoration: underline;">pixeltheorem blog</a>.
        </p>
      </div>
      <div class="about-ctas" style="margin-top: 1.5rem; display: flex; flex-wrap: wrap; gap: 0.6rem;">
        <a class="portfolio-button" href="mailto:nguyenminhnhat.cs@gmail.com">Email ↗</a>
        <a class="portfolio-button portfolio-button--ghost" href="{{ '/cv/' | relative_url }}">Resume / CV ↗</a>
        <a class="portfolio-button portfolio-button--ghost" href="{{ '/blog/' | relative_url }}">Blog ↗</a>
        <a class="portfolio-button portfolio-button--ghost" href="https://github.com/xdnhatnguyen" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </div>
    </div>

    <figure class="about-profile-figure" aria-label="Profile photo">
      <div class="about-profile-img-wrap">
        <img
          src="{{ 'assets/img/avt.png' | relative_url }}"
          alt="Minh Nhat Nguyen — Dark mode avatar"
          class="about-profile-img only-dark"
          loading="eager"
        >
        <img
          src="{{ 'assets/img/avt_0.png' | relative_url }}"
          alt="Minh Nhat Nguyen — Light mode avatar"
          class="about-profile-img only-light"
          loading="eager"
        >
        <div class="about-profile-overlay" aria-hidden="true"></div>
      </div>
      <figcaption class="about-profile-caption">
        <span>Generative PixelChemy Group</span>
        <span>Faculty of Information Technology, VNUHCM - University of Science</span>
        <span>Ho Chi Minh City, Viet Nam</span>
      </figcaption>
    </figure>

    <p class="portfolio-index" aria-hidden="true">— 00 / 04 · About</p>
  </header>

  <!-- ═══════════════════════════════════════════════════
       NEWS / ANNOUNCEMENTS (Brought to the top)
  ════════════════════════════════════════════════════ -->
  {% if page.announcements.enabled %}
    {% assign all_news = site.news | reverse %}
    {% if all_news.size > 0 %}
      <section class="about-news" aria-labelledby="news-heading" data-reveal>
        <div class="portfolio-section-heading">
          <h2 id="news-heading">Recent<br><em class="portfolio-display-accent">news.</em></h2>
          <p>Updates, publications, and milestone announcements.</p>
        </div>

        <ul class="about-news-list">
          {% for item in all_news limit: page.announcements.limit %}
            <li class="about-news-row">
              <span class="portfolio-year">{{ item.date | date: '%Y' }}<br>{{ item.date | date: '%m.%d' }}</span>
              <span class="about-news-body">
                {% if item.inline %}
                  <span>{{ item.content | remove: '<p>' | remove: '</p>' | emojify }}</span>
                {% else %}
                  <a href="{{ item.url | relative_url }}">{{ item.title }}</a>
                {% endif %}
              </span>
              {% unless item.inline %}
                <span class="portfolio-post-arrow" aria-hidden="true">→</span>
              {% endunless %}
            </li>
          {% endfor %}
        </ul>

        <div class="about-posts-more" style="margin-top: 1.5rem;">
          <a class="portfolio-button portfolio-button--ghost" href="{{ '/news/' | relative_url }}">All news →</a>
        </div>
      </section>
    {% endif %}
  {% endif %}

  <!-- ═══════════════════════════════════════════════════
       RESEARCH DIRECTIONS — 3 principal cards
  ════════════════════════════════════════════════════ -->
  <section class="about-focus" aria-labelledby="focus-heading" data-reveal>
    <div class="portfolio-section-heading">
      <h2 id="focus-heading">Research<br><em class="portfolio-display-accent">directions.</em></h2>
      <p>Three core research areas I actively explore.</p>
    </div>

    <div class="about-focus-grid">
      <div class="about-focus-item" data-reveal>
        <p class="about-focus-number">01</p>
        <h3 class="about-focus-title">Generative Modeling Theory</h3>
        <p class="about-focus-desc">
          Mathematical foundations of generative models spanning Optimal Control, Optimal Transport, and Schrödinger Bridge formulations.
        </p>
        <div class="portfolio-tags about-focus-tags">
          <span class="portfolio-tag">Optimal Control</span>
          <span class="portfolio-tag">Optimal Transport</span>
          <span class="portfolio-tag">Schrödinger Bridge</span>
        </div>
      </div>

      <div class="about-focus-item" data-reveal>
        <p class="about-focus-number">02</p>
        <h3 class="about-focus-title">Generative Models' Applications</h3>
        <p class="about-focus-desc">
          Applied generative frameworks with Diffusion Models, Flow Matching, and VAEs for controllable synthesis and training-free style transfer.
        </p>
        <div class="portfolio-tags about-focus-tags">
          <span class="portfolio-tag">Diffusion</span>
          <span class="portfolio-tag">Flow Matching</span>
          <span class="portfolio-tag">VAE</span>
        </div>
      </div>

      <div class="about-focus-item" data-reveal>
        <p class="about-focus-number">03</p>
        <h3 class="about-focus-title">Vision Foundation Models</h3>
        <p class="about-focus-desc">
          Multimodal video and image retrieval, object detection, YOLO variants, representation embedding models, and point learning.
        </p>
        <div class="portfolio-tags about-focus-tags">
          <span class="portfolio-tag">Retrieval</span>
          <span class="portfolio-tag">Detection</span>
          <span class="portfolio-tag">YOLO</span>
          <span class="portfolio-tag">Embeddings</span>
        </div>
      </div>
    </div>
  </section>

</div>

<script>
(function () {
  'use strict';
  var targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('in-view'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  targets.forEach(function (el) { io.observe(el); });
}());
</script>
