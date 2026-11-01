---
layout: portfolio_page
portfolio_page: true
portfolio_variant: cv
permalink: /cv/
title: CV
nav: true
nav_order: 4
cv_pdf: /assets/pdf/cv/MinhNhatNguyen_CV.pdf
description: Undergraduate student in Computer Science at University of Science, VNUHCM. Researching generative models, optimal control, and computer vision.
---

<div class="portfolio-shell" id="cv-document">
  <header class="portfolio-cv-header">
    <div>
      <p class="portfolio-kicker">— Curriculum Vitæ / 2026</p>
      <h1>Minh-Nhat<br><em>Nguyen.</em></h1>
      <p class="portfolio-cv-subtitle">Undergraduate CS Student · Aspiring AI Researcher</p>
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
      <a class="portfolio-button portfolio-button--ghost" href="https://github.com/xdnhatnguyen" target="_blank" rel="noopener noreferrer">View GitHub ↗</a>
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
          <li><a href="mailto:nguyenminhnhat.cs@gmail.com">nguyenminhnhat.cs@gmail.com</a></li>
          <li><a href="https://github.com/xdnhatnguyen" target="_blank" rel="noopener noreferrer">github.com/xdnhatnguyen</a></li>
          <li><a href="https://xdnhatnguyen.github.io">xdnhatnguyen.github.io</a></li>
        </ul>
      </section>

      <section>
        <h2>Focus</h2>
        <div class="portfolio-tags">
          <span class="portfolio-tag">Generative Models</span>
          <span class="portfolio-tag">Diffusion & Flow</span>
          <span class="portfolio-tag">Optimal Control</span>
          <span class="portfolio-tag">Computer Vision</span>
          <span class="portfolio-tag">Video Retrieval</span>
        </div>
      </section>

      <section>
        <h2>Languages / tooling</h2>
        <ul>
          <li>Python & PyTorch</li>
          <li>LanceDB (Vector + BM25)</li>
          <li>C / C++</li>
          <li>HuggingFace & Transformers</li>
          <li>Git & LaTeX</li>
        </ul>
      </section>
    </aside>

    <main class="portfolio-cv-main">
      <section class="portfolio-cv-section" aria-labelledby="summary-heading">
        <h2 id="summary-heading">Professional Summary</h2>
        <p style="color: var(--portfolio-muted); line-height: 1.6;">
          A Computer Science undergraduate with a solid mathematical foundation (Calculus, Linear Algebra, Stochastic Systems) and hands-on research in Computer Vision and Generative Models (Diffusion Models, Flow Matching). Experienced in developing training-free generative methods and multimodal video retrieval pipelines.
        </p>
      </section>

      <section class="portfolio-cv-section" aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>
        <ol class="portfolio-timeline">
          <li class="portfolio-timeline-item">
            <p class="portfolio-year">2025 — 2029 (expected)</p>
            <h3>University of Science, VNUHCM</h3>
            <p><strong>Bachelor of Information Technology</strong> (Intended Major: Computer Science) · GPA: 3.74/4.0 (8.75/10.0)</p>
            <p style="font-size: 0.9em; opacity: 0.9; margin-top: 0.25rem;"><em>Relevant Coursework (All 4.0/4.0):</em> Calculus I & II, Linear Algebra, Data Structures & Algorithms, Programming Fundamentals</p>
            <p style="font-size: 0.9em; opacity: 0.9; margin-top: 0.25rem;"><em>Advanced Online Coursework:</em> <strong>MIT 6.S184:</strong> Generative AI with Stochastic Differential Equations</p>
          </li>
          <li class="portfolio-timeline-item">
            <p class="portfolio-year">2022 — 2025</p>
            <h3>Le Quy Don Gifted High School</h3>
            <p><strong>High School Diploma</strong> · Mathematics Specialization (Da Nang, Vietnam)</p>
          </li>
        </ol>
      </section>

      <section class="portfolio-cv-section" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Experience & Research</h2>
        <ol class="portfolio-timeline">
          <li class="portfolio-timeline-item">
            <p class="portfolio-year">March 2026 — Present</p>
            <h3>Undergraduate AI Researcher · University of Science, VNUHCM</h3>
            <p>Developing training-free methods for style transfer using Latent Diffusion Models and Flow Matching, introducing latent patch-shuffling to eliminate content leakage and pixel-space grid artifacts.</p>
            <p style="font-size: 0.9em; opacity: 0.9; margin-top: 0.25rem;">Optimizing generative algorithms by manipulating sampling trajectories, guidance terms, and cross-attention maps to control stylistic and structural outputs.</p>
          </li>
        </ol>
      </section>

      <section class="portfolio-cv-section" aria-labelledby="publications-heading">
        <h2 id="publications-heading">Publications</h2>
        <ol class="portfolio-timeline">
          <li class="portfolio-timeline-item">
            <p class="portfolio-year">SOICT 2026 · Oral</p>
            <h3>
              <a href="https://xdnhatnguyen.github.io/OrthoStyle/" target="_blank" rel="noopener noreferrer">
                OrthoStyle: Manifold-Preserving Training-Free Style Transfer via Score-Orthogonal Guidance ↗
              </a>
            </h3>
            <p style="font-size: 0.9em; opacity: 0.9; margin-bottom: 0.4rem;">
              <strong>Minh Nhat Nguyen</strong>, Dang Quang Pham, Thien Phuc Vo, Phuc Loc Dang, Duc Khoan Le
            </p>
            <p style="font-size: 0.9em; opacity: 0.85; margin-bottom: 0.4rem;">
              <em>The 13th International Symposium on Information and Communication Technology (SOICT 2026)</em> · <strong>Oral Presentation</strong> · <a href="https://xdnhatnguyen.github.io/OrthoStyle/" target="_blank" rel="noopener noreferrer">Project Page</a>
            </p>
            <p>
              A training-free framework balancing style fidelity and content preservation without network fine-tuning or DDIM inversion. Extensive quantitative and qualitative comparisons with both OC-based baselines and representative stylization methods show that OrthoStyle achieves a favorable balance between style fidelity and content preservation while maintaining structural consistency, outperforming the baseline that uses the same Stable Cascade backbone.
            </p>
          </li>
        </ol>
      </section>

      <section class="portfolio-cv-section" aria-labelledby="awards-heading">
        <h2 id="awards-heading">Honors & Awards</h2>
        <ol class="portfolio-timeline">
          <li class="portfolio-timeline-item">
            <p class="portfolio-year">May 2026</p>
            <h3>Quarter-finalist (Top 36 / 200+ teams) · Coding Challenge 2026</h3>
            <p>Faculty of Information Technology, University of Science, VNUHCM.</p>
          </li>
        </ol>
      </section>

      <section class="portfolio-cv-section" aria-labelledby="selected-work-heading">
        <h2 id="selected-work-heading">Projects</h2>
        <ol class="portfolio-timeline">
          <li class="portfolio-timeline-item">
            <p class="portfolio-year">Aug. 2026</p>
            <h3>Video Retrieval Pipeline — AI Challenge HCMC 2026 (Team Lead)</h3>
            <p>Multimodal video retrieval pipeline addressing KIS, VQA, and temporal alignment (TRAKE). Engineered hybrid retrieval combining dense semantic embeddings (CLIP/SigLIP) with full-text search (BM25 via LanceDB) and Dynamic Programming (DANTE algorithm).</p>
          </li>
          <li class="portfolio-timeline-item">
            <p class="portfolio-year">Aug. 2026</p>
            <h3>Latent Patch-Shuffle Style Transfer</h3>
            <p>Training-free style transfer framework on latent diffusion models, utilizing latent patch-shuffling to retain core object geometry while preventing content leakage.</p>
          </li>
          <li class="portfolio-timeline-item">
            <p class="portfolio-year">Nov. 2025</p>
            <h3>Handwritten Digits Classification (MNIST benchmark)</h3>
            <p>Led research benchmarking CNN vs. MLP architectures from scratch in PyTorch, analyzing mathematical convergence and accuracy trade-offs.</p>
          </li>
          <li class="portfolio-timeline-item">
            <p class="portfolio-year">Dec. 2025</p>
            <h3>Gomoku (Tic-Tac-Toe) AI Bot</h3>
            <p>Classical AI opponent implemented in C++ using Minimax with Alpha-Beta pruning for efficient game tree evaluation.</p>
          </li>
        </ol>
      </section>

      <section class="portfolio-cv-section" aria-labelledby="writing-heading">
        <h2 id="writing-heading">Research Notes & Writing</h2>
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
