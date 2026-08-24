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
  per_page: 10
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

<div class="portfolio-shell">
  <header class="portfolio-hero">
    <div class="portfolio-hero-copy">
      <p class="portfolio-kicker">— Research & Life Notes</p>
      <h1>pixelchemy<br><em>blog.</em></h1>
      <p class="portfolio-hero-description">Learning and building AI from scratch with math, algorithms, and personal musings.</p>
    </div>
    <p class="portfolio-hero-aside">Small proofs.<br>Useful questions.<br>Shared in public.</p>
    <p class="portfolio-index" aria-hidden="true">— 01 / 04 · Blog</p>
  </header>

  {% assign all_posts = site.posts | where_exp: "item", "item.hidden != true and item.hide != true" | sort: 'date' | reverse %}

  <!-- ═══════════════════════════════════════════════════
       FILTER TOOLBAR & TABS
  ════════════════════════════════════════════════════ -->
  <div class="portfolio-toolbar" aria-label="Blog metadata and topics" style="display: flex; flex-direction: column; align-items: flex-start; gap: 0.8rem;">
    <div style="display: flex; justify-content: space-between; width: 100%; align-items: center; flex-wrap: wrap; gap: 0.5rem; border-bottom: 1px dashed var(--portfolio-border, rgba(255, 255, 255, 0.15)); padding-bottom: 0.5rem;">
      <p class="portfolio-source" style="margin: 0;">_posts/ · {{ all_posts.size }} articles</p>
      
      <!-- Primary Stream Tabs -->
      <div class="portfolio-stream-tabs" style="display: flex; gap: 0.4rem;">
        <button class="portfolio-filter is-active stream-tab-btn" data-target="all" onclick="filterStream('all', this)">All</button>
        <button class="portfolio-filter stream-tab-btn" data-target="research" onclick="filterStream('research', this)">🔬 Research & Math</button>
        <button class="portfolio-filter stream-tab-btn" data-target="life" onclick="filterStream('life', this)">☕ Life & Essays</button>
      </div>
    </div>
    
    <!-- Category & Tag navigation -->
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
  
  <!-- Technical research featured post -->
  {% assign featured = all_posts | where_exp: "item", "item.categories contains 'Deep-Learning' or item.categories contains 'ai-theory' or item.categories contains 'math'" | first %}
  {% if featured == nil %}
    {% assign featured = all_posts | first %}
  {% endif %}

  {% if featured %}
    <section aria-labelledby="featured-note-heading" class="blog-stream-item" data-stream="research">
      <div class="portfolio-section-heading">
        <h2 id="featured-note-heading">Featured<br><em class="portfolio-display-accent">research.</em></h2>
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

  <!-- ═══════════════════════════════════════════════════
       POSTS LIST
  ════════════════════════════════════════════════════ -->
  <section aria-labelledby="all-notes-heading">
    <div class="portfolio-section-heading">
      <h2 id="all-notes-heading">Articles & Notes.</h2>
      <p id="stream-section-desc">Showing all research notes and personal writings.</p>
    </div>

    <ul class="portfolio-post-list" id="blog-post-list">
      {% for post in all_posts %}
        {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
        {% assign is_life = false %}
        {% if post.categories contains 'life' or post.categories contains 'experience' %}
          {% assign is_life = true %}
        {% endif %}
        
        <li class="blog-post-entry" data-stream="{% if is_life %}life{% else %}research{% endif %}">
          <a class="portfolio-post-row" href="{{ post.url | relative_url }}">
            <span class="portfolio-year">{{ post.date | date: '%Y' }}<br>{{ post.date | date: '%m.%d' }}</span>
            <span>
              <h3>
                {% if is_life %}☕ {% endif %}{{ post.title }}
              </h3>
              <p>{{ post.description }}</p>
            </span>
            <span class="portfolio-post-meta">
              {% if post.categories != empty %}
                <span class="portfolio-tag" style="margin-bottom: 0.3rem; display: inline-block; font-size: 0.7rem; border-color: {% if is_life %}#e0a96d{% else %}var(--portfolio-border-strong){% endif %}; color: {% if is_life %}#e0a96d{% else %}inherit{% endif %};">
                  @{{ post.categories | join: ', ' }}
                </span>
                <br>
              {% endif %}
              {{ read_time }} min read
            </span>
            <span class="portfolio-post-arrow" aria-hidden="true">→</span>
          </a>
        </li>
      {% endfor %}
    </ul>
  </section>

  <p class="portfolio-note">Organized into separate research and personal writing streams.</p>
</div>

<script>
function filterStream(type, btn) {
  // Update active button state
  document.querySelectorAll('.stream-tab-btn').forEach(function(b) {
    b.classList.remove('is-active');
  });
  if (btn) btn.classList.add('is-active');

  var posts = document.querySelectorAll('.blog-post-entry');
  var desc = document.getElementById('stream-section-desc');

  posts.forEach(function(post) {
    var postType = post.getAttribute('data-stream');
    if (type === 'all' || postType === type) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });

  if (desc) {
    if (type === 'research') {
      desc.textContent = 'Showing technical research notes, mathematical proofs, and algorithms.';
    } else if (type === 'life') {
      desc.textContent = 'Showing personal reflections, university stories, and essays.';
    } else {
      desc.textContent = 'Showing all research notes and personal writings.';
    }
  }
}
</script>
