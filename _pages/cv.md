---
layout: portfolio_page
portfolio_page: true
portfolio_variant: cv
permalink: /cv/
title: CV
nav: true
nav_order: 4
cv_format: rendercv
cv_pdf: /assets/pdf/cv/MinhNhatNguyen_CV.pdf
description: Second-year CS student and aspiring AI researcher building from mathematics toward computer vision and diffusion models.
---

<div class="portfolio-shell" id="cv-document">
  <header class="portfolio-cv-header">
    <div>
      <p class="portfolio-kicker">— Profile / 2026</p>
      <h1>Nhat M.<br><em>Nguyen.</em></h1>
      <p class="portfolio-cv-subtitle">Second-year CS student · aspiring AI researcher</p>
      <p class="portfolio-hero-description">{{ page.description }}</p>
    </div>
    <div class="portfolio-cv-actions" aria-label="CV actions">
      <a class="portfolio-button" href="{{ '/assets/pdf/cv/MinhNhatNguyen_CV.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">
        View PDF CV ↗
      </a>
      <button class="portfolio-button portfolio-button--ghost" type="button" onclick="togglePdfViewer()" id="pdf-toggle-btn">
        Preview PDF
      </button>
      <button class="portfolio-button portfolio-button--ghost" type="button" onclick="window.print()">Print / save</button>
      <a class="portfolio-button portfolio-button--ghost" href="https://github.com/xdnhatnguyen" rel="noopener noreferrer">View GitHub ↗</a>
    </div>
    <p class="portfolio-index" aria-hidden="true">— 04 / 04 · CV</p>
  </header>

  <div id="pdf-viewer-container" style="display: none; margin: 1.5rem 0; width: 100%;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; padding: 0.5rem 1rem; background: var(--portfolio-surface-subtle, var(--portfolio-surface)); border-radius: 8px; border: 1px solid var(--portfolio-border);">
      <span style="font-size: 0.85rem; opacity: 0.9; font-weight: 500; color: var(--portfolio-fg);">
        📄 MinhNhatNguyen_CV.pdf
      </span>
      <div style="display: flex; gap: 0.5rem;">
        <a href="{{ '/assets/pdf/cv/MinhNhatNguyen_CV.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="portfolio-button portfolio-button--ghost" style="padding: 0.25rem 0.75rem; min-height: 2rem; font-size: 0.75rem;">Open full page ↗</a>
        <a href="{{ '/assets/pdf/cv/MinhNhatNguyen_CV.pdf' | relative_url }}" download class="portfolio-button" style="padding: 0.25rem 0.75rem; min-height: 2rem; font-size: 0.75rem;">Download PDF ⤓</a>
      </div>
    </div>
    <iframe src="{{ '/assets/pdf/cv/MinhNhatNguyen_CV.pdf' | relative_url }}" style="width: 100%; height: 800px; border: 1px solid var(--portfolio-border); border-radius: 12px; background: #ffffff;" title="CV PDF Viewer"></iframe>
  </div>

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
          <span class="portfolio-tag">video retrieval</span>
          <span class="portfolio-tag">calculus</span>
          <span class="portfolio-tag">open source</span>
        </div>
      </section>

      <section>
        <h2>Languages / tooling</h2>
        <ul>
          <li>Python</li>
          <li>PyTorch</li>
          <li>LanceDB</li>
          <li>C / C++</li>
          <li>HuggingFace / CLIP</li>
          <li>LaTeX & Git</li>
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
            <p><strong>Bachelor of Information Technology</strong> · GPA: 3.74/4.0 (8.75/10.0)</p>
            <p style="font-size: 0.9em; opacity: 0.9;"><em>Coursework (All 4.0/4.0):</em> Calculus I & II, Linear Algebra, Data Structures & Algorithms, Programming Fundamentals</p>
            <p style="font-size: 0.9em; opacity: 0.9; margin-top: 0.25rem;"><em>Advanced Online Coursework:</em> <strong>MIT 6.S184:</strong> Generative AI with Stochastic Differential Equations</p>
          </li>
        </ol>
      </section>

      <section class="portfolio-cv-section" aria-labelledby="awards-heading">
        <h2 id="awards-heading">Honors & Awards</h2>
        <ol class="portfolio-timeline">
          <li class="portfolio-timeline-item">
            <p class="portfolio-year">2026</p>
            <h3>Quarter-finalist (Top 36 / 200+ teams) · Coding Challenge 2026</h3>
            <p>Faculty of Information Technology, VNUHCM University of Science (FIT - HCMUS).</p>
          </li>
        </ol>
      </section>

      <section class="portfolio-cv-section" aria-labelledby="research-heading">
        <h2 id="research-heading">Research direction</h2>
        <ol class="portfolio-timeline">
          <li class="portfolio-timeline-item">
            <p class="portfolio-year">Now</p>
            <h3>Generative models, stochastic systems, and vision</h3>
            <p>Developing training-free style transfer via latent patch-shuffling in diffusion models and flow matching, alongside optimal control and stochastic differential equations.</p>
          </li>
        </ol>
      </section>

      <section class="portfolio-cv-section" aria-labelledby="selected-work-heading">
        <h2 id="selected-work-heading">Selected work</h2>
        <ol class="portfolio-timeline">
          <li class="portfolio-timeline-item">
            <p class="portfolio-year">Competition / 2026</p>
            <h3>Video Retrieval Pipeline — AI Challenge HCMC 2026</h3>
            <p>Team lead building an end-to-end multimodal video retrieval system featuring LanceDB hybrid indexing (Vector + BM25) and dynamic programming for temporal sequence alignment (TRAKE). <em>Active competition (Private source code).</em></p>
          </li>
          <li class="portfolio-timeline-item">
            <p class="portfolio-year">Research / 2026</p>
            <h3>Latent Patch-Shuffle Style Transfer</h3>
            <p>Training-free style transfer using Latent Diffusion Models and latent patch-permutations, eliminating content leakage and pixel-space grid artifacts.</p>
          </li>
          <li class="portfolio-timeline-item">
            <p class="portfolio-year">Study / 2025</p>
            <h3>Digits Classification Project</h3>
            <p>Team lead for a CNN vs. MLP benchmark on MNIST, with reproducible training, evaluation, and visualization.</p>
          </li>
        </ol>
      </section>

      <section class="portfolio-cv-section" aria-labelledby="writing-heading">
        <h2 id="writing-heading">Writing</h2>
        <ol class="portfolio-timeline">
          <li class="portfolio-timeline-item">
            <p class="portfolio-year">Aug. 2026</p>
            <h3><a href="{{ '/blog/2026/style-transfer/' | relative_url }}">Style Transfer Visualization & Latent Experiments</a></h3>
            <p>Experimental results on Stable Diffusion style transfer, patch-shuffle in latent space, and visual convergence analysis.</p>
          </li>
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

<script>
  function togglePdfViewer() {
    const container = document.getElementById('pdf-viewer-container');
    const toggleBtn = document.getElementById('pdf-toggle-btn');
    if (container.style.display === 'none') {
      container.style.display = 'block';
      if (toggleBtn) toggleBtn.textContent = 'Hide PDF Preview';
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      container.style.display = 'none';
      if (toggleBtn) toggleBtn.textContent = 'Preview PDF';
    }
  }
</script>

