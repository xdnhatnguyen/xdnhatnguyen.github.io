---
layout: post
title: "Optimal Control: Pontryagin's Maximum Principle and HJB Equation"
date: 2026-05-05 10:33:00 +0700
description: Mathematical foundations of Optimal Control Theory, rigorous derivations of Pontryagin's Maximum Principle, the Hamilton-Jacobi-Bellman Equation, and linear-quadratic analytical equivalence.
tags: math optimal-control calculus
categories: ai-theory
giscus_comments: true
related_posts: true
tabs: true
excerpt_separator: "<!--more-->"
---

{% tabs language-switch %}

{% tab language-switch Vietnamese %}

# The Pontryagin's Maximum Principle

## Statement of the Problem

Xét bài toán điều khiển tối ưu với phương trình trạng thái và điều kiện ban đầu:

$$
\begin{aligned}
    \dot{x}(t) &= f(x(t), u(t)) \\
    x(0) &= x_0
\end{aligned}
$$

Mục tiêu là tìm tín hiệu điều khiển $u(t)$ trên đoạn $[0, T]$ nhằm cực tiểu hóa hàm chi phí tổng quát:

$$
J(u) = \Phi(x(T)) + \int_0^T L(x(t), u(t)) \, dt
$$

trong đó $\Phi(x(T))$ là chi phí tại thời điểm kết thúc (terminal cost), và $L(x(t), u(t))$ là chi phí vận hành (running cost).

<div class="eq-box">
  <span class="eq-label">Hàm Hamiltonian</span>
  $$H(x, u, p) = p^T f(x, u) + L(x, u)$$
</div>

Trong đó $p(t)$ là vectơ biến đối ngẫu (costate hoặc adjoint variable). 

<div class="eq-box">
  <span class="eq-label">Hệ Thức Pontryagin's Maximum Principle (PMP)</span>
  $$\begin{aligned}
      \dot{x}^*(t) &= \frac{\partial H}{\partial p} \\[6pt]
      \dot{p}(t) &= -\frac{\partial H}{\partial x} \\[6pt]
      \frac{\partial H}{\partial u} &= 0
  \end{aligned}$$
</div>

với điều kiện biên transversality tại thời điểm kết thúc $T$:

$$
p(T) = \nabla \Phi(x(T))
$$

---

## Proof

<div class="note">
  <span class="tag-label">Tài liệu tham khảo</span>
  Lawrence C. Evans, UC Berkeley, <em>"An Introduction to Mathematical Optimal Control Theory"</em>, Appendix.
</div>

### a. Phương trình Adjoint

Ta cần chứng minh phương trình đối ngẫu:

$$
\dot{p}(t) = -\frac{\partial H}{\partial x}
$$

**Bài toán:** Trước hết, xét bài toán tối ưu với chi phí gốc $J = \int_0^T L(x, u) \, dt$ dưới ràng buộc động lực học $f(x, u) - \dot{x}(t) = 0$.

Xét phiếm hàm mở rộng (Augmented Functional) với nhân tử Lagrange $p(t)$:

$$
\mathcal{L} = \int_0^T \left[ L(x, u) + p(t)^T \big(f(x, u) - \dot{x}\big) \right] dt
$$

Thay định nghĩa của hàm Hamiltonian $H(x, u, p) = L(x, u) + p(t)^T f(x, u)$ vào, ta thu được:

$$
\mathcal{L} = \int_0^T \left[ H(x, u, p) - p(t)^T \dot{x} \right] dt
$$

Lấy biến phân bậc nhất của $\mathcal{L}$:

$$
\delta \mathcal{L} = \int_0^T \left[ \frac{\partial H}{\partial x} \delta x - p(t)^T \delta \dot{x} \right] dt = 0 \tag{i}
$$

$$
\delta \mathcal{L} = \int_0^T \left( \frac{\partial H}{\partial x} + \dot{p}(t)^T \right) \delta x \, dt = 0 \tag{ii}
$$

Vì tích phân triệt tiêu với mọi biến thiên tùy ý $\delta x$, biểu thức dưới dấu tích phân phải đồng nhất bằng $0$:

$$
\frac{\partial H}{\partial x} + \dot{p}^T = 0 \implies \dot{p}(t) = -\frac{\partial H}{\partial x}
$$

#### Chứng minh (i): Biến phân bậc nhất

Thiết lập nhiễu động (perturbation) cho biến trạng thái với tham số $\epsilon$:

$$
\begin{aligned}
    x(t, \epsilon) &= x^*(t) + \epsilon \, \eta(t) \implies \delta x = \epsilon \, \eta(t) \\[4pt]
    \dot{x}(t, \epsilon) &= \dot{x}^*(t) + \epsilon \, \dot{\eta}(t) \implies \delta \dot{x} = \epsilon \, \dot{\eta}(t)
\end{aligned}
$$

Xét phiếm hàm phụ thuộc theo tham số $\epsilon$:

$$
\mathcal{L}(\epsilon) = \int_0^T \left[ H(x(t, \epsilon), u, p) - p^T \dot{x}(t, \epsilon) \right] dt
$$

Đạo hàm theo $\epsilon$:

$$
\frac{d\mathcal{L}}{d\epsilon} = \int_0^T \frac{\partial}{\partial \epsilon} \left[ H(x(t, \epsilon), u, p) - p^T \dot{x}(t, \epsilon) \right] dt
$$

Áp dụng quy tắc chuỗi (Chain Rule):

- **Thành phần thứ nhất:**
  $$
  \frac{\partial H}{\partial \epsilon} = \frac{\partial H}{\partial x} \frac{\partial x}{\partial \epsilon} = \frac{\partial H}{\partial x} \eta(t)
  $$

