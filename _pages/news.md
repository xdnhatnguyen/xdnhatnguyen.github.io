---
layout: portfolio_page
portfolio_page: true
portfolio_variant: news
permalink: /news/
title: News & Announcements
description: Archive of all recent updates, publications, and milestone announcements.
nav: false
---

<div class="portfolio-shell">
  <header class="portfolio-hero">
    <div class="portfolio-hero-copy">
      <p class="portfolio-kicker">— Announcements / Index</p>
      <h1>News &<br><em>updates.</em></h1>
      <p class="portfolio-hero-description">{{ page.description }}</p>
    </div>
    <p class="portfolio-hero-aside">Milestones.<br>Publications.<br>Latest activity.</p>
    <p class="portfolio-index" aria-hidden="true">— News</p>
  </header>

  <div class="portfolio-toolbar" aria-label="News metadata">
    <p class="portfolio-source">site.news · {{ site.news.size }} announcements</p>
  </div>

  <main style="padding: 2.5rem 0 5rem;">
    {% include news.liquid %}
  </main>
</div>

