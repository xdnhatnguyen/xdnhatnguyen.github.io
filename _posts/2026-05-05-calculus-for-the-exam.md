---
layout: post
title: "Compilation of Problem in Calculus 2"
date: 2026-05-06 17:28:00 +0700
description: Compilation of challenging in Calculus 2 preparing for the exam.
tags: math calculus exam
categories: study-notes
giscus_comments: true
related_posts: true
excerpt_separator: "<!--more-->"
---
{% tabs language-switch %}

{% tab language-switch Vietnamese %}

## Vector Calculus Operators

Trong phần này, ta xét các trường vô hướng
$f: \mathbb{R}^n \to \mathbb{R}$ và trường vector
$\mathbf{f}: \mathbb{R}^n \to \mathbb{R}^m$. Giả sử các hàm số đều khả
vi liên tục.

**Toán tử Nabla ($\nabla$)**\
Toán tử vi phân vector, ký hiệu là $\nabla$ (đọc là \"del\" hoặc
\"nabla\"), được định nghĩa trong không gian Descartes $n$-chiều như một
vector cột các đạo hàm riêng: $$\nabla \triangleq \begin{bmatrix}
        \frac{\partial}{\partial x_1} \\
        \vdots \\
        \frac{\partial}{\partial x_n}
    \end{bmatrix}$$

**Gradient (Độ dốc)**\
Cho hàm vô hướng $f(\mathbf{x}): \mathbb{R}^n \to \mathbb{R}$. Gradient
của $f$, ký hiệu là $\nabla f$ hoặc $\text{grad}(f)$, là một trường
vector biểu thị hướng và độ lớn của sự thay đổi nhanh nhất của hàm số:
$$\nabla f(\mathbf{x}) \triangleq \begin{bmatrix}
        \frac{\partial f}{\partial x_1} \\
        \vdots \\
        \frac{\partial f}{\partial x_n}
    \end{bmatrix} \in \mathbb{R}^n$$

**Divergence (Độ phân kỳ)**\
Cho trường vector
$\mathbf{f}(\mathbf{x}): \mathbb{R}^n \to \mathbb{R}^n$, với
$\mathbf{f}(\mathbf{x}) = [f_1(\mathbf{x}), \dots, f_n(\mathbf{x})]^T$.
Divergence của $\mathbf{f}$, ký hiệu là $\nabla \cdot \mathbf{f}$ hoặc
$\text{div}(\mathbf{f})$, là một trường vô hướng:
$$\nabla \cdot \mathbf{f} \triangleq \sum_{i=1}^n \frac{\partial f_i}{\partial x_i} = \frac{\partial f_1}{\partial x_1} + \dots + \frac{\partial f_n}{\partial x_n}$$
Ý nghĩa: Đo lường mức độ \"nguồn\" (source) hoặc \"bể chứa\" (sink) của
dòng chảy tại một điểm.

**Laplacian (Toán tử Laplace)**\
Laplacian của một hàm vô hướng $f(\mathbf{x})$, ký hiệu là $\Delta f$
hoặc $\nabla^2 f$, được định nghĩa là divergence của gradient của hàm
đó:
$$\Delta f \triangleq \nabla \cdot (\nabla f) = \sum_{i=1}^n \frac{\partial^2 f}{\partial x_i^2}$$
Toán tử này đóng vai trò trung tâm trong phương trình truyền nhiệt (Heat
Equation) và các mô hình khuếch tán (Diffusion Models).

**Trace (Vết của ma trận)**\
Cho ma trận vuông $\mathbf{A} \in \mathbb{R}^{n \times n}$ với các phần
tử là $A_{ij}$. Trace của $\mathbf{A}$, ký hiệu là
$\text{Tr}(\mathbf{A})$, được định nghĩa là tổng các phần tử nằm trên
đường chéo chính:
$$\text{Tr}(\mathbf{A}) \triangleq \sum_{i=1}^n A_{ii}$$ Trace là một
toán tử ánh xạ từ không gian các ma trận vuông sang một số vô hướng
(scalar). Nó đóng vai trò trung tâm trong việc tính toán Divergence xấp
xỉ.

**Ma trận Jacobian**\
Cho hàm vector $\mathbf{f}: \mathbb{R}^n \to \mathbb{R}^m$. Ma trận
Jacobian $\mathbf{J} \in \mathbb{R}^{m \times n}$ chứa tất cả các đạo
hàm riêng bậc nhất:
$$\mathbf{J}_{\mathbf{f}}(\mathbf{x}) \triangleq \frac{\partial \mathbf{f}}{\partial \mathbf{x}} = \begin{bmatrix}
        \frac{\partial f_1}{\partial x_1} & \cdots & \frac{\partial f_1}{\partial x_n} \\
        \vdots & \ddots & \vdots \\
        \frac{\partial f_m}{\partial x_1} & \cdots & \frac{\partial f_m}{\partial x_n}
    \end{bmatrix}$$ Định thức Jacobian $|\det(\mathbf{J})|$ (với $m=n$)
được sử dụng trong phép đổi biến số của hàm mật độ xác suất.

**Ma trận Hessian**\
Cho hàm vô hướng $f: \mathbb{R}^n \to \mathbb{R}$. Ma trận Hessian
$\mathbf{H} \in \mathbb{R}^{n \times n}$ là ma trận vuông đối xứng chứa
các đạo hàm riêng bậc hai:
$$\mathbf{H}_f(\mathbf{x}) \triangleq \nabla^2 f(\mathbf{x}) = \begin{bmatrix}
        \frac{\partial^2 f}{\partial x_1^2} & \frac{\partial^2 f}{\partial x_1 \partial x_2} & \cdots & \frac{\partial^2 f}{\partial x_1 \partial x_n} \\
        \frac{\partial^2 f}{\partial x_2 \partial x_1} & \frac{\partial^2 f}{\partial x_2^2} & \cdots & \frac{\partial^2 f}{\partial x_2 \partial x_n} \\
        \vdots & \vdots & \ddots & \vdots \\
        \frac{\partial^2 f}{\partial x_n \partial x_1} & \frac{\partial^2 f}{\partial x_n \partial x_2} & \cdots & \frac{\partial^2 f}{\partial x_n^2}
    \end{bmatrix}$$

Các công thức tóm tắt dưới đây diễn tả trong không gian $\mathbb{R}^{2}$
và $\mathbb{R}^{3}$.

## Basic geometric concepts of Calculus

-   **Chuẩn của vector:** $\|u\| = \sqrt{\langle u, u \rangle}$.

-   **Góc giữa hai vector:**
    $\cos \theta = \frac{u \cdot v}{\|u\| \cdot \|v\|}$.

**Tích có hướng (Cross Product):**

-   Tính phản giao hoán: $u \times v = - (v \times u)$.

-   Tính trực giao: $(u \times v) \perp u$ và $(u \times v) \perp v$.

**Định lý kẹp (Squeeze Theorem):** Sử dụng để đánh giá giới hạn của một
hàm số khi nó bị chặn giữa hai hàm số khác cùng hội tụ về một giá trị.

## Linear Approximation and Differentials

**1. Đạo hàm của tích phân theo tham số (Leibniz Rule):**\
Xét hàm $f(x, y) = \displaystyle\int_{b(x, y)}^{a(x, y)} g(t) dt$. Để
tính $\frac{\partial f}{\partial x}$ và $\frac{\partial f}{\partial y}$,
ta sử dụng quy tắc đạo hàm dưới dấu tích phân.

**2. Xấp xỉ tuyến tính:**

-   Hàm số có thể được xấp xỉ bởi mặt phẳng tiếp tuyến:
    $f(x, y) \approx L(x, y)$.

-   Phương trình xấp xỉ:
    $L(x, y) = f(a, b) + f_x(a, b)(x - a) + f_y(a, b)(y - b)$.

-   **Mặt phẳng tiếp xúc:**
    $z - z_0 = f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0)$.