- **Thành phần thứ hai:**
  $$
  \frac{\partial}{\partial \epsilon} \left( p^T \dot{x}(t, \epsilon) \right) = p^T \frac{\partial \dot{x}}{\partial \epsilon} = p^T \dot{\eta}(t)
  $$

Thay vào tích phân:

$$
\frac{d\mathcal{L}}{d\epsilon} = \int_0^T \left( \frac{\partial H}{\partial x} \eta(t) - p^T \dot{\eta}(t) \right) dt
$$

Theo định nghĩa biến phân bậc nhất $\delta \mathcal{L} = \left( \left. \frac{d\mathcal{L}}{d\epsilon} \right|_{\epsilon=0} \right) \epsilon$, nhân $\epsilon$ vào biểu thức:

$$
\delta \mathcal{L} = \int_0^T \left[ \frac{\partial H}{\partial x} (\epsilon \eta(t)) - p^T (\epsilon \dot{\eta}(t)) \right] dt = \int_0^T \left[ \frac{\partial H}{\partial x} \delta x - p^T \delta \dot{x} \right] dt
$$

#### Chứng minh (ii): Tích phân từng phần

Từ kết quả của **(i)**, xét riêng số hạng thứ hai và áp dụng tích phân từng phần:

$$
\begin{aligned}
    \int_0^T p^T (\delta \dot{x}) \, dt &= \int_0^T p^T \, d(\delta x) \\[6pt]
    &= \Big[ p^T \delta x \Big]_0^T - \int_0^T \delta x \, d(p^T) \\[6pt]
    &= p^T(T) \delta x(T) - p^T(0) \delta x(0) - \int_0^T \dot{p}^T \delta x \, dt
\end{aligned}
$$

Vì trạng thái khởi tạo cố định $x(0) = x_0$, ta có $\delta x(0) = 0$.

#### Điều kiện Transversality cho bài toán tổng quát

Mặt khác, xét bài toán tổng quát có thêm chi phí biên $\Phi(x(T))$. Khi lấy biến phân toàn phần cho $\mathcal{L}$:

$$
\begin{aligned}
    \delta \mathcal{L} &= \delta \big( \Phi(x(T)) \big) + \int_0^T \left( \frac{\partial H}{\partial x} \delta x + \dot{p}^T \delta x \right) dt - p^T(T) \delta x(T) \\[6pt]
    &= \nabla \Phi(x(T))^T \delta x(T) - p^T(T) \delta x(T) + \int_0^T \left( \frac{\partial H}{\partial x} + \dot{p}^T \right) \delta x \, dt
\end{aligned}
$$

Để $\delta \mathcal{L} = 0$ với mọi biến thiên trạng thái biên $\delta x(T)$ tùy ý, ta thu được:

<div class="eq-box">
  <span class="eq-label">Điều Kiện Biên Transversality</span>
  $$p(T) = \nabla \Phi(x(T))$$
</div>

---

### b. Phương trình trạng thái

Ta cần chứng minh:

$$
\dot{x}^*(t) = \frac{\partial H}{\partial p}
$$

Theo phương trình động lực hệ ban đầu: $\dot{x}(t) = f(x, u)$. Mặt khác, theo định nghĩa của Hamiltonian:

$$
H(x, u, p) = p^T f(x, u) + L(x, u)
$$

Đạo hàm $H$ theo $p$:

$$
\frac{\partial H}{\partial p} = f(x, u)
$$

Do đó, suy ra phương trình trạng thái tối ưu:

$$
\dot{x}^*(t) = \frac{\partial H}{\partial p}
$$

---

### c. Điều kiện tối ưu hóa Control

Xét phiếm hàm mở rộng:

$$
\mathcal{L} = \int_0^T \left( H(x, u, p) - p^T \dot{x} \right) dt
$$

Lấy biến phân theo tín hiệu điều khiển $u$:

$$
\delta_u \mathcal{L} = \int_0^T \left( \frac{\partial H}{\partial u} \delta u \right) dt
$$

Để hàm chi phí đạt cực trị tối ưu, ta ép $\delta_u \mathcal{L} = 0$ với mọi biến thiên $\delta u$ khả dĩ. Từ đó suy ra điều kiện dừng bậc nhất:

$$
\frac{\partial H}{\partial u} = 0
$$

---

# The Hamilton-Jacobi-Bellman Equation

