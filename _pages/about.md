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

latest_posts:
  enabled: true
  limit: 5
---

<div class="portfolio-shell">

  <!-- ═══════════════════════════════════════════════════
       HERO — Name + profile photo
  ════════════════════════════════════════════════════ -->
  <header class="about-hero" data-reveal>
    <div class="about-hero-copy">
      <p class="portfolio-kicker">— About / 2026</p>
      <h1>Nhat M.<br><em>Nguyen.</em></h1>
      <p class="about-subtitle">First-year CS student · aspiring AI researcher</p>
      <p class="portfolio-hero-description">
        University of Science, Viet Nam National University Ho Chi Minh City.
        Building toward computer vision and diffusion models — one equation at a time.
      </p>
      <div class="about-ctas">
        <a class="portfolio-button" href="{{ '/cv/' | relative_url }}">View CV →</a>
        <a class="portfolio-button portfolio-button--ghost" href="https://github.com/xdnhatnguyen" rel="noopener noreferrer">GitHub ↗</a>
      </div>
    </div>

    <figure class="about-profile-figure" aria-label="Profile photo">
      <div class="about-profile-img-wrap">
        <img
          src="{{ 'assets/img/avt.png' | relative_url }}"
          alt="Nhat Nguyen — reading"
          class="about-profile-img"
          loading="eager"
        >
        <div class="about-profile-overlay" aria-hidden="true"></div>
      </div>
      <figcaption class="about-profile-caption">
        <span>Generative PixelChemy Group</span>
        <span>Ho Chi Minh City, Viet Nam</span>
      </figcaption>
    </figure>

    <p class="portfolio-index" aria-hidden="true">— 00 / 04 · About</p>
  </header>

  <!-- ═══════════════════════════════════════════════════
       BIO — prose content
  ════════════════════════════════════════════════════ -->
  <section class="about-bio" aria-labelledby="bio-heading" data-reveal>
    <div class="portfolio-section-heading">
      <h2 id="bio-heading">In a few<br><em class="portfolio-display-accent">lines.</em></h2>
      <p>The longer version is still being written — in notebooks, not bio pages.</p>
    </div>
    <div class="about-bio-body">
      <p>
        I am a university student from Vietnam, majoring in Information Technology at the
        University of Science, Viet Nam National University Ho Chi Minh City
      </p>
      <p>
        My research areas focus on <strong>generative models</strong>,
        <strong>stochastic differential equations</strong>, and <strong>computer vision</strong>.
        I follow the mathematics from optimal control and differential equations toward
        diffusion models and image generation experiments.
      </p>
      <p>
        I work in public — notes, proofs, and experiments all appear on the
        <a href="{{ '/blog/' | relative_url }}">blog</a> before they become anything more formal.
      </p>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════
       RESEARCH FOCUS — 3 principle cards
  ════════════════════════════════════════════════════ -->
  <section class="about-focus" aria-labelledby="focus-heading" data-reveal>
    <div class="portfolio-section-heading">
      <h2 id="focus-heading">Research<br><em class="portfolio-display-accent">directions.</em></h2>
      <p>Three threads I follow simultaneously — they converge more often than not.</p>
    </div>

    <div class="about-focus-grid">
      <div class="about-focus-item" data-reveal>
        <p class="about-focus-number">01</p>
        <h3 class="about-focus-title">Generative Models</h3>
        <p class="about-focus-desc">
          Score-based diffusion, latent spaces, and the mathematics that connect
          stochastic processes to image synthesis.
        </p>
        <div class="portfolio-tags about-focus-tags">
          <span class="portfolio-tag">diffusion</span>
          <span class="portfolio-tag">SDE</span>
          <span class="portfolio-tag">latent</span>
        </div>
      </div>

      <div class="about-focus-item" data-reveal>
        <p class="about-focus-number">02</p>
        <h3 class="about-focus-title">Computer Vision</h3>
        <p class="about-focus-desc">
          Architectures, datasets, and what the loss curve says next. CNN vs MLP,
          then whatever the next benchmark demands.
        </p>
        <div class="portfolio-tags about-focus-tags">
          <span class="portfolio-tag">CNN</span>
          <span class="portfolio-tag">PyTorch</span>
          <span class="portfolio-tag">MNIST</span>
        </div>
      </div>

      <div class="about-focus-item" data-reveal>
        <p class="about-focus-number">03</p>
        <h3 class="about-focus-title">Stochastic Systems</h3>
        <p class="about-focus-desc">
          ODE → SDE → PDE. Optimal control, HJB equations, and Pontryagin's
          Maximum Principle as lenses on learning.
        </p>
        <div class="portfolio-tags about-focus-tags">
          <span class="portfolio-tag">calculus</span>
          <span class="portfolio-tag">control</span>
          <span class="portfolio-tag">math</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════
       NEWS / ANNOUNCEMENTS
  ════════════════════════════════════════════════════ -->
  {% if page.announcements.enabled %}
    {% assign all_news = site.news | reverse %}
    {% if all_news.size > 0 %}
      <section class="about-news" aria-labelledby="news-heading" data-reveal>
        <div class="portfolio-section-heading">
          <h2 id="news-heading">Recent<br><em class="portfolio-display-accent">news.</em></h2>
          <p>Updates, announcements, and things worth sharing.</p>
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
      </section>
    {% endif %}
  {% endif %}

  <!-- ═══════════════════════════════════════════════════
       LATEST POSTS
  ════════════════════════════════════════════════════ -->
  {% if page.latest_posts.enabled %}
    {% assign posts_count = site.posts | size %}
    {% if posts_count > 0 %}
      <section class="about-posts" aria-labelledby="posts-heading" data-reveal>
        <div class="portfolio-section-heading">
          <h2 id="posts-heading">Latest<br><em class="portfolio-display-accent">notes.</em></h2>
          <p>Written while learning — equations, experiments, and the ideas between them.</p>
        </div>

        <ul class="portfolio-post-list">
          {% for post in site.posts limit: page.latest_posts.limit %}
            {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
            <li>
              <a class="portfolio-post-row" href="{{ post.url | relative_url }}">
                <span class="portfolio-year">{{ post.date | date: '%Y' }}<br>{{ post.date | date: '%m.%d' }}</span>
                <span>
                  <h3>{{ post.title }}</h3>
                  <p>{{ post.description }}</p>
                </span>
                <span class="portfolio-post-meta">{{ read_time }} min<br>{{ post.categories | join: ' · ' }}</span>
                <span class="portfolio-post-arrow" aria-hidden="true">→</span>
              </a>
            </li>
          {% endfor %}
        </ul>

        <div class="about-posts-more">
          <a class="portfolio-button portfolio-button--ghost" href="{{ '/blog/' | relative_url }}">All notes →</a>
        </div>
      </section>
    {% endif %}
  {% endif %}

  <!-- ═══════════════════════════════════════════════════
       CONTACT / CTA
  ════════════════════════════════════════════════════ -->
  <section id="contact" class="about-contact" aria-labelledby="contact-heading" data-reveal>
    <div class="portfolio-section-heading">
      <h2 id="contact-heading">Start a<br><em class="portfolio-display-accent">conversation.</em></h2>
      <p>Open to discussions on AI research, computer vision, or just a good question.</p>
    </div>

    <div class="about-contact-grid">
      <div class="about-contact-links">
        <a class="about-contact-link" href="https://github.com/xdnhatnguyen" rel="noopener noreferrer">
          <span class="about-contact-icon" aria-hidden="true">↗</span>
          <span>
            <strong>GitHub</strong>
            <span>github.com/xdnhatnguyen</span>
          </span>
        </a>
        <a class="about-contact-link" href="{{ '/cv/' | relative_url }}">
          <span class="about-contact-icon" aria-hidden="true">→</span>
          <span>
            <strong>Curriculum Vitæ</strong>
            <span>Education, research, writing</span>
          </span>
        </a>
        <a class="about-contact-link" href="{{ '/publications/' | relative_url }}">
          <span class="about-contact-icon" aria-hidden="true">→</span>
          <span>
            <strong>Publications</strong>
            <span>Research directions in progress</span>
          </span>
        </a>
      </div>

      <div class="about-contact-note">
        <p class="portfolio-kicker">— Location</p>
        <p class="about-location-name">Ho Chi Minh City<br><em>Vietnam</em></p>
        <p class="about-location-sub">Generative PixelChemy Group · VNU-HCM University of Science</p>
      </div>
    </div>
  </section>

  <p class="portfolio-note">Rendered from <code>_pages/about.md</code> · profile image from <code>assets/img/avt.png</code></p>
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
