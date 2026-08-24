---
layout: page
title: Latent Patch-Shuffle Style Transfer
description: Training-Free artistic style transfer via Latent Diffusion Models & patch-shuffling to preserve content and eliminate grid artifacts.
img: assets/img/style_transfer_v1/the_starry_night_cat.png
importance: 2
category: research
giscus_comments: true
---

![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white) ![Diffusion](https://img.shields.io/badge/Generative-Diffusion%20%26%20Flow%20Matching-blueviolet.svg?style=for-the-badge) ![Research](https://img.shields.io/badge/Undergraduate-Research%20Project-success.svg?style=for-the-badge)

> **Generative PixelChemy Research Group · VNU-HCM University of Science**
> **Focus:** Training-Free Style Transfer, Latent Space Dynamics, Generative Diffusion Models

---

## 📄 Project Summary & Research Post

This project investigates a **Training-Free Style Transfer framework** based on Latent Diffusion Models (Stable Diffusion / Flow Matching). 

👉 **[Read the Full Experimental Report & Interactive Visualizations]({{ '/blog/2026/style-transfer/' | relative_url }})**

---

## 💡 Motivation & Core Innovation

Traditional style transfer methods using patch permutations or inversion in pixel space suffer from two major limitations:
1. **Content Leakage:** Style reference images frequently leak unintended semantic entities into the stylized output.
2. **Grid Line Artifacts:** Shuffling patches directly on pixel grids leaves sharp, noticeable boundary seams.

### Our Solution: Latent Patch-Shuffle & Guidance Control

* **Latent-Domain Patch Permutation:** Performing patch-shuffling inside the latent manifold ($\mathcal{Z}$-space) of the VAE encoder rather than the RGB pixel space, allowing the decoder to naturally synthesize seamless boundary transitions.
* **Cross-Attention & Sampling Guidance:** Manipulating the denoising trajectory, self-attention maps, and text condition embeddings to preserve fine object contours while adopting artistic textures (e.g., Starry Night, Cyberpunk, Rain Princess).
* **Training-Free Efficiency:** Operates at inference time without requiring expensive per-style fine-tuning or custom adapter training.

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