HJB là phiên bản trong miền thời gian liên tục (continuous-time) của **Nguyên lý Tối ưu Bellman** (Bellman's Principle of Optimality) trong Quy hoạch động (Dynamic Programming).

<div class="key-idea">
  <span class="tag-label">Nguyên Lý Tối Ưu Bellman</span>
  <em>"Dù trạng thái hiện tại của bạn là gì và bạn đã đến đó bằng cách nào, thì các quyết định từ thời điểm này trở đi phải tạo thành một chiến lược tối ưu cho phần còn lại của hành trình."</em>
</div>

<div class="note">
  <span class="tag-label">Tài liệu tham khảo</span>
  Donald E. Kirk, <em>"Optimal Control Theory: An Introduction"</em>, Mục 3.11.
</div>

Trong quy hoạch động rời rạc, ta thu được hệ thức truy hồi Bellman lý tưởng cho thuật toán máy tính. Ở đây, ta xem xét quá trình liên tục dẫn đến một phương trình đạo hàm riêng (PDE) phi tuyến kinh điển: **phương trình Hamilton-Jacobi-Bellman (HJB)**.

## Statement of the Problem

Xét hệ thống động học mô tả bởi phương trình trạng thái:

$$
\dot{x}(t) = f(x(t), u(t))
$$

Cần tìm tín hiệu điều khiển $u(t)$ để cực tiểu hóa hàm mục tiêu:

$$
J = \Phi(x(T)) + \int_0^T L(x(\tau), u(\tau)) \, d\tau
$$

trong đó $\Phi$ và $L$ là các hàm khả vi liên tục, thời gian kết thúc $T$ cố định, và $\tau$ là biến tích phân giả.

<div class="eq-box">
  <span class="eq-label">Phương Trình Đạo Hàm Riêng HJB</span>
  $$-\frac{\partial J^*}{\partial t}(x, t) = \min_{u(t)} \left\{ L(x, u) + \nabla_x J^*(x, t)^T f(x, u) \right\}$$
</div>

với điều kiện biên tại thời điểm cuối:

$$
J^*(x(T), T) = \Phi(x(T))
$$

---

## Proof

Sử dụng nguyên lý nhúng (imbedding principle), ta xét hàm chi phí từ một thời điểm $t$ bất kỳ ($t \le T$):

$$
J(x(t), t, u(\tau)) = \Phi(x(T)) + \int_t^T L(x(\tau), u(\tau)) \, d\tau
$$

Gọi $J^*(x(t), t)$ là hàm giá trị chi phí tối ưu (Value Function) để đi từ trạng thái $x(t)$ tại thời điểm $t$ đến thời điểm kết thúc $T$:

$$
J^*(x(t), t) = \min_{\substack{u(\tau) \\ t \le \tau \le T}} \left\{ \Phi(x(T)) + \int_t^T L(x(\tau), u(\tau)) \, d\tau \right\}
$$

Chia nhỏ khoảng thời gian tích phân $[t, T]$ thành hai đoạn $[t, t+\Delta t]$ và $[t+\Delta t, T]$:

$$
J^*(x(t), t) = \min_{\substack{u(\tau) \\ t \le \tau \le T}} \left\{ \int_t^{t+\Delta t} L(x(\tau), u(\tau)) \, d\tau + \int_{t+\Delta t}^T L(x(\tau), u(\tau)) \, d\tau + \Phi(x(T)) \right\}
$$

Theo Nguyên lý Tối ưu của Bellman, quỹ đạo tối ưu có tính chất lồng ghép đệ quy:

$$
J^*(x(t), t) = \min_{\substack{u(\tau) \\ t \le \tau \le t+\Delta t}} \left\{ \int_t^{t+\Delta t} L(x(\tau), u(\tau)) \, d\tau + J^*(x(t+\Delta t), t+\Delta t) \right\}
$$

Khai triển chuỗi Taylor cho $J^*(x(t+\Delta t), t+\Delta t)$ quanh điểm $(x(t), t)$:

$$
\begin{aligned}
    J^*(x(t+\Delta t), t+\Delta t) = J^*(x(t), t) &+ \frac{\partial J^*}{\partial t}(x(t), t) \Delta t \\[4pt]
    &+ \nabla_x J^*(x(t), t)^T \big[ x(t+\Delta t) - x(t) \big] + o(\Delta t)
\end{aligned}
$$

Với $\Delta t$ đủ nhỏ, ta xấp xỉ tích phân và độ dịch trạng thái:

- $\int_t^{t+\Delta t} L(x(\tau), u(\tau)) \, d\tau \approx L(x(t), u(t)) \Delta t$
- $x(t+\Delta t) - x(t) \approx \dot{x}(t) \Delta t = f(x(t), u(t)) \Delta t$

Thay các xấp xỉ này vào hệ thức:

$$
\begin{aligned}
    J^*(x(t), t) = \min_{u(t)} \Big\{ &L(x(t), u(t)) \Delta t + J^*(x(t), t) + \frac{\partial J^*}{\partial t}(x(t), t) \Delta t \\[4pt]
    &+ \nabla_x J^*(x(t), t)^T f(x(t), u(t)) \Delta t + o(\Delta t) \Big\}
\end{aligned}
$$

Vì các đại lượng $J^*(x(t), t)$ và $\frac{\partial J^*}{\partial t} \Delta t$ không phụ thuộc vào biến điều khiển $u(t)$, ta có thể đưa chúng ra khỏi toán tử cực tiểu hóa:

$$
J^*(x(t), t) = J^*(x(t), t) + \frac{\partial J^*}{\partial t} \Delta t + \min_{u(t)} \Big\{ L(x(t), u(t)) \Delta t + \nabla_x J^{*T} f(x(t), u(t)) \Delta t + o(\Delta t) \Big\}
$$

Triệt tiêu $J^*(x(t), t)$ ở hai vế, chia toàn bộ cho $\Delta t$ và chuyển vế:

$$
-\frac{\partial J^*}{\partial t}(x(t), t) = \min_{u(t)} \left\{ L(x(t), u(t)) + \nabla_x J^*(x(t), t)^T f(x(t), u(t)) + \frac{o(\Delta t)}{\Delta t} \right\}
$$

Lấy giới hạn $\Delta t \to 0$, số hạng $\frac{o(\Delta t)}{\Delta t} \to 0$. Ta thu được phương trình Hamilton-Jacobi-Bellman hoàn chỉnh:

<div class="eq-box">
  <span class="eq-label">Phương Trình HJB Thu Gọn</span>
  $$-\frac{\partial J^*}{\partial t}(x, t) = \min_{u(t)} \Big[ L(x, u) + \nabla_x J^*(x, t)^T f(x, u) \Big]$$
</div>

Định nghĩa hàm Hamiltonian:

$$
H(x, u, \nabla_x J^*) \triangleq L(x, u) + \nabla_x J^{*T} f(x, u)
$$

và đặt $H(x, u^*, \nabla_x J^*) = \min_{u} H(x, u, \nabla_x J^*)$, ta biểu diễn phương trình HJB dưới dạng quen thuộc:

$$
\frac{\partial J^*}{\partial t}(x, t) + H\big(x(t), u^*(x, \nabla_x J^*, t), \nabla_x J^*\big) = 0
$$

---

# A Calculus Example

<div class="note">
  <span class="tag-label">Ví dụ minh họa</span>
  Donald E. Kirk, <em>"Optimal Control Theory: An Introduction"</em>, Ví dụ 3.11-1.
</div>

Xét hệ thống tuyến tính bậc nhất mô tả bởi phương trình vi phân:

$$
\dot{x}(t) = x(t) + u(t)
$$

Cần tìm luật điều khiển tối ưu nhằm cực tiểu hóa hàm chi phí toàn phương:

$$
J = \frac{1}{4} x^2(T) + \int_0^T \frac{1}{4} u^2(t) \, dt
$$

với thời gian kết thúc $T$ cố định, trạng thái và tín hiệu điều khiển không bị ràng buộc biên.

---

## Solve by the HJB Equation

Thay $L(x, u) = \frac{1}{4} u^2(t)$ và $f(x, u) = x(t) + u(t)$ vào định nghĩa Hamiltonian:

$$
H(x, u, \nabla_x J^*, t) = \frac{1}{4} u^2(t) + \nabla_x J^* \cdot \big[ x(t) + u(t) \big]
$$

Vì tín hiệu điều khiển không bị ràng buộc, điều kiện cần để cực tiểu hóa Hamiltonian là:

$$
\frac{\partial H}{\partial u} = \frac{1}{2} u(t) + \nabla_x J^*(x(t), t) = 0 \implies u^*(t) = -2 \nabla_x J^*(x(t), t)
$$

Kiểm tra điều kiện đủ: $\frac{\partial^2 H}{\partial u^2} = \frac{1}{2} > 0$ (khẳng định $u^*$ là điểm cực tiểu toàn cục).

Thay $u^*(t)$ vào phương trình HJB $\left( \frac{\partial J^*}{\partial t} + H = 0 \right)$:

$$
\begin{aligned}
    0 &= \frac{\partial J^*}{\partial t} + \frac{1}{4} \big(-2 \nabla_x J^*\big)^2 + \nabla_x J^* \big[ x(t) - 2 \nabla_x J^* \big] \\[6pt]
    &= \frac{\partial J^*}{\partial t} + (\nabla_x J^*)^2 + \nabla_x J^* x - 2(\nabla_x J^*)^2 \\[6pt]
    &= \frac{\partial J^*}{\partial t} + \nabla_x J^* x(t) - (\nabla_x J^*)^2
\end{aligned}
$$

với điều kiện biên $J^*(x(T), T) = \Phi(x(T)) = \frac{1}{4} x^2(T)$.

### Giả định nghiệm dạng toàn phương

Vì chi phí biên có dạng bậc hai theo trạng thái, ta giả thiết nghiệm của phương trình đạo hàm riêng có dạng:

$$
J^*(x(t), t) = \frac{1}{2} K(t) x^2(t)
$$

Khi đó:

$$
\nabla_x J^*(x(t), t) = K(t) x(t), \quad \frac{\partial J^*}{\partial t}(x(t), t) = \frac{1}{2} \dot{K}(t) x^2(t)
$$

Điều kiện biên tại $t = T$:

$$
J^*(x(T), T) = \frac{1}{2} K(T) x^2(T) = \frac{1}{4} x^2(T) \implies K(T) = \frac{1}{2}
$$

Thay các đạo hàm vào phương trình HJB:

$$
0 = \frac{1}{2} \dot{K}(t) x^2(t) + K(t) x^2(t) - K^2(t) x^2(t)
$$

Vì hệ thức thỏa mãn với mọi quỹ đạo $x(t)$, ta triệt tiêu $x^2(t)$:

<div class="eq-box">
  <span class="eq-label">Phương Trình Vi Phân Riccati</span>
  $$\frac{1}{2} \dot{K}(t) + K(t) - K^2(t) = 0, \quad K(T) = \frac{1}{2}$$
</div>

Giải phương trình vi phân bằng phương pháp phân ly biến số:

$$
K(t) = \frac{e^{T-t}}{e^{T-t} + e^{-(T-t)}} = \frac{1}{1 + e^{2(t-T)}}
$$

Luật điều khiển hồi tiếp trạng thái tối ưu:

<div class="eq-box">
  <span class="eq-label">Luật Điều Khiển Tối Ưu (HJB)</span>
  $$u^*(t) = -2 K(t) x(t) = -\frac{2}{1 + e^{2(t-T)}} x(t)$$
</div>

Khi $T \to \infty$, hệ số hồi tiếp tiệm cận hằng số $K(t) \to 1$, hệ kín trở thành:

$$
\dot{x}(t) = x(t) - 2x(t) = -x(t)
$$

có nghiệm $x(t) = x_0 e^{-t}$, tiệm cận ổn định指数, đảm bảo tích phân chi phí hội tụ hữu hạn.

---

## Solve by the Pontryagin's Maximum Principle

Tóm tắt hệ thống:

$$
\begin{aligned}
    \text{Động lực hệ:} \quad &\dot{x}(t) = x(t) + u(t) \\[4pt]
    \text{Hàm chi phí:} \quad &J = \frac{1}{4} x^2(T) + \int_0^T \frac{1}{4} u^2(t) \, dt
\end{aligned}
$$

Hàm Hamiltonian:

$$
H(x, u, p) = \frac{1}{4} u^2(t) + p(t) \big[ x(t) + u(t) \big]
$$

Theo nguyên lý cực đại Pontryagin:

1. **Điều kiện tối ưu điều khiển:**
   $$
   \frac{\partial H}{\partial u} = \frac{1}{2} u(t) + p(t) = 0 \implies u^*(t) = -2 p(t)
   $$

2. **Phương trình trạng thái:**
   $$
   \dot{x}(t) = \frac{\partial H}{\partial p} = x(t) + u(t) = x(t) - 2 p(t)
   $$

3. **Phương trình Adjoint:**
   $$
   \dot{p}(t) = -\frac{\partial H}{\partial x} = -p(t)
   $$

4. **Điều kiện Transversality tại $T$:**
   $$
   p(T) = \nabla \Phi(x(T)) = \frac{1}{2} x(T)
   $$

### Giải hệ phương trình vi phân bằng Phương pháp Quét (Sweep Method)

Ta có một bài toán biên hai điểm (Two-Point Boundary Value Problem). Để tìm ra luật điều khiển phản hồi trạng thái, giả thiết mối quan hệ tuyến tính:

$$
p(t) = K(t) x(t)
$$

Đạo hàm theo thời gian:

$$
\dot{p}(t) = \dot{K}(t) x(t) + K(t) \dot{x}(t)
$$

Thay $\dot{p}(t) = -p(t)$ và $\dot{x}(t) = x(t) - 2p(t)$:

$$
-p(t) = \dot{K}(t) x(t) + K(t) \big[ x(t) - 2 p(t) \big]
$$

Thay tiếp $p(t) = K(t) x(t)$ vào:

$$
-K(t) x(t) = \dot{K}(t) x(t) + K(t) x(t) - 2 K^2(t) x(t)
$$

Triệt tiêu $x(t) \neq 0$ và sắp xếp lại, ta thu được:

<div class="eq-box">
  <span class="eq-label">Phương Trình Riccati (PMP)</span>
  $$\frac{1}{2} \dot{K}(t) + K(t) - K^2(t) = 0, \quad K(T) = \frac{1}{2}$$
</div>

<div class="key-idea">
  <span class="tag-label">Tính Nhất Quán Giữa PMP và HJB</span>
  Phương trình vi phân Riccati và điều kiện biên thu được từ Pontryagin's Maximum Principle hoàn toàn trùng khớp với kết quả từ Hamilton-Jacobi-Bellman Equation. Mối liên hệ tự nhiên:
  $$p(t) = \nabla_x J^*(x(t), t) = K(t) x(t)$$
  khẳng định vector biến đối ngẫu (costate) chính là gradient của hàm giá trị tối ưu theo không gian trạng thái.
</div>


{% endtab %}

{% tab language-switch English %}

# The Pontryagin's Maximum Principle

## Statement of the Problem

Consider the general optimal control problem with an initial value:

$$
\begin{aligned}
    \dot{x}(t) &= f(x(t), u(t)) \\
    x(0) &= x_0
\end{aligned}
$$

The objective is to find a control trajectory $u(t)$ over $[0, T]$ that minimizes the cost functional:

$$
J(u) = \Phi(x(T)) + \int_0^T L(x(t), u(t)) \, dt
$$

where $\Phi(x(T))$ is the terminal cost and $L(x(t), u(t))$ is the running (operating) cost.

<div class="eq-box">
  <span class="eq-label">Hamiltonian Function</span>
  $$H(x, u, p) = p^T f(x, u) + L(x, u)$$
</div>

Here, $p(t)$ denotes the vector of adjoint (costate) variables.

<div class="eq-box">
  <span class="eq-label">Pontryagin's Maximum Principle (PMP)</span>
  $$\begin{aligned}
      \dot{x}^*(t) &= \frac{\partial H}{\partial p} \\[6pt]
      \dot{p}(t) &= -\frac{\partial H}{\partial x} \\[6pt]
      \frac{\partial H}{\partial u} &= 0
  \end{aligned}$$
</div>

along with the terminal transversality condition:

$$
p(T) = \nabla \Phi(x(T))
$$

---

## Proof

<div class="note">
  <span class="tag-label">Reference</span>
  Lawrence C. Evans, UC Berkeley, <em>"An Introduction to Mathematical Optimal Control Theory"</em>, Appendix.
</div>

### a. Adjoint Equation

We aim to prove the costate dynamics:

$$
\dot{p}(t) = -\frac{\partial H}{\partial x}
$$

**Problem:** Consider the optimization problem with running cost $J = \int_0^T L(x, u) \, dt$ subject to the state dynamics constraint $f(x, u) - \dot{x}(t) = 0$.

Construct the augmented Lagrangian functional with Lagrange multiplier $p(t)$:

$$
\mathcal{L} = \int_0^T \left[ L(x, u) + p(t)^T \big(f(x, u) - \dot{x}\big) \right] dt
$$

Substituting the Hamiltonian definition $H(x, u, p) = L(x, u) + p(t)^T f(x, u)$:

$$
\mathcal{L} = \int_0^T \left[ H(x, u, p) - p(t)^T \dot{x} \right] dt
$$

Taking the first-order variation of $\mathcal{L}$:

$$
\delta \mathcal{L} = \int_0^T \left[ \frac{\partial H}{\partial x} \delta x - p(t)^T \delta \dot{x} \right] dt = 0 \tag{i}
$$

$$
\delta \mathcal{L} = \int_0^T \left( \frac{\partial H}{\partial x} + \dot{p}(t)^T \right) \delta x \, dt = 0 \tag{ii}
$$

Since the integral must vanish for arbitrary perturbation $\delta x$, the integrand is identically zero:

$$
\frac{\partial H}{\partial x} + \dot{p}^T = 0 \implies \dot{p}(t) = -\frac{\partial H}{\partial x}
$$

#### Proof of (i): First-Order Variation

Introduce a state perturbation with parameter $\epsilon$:

$$
\begin{aligned}
    x(t, \epsilon) &= x^*(t) + \epsilon \, \eta(t) \implies \delta x = \epsilon \, \eta(t) \\[4pt]
    \dot{x}(t, \epsilon) &= \dot{x}^*(t) + \epsilon \, \dot{\eta}(t) \implies \delta \dot{x} = \epsilon \, \dot{\eta}(t)
\end{aligned}
$$

Consider the parameterized functional:

$$
\mathcal{L}(\epsilon) = \int_0^T \left[ H(x(t, \epsilon), u, p) - p^T \dot{x}(t, \epsilon) \right] dt
$$

Differentiating with respect to $\epsilon$:

$$
\frac{d\mathcal{L}}{d\epsilon} = \int_0^T \frac{\partial}{\partial \epsilon} \left[ H(x(t, \epsilon), u, p) - p^T \dot{x}(t, \epsilon) \right] dt
$$

By the multivariate chain rule:

- **First term:**
  $$
  \frac{\partial H}{\partial \epsilon} = \frac{\partial H}{\partial x} \frac{\partial x}{\partial \epsilon} = \frac{\partial H}{\partial x} \eta(t)
  $$

- **Second term:**
  $$
  \frac{\partial}{\partial \epsilon} \left( p^T \dot{x}(t, \epsilon) \right) = p^T \frac{\partial \dot{x}}{\partial \epsilon} = p^T \dot{\eta}(t)
  $$

Substitute back into the integral:

$$
\frac{d\mathcal{L}}{d\epsilon} = \int_0^T \left( \frac{\partial H}{\partial x} \eta(t) - p^T \dot{\eta}(t) \right) dt
$$

By definition of the first variation $\delta \mathcal{L} = \left( \left. \frac{d\mathcal{L}}{d\epsilon} \right|_{\epsilon=0} \right) \epsilon$:

$$
\delta \mathcal{L} = \int_0^T \left[ \frac{\partial H}{\partial x} (\epsilon \eta(t)) - p^T (\epsilon \dot{\eta}(t)) \right] dt = \int_0^T \left[ \frac{\partial H}{\partial x} \delta x - p^T \delta \dot{x} \right] dt
$$

#### Proof of (ii): Integration by Parts

Using result **(i)**, isolate the second term and integrate by parts:

$$
\begin{aligned}
    \int_0^T p^T (\delta \dot{x}) \, dt &= \int_0^T p^T \, d(\delta x) \\[6pt]
    &= \Big[ p^T \delta x \Big]_0^T - \int_0^T \delta x \, d(p^T) \\[6pt]
    &= p^T(T) \delta x(T) - p^T(0) \delta x(0) - \int_0^T \dot{p}^T \delta x \, dt
\end{aligned}
$$

Because the initial state is fixed $x(0) = x_0$, we have $\delta x(0) = 0$.

#### Transversality Condition for General Bolza Problems

For problems with terminal cost $\Phi(x(T))$, the total variation of $\mathcal{L}$ yields:

$$
\begin{aligned}
    \delta \mathcal{L} &= \delta \big( \Phi(x(T)) \big) + \int_0^T \left( \frac{\partial H}{\partial x} \delta x + \dot{p}^T \delta x \right) dt - p^T(T) \delta x(T) \\[6pt]
    &= \nabla \Phi(x(T))^T \delta x(T) - p^T(T) \delta x(T) + \int_0^T \left( \frac{\partial H}{\partial x} + \dot{p}^T \right) \delta x \, dt
\end{aligned}
$$

For $\delta \mathcal{L} = 0$ to hold for arbitrary terminal variations $\delta x(T)$:

<div class="eq-box">
  <span class="eq-label">Transversality Terminal Condition</span>
  $$p(T) = \nabla \Phi(x(T))$$
</div>

---

### b. State Equation

We show that:

$$
\dot{x}^*(t) = \frac{\partial H}{\partial p}
$$

From the initial state equation $\dot{x}(t) = f(x, u)$ and Hamiltonian definition $H(x, u, p) = p^T f(x, u) + L(x, u)$:

$$
\frac{\partial H}{\partial p} = f(x, u) = \dot{x}^*(t)
$$

---

### c. Optimality Condition for Control

Taking the variation of $\mathcal{L}$ with respect to the control input $u$:

$$
\delta_u \mathcal{L} = \int_0^T \left( \frac{\partial H}{\partial u} \delta u \right) dt
$$

Requiring $\delta_u \mathcal{L} = 0$ for arbitrary admissible variations $\delta u$ yields the necessary first-order stationarity condition:

$$
\frac{\partial H}{\partial u} = 0
$$

---

# The Hamilton-Jacobi-Bellman Equation

The HJB equation represents the continuous-time formulation of **Bellman's Principle of Optimality** from Dynamic Programming.

<div class="key-idea">
  <span class="tag-label">Bellman's Principle of Optimality</span>
  <em>"An optimal policy has the property that whatever the initial state and initial decision are, the remaining decisions must constitute an optimal policy with regard to the state resulting from the first decision."</em>
</div>

<div class="note">
  <span class="tag-label">Reference</span>
  Donald E. Kirk, <em>"Optimal Control Theory: An Introduction"</em>, Section 3.11.
</div>

## Statement of the Problem

Consider the continuous-time process governed by:

$$
\dot{x}(t) = f(x(t), u(t))
$$

with performance index:

$$
J = \Phi(x(T)) + \int_0^T L(x(\tau), u(\tau)) \, d\tau
$$

where $\Phi$ and $L$ are continuously differentiable, terminal time $T$ is fixed, and $\tau$ is a dummy variable of integration.

<div class="eq-box">
  <span class="eq-label">Hamilton-Jacobi-Bellman (HJB) PDE</span>
  $$-\frac{\partial J^*}{\partial t}(x, t) = \min_{u(t)} \left\{ L(x, u) + \nabla_x J^*(x, t)^T f(x, u) \right\}$$
</div>

with boundary condition at final time $T$:

$$
J^*(x(T), T) = \Phi(x(T))
$$

---

## Proof

Using the principle of invariant imbedding, consider the cost from an arbitrary initial time $t$ ($t \le T$):

$$
J(x(t), t, u(\tau)) = \Phi(x(T)) + \int_t^T L(x(\tau), u(\tau)) \, d\tau
$$

Define the optimal value function $J^*(x(t), t)$ as:

$$
J^*(x(t), t) = \min_{\substack{u(\tau) \\ t \le \tau \le T}} \left\{ \Phi(x(T)) + \int_t^T L(x(\tau), u(\tau)) \, d\tau \right\}
$$

Subdivide the integration interval $[t, T]$ into $[t, t+\Delta t]$ and $[t+\Delta t, T]$:

$$
J^*(x(t), t) = \min_{\substack{u(\tau) \\ t \le \tau \le T}} \left\{ \int_t^{t+\Delta t} L(x(\tau), u(\tau)) \, d\tau + \int_{t+\Delta t}^T L(x(\tau), u(\tau)) \, d\tau + \Phi(x(T)) \right\}
$$

By Bellman's Principle of Optimality, optimal paths exhibit recursive substructure:

$$
J^*(x(t), t) = \min_{\substack{u(\tau) \\ t \le \tau \le t+\Delta t}} \left\{ \int_t^{t+\Delta t} L(x(\tau), u(\tau)) \, d\tau + J^*(x(t+\Delta t), t+\Delta t) \right\}
$$

Expand $J^*(x(t+\Delta t), t+\Delta t)$ via multi-variable Taylor series around $(x(t), t)$:

$$
\begin{aligned}
    J^*(x(t+\Delta t), t+\Delta t) = J^*(x(t), t) &+ \frac{\partial J^*}{\partial t}(x(t), t) \Delta t \\[4pt]
    &+ \nabla_x J^*(x(t), t)^T \big[ x(t+\Delta t) - x(t) \big] + o(\Delta t)
\end{aligned}
$$

For small $\Delta t$, approximate the integral and state increment:

- $\int_t^{t+\Delta t} L(x(\tau), u(\tau)) \, d\tau \approx L(x(t), u(t)) \Delta t$
- $x(t+\Delta t) - x(t) \approx \dot{x}(t) \Delta t = f(x(t), u(t)) \Delta t$

Substituting these into the Bellman relation:

$$
\begin{aligned}
    J^*(x(t), t) = \min_{u(t)} \Big\{ &L(x(t), u(t)) \Delta t + J^*(x(t), t) + \frac{\partial J^*}{\partial t}(x(t), t) \Delta t \\[4pt]
    &+ \nabla_x J^*(x(t), t)^T f(x(t), u(t)) \Delta t + o(\Delta t) \Big\}
\end{aligned}
$$

Extract terms that do not depend on the instantaneous control choice $u(t)$:

$$
J^*(x(t), t) = J^*(x(t), t) + \frac{\partial J^*}{\partial t} \Delta t + \min_{u(t)} \Big\{ L(x(t), u(t)) \Delta t + \nabla_x J^{*T} f(x(t), u(t)) \Delta t + o(\Delta t) \Big\}
$$

Cancel $J^*(x(t), t)$ from both sides, divide through by $\Delta t$, and rearrange:

$$
-\frac{\partial J^*}{\partial t}(x(t), t) = \min_{u(t)} \left\{ L(x(t), u(t)) + \nabla_x J^*(x(t), t)^T f(x(t), u(t)) + \frac{o(\Delta t)}{\Delta t} \right\}
$$

Taking the limit $\Delta t \to 0$, the higher-order residual $\frac{o(\Delta t)}{\Delta t} \to 0$. We obtain the classic continuous Hamilton-Jacobi-Bellman equation:

<div class="eq-box">
  <span class="eq-label">Hamilton-Jacobi-Bellman PDE</span>
  $$-\frac{\partial J^*}{\partial t}(x, t) = \min_{u(t)} \Big[ L(x, u) + \nabla_x J^*(x, t)^T f(x, u) \Big]$$
</div>

Defining the generalized Hamiltonian:

$$
H(x, u, \nabla_x J^*) \triangleq L(x, u) + \nabla_x J^{*T} f(x, u)
$$

we arrive at the compact Hamiltonian PDE:

$$
\frac{\partial J^*}{\partial t}(x, t) + H\big(x(t), u^*(x, \nabla_x J^*, t), \nabla_x J^*\big) = 0
$$

---

# A Calculus Example

<div class="note">
  <span class="tag-label">Worked Example</span>
  Donald E. Kirk, <em>"Optimal Control Theory: An Introduction"</em>, Example 3.11-1.
</div>

Consider a first-order scalar continuous linear dynamical system:

$$
\dot{x}(t) = x(t) + u(t)
$$

Find the optimal control law $u^*(t)$ that minimizes the quadratic cost functional:

$$
J = \frac{1}{4} x^2(T) + \int_0^T \frac{1}{4} u^2(t) \, dt
$$

with fixed terminal time $T$ and unconstrained states and controls.

---

## Solve by the HJB Equation

Substituting $L(x, u) = \frac{1}{4} u^2(t)$ and $f(x, u) = x(t) + u(t)$ into the Hamiltonian definition:

$$
H(x, u, \nabla_x J^*, t) = \frac{1}{4} u^2(t) + \nabla_x J^* \cdot \big[ x(t) + u(t) \big]
$$

Since $u$ is unbounded, setting $\frac{\partial H}{\partial u} = 0$:

$$
\frac{\partial H}{\partial u} = \frac{1}{2} u(t) + \nabla_x J^*(x(t), t) = 0 \implies u^*(t) = -2 \nabla_x J^*(x(t), t)
$$

Since $\frac{\partial^2 H}{\partial u^2} = \frac{1}{2} > 0$, this stationary point is a strict global minimum.

Substitute $u^*(t)$ back into the HJB PDE $\left( \frac{\partial J^*}{\partial t} + H = 0 \right)$:

$$
\begin{aligned}
    0 &= \frac{\partial J^*}{\partial t} + \frac{1}{4} \big(-2 \nabla_x J^*\big)^2 + \nabla_x J^* \big[ x(t) - 2 \nabla_x J^* \big] \\[6pt]
    &= \frac{\partial J^*}{\partial t} + (\nabla_x J^*)^2 + \nabla_x J^* x - 2(\nabla_x J^*)^2 \\[6pt]
    &= \frac{\partial J^*}{\partial t} + \nabla_x J^* x(t) - (\nabla_x J^*)^2
\end{aligned}
$$

subject to $J^*(x(T), T) = \frac{1}{4} x^2(T)$.

### Quadratic Trial Solution (Ansatz)

Because the terminal cost is quadratic in state, propose the candidate value function:

$$
J^*(x(t), t) = \frac{1}{2} K(t) x^2(t)
$$

where $K(t)$ is an unknown scalar function of time. Differentiating:

$$
\nabla_x J^*(x(t), t) = K(t) x(t), \quad \frac{\partial J^*}{\partial t}(x(t), t) = \frac{1}{2} \dot{K}(t) x^2(t)
$$

Matching boundary conditions at $t = T$:

$$
J^*(x(T), T) = \frac{1}{2} K(T) x^2(T) = \frac{1}{4} x^2(T) \implies K(T) = \frac{1}{2}
$$

Substitute into the PDE:

$$
0 = \frac{1}{2} \dot{K}(t) x^2(t) + K(t) x^2(t) - K^2(t) x^2(t)
$$

Since this must hold for all non-zero trajectories $x(t)$, divide out $x^2(t)$:

<div class="eq-box">
  <span class="eq-label">Differential Riccati Equation</span>
  $$\frac{1}{2} \dot{K}(t) + K(t) - K^2(t) = 0, \quad K(T) = \frac{1}{2}$$
</div>

Solving by separation of variables:

$$
K(t) = \frac{e^{T-t}}{e^{T-t} + e^{-(T-t)}} = \frac{1}{1 + e^{2(t-T)}}
$$

The optimal state feedback control law is:

<div class="eq-box">
  <span class="eq-label">Optimal Closed-Loop Control Law</span>
  $$u^*(t) = -2 K(t) x(t) = -\frac{2}{1 + e^{2(t-T)}} x(t)$$
</div>

As $T \to \infty$, $K(t) \to 1$, yielding the stable time-invariant closed-loop system:

$$
\dot{x}(t) = x(t) - 2x(t) = -x(t)
$$

with exponential stability $x(t) = x_0 e^{-t}$.

---

## Solve by the Pontryagin's Maximum Principle

System review:

$$
\begin{aligned}
    \text{Dynamics:} \quad &\dot{x}(t) = x(t) + u(t) \\[4pt]
    \text{Cost:} \quad &J = \frac{1}{4} x^2(T) + \int_0^T \frac{1}{4} u^2(t) \, dt
\end{aligned}
$$

Hamiltonian:

$$
H(x, u, p) = \frac{1}{4} u^2(t) + p(t) \big[ x(t) + u(t) \big]
$$

From Pontryagin's Principle:

1. **Stationarity:**
   $$
   \frac{\partial H}{\partial u} = \frac{1}{2} u(t) + p(t) = 0 \implies u^*(t) = -2 p(t)
   $$

2. **State equation:**
   $$
   \dot{x}(t) = \frac{\partial H}{\partial p} = x(t) - 2 p(t)
   $$

3. **Costate equation:**
   $$
   \dot{p}(t) = -\frac{\partial H}{\partial x} = -p(t)
   $$

4. **Terminal condition:**
   $$
   p(T) = \nabla \Phi(x(T)) = \frac{1}{2} x(T)
   $$

### Sweep Method (Riccati Transformation)

To solve the two-point boundary value problem, postulate the linear sweep relation:

$$
p(t) = K(t) x(t)
$$

Differentiating with respect to $t$:

$$
\dot{p}(t) = \dot{K}(t) x(t) + K(t) \dot{x}(t)
$$

Substitute $\dot{p} = -p(t)$ and $\dot{x} = x(t) - 2p(t)$:

$$
-K(t) x(t) = \dot{K}(t) x(t) + K(t) \big[ x(t) - 2 K(t) x(t) \big]
$$

Factoring out $x(t) \neq 0$:

<div class="eq-box">
  <span class="eq-label">Riccati Equation (PMP)</span>
  $$\frac{1}{2} \dot{K}(t) + K(t) - K^2(t) = 0, \quad K(T) = \frac{1}{2}$$
</div>

<div class="key-idea">
  <span class="tag-label">Theoretical Equivalence</span>
  The Riccati differential equation derived via PMP is identical to that from HJB. The costate vector naturally represents the sensitivity (gradient) of the optimal value function:
  $$p(t) = \nabla_x J^*(x(t), t) = K(t) x(t)$$
</div>


{% endtab %}

{% endtabs %}
