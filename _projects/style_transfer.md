---
layout: page
title: "OrthoStyle: Training-Free Style Transfer"
description: Training-Free style transfer via score-orthogonal guidance and latent dynamics, balancing style fidelity and content preservation (Oral at SOICT 2026).
img: assets/img/style_transfer_v1/the_starry_night_cat.png
importance: 1
category: research
giscus_comments: true
---

![Oral](https://img.shields.io/badge/SOICT%202026-Oral%20Presentation-orange.svg?style=for-the-badge) ![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white) ![Diffusion](https://img.shields.io/badge/Generative-Diffusion%20%26%20Flow%20Matching-blueviolet.svg?style=for-the-badge) ![Research](https://img.shields.io/badge/Undergraduate-Research%20Project-success.svg?style=for-the-badge)

> **Generative PixelChemy Research Group · Faculty of Information Technology, VNUHCM - University of Science**  
> **Paper:** *OrthoStyle: Manifold-Preserving Training-Free Style Transfer via Score-Orthogonal Guidance* (SOICT 2026, Oral)  
> **Authors:** Minh Nhat Nguyen, Dang Quang Pham, Thien Phuc Vo, Phuc Loc Dang, Duc Khoan Le

---

## 🌐 Official Project Page & Code

👉 **[Visit the OrthoStyle Project Page (Interactive Demos & Visualizations)](https://xdnhatnguyen.github.io/OrthoStyle/)**  
👉 **[GitHub Code Repository](https://github.com/xdnhatnguyen/OrthoStyle-CodeRunner)**  
👉 **[Read Experimental Report & Blog Post]({{ '/blog/2026/style-transfer/' | relative_url }})**

---

## 💡 Motivation & Core Innovation

Reference-based diffusion style transfer often struggles with a fundamental trade-off: strong style injection causes structural distortion and semantic leakage, while conservative guidance results in under-stylization.

**OrthoStyle** introduces a training-free framework balancing style fidelity and content preservation without network fine-tuning or DDIM inversion:
* **Score-Orthogonal Guidance:** Projects style gradients orthogonally to the diffusion score trajectory, ensuring minimal destructive interference with content semantics.
* **Semantic Gating & Early Step Control:** Governs style pushforward during crucial initial layout timesteps while preserving fine structural boundaries.
* **Benchmark Outperformance:** Extensive quantitative and qualitative comparisons show OrthoStyle achieves a superior balance of style fidelity and structural consistency, completely outperforming baselines on the same Stable Cascade backbone.

---

## 🎨 Visual Results Matrix

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/style_transfer_v1/the_starry_night_cat.png" title="The Starry Night Cat" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/style_transfer_v1/cyberpunk_dog.png" title="Cyberpunk Dog" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/style_transfer_v1/rain_princess_can.png" title="Rain Princess Can" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Visual results demonstrating structural geometry retention with distinctive artistic style transfers across multiple semantic objects.
</div>
