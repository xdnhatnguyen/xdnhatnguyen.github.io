---
layout: page
title: Digits Classification Project
description: Team Lead | CNN vs. MLP benchmark for digit recognition (analyze model performance and architectural trade-offs).
img: assets/img/MNIST.jpg # Tải ảnh này từ repo cũ và bỏ vào thư mục assets/img/ của web hiện tại nhé
importance: 2
category: study
giscus_comments: true
---

![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white) ![Python](https://img.shields.io/badge/python-3.8+-blue.svg?style=for-the-badge&logo=python&logoColor=white) ![License](https://img.shields.io/badge/license-MIT-green.svg?style=for-the-badge)

> Course Project **Introduction to Information Technology** > **Faculty of Information Technology - VNU-HCM University of Science**

This project implements and compares the performance of Deep Learning models (MLP & CNN) for handwritten digit recognition using the MNIST dataset. The project is built with a modular architecture, designed for extensibility and academic research purposes.

---

## 📄 Documentation & Paper

The project is accompanied by a detailed scientific report, providing an in-depth analysis of the mathematical foundations and empirical evaluation.

👉 **[Read the full report (PDF)](https://raw.githubusercontent.com/xdnhatnguyen/Digits-Classification-Project/main/docs/final_article.pdf)**

---

## ✨ Key Features

* **Modular Architecture:** Clear separation between Data Loading, Model, Loss function, and Training loop.
* **Multi-Architecture Support:**
    * **MLP (Multi-layer Perceptron):** Fully Connected Neural Network, Basic Feed-Forward Network (Baseline).
    * **CNN (Convolutional Neural Network):** Convolutional network optimized for spatial feature extraction.
* **Reproducibility:** Hyperparameter management via `yaml` configuration files.
* **Logging & Visualization:** Real-time loss/accuracy tracking and prediction visualization.

## 📅 Project Timeline and Team Members (HCMUS-ConChoCaoBangBoPC)

Below is the implementation progress and task distribution of the team throughout the development process:

![Gantt Chart](https://raw.githubusercontent.com/xdnhatnguyen/Digits-Classification-Project/main/assets/GanttChart.png)

---

## 📂 Project Structure

```bash
digits_classification/
├── docs/                           # Project documentation
│   └── final_article.pdf           # Scientific report file
├── configs/                        # Configuration files
│   └── config.yaml                 # Main config (Epochs, LR, Model type...)
├── assets/                         # Image files
│   └── GanttChart.png              # Project Timeline
│   └── Figure_1.png                # A graph that compares loss over time between the two models during training
│   └── Figure_2.png                # A graph that compares accuracy over time between the two models after every epoch
│   └── Figure_3.png                # An evaluation table for the MLP Model
│   └── Figure_4.png                # An evaluation table for the CNN Model
│   └── cnn_interface.png           # User interface for the CNN Model
│   └── mlp_interface.png           # User interface for the CNN Model
│   └── demo.mp4                    # Interactive Demo
│   └── cnn_confusion_matrix.pdf    # A confusion matrix for CNN Model
│   └── mlp_confusion_matrix.pdf    # A confusion matrix for MLP Model
│   └── mnist_samples_high_res.pdf  # Samples of the MNIST dataset
├── src/                            # Source code
│   ├── dataloader.py               # Data processing module (DataLoader, Transforms)
│   ├── model.py                    # Model architecture definitions (CNN, MLP)
│   ├── trainer.py                  # Training script
│   └── utils.py                    # Utilities (Visualization, reading from config.yaml, etc)
├── model                           # Directory for saving trained model weights
├── main.py                         # Perform all the training, validating, and result visualizing steps defined in 'src/.'      
├── app.py                          # Play a demo of both models
├── requirements.txt                # Project dependencies
└── README.md                       # README file
