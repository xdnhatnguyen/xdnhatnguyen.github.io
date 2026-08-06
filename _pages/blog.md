---
layout: portfolio_page
portfolio_page: true
portfolio_variant: blog
permalink: /blog/
title: blog
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

<div class="portfolio-shell">
  <header class="portfolio-hero">
    <div class="portfolio-hero-copy">
      <p class="portfolio-kicker">— Research notes</p>
      <h1>pixelchemy<br><em>blog.</em></h1>
      <p class="portfolio-hero-description">Learning and building AI from scratch with math and algorithms.</p>
    </div>
    <p class="portfolio-hero-aside">Small proofs.<br>Useful questions.<br>Shared in public.</p>
    <p class="portfolio-index" aria-hidden="true">— 01 / 04 · Blog</p>
  </header>

  <div class="portfolio-toolbar" aria-label="Blog metadata and topics" style="display: flex; flex-direction: column; align-items: flex-start; gap: 0.8rem;">
    <div style="display: flex; justify-content: space-between; width: 100%; align-items: center; flex-wrap: wrap; gap: 0.5rem; border-bottom: 1px dashed var(--portfolio-border, rgba(255, 255, 255, 0.15)); padding-bottom: 0.5rem;">
      <p class="portfolio-source" style="margin: 0;">_posts/ · {{ site.posts.size }} articles · {{ site.display_categories.size }} categories</p>
      <span style="font-size: 0.75rem; opacity: 0.7; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Filter by Category & Tag</span>
    </div>
    
    <nav aria-label="Blog categories" style="width: 100%;">
      <ul class="portfolio-filter-list" style="flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.2rem;">
        <li><span style="font-weight: 600; font-size: 0.75rem; opacity: 0.6; text-transform: uppercase; margin-right: 0.3rem;">Categories:</span></li>
        {% for category in site.display_categories %}
          <li>
            <a class="portfolio-filter" href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}" style="font-weight: 600; border-color: var(--portfolio-accent, #4ea8de);">
              @{{ category }}
            </a>
          </li>
        {% endfor %}
      </ul>
    </nav>

    <nav aria-label="Blog tags" style="width: 100%;">
      <ul class="portfolio-filter-list" style="flex-wrap: wrap; gap: 0.4rem;">
        <li><span style="font-weight: 600; font-size: 0.75rem; opacity: 0.6; text-transform: uppercase; margin-right: 0.3rem;">Topics:</span></li>
        {% for tag in site.display_tags %}
          <li><a class="portfolio-filter" href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}"># {{ tag }}</a></li>
        {% endfor %}
      </ul>
    </nav>
  </div>

  {% if page.pagination.enabled and paginator.posts %}
    {% assign posts = paginator.posts %}
  {% else %}
    {% assign posts = site.posts | sort: 'date' | reverse %}
  {% endif %}
  {% assign featured = posts | first %}

  {% if featured %}
    <section aria-labelledby="featured-note-heading">
      <div class="portfolio-section-heading">
        <h2 id="featured-note-heading">The latest<br><em class="portfolio-display-accent">thread.</em></h2>
        <p>One focused note at a time — equations, experiments, and the ideas between them.</p>
      </div>

      <a class="portfolio-feature" href="{{ featured.url | relative_url }}">
        <div>
          <p class="portfolio-meta-label">Featured · {{ featured.date | date: '%B %d, %Y' }}</p>
          <h2>{{ featured.title }}</h2>
          <p>{{ featured.description }}</p>
          <div class="portfolio-tags" aria-label="Featured post tags">
            {% if featured.categories != empty %}
              <span class="portfolio-tag" style="border-color: var(--portfolio-accent); font-weight: 600;"> @{{ featured.categories | join: ', ' }}</span>
            {% endif %}
            {% for tag in featured.tags limit: 4 %}
              <span class="portfolio-tag">#{{ tag }}</span>
            {% endfor %}
          </div>
        </div>
        <span class="portfolio-feature-aside" aria-hidden="true">Read<br>the note →</span>
      </a>
    </section>
  {% endif %}

  <section aria-labelledby="all-notes-heading">
    <div class="portfolio-section-heading">
      <h2 id="all-notes-heading">All notes.</h2>
      <p>Rendered from the posts collection and sorted by date, newest first.</p>
    </div>

    <ul class="portfolio-post-list">
      {% for post in posts %}
        {% unless forloop.first %}
          {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
          <li>
            <a class="portfolio-post-row" href="{{ post.url | relative_url }}">
              <span class="portfolio-year">{{ post.date | date: '%Y' }}<br>{{ post.date | date: '%m.%d' }}</span>
              <span>
                <h3>{{ post.title }}</h3>
                <p>{{ post.description }}</p>
              </span>
              <span class="portfolio-post-meta">
                {% if post.categories != empty %}
                  <span class="portfolio-tag" style="margin-bottom: 0.3rem; display: inline-block; font-size: 0.7rem; border-color: var(--portfolio-border-strong);">
                    @{{ post.categories | join: ', ' }}
                  </span>
                  <br>
                {% endif %}
                {{ read_time }} min read
              </span>
              <span class="portfolio-post-arrow" aria-hidden="true">→</span>
            </a>
          </li>
        {% endunless %}
      {% endfor %}
    </ul>
  </section>

  {% if page.pagination.enabled and paginator.total_pages > 1 %}
    <nav class="portfolio-pager" aria-label="Blog pagination">
      {% for page_number in (1..paginator.total_pages) %}
        {% if page_number == paginator.page %}
          <span class="is-current" aria-current="page">{{ page_number }}</span>
        {% elsif page_number == 1 %}
          <a href="{{ '/blog/' | relative_url }}">{{ page_number }}</a>
        {% else %}
          <a href="{{ '/blog/page/' | append: page_number | append: '/' | relative_url }}">{{ page_number }}</a>
        {% endif %}
      {% endfor %}
      {% if paginator.next_page_path %}
        <a href="{{ paginator.next_page_path | relative_url }}">next →</a>
      {% endif %}
    </nav>
  {% endif %}

  <p class="portfolio-note">Content rendered from <code>_posts/</code> with Jekyll pagination.</p>
</div>