-   **Vi phân toàn phần:** $df = f_x(x, y)dx + f_y(x, y)dy$.

-   **Mối liên hệ:** Độ biến thiên thực tế
    $\Delta f = f(x+dx, y+dy) - f(x, y)$ có thể được xấp xỉ bởi vi phân
    toàn phần khi gia số nhỏ: $df \approx \Delta f$.

## Directional Derivative and Implicit Function

**1. Đạo hàm theo hướng (Directional Derivative):**

-   **Gradient:**
    $\nabla f(x_1, \dots, x_n) = \left( \frac{\partial f}{\partial x_1}, \dots, \frac{\partial f}{\partial x_n} \right)$.

-   **Vector chỉ phương chuẩn hóa:** $u = \frac{v}{\|v\|}$.

-   **Công thức:** $D_u f(x_0, y_0) = \nabla f(x_0, y_0) \cdot u$.

-   **Ý nghĩa hình học:** Giá trị đạo hàm theo hướng bị chặn bởi độ lớn
    của vector gradient:
    $$-\|\nabla f(x_0, y_0)\| \le D_u f \le \|\nabla f(x_0, y_0)\|$$ Hàm
    số tăng nhanh nhất theo hướng của gradient
    $\left(u = \frac{\nabla f}{\|\nabla f\|}\right)$ và giảm nhanh nhất
    theo hướng ngược lại.

**2. Mặt phẳng tiếp xúc với mặt đẳng trị:**\
Xét mặt đẳng trị $(S): f(x, y, z) = K$. Tại điểm
$P(x_0, y_0, z_0) \in S$, vector pháp tuyến chính là
$\nabla f(x_0, y_0, z_0)$.

-   **Phương trình mặt phẳng tiếp xúc:**
    $$f_x(P)(x - x_0) + f_y(P)(y - y_0) + f_z(P)(z - z_0) = 0$$

-   **Phương trình đường thẳng pháp tuyến:**
    $$\frac{x - x_0}{f_x(P)} = \frac{y - y_0}{f_y(P)} = \frac{z - z_0}{f_z(P)}$$

**3. Quy tắc chuỗi và Đạo hàm hàm ẩn:**

-   **Hàm hợp (Chain Rule):**
    $\frac{df}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt}$.

-   **Đạo hàm hàm ẩn 1 biến:** Cho phương trình $F(x,y)=0$, ta có:
    $$\frac{dy}{dx} = - \frac{F_x}{F_y} = - \frac{\frac{\partial F}{\partial x}}{\frac{\partial F}{\partial y}}$$

-   **Đạo hàm hàm ẩn nhiều biến:** Cho phương trình $F(x,y,z)=0$, ta có:
    $$\frac{\partial z}{\partial x} = -\frac{F_x}{F_z} \quad \text{và} \quad \frac{\partial z}{\partial y} = -\frac{F_y}{F_z}$$


{% endtab %}
{% endtabs %}
<!--more-->