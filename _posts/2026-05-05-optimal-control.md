---
layout: post
title: "Optimal Control: Pontryagin's Maximum Principle and HJB Equation"
date: 2026-05-05 10:33:00 +0700
description: Notes on the mathematical foundations of Optimal Control Theory, including PMP and Hamilton-Jacobi-Bellman derivations.
tags: math optimal-control calculus
categories: study-notes
giscus_comments: true
related_posts: true
---
{% tabs language-switch %}

{% tab language-switch Tiếng Việt %}

# The Pontryagin's maximum principle

## Statement of the Problem

Xét bài toán tối ưu điều khiển với giá trị khởi tạo: $$\begin{aligned}
    \dot{x}(t) &= f(x(t), u(t))  \\
    x(0) &= x_0 
\end{aligned}$$

Mục tiêu là tối ưu hóa hàm chi phí tổng quát:
$$J(u) = \Phi(x(T)) + \int_0^T L(x(t), u(t)) dt$$ Định nghĩa hàm
Hamiltonian: $$H(x, u, p) = p^T \cdot f(x, u) + L(x, u)$$

Pontryagin's Maximum Principle (PMP) cho ra các hệ thức sau:
$$\begin{aligned}
    \dot{x}^*(t) &= \frac{\partial H}{\partial p}  \\
    \dot{p}(t) &= -\frac{\partial H}{\partial x}  \\
    \frac{\partial H}{\partial u} &= 0
\end{aligned}$$

---

## Proof

*Tham khảo: Lawrence C. Evans, UC Berkeley, \"An Introduction to
Mathematical Optimal Control Theory\", Appendix.*\
**a. Phương trình Adjoint**\
Ta chứng minh (2), phương trình adjoint:
$$\dot{p}(t) = -\frac{\partial H}{\partial x}$$.

**Bài toán:** Trước hết, xét bài toán tối ưu chỉ có chi phí gốc:
$$J = \int_0^T L(x, u) dt$$ với điều kiện ràng buộc động lực học:
$f(x, u) - \dot{x}(t) = 0$.

Xét phiếm hàm mở rộng (Augmented Functional):
$$\mathcal{L} = \int_0^T \left[ L(x, u) + p(t)^T (f(x, u) - \dot{x}) \right] dt$$
Thay định nghĩa hàm Hamiltonian vào, ta được:
$$\mathcal{L} = \int_0^T \left( H(x, u, p) - p(t)^T \cdot \dot{x} \right) dt$$

Lấy biến phân bậc I của $\mathcal{L}$:
$$\Rightarrow \delta \mathcal{L} = \int_0^T \left[ \frac{\partial H}{\partial x} \cdot \delta x - p(t)^T \cdot \delta \dot{x} \right] dt = 0 \tag{i}$$
$$\Rightarrow \delta \mathcal{L} = \int_0^T \left( \frac{\partial H}{\partial x} + \dot{p}(t)^T \right) \delta x \, dt = 0 \tag{ii}$$
Do tích phân bằng 0 với mọi $\delta x$, ta suy ra biểu thức bên trong
tích phân phải bằng 0:
$$\frac{\partial H}{\partial x} + \dot{p}^T = 0 \implies \dot{p}^T(t) = -\frac{\partial H}{\partial x}$$
**Chứng minh (i):**\
Ta thiết lập nhiễu động (perturbation) cho biến trạng thái với tham số
$\epsilon$: $$\begin{aligned}
    \text{Trạng thái: } & x(t, \epsilon) = x^*(t) + \epsilon \cdot \eta(t) \implies \delta x = \epsilon \eta(t) \\
    \text{Vận tốc: } & \dot{x}(t, \epsilon) = \dot{x}^*(t) + \epsilon \cdot \dot{\eta}(t) \implies \delta \dot{x} = \epsilon \dot{\eta}(t)
\end{aligned}$$

Xét phiếm hàm theo $\epsilon$:
$$\mathcal{L}(\epsilon) = \int_0^T \left[ H(x(t, \epsilon), u, p) - p^T \cdot \dot{x}(t, \epsilon) \right] dt$$

Khảo sát đạo hàm theo $\epsilon$:
$$\frac{d\mathcal{L}}{d\epsilon} = \int_0^T \frac{\partial}{\partial \epsilon} \left[ H(x(t, \epsilon), u, p) - p^T \cdot \dot{x}(t, \epsilon) \right] dt$$

Áp dụng quy tắc chuỗi (Chain Rule):

-   Xét thành phần thứ nhất:
    $$\frac{\partial H}{\partial \epsilon} = \frac{\partial H}{\partial x} \cdot \frac{\partial x}{\partial \epsilon}$$
    Vì
    $$x = x^*(t) + \epsilon \eta(t) \implies \frac{\partial x}{\partial \epsilon} = \eta(t)$$
    Do đó:
    $$\frac{\partial H}{\partial \epsilon} = \frac{\partial H}{\partial x} \cdot \eta(t)$$

-   Xét thành phần thứ hai:
    $$\frac{\partial}{\partial \epsilon} \left( p^T \cdot \dot{x}(t, \epsilon) \right) = p^T \cdot \left( \frac{\partial \dot{x}}{\partial \epsilon} \right)$$
    Vì
    $$\dot{x} = \dot{x}^* + \epsilon \cdot \dot{\eta}(t) \implies \frac{\partial \dot{x}}{\partial \epsilon} = \dot{\eta}(t)$$
    Do đó ta được $$p^T \cdot \dot{\eta}(t)$$

Thay vào tích phân:
$$\frac{d\mathcal{L}}{d\epsilon} = \int_0^T \left( \frac{\partial H}{\partial x} \cdot \eta(t) - p^T \cdot \dot{\eta}(t) \right) dt$$

Theo định nghĩa biến phân bậc I:
$\delta \mathcal{L} = \left( \frac{d\mathcal{L}}{d\epsilon} \Big|_{\epsilon=0} \right) \cdot \epsilon$.
Nhân $\epsilon$ vào biểu thức trên: $$\begin{aligned}
    \delta \mathcal{L} &= \int_0^T \left[ \frac{\partial H}{\partial x} (\epsilon \eta(t)) - p^T (\epsilon \dot{\eta}(t)) \right] dt \\
    &= \int_0^T \left[ \frac{\partial H}{\partial x} \delta x - p^T \cdot \delta \dot{x} \right] dt \quad
\end{aligned}$$

**Chứng minh (ii):**\
Từ kết quả của **(i)**:
$$\delta \mathcal{L} = \int_0^T \left[ \frac{\partial H}{\partial x} \cdot \delta x - p^T \delta \dot{x} \right] dt = 0$$

Xét riêng số hạng thứ hai và áp dụng tích phân từng phần:
$$\begin{aligned}
    \int_0^T p^T (\delta \dot{x}) \, dt &= \int_0^T p^T \cdot d(\delta x) \\
    &= \left[ p^T \cdot \delta x \right]_0^T - \int_0^T \delta x \cdot d(p^T) \\
    &= p^T(T) \cdot \delta x(T) - p^T(0) \cdot \delta x(0) - \int_0^T \delta x \cdot \dot{p}^T dt
\end{aligned}$$ Vì trạng thái khởi tạo cố định $x(0) = x_0$ nên
$\delta x(0) = 0$.

**Mặt khác, xét bài toán tổng quát có thêm $\Phi(x(T))$:** Khi lấy biến
phân toàn phần cho $\mathcal{L}$: $$\begin{aligned}
    \delta \mathcal{L} &= \delta \big( \Phi(x(T)) \big) + \int_0^T \left( \frac{\partial H}{\partial x} \delta x + \dot{p}^T \cdot \delta x \right) dt - p^T(T) \cdot \delta x(T) \\
    &= I + \frac{\partial \Phi}{\partial x} \cdot \delta x - p^T(T) \cdot \delta x(T) \\
    &= I + \left[ \nabla \Phi(x(T))^T \cdot \delta x(T) - p^T(T) \cdot \delta x(T) \right]
\end{aligned}$$ (Trong đó $I$ là phần tích phân bằng $0$ để tạo ra
phương trình adjoint). Để $\delta \mathcal{L} = 0$ tại biên, ta phải có:
$$\nabla \Phi(x(T)) = p(T) \quad \text{(Điều kiện Transversality)}$$

---

**b. Phương trình trạng thái**\
Ta cần chứng minh $\dot{x}^*(t) = \frac{\partial H}{\partial p}$. Theo
thiết lập bài toán ban đầu: $$\dot{x}(t) = f(x, u)$$ Mà theo định nghĩa
của Hamiltonian: $H(x, u, p) = p^T \cdot f(x, u) + L(x, u)$. Đạo hàm $H$
theo $p$, ta thu được: $$\frac{\partial H}{\partial p} = f(x, u)$$ Từ
(6) và (7) suy ra: $$\frac{\partial H}{\partial p} = \dot{x}^*(t)$$ 
**c. Điều kiện tối ưu hóa Control**\
Mặt khác, xét phiếm hàm:
$\mathcal{L} = \int_0^T \left( H(x, u, p) - p^T \dot{x} \right) dt$. Lấy
biến phân theo $u$ (tương đương với việc lấy đạo hàm theo $u$ và nhân
với $\delta u$):
$$\delta_u \mathcal{L} = \int_0^T \left( \frac{\partial H}{\partial u} \cdot \delta u \right) dt$$
Bởi vì
$\frac{d\mathcal{L}}{du} = \int_0^T \frac{\partial H}{\partial u} dt$.
Để tối ưu hóa, ta ép $\delta_u \mathcal{L} = 0$ với mọi biến thiên
$\delta u$ tùy ý. Từ đó suy ra: $$\frac{\partial H}{\partial u} = 0$$

# The Hamilton-Jacobi-Bellman Equation

HJB là phiên bản liên tục theo thời gian (continuous-time) của Nguyên lý
Tối ưu Bellman (Bellman's Principle of Optimality) trong Quy hoạch động
(Dynamic Programming).\
Nguyên lý này phát biểu rất đơn giản: \"Dù trạng thái hiện tại của bạn
là gì và bạn đã đến đó bằng cách nào, thì các quyết định từ thời điểm
này trở đi phải tạo thành một chiến lược tối ưu cho phần còn lại của
hành trình.\"\
*Tham khảo: Donald E. Kirk, \"Optimal Control Theory: An Introduction\",
Mục 3.11.*

Trong phần tiếp cận ban đầu với quy hoạch động, chúng ta đã xấp xỉ các
hệ thống hoạt động liên tục bằng các hệ thống rời rạc. Cách tiếp cận này
dẫn đến một hệ thức truy hồi lý tưởng cho việc giải trên máy tính. Trong
phần này, chúng ta sẽ xem xét một cách tiếp cận thay thế dẫn đến một
phương trình đạo hàm riêng phi tuyến --- phương trình
Hamilton-Jacobi-Bellman (H-J-B).

## Statement of the Problem

Xét quá trình được mô tả bởi phương trình trạng thái:
$$\dot{x}(t) = f(x(t), u(t)) \label{eq:state_HJB}$$ Quá trình này cần
được điều khiển để cực tiểu hóa độ đo hiệu suất (hàm chi phí):
$$J = \Phi(x(T)) + \int_0^T L(x(\tau), u(\tau)) d\tau \label{eq:cost_HJB}$$
trong đó $\Phi$ và $L$ là các hàm đã cho, thời gian bắt đầu $0$ và kết
thúc $T$ được cố định, và $\tau$ là biến tích phân giả (dummy
variable).\
Phương trình Đạo hàm riêng (PDE) mang tên Hamilton-Jacobi-Bellman:
$$-\frac{\partial J^*}{\partial t}(x(t), t) = H(x(t), u^*(x(t), \nabla_x J^*, t), \nabla_x J^*). \label{eq:3.11-10a}$$

## Proof

Ta sử dụng nguyên lý nhúng (imbedding principle) để đưa bài toán này vào
một lớp các bài toán rộng hơn bằng cách xét hàm chi phí từ một thời điểm
$t$ bất kỳ:
$$J(x(t), t, u(\tau)) = \Phi(x(T)) + \int_t^T L(x(\tau), u(\tau)) d\tau \label{eq:imbedding}$$
với $t$ có thể là bất kỳ giá trị nào nhỏ hơn hoặc bằng $T$ ($t \le T$),
và $x(t)$ có thể là bất kỳ giá trị trạng thái hợp lệ nào.

Gọi $J^*(x(t), t)$ là chi phí tối ưu để đi từ trạng thái $x(t)$ ở thời
điểm $t$ đến thời điểm kết thúc $T$. Hàm giá trị tối ưu được định nghĩa
là:
$$J^*(x(t), t) = \min_{\substack{u(\tau) \\ t \le \tau \le T}} \left\{ \Phi(x(T)) + \int_t^T L(x(\tau), u(\tau)) d\tau \right\}$$

Bằng cách chia nhỏ khoảng thời gian tích phân thành hai đoạn
$[t, t+\Delta t]$ và $[t+\Delta t, T]$, ta thu được:
$$J^*(x(t), t) = \min_{\substack{u(\tau) \\ t \le \tau \le T}} \left\{ \int_t^{t+\Delta t} L(x(\tau), u(\tau)) d\tau + \int_{t+\Delta t}^T L(x(\tau), u(\tau)) d\tau + \Phi(x(T)) \right\} \label{eq:subdivide}$$

Theo Nguyên lý Tối ưu (Principle of Optimality) của Bellman, quỹ đạo tối
ưu có tính chất lồng nhau. Do đó, ta có thể tối ưu hóa cho đoạn nhỏ
$\Delta t$ đầu tiên, và phần còn lại chính là hàm chi phí tối ưu bắt đầu
từ $t+\Delta t$:
$$J^*(x(t), t) = \min_{\substack{u(\tau) \\ t \le \tau \le t+\Delta t}} \left\{ \int_t^{t+\Delta t} L(x(\tau), u(\tau)) d\tau + J^*(x(t+\Delta t), t+\Delta t) \right\} \label{eq:principle_opt}$$

*(Từ phương trình
[\[eq:principle_opt\]](#eq:principle_opt){reference-type="eqref"
reference="eq:principle_opt"} này, bằng cách khai triển chuỗi Taylor cho
$J^*(x(t+\Delta t), t+\Delta t)$ và cho $\Delta t \to 0$, ta sẽ thu được
phương trình đạo hàm riêng HJB hoàn chỉnh.)*

Trong đó, $J^*(x(t + \Delta t), t + \Delta t)$ là chi phí tối thiểu của
quá trình trong khoảng thời gian $t + \Delta t \le \tau \le T$, với
trạng thái \"khởi tạo\" là $x(t + \Delta t)$.

Giả sử rằng các đạo hàm riêng bậc hai của $J^*$ tồn tại và bị chặn, ta
có thể khai triển chuỗi Taylor cho $J^*(x(t + \Delta t), t + \Delta t)$
quanh điểm $(x(t), t)$ để thu được: $$\begin{aligned}
    J^*(x(t), t) = \min_{\substack{u(\tau) \\ t \le \tau \le t+\Delta t}} \Bigg\{ &\int_t^{t+\Delta t} L(x(\tau), u(\tau)) d\tau + J^*(x(t), t) + \left[ \frac{\partial J^*}{\partial t}(x(t), t) \right] \Delta t \nonumber \\
    &+ \left[ \frac{\partial J^*}{\partial x}(x(t), t) \right]^T [x(t + \Delta t) - x(t)] + \text{các số hạng bậc cao} \Bigg\} \label{eq:taylor_expansion}
\end{aligned}$$

Bây giờ, xét với $\Delta t$ đủ nhỏ. Ta có thể xấp xỉ tích phân và độ
biến thiên của trạng thái như sau:

-   $\int_t^{t+\Delta t} L(x(\tau), u(\tau)) d\tau \approx L(x(t), u(t)) \Delta t$

-   $x(t + \Delta t) - x(t) \approx \dot{x}(t) \Delta t = f(x(t), u(t)) \Delta t$

Thay các xấp xỉ này vào phương trình
[\[eq:taylor_expansion\]](#eq:taylor_expansion){reference-type="eqref"
reference="eq:taylor_expansion"}, ta thu được: 
$$\begin{aligned}
    J^*(x(t), t) = \min_{u(t)} \Big\{ &L(x(t), u(t)) \Delta t + J^*(x(t), t) + J_t^*(x(t), t) \Delta t \nonumber \\
    &+ J_x^{*T}(x(t), t) \left[ f(x(t), u(t)) \right] \Delta t + o(\Delta t) \Big\} \label{eq:small_dt}
\end{aligned}$$ 
trong đó $J_t^* = \frac{\partial J^*}{\partial t}$,
$J_x^* = \frac{\partial J^*}{\partial x} = \nabla_x J^*$, và
$o(\Delta t)$ ký hiệu các số hạng chứa $(\Delta t)^2$ và các vô cùng bé
bậc cao hơn của $\Delta t$ phát sinh từ việc xấp xỉ tích phân và cắt cụt
khai triển chuỗi Taylor.

Tiếp theo, vì các đại lượng $J^*(x(t), t)$ và $J_t^*(x(t), t) \Delta t$
không phụ thuộc vào biến điều khiển $u(t)$, ta có thể đưa chúng ra khỏi
toán tử cực tiểu hóa:
$$J^*(x(t), t) = J^*(x(t), t) + J_t^*(x(t), t) \Delta t + \min_{u(t)} \Big\{ L(x(t), u(t)) \Delta t + J_x^{*T}(x(t), t) f(x(t), u(t)) \Delta t + o(\Delta t) \Big\}$$

Triệt tiêu $J^*(x(t), t)$ ở cả hai vế, chia toàn bộ phương trình cho
$\Delta t$ và chuyển vế $J_t^*$:
$$-J_t^*(x(t), t) = \min_{u(t)} \left\{ L(x(t), u(t)) + J_x^{*T}(x(t), t) f(x(t), u(t)) + \frac{o(\Delta t)}{\Delta t} \right\}$$

Cuối cùng, khi lấy giới hạn $\Delta t \to 0$, số hạng
$\frac{o(\Delta t)}{\Delta t}$ sẽ tiến về $0$. Ta thu được phương trình
đạo hàm riêng Hamilton-Jacobi-Bellman (HJB):
$$-\frac{\partial J^*(x, t)}{\partial t} = \min_{u(t)} \left[ L(x, u) + \nabla_x J^*(x, t)^T f(x, u) \right] \label{eq:hjb_final}$$

Với điều kiện biên tại thời điểm kết thúc $T$:
$$J^*(x(T), T) = \Phi(x(T)) \label{eq:hjb_boundary}$$ Từ phép cực tiểu
hóa \[vì các đại lượng này không phụ thuộc vào $u(t)$\], ta thu được:
$$\begin{aligned}
    0 &= \frac{\partial J^*}{\partial t}(x(t), t) \Delta t + \min_{u(t)} \Big\{ L(x(t), u(t)) \Delta t \nonumber \\
    &\quad + \nabla_x J^*(x(t), t)^T f(x(t), u(t)) \Delta t + o(\Delta t) \Big\}. \label{eq:3.11-9}
\end{aligned}$$

Chia hai vế cho $\Delta t$ và lấy giới hạn khi $\Delta t \to 0$, ta có:
$$0 = \frac{\partial J^*}{\partial t}(x(t), t) + \min_{u(t)} \left\{ L(x(t), u(t)) + \nabla_x J^*(x(t), t)^T f(x(t), u(t)) \right\}. \label{eq:3.11-10}$$

Để tìm giá trị biên cho phương trình đạo hàm riêng này, ta đặt $t = T$;
từ định nghĩa hàm chi phí ban đầu, rõ ràng ta có:
$$J^*(x(T), T) = \Phi(x(T)). \label{eq:3.11-11}$$

Ta định nghĩa hàm Hamiltonian $H$ là:
$$H(x(t), u(t), \nabla_x J^*) \triangleq L(x(t), u(t)) + \nabla_x J^*(x(t), t)^T f(x(t), u(t)) \label{eq:3.11-12}$$
và
$$H(x(t), u^*(x(t), \nabla_x J^*, t), \nabla_x J^*) = \min_{u(t)} H(x(t), u(t), \nabla_x J^*), \label{eq:3.11-13}$$
bởi vì tín hiệu điều khiển cực tiểu hóa sẽ phụ thuộc vào $x$,
$\nabla_x J^*$, và $t$. Sử dụng các định nghĩa này, ta thu được phương
trình Hamilton-Jacobi:
$$0 = \frac{\partial J^*}{\partial t}(x(t), t) + H(x(t), u^*(x(t), \nabla_x J^*, t), \nabla_x J^*). \label{eq:3.11-10a}$$

Phương trình này là phiên bản tương tự trong miền thời gian liên tục của
phương trình truy hồi Bellman; do đó, ta sẽ gọi phương trình
[\[eq:3.11-10a\]](#eq:3.11-10a){reference-type="eqref"
reference="eq:3.11-10a"} là **\"Phương trình
Hamilton-Jacobi-Bellman\"**.

# A Calculus Example

*Tham khảo: Donald E. Kirk, \"Optimal Control Theory: An Introduction\",
Ví dụ 3.11-1.* Một hệ thống bậc nhất được mô tả bởi phương trình vi
phân: $$\dot{x}(t) = f(x(t), u(t)) = x(t) + u(t); \label{eq:3.11-14}$$
Ta cần tìm luật điều khiển tối ưu hóa độ đo hiệu suất (hàm chi phí):
$$J = \Phi(x(T)) + \int_0^T L(x(t), u(t)) dt = \frac{1}{4}x^2(T) + \int_0^T \frac{1}{4}u^2(t) dt. \label{eq:3.11-15}$$
Thời gian kết thúc $T$ được xác định trước, và các giá trị trạng thái
cũng như tín hiệu điều khiển không bị giới hạn bởi bất kỳ ràng buộc biên
nào.

## Solve by the HJB Equation

Thay $L(x(t), u(t)) = \frac{1}{4}u^2(t)$ và
$f(x(t), u(t)) = x(t) + u(t)$ vào định nghĩa Hamiltonian, ta có hàm
Hamiltonian là (để gọn, ta bỏ qua các đối số của $\nabla_x J^*$):
$$H(x(t), u(t), \nabla_x J^*, t) = \frac{1}{4}u^2(t) + \nabla_x J^* \cdot [x(t) + u(t)], \label{eq:3.11-16}$$
và vì tín hiệu điều khiển không bị ràng buộc, điều kiện cần mà điều
khiển tối ưu phải thỏa mãn là:
$$\frac{\partial H}{\partial u} = \frac{1}{2}u(t) + \nabla_x J^*(x(t), t) = 0. \label{eq:3.11-17}$$

Quan sát thấy rằng:
$$\frac{\partial^2 H}{\partial u^2} = \frac{1}{2} > 0; \label{eq:3.11-18}$$
do đó, tín hiệu điều khiển thỏa mãn phương trình
[\[eq:3.11-17\]](#eq:3.11-17){reference-type="eqref"
reference="eq:3.11-17"} thực sự làm cực tiểu hóa hàm $H$. Từ
[\[eq:3.11-17\]](#eq:3.11-17){reference-type="eqref"
reference="eq:3.11-17"}, ta rút ra:
$$u^*(t) = -2\nabla_x J^*(x(t), t), \label{eq:3.11-19}$$ Khi thay giá
trị $u^*(t)$ này vào phương trình Hamilton-Jacobi-Bellman
$\left(0 = \frac{\partial J^*}{\partial t} + H \right)$, ta được:
$$\begin{aligned}
    0 &= \frac{\partial J^*}{\partial t} + \frac{1}{4}[-2\nabla_x J^*]^2 + [\nabla_x J^*]x(t) - 2[\nabla_x J^*]^2 \nonumber \\
    &= \frac{\partial J^*}{\partial t} - [\nabla_x J^*]^2 + [\nabla_x J^*]x(t). \label{eq:3.11-20}
\end{aligned}$$ Từ [\[eq:3.11-15\]](#eq:3.11-15){reference-type="eqref"
reference="eq:3.11-15"}, giá trị tại biên là:
$$J^*(x(T), T) = \frac{1}{4}x^2(T). \label{eq:3.11-21}$$

Một cách để giải phương trình Hamilton-Jacobi-Bellman là đoán một dạng
của nghiệm và kiểm tra xem nó có thỏa mãn phương trình vi phân và các
điều kiện biên hay không. Giả sử nghiệm có dạng:
$$J^*(x(t), t) = \frac{1}{2} K(t) x^2(t), \label{eq:3.11-22}$$ trong đó
$K(t)$ đại diện cho một hàm vô hướng của $t$ cần được xác định. Lưu ý
rằng: $$\nabla_x J^*(x(t), t) = K(t) x(t), \label{eq:3.11-23}$$ kết hợp
với phương trình [\[eq:3.11-19\]](#eq:3.11-19){reference-type="eqref"
reference="eq:3.11-19"}, ta suy ra:
$$u^*(t) = -2K(t)x(t). \label{eq:3.11-24}$$ Như vậy, nếu ta có thể tìm
được một hàm $K(t)$ thỏa mãn
[\[eq:3.11-20\]](#eq:3.11-20){reference-type="eqref"
reference="eq:3.11-20"} và
[\[eq:3.11-21\]](#eq:3.11-21){reference-type="eqref"
reference="eq:3.11-21"}, thì luật điều khiển tối ưu sẽ là *hồi tiếp
tuyến tính của trạng thái* (linear feedback of the state) --- thực tế,
đây chính là động lực để chúng ta chọn nghiệm có dạng như
[\[eq:3.11-22\]](#eq:3.11-22){reference-type="eqref"
reference="eq:3.11-22"}.

Bằng cách chọn $K(T) = \frac{1}{2}$, nghiệm giả định sẽ khớp với điều
kiện biên được chỉ định bởi
[\[eq:3.11-21\]](#eq:3.11-21){reference-type="eqref"
reference="eq:3.11-21"}. Thay
[\[eq:3.11-23\]](#eq:3.11-23){reference-type="eqref"
reference="eq:3.11-23"} vào vị trí của $\nabla_x J^*$ và thay
$$\frac{\partial J^*}{\partial t}(x(t), t) = \frac{1}{2} \dot{K}(t) x^2(t)$$
vào phương trình [\[eq:3.11-20\]](#eq:3.11-20){reference-type="eqref"
reference="eq:3.11-20"}, ta được:
$$0 = \frac{1}{2} \dot{K}(t) x^2(t) - K^2(t) x^2(t) + K(t) x^2(t). \label{eq:3.11-25}$$
Vì phương trình này phải được thỏa mãn với mọi $x(t)$, nên ta có:
$$\frac{1}{2} \dot{K}(t) - K^2(t) + K(t) = 0. \label{eq:3.11-26}$$
$K(t)$ là một hàm vô hướng của $t$; do đó, nghiệm có thể được giải bằng
phương pháp tách biến (separation of variables), cho ra kết quả:
$$K(t) = \frac{e^{(T-t)}}{e^{(T-t)} + e^{-(T-t)}}. \label{eq:3.11-27}$$

Khi đó, luật điều khiển tối ưu là: $$\begin{aligned}
    u^*(t) &= -2\nabla_x J^*(x(t), t) \nonumber \\
    &= -2K(t)x(t). \label{eq:3.11-28}
\end{aligned}$$

Lưu ý rằng khi $T \to \infty$, hồi tiếp biến thiên theo thời gian tuyến
tính này sẽ tiến dần đến hồi tiếp hằng số ($K(t) \to 1$), và hệ thống
được điều khiển: $$\begin{aligned}
    \dot{x}(t) &= x(t) - 2x(t) \nonumber \\
    &= -x(t) \label{eq:3.11-29}
\end{aligned}$$ trở nên ổn định. Nếu điều này không xảy ra, giá trị độ
đo hiệu suất sẽ tiến đến vô cực.

## Solve by the Pontryagin's maximum principle

$$\begin{aligned}
    \text{Động lực hệ:} \quad &\dot{x}(t) = x(t) + u(t) \\
    \text{Hàm chi phí:} \quad &J = \frac{1}{4}x^2(T) + \int_0^T \frac{1}{4}u^2(t) dt
\end{aligned}$$

Theo định nghĩa, hàm Hamiltonian cho bài toán này là: $$\begin{aligned}
    H(x, u, p) &= L(x, u) + p(t) f(x, u) \nonumber \\
    &= \frac{1}{4}u^2(t) + p(t)[x(t) + u(t)] \label{eq:pmp_H}
\end{aligned}$$

Theo nguyên lý cực đại Pontryagin, quỹ đạo tối ưu phải thỏa mãn 3 phương
trình:
$$\frac{\partial H}{\partial u} = 0 \implies \frac{1}{2}u(t) + p(t) = 0 \implies u^*(t) = -2p(t) \label{eq:pmp_u}$$
$$\dot{x}(t) = \frac{\partial H}{\partial p} = x(t) + u(t) = x(t) - 2p(t) \label{eq:pmp_state}$$
$$\dot{p}(t) = -\frac{\partial H}{\partial x} = -p(t) \label{eq:pmp_adjoint}$$
Tại thời điểm kết thúc $T$, biến đối ngẫu $p(T)$ được xác định bởi đạo
hàm của hàm chi phí biên $\Phi(x(T)) = \frac{1}{4}x^2(T)$:
$$p(T) = \nabla_x \Phi(x(T)) = \frac{1}{2}x(T) \label{eq:pmp_transversality}$$

**Giải hệ phương trình bằng Phương pháp quét (Sweep Method)** Từ
[\[eq:pmp_state\]](#eq:pmp_state){reference-type="eqref"
reference="eq:pmp_state"} và
[\[eq:pmp_adjoint\]](#eq:pmp_adjoint){reference-type="eqref"
reference="eq:pmp_adjoint"}, ta có một hệ phương trình vi phân biên hai
điểm (Two-Point Boundary Value Problem). Để tìm ra luật điều khiển hồi
tiếp (feedback control), ta giả sử có một mối quan hệ tuyến tính giữa
biến đối ngẫu $p(t)$ và trạng thái $x(t)$:
$$p(t) = K(t)x(t) \label{eq:pmp_riccati_sub}$$ Lấy đạo hàm hai vế theo
thời gian $t$:
$$\dot{p}(t) = \dot{K}(t)x(t) + K(t)\dot{x}(t) \label{eq:pmp_dp}$$

Bây giờ, ta thay $\dot{p}(t)$ từ
[\[eq:pmp_adjoint\]](#eq:pmp_adjoint){reference-type="eqref"
reference="eq:pmp_adjoint"} và $\dot{x}(t)$ từ
[\[eq:pmp_state\]](#eq:pmp_state){reference-type="eqref"
reference="eq:pmp_state"} vào phương trình
[\[eq:pmp_dp\]](#eq:pmp_dp){reference-type="eqref"
reference="eq:pmp_dp"}: $$-p(t) = \dot{K}(t)x(t) + K(t)[x(t) - 2p(t)]$$
Thay tiếp $p(t) = K(t)x(t)$ vào cả hai vế:
$$-K(t)x(t) = \dot{K}(t)x(t) + K(t)x(t) - 2K^2(t)x(t)$$ Vì hệ thức này
phải đúng với mọi quỹ đạo trạng thái $x(t) \neq 0$, ta có thể triệt tiêu
$x(t)$ ở hai vế: $$-K(t) = \dot{K}(t) + K(t) - 2K^2(t)$$ Sắp xếp lại, ta
thu được phương trình vi phân Riccati cho hàm $K(t)$:
$$\frac{1}{2}\dot{K}(t) + K(t) - K^2(t) = 0 \label{eq:pmp_riccati}$$

Xét điều kiện biên từ phương trình
[\[eq:pmp_transversality\]](#eq:pmp_transversality){reference-type="eqref"
reference="eq:pmp_transversality"}:
$$p(T) = K(T)x(T) = \frac{1}{2}x(T) \implies K(T) = \frac{1}{2}$$

**Kết luận:** Phương trình vi phân
[\[eq:pmp_riccati\]](#eq:pmp_riccati){reference-type="eqref"
reference="eq:pmp_riccati"} và điều kiện biên $K(T) = \frac{1}{2}$ thu
được phương trình [\[eq:3.11-26\]](#eq:3.11-26){reference-type="eqref"
reference="eq:3.11-26"} tương tự phương pháp HJB. Luật điều khiển tối
ưu: $$u^*(t) = -2p(t) = -2K(t)x(t)$$

Do đó, ta cũng có quan hệ sau: $$p(t) = \nabla_x J^*(x, t) = K(t)x(t)$$

{% endtab %}

{% tab language-switch English %}

## 1. The Pontryagin's Maximum Principle

### Statement of the Problem
Consider the optimal control problem with an initial value:
$$\begin{align}
	\dot{x}(t) &= f(x(t), u(t))
	x(0) &= x_0 
\end{align}$$

The objective is to optimize the general cost function:
$$
J(u) = \Phi(x(T)) + \int_0^T L(x(t), u(t)) dt
$$

Define the Hamiltonian function:
\begin{equation}
	H(x, u, p) = p^T \cdot f(x, u) + L(x, u) 
\end{equation}

Pontryagin's Maximum Principle (PMP) yields the following relations:
$$\begin{align}
	\dot{x}^*(t) &= \frac{\partial H}{\partial p} \\
	\dot{p}(t) &= -\frac{\partial H}{\partial x} \\
	\frac{\partial H}{\partial u} &= 0
\end{align}$$

---

### Proof

*Reference: Lawrence C. Evans, UC Berkeley, "An Introduction to Mathematical Optimal Control Theory", Appendix.*

**a. Adjoint Equation**

We prove (2), the adjoint equation: $\dot{p}(t) = -\frac{\partial H}{\partial x}$.

**Problem:** First, consider the optimization problem with only the running cost:
$$
J = \int_0^T L(x, u) dt
$$
with the dynamic constraint: $f(x, u) - \dot{x}(t) = 0$.

Consider the Augmented Functional:
$$
\mathcal{L} = \int_0^T \left[ L(x, u) + p(t)^T (f(x, u) - \dot{x}) \right] dt
$$
Substituting the Hamiltonian function definition, we get:
$$
\mathcal{L} = \int_0^T \left( H(x, u, p) - p(t)^T \cdot \dot{x} \right) dt
$$

Taking the first-order variation of $\mathcal{L}$:
\begin{equation}
	\Rightarrow \delta \mathcal{L} = \int_0^T \left[ \frac{\partial H}{\partial x} \cdot \delta x - p(t)^T \cdot \delta \dot{x} \right] dt = 0 \label{eq:i}
\end{equation}
\begin{equation}
	\Rightarrow \delta \mathcal{L} = \int_0^T \left( \frac{\partial H}{\partial x} + \dot{p}(t)^T \right) \delta x \, dt = 0 \label{eq:ii}
\end{equation}
Since the integral is zero for all $\delta x$, the expression inside the integral must be zero:
$$
\frac{\partial H}{\partial x} + \dot{p}^T = 0 \implies \dot{p}^T(t) = -\frac{\partial H}{\partial x}
$$

**Proof of \eqref{eq:i}:**

We introduce a perturbation to the state variable with parameter $\epsilon$:
$$\begin{align}
	\text{State: } & x(t, \epsilon) = x^*(t) + \epsilon \cdot \eta(t) \implies \delta x = \epsilon \eta(t) \nonumber \\
	\text{Velocity: } & \dot{x}(t, \epsilon) = \dot{x}^*(t) + \epsilon \cdot \dot{\eta}(t) \implies \delta \dot{x} = \epsilon \dot{\eta}(t) \nonumber
\end{align}$$

Consider the functional with respect to $\epsilon$:
$$
\mathcal{L}(\epsilon) = \int_0^T \left[ H(x(t, \epsilon), u, p) - p^T \cdot \dot{x}(t, \epsilon) \right] dt
$$

Examine the derivative with respect to $\epsilon$:
$$
\frac{d\mathcal{L}}{d\epsilon} = \int_0^T \frac{\partial}{\partial \epsilon} \left[ H(x(t, \epsilon), u, p) - p^T \cdot \dot{x}(t, \epsilon) \right] dt
$$

Applying the Chain Rule:
*   For the first component: 
    $$
    \frac{\partial H}{\partial \epsilon} = \frac{\partial H}{\partial x} \cdot \frac{\partial x}{\partial \epsilon}
    $$
    Since $x = x^*(t) + \epsilon \eta(t) \implies \frac{\partial x}{\partial \epsilon} = \eta(t)$
    Thus: 
    $$
    \frac{\partial H}{\partial \epsilon} = \frac{\partial H}{\partial x} \cdot \eta(t)
    $$
*   For the second component: 
    $$
    \frac{\partial}{\partial \epsilon} \left( p^T \cdot \dot{x}(t, \epsilon) \right) = p^T \cdot \left( \frac{\partial \dot{x}}{\partial \epsilon} \right)
    $$
    Since $\dot{x} = \dot{x}^* + \epsilon \cdot \dot{\eta}(t) \implies \frac{\partial \dot{x}}{\partial \epsilon} = \dot{\eta}(t)$
    Thus we get $p^T \cdot \dot{\eta}(t)$

Substituting into the integral:
$$
\frac{d\mathcal{L}}{d\epsilon} = \int_0^T \left( \frac{\partial H}{\partial x} \cdot \eta(t) - p^T \cdot \dot{\eta}(t) \right) dt
$$

By definition of the first variation: $\delta \mathcal{L} = \left( \frac{d\mathcal{L}}{d\epsilon} \Big|_{\epsilon=0} \right) \cdot \epsilon$. Multiplying the expression by $\epsilon$:
$$\begin{align}
	\delta \mathcal{L} &= \int_0^T \left[ \frac{\partial H}{\partial x} (\epsilon \eta(t)) - p^T (\epsilon \dot{\eta}(t)) \right] dt \nonumber \\
	&= \int_0^T \left[ \frac{\partial H}{\partial x} \delta x - p^T \cdot \delta \dot{x} \right] dt \nonumber
\end{align}$$

**Proof of \eqref{eq:ii}:**

From the result of \eqref{eq:i}:
$$
\delta \mathcal{L} = \int_0^T \left[ \frac{\partial H}{\partial x} \cdot \delta x - p^T \delta \dot{x} \right] dt = 0
$$

Considering the second term separately and applying integration by parts:
$$\begin{align}
	\int_0^T p^T (\delta \dot{x}) \, dt &= \int_0^T p^T \cdot d(\delta x) \nonumber \\
	&= \left[ p^T \cdot \delta x \right]_0^T - \int_0^T \delta x \cdot d(p^T) \nonumber \\
	&= p^T(T) \cdot \delta x(T) - p^T(0) \cdot \delta x(0) - \int_0^T \delta x \cdot \dot{p}^T dt \nonumber
\end{align}$$
Since the initial state is fixed $x(0) = x_0$, we have $\delta x(0) = 0$. 

**On the other hand, considering the general problem with the addition of $\Phi(x(T))$:**

Taking the total variation for $\mathcal{L}$:
$$\begin{align}
	\delta \mathcal{L} &= \delta \big( \Phi(x(T)) \big) + \int_0^T \left( \frac{\partial H}{\partial x} \delta x + \dot{p}^T \cdot \delta x \right) dt - p^T(T) \cdot \delta x(T) \nonumber \\
	&= I + \frac{\partial \Phi}{\partial x} \cdot \delta x - p^T(T) \cdot \delta x(T) \nonumber \\
	&= I + \left[ \nabla \Phi(x(T))^T \cdot \delta x(T) - p^T(T) \cdot \delta x(T) \right] \nonumber
\end{align}$$
(where $I$ is the integral part that equates to $0$ to yield the adjoint equation).
For $\delta \mathcal{L} = 0$ at the boundary, we must have:
$$
\nabla \Phi(x(T)) = p(T) \quad \text{(Transversality Condition)}
$$

---

**b. State Equation**

We need to prove $\dot{x}^*(t) = \frac{\partial H}{\partial p}$.
According to the initial problem setup: 
\begin{equation}
	\dot{x}(t) = f(x, u) \label{eq:state_pmp}
\end{equation}
By the definition of the Hamiltonian: $H(x, u, p) = p^T \cdot f(x, u) + L(x, u)$.
Taking the derivative of $H$ with respect to $p$, we obtain:
\begin{equation}
	\frac{\partial H}{\partial p} = f(x, u) \label{eq:H_deriv_p}
\end{equation}
From \eqref{eq:state_pmp} and \eqref{eq:H_deriv_p}, we deduce: 
$$
\frac{\partial H}{\partial p} = \dot{x}^*(t)
$$

**c. Control Optimization Condition**

On the other hand, consider the functional: $\mathcal{L} = \int_0^T \left( H(x, u, p) - p^T \dot{x} \right) dt$.
Taking the variation with respect to $u$ (equivalent to taking the derivative with respect to $u$ and multiplying by $\delta u$):
$$
\delta_u \mathcal{L} = \int_0^T \left( \frac{\partial H}{\partial u} \cdot \delta u \right) dt
$$
Because $\frac{d\mathcal{L}}{du} = \int_0^T \frac{\partial H}{\partial u} dt$. For optimization, we force $\delta_u \mathcal{L} = 0$ for any arbitrary variation $\delta u$. Thus, we deduce:
$$
\frac{\partial H}{\partial u} = 0
$$

---

## 2. The Hamilton-Jacobi-Bellman Equation

HJB is the continuous-time version of Bellman's Principle of Optimality in Dynamic Programming.
This principle simply states: "Whatever your current state is and however you got there, the decisions from this point forward must constitute an optimal strategy for the remainder of the journey."

*Reference: Donald E. Kirk, "Optimal Control Theory: An Introduction", Section 3.11.*

In the initial approach to dynamic programming, we approximated continuous-time systems with discrete systems. This approach leads to a recurrence relation ideal for computer solutions. In this section, we will consider an alternative approach that leads to a nonlinear partial differential equation — the Hamilton-Jacobi-Bellman (H-J-B) equation.

### Statement of the Problem

Consider the process described by the state equation:
\begin{equation}
	\dot{x}(t) = f(x(t), u(t)) \label{eq:state_HJB}
\end{equation}
This process needs to be controlled to minimize the performance measure (cost function):
\begin{equation}
	J = \Phi(x(T)) + \int_0^T L(x(\tau), u(\tau)) d\tau \label{eq:cost_HJB}
\end{equation}
where $\Phi$ and $L$ are given functions, the start time $0$ and terminal time $T$ are fixed, and $\tau$ is a dummy integration variable.

The Partial Differential Equation (PDE) named Hamilton-Jacobi-Bellman is given by:
\begin{equation}
	-\frac{\partial J^*}{\partial t}(x(t), t) = H(x(t), u^*(x(t), \nabla_x J^*, t), \nabla_x J^*). \label{eq:3.11-10a_initial}
\end{equation}

### Proof

We use the imbedding principle to include this problem in a broader class of problems by considering the cost function from an arbitrary time $t$:
\begin{equation}
	J(x(t), t, u(\tau)) = \Phi(x(T)) + \int_t^T L(x(\tau), u(\tau)) d\tau \label{eq:imbedding}
\end{equation}
where $t$ can be any value less than or equal to $T$ ($t \le T$), and $x(t)$ can be any valid state value. 

Let $J^*(x(t), t)$ be the optimal cost to go from state $x(t)$ at time $t$ to the terminal time $T$. The optimal value function is defined as:
\begin{equation}
	J^*(x(t), t) = \min_{\substack{u(\tau) \\ t \le \tau \le T}} \left\{ \Phi(x(T)) + \int_t^T L(x(\tau), u(\tau)) d\tau \right\}
\end{equation}

By subdividing the integration interval into two segments $[t, t+\Delta t]$ and $[t+\Delta t, T]$, we obtain:
\begin{equation}
	J^*(x(t), t) = \min_{\substack{u(\tau) \\ t \le \tau \le T}} \left\{ \int_t^{t+\Delta t} L(x(\tau), u(\tau)) d\tau + \int_{t+\Delta t}^T L(x(\tau), u(\tau)) d\tau + \Phi(x(T)) \right\} \label{eq:subdivide}
\end{equation}

According to Bellman's Principle of Optimality, the optimal trajectory has a nested property. Therefore, we can optimize over the first small interval $\Delta t$, and the remainder is exactly the optimal cost function starting from $t+\Delta t$:
\begin{equation}
	J^*(x(t), t) = \min_{\substack{u(\tau) \\ t \le \tau \le t+\Delta t}} \left\{ \int_t^{t+\Delta t} L(x(\tau), u(\tau)) d\tau + J^*(x(t+\Delta t), t+\Delta t) \right\} \label{eq:principle_opt}
\end{equation}

*(From equation \eqref{eq:principle_opt}, by expanding the Taylor series for $J^*(x(t+\Delta t), t+\Delta t)$ and letting $\Delta t \to 0$, we will obtain the complete HJB partial differential equation.)*

Here, $J^*(x(t + \Delta t), t + \Delta t)$ is the minimum cost of the process in the time interval $t + \Delta t \le \tau \le T$, with the "initial" state being $x(t + \Delta t)$.

Assuming that the second-order partial derivatives of $J^*$ exist and are bounded, we can expand the Taylor series for $J^*(x(t + \Delta t), t + \Delta t)$ around the point $(x(t), t)$ to obtain:
$$\begin{align}
	J^*(x(t), t) = \min_{\substack{u(\tau) \\ t \le \tau \le t+\Delta t}} \Bigg\{ &\int_t^{t+\Delta t} L(x(\tau), u(\tau)) d\tau + J^*(x(t), t) + \left[ \frac{\partial J^*}{\partial t}(x(t), t) \right] \Delta t \nonumber \\
	&+ \left[ \frac{\partial J^*}{\partial x}(x(t), t) \right]^T [x(t + \Delta t) - x(t)] + \text{higher-order terms} \Bigg\} \label{eq:taylor_expansion}
\end{align}$$

Now, considering a sufficiently small $\Delta t$. We can approximate the integral and the state variation as follows:
*   $\int_t^{t+\Delta t} L(x(\tau), u(\tau)) d\tau \approx L(x(t), u(t)) \Delta t$
*   $x(t + \Delta t) - x(t) \approx \dot{x}(t) \Delta t = f(x(t), u(t)) \Delta t$

Substituting these approximations into equation \eqref{eq:taylor_expansion}, we obtain:
$$\begin{align}
	J^*(x(t), t) = \min_{u(t)} \Big\{ &L(x(t), u(t)) \Delta t + J^*(x(t), t) + J_t^*(x(t), t) \Delta t \nonumber \\
	&+ J_x^{*T}(x(t), t) \left[ f(x(t), u(t)) \right] \Delta t + o(\Delta t) \Big\} \label{eq:small_dt}
\end{align}$$
where $J_t^* = \frac{\partial J^*}{\partial t}$, $J_x^* = \frac{\partial J^*}{\partial x} = \nabla_x J^*$, and $o(\Delta t)$ denotes the terms containing $(\Delta t)^2$ and higher-order infinitesimals of $\Delta t$ arising from the integral approximation and Taylor series truncation.

Next, since the quantities $J^*(x(t), t)$ and $J_t^*(x(t), t) \Delta t$ do not depend on the control variable $u(t)$, we can move them outside the minimization operator:
$$
J^*(x(t), t) = J^*(x(t), t) + J_t^*(x(t), t) \Delta t + \min_{u(t)} \Big\{ L(x(t), u(t)) \Delta t + J_x^{*T}(x(t), t) f(x(t), u(t)) \Delta t + o(\Delta t) \Big\}
$$

Canceling $J^*(x(t), t)$ on both sides, dividing the entire equation by $\Delta t$, and moving $J_t^*$ to the other side:
$$
-J_t^*(x(t), t) = \min_{u(t)} \left\{ L(x(t), u(t)) + J_x^{*T}(x(t), t) f(x(t), u(t)) + \frac{o(\Delta t)}{\Delta t} \right\}
$$

Finally, taking the limit as $\Delta t \to 0$, the term $\frac{o(\Delta t)}{\Delta t}$ approaches $0$. We obtain the Hamilton-Jacobi-Bellman (HJB) partial differential equation:
\begin{equation}
	-\frac{\partial J^*(x, t)}{\partial t} = \min_{u(t)} \left[ L(x, u) + \nabla_x J^*(x, t)^T f(x, u) \right] \label{eq:hjb_final}
\end{equation}

With the boundary condition at the terminal time $T$:
\begin{equation}
	J^*(x(T), T) = \Phi(x(T)) \label{eq:hjb_boundary}
\end{equation}
From the minimization [since these quantities do not depend on $u(t)$], we obtain:
$$\begin{align}
	0 &= \frac{\partial J^*}{\partial t}(x(t), t) \Delta t + \min_{u(t)} \Big\{ L(x(t), u(t)) \Delta t \nonumber \\
	&\quad + \nabla_x J^*(x(t), t)^T f(x(t), u(t)) \Delta t + o(\Delta t) \Big\}. \label{eq:3.11-9}
\end{align}$$

Dividing both sides by $\Delta t$ and taking the limit as $\Delta t \to 0$, we have:
\begin{equation}
	0 = \frac{\partial J^*}{\partial t}(x(t), t) + \min_{u(t)} \left\{ L(x(t), u(t)) + \nabla_x J^*(x(t), t)^T f(x(t), u(t)) \right\}. \label{eq:3.11-10}
\end{equation}

To find the boundary value for this PDE, we set $t = T$; from the definition of the initial cost function, it is clear that:
\begin{equation}
	J^*(x(T), T) = \Phi(x(T)). \label{eq:3.11-11}
\end{equation}

We define the Hamiltonian function $H$ as:
\begin{equation}
	H(x(t), u(t), \nabla_x J^*) \triangleq L(x(t), u(t)) + \nabla_x J^*(x(t), t)^T f(x(t), u(t)) \label{eq:3.11-12}
\end{equation}
and
\begin{equation}
	H(x(t), u^*(x(t), \nabla_x J^*, t), \nabla_x J^*) = \min_{u(t)} H(x(t), u(t), \nabla_x J^*), \label{eq:3.11-13}
\end{equation}
because the minimizing control signal will depend on $x$, $\nabla_x J^*$, and $t$. Using these definitions, we obtain the Hamilton-Jacobi equation:
\begin{equation}
	0 = \frac{\partial J^*}{\partial t}(x(t), t) + H(x(t), u^*(x(t), \nabla_x J^*, t), \nabla_x J^*). \label{eq:3.11-10a}
\end{equation}

This equation is the continuous-time analogue of Bellman's recurrence equation; therefore, we will refer to equation \eqref{eq:3.11-10a} as the **"Hamilton-Jacobi-Bellman equation"**.

---

## 3. A Calculus Example

*Reference: Donald E. Kirk, "Optimal Control Theory: An Introduction", Example 3.11-1.*

A first-order system is described by the differential equation:
\begin{equation}
	\dot{x}(t) = f(x(t), u(t)) = x(t) + u(t); \label{eq:3.11-14}
\end{equation}
We need to find the optimal control law that minimizes the performance measure (cost function):
\begin{equation}
	J = \Phi(x(T)) + \int_0^T L(x(t), u(t)) dt = \frac{1}{4}x^2(T) + \int_0^T \frac{1}{4}u^2(t) dt. \label{eq:3.11-15}
\end{equation}
The terminal time $T$ is specified, and the state values as well as the control signals are not restricted by any boundary constraints.

### Solve by the HJB Equation

Substituting $L(x(t), u(t)) = \frac{1}{4}u^2(t)$ and $f(x(t), u(t)) = x(t) + u(t)$ into the Hamiltonian definition, we have the Hamiltonian function (for brevity, we omit the arguments of $\nabla_x J^*$):
\begin{equation}
	H(x(t), u(t), \nabla_x J^*, t) = \frac{1}{4}u^2(t) + \nabla_x J^* \cdot [x(t) + u(t)], \label{eq:3.11-16}
\end{equation}
and since the control signal is unconstrained, the necessary condition that the optimal control must satisfy is:
\begin{equation}
	\frac{\partial H}{\partial u} = \frac{1}{2}u(t) + \nabla_x J^*(x(t), t) = 0. \label{eq:3.11-17}
\end{equation}

Observing that:
\begin{equation}
	\frac{\partial^2 H}{\partial u^2} = \frac{1}{2} > 0; \label{eq:3.11-18}
\end{equation}
therefore, the control signal satisfying equation \eqref{eq:3.11-17} truly minimizes the function $H$. From \eqref{eq:3.11-17}, we deduce:
\begin{equation}
	u^*(t) = -2\nabla_x J^*(x(t), t), \label{eq:3.11-19}
\end{equation}
Substituting this $u^*(t)$ value into the Hamilton-Jacobi-Bellman equation $\left(0 = \frac{\partial J^*}{\partial t} + H \right)$, we get:
$$\begin{align}
	0 &= \frac{\partial J^*}{\partial t} + \frac{1}{4}[-2\nabla_x J^*]^2 + [\nabla_x J^*]x(t) - 2[\nabla_x J^*]^2 \nonumber \\
	&= \frac{\partial J^*}{\partial t} - [\nabla_x J^*]^2 + [\nabla_x J^*]x(t). \label{eq:3.11-20}
\end{align}$$
From \eqref{eq:3.11-15}, the boundary value is:
\begin{equation}
	J^*(x(T), T) = \frac{1}{4}x^2(T). \label{eq:3.11-21}
\end{equation}

One way to solve the Hamilton-Jacobi-Bellman equation is to guess a form for the solution and verify if it satisfies the differential equation and boundary conditions. Assume the solution has the form:
\begin{equation}
	J^*(x(t), t) = \frac{1}{2} K(t) x^2(t), \label{eq:3.11-22}
\end{equation}
where $K(t)$ represents a scalar function of $t$ to be determined. Note that:
\begin{equation}
	\nabla_x J^*(x(t), t) = K(t) x(t), \label{eq:3.11-23}
\end{equation}
combining with equation \eqref{eq:3.11-19}, we deduce:
\begin{equation}
	u^*(t) = -2K(t)x(t). \label{eq:3.11-24}
\end{equation}
Thus, if we can find a function $K(t)$ satisfying \eqref{eq:3.11-20} and \eqref{eq:3.11-21}, the optimal control law will be a *linear feedback of the state* — in fact, this is the motivation for choosing the assumed solution form \eqref{eq:3.11-22}.

By choosing $K(T) = \frac{1}{2}$, the assumed solution will match the specified boundary condition \eqref{eq:3.11-21}. Substituting \eqref{eq:3.11-23} for $\nabla_x J^*$ and substituting
$$
\frac{\partial J^*}{\partial t}(x(t), t) = \frac{1}{2} \dot{K}(t) x^2(t)
$$
into equation \eqref{eq:3.11-20}, we get:
\begin{equation}
	0 = \frac{1}{2} \dot{K}(t) x^2(t) - K^2(t) x^2(t) + K(t) x^2(t). \label{eq:3.11-25}
\end{equation}
Since this equation must be satisfied for all $x(t)$, we have:
\begin{equation}
	\frac{1}{2} \dot{K}(t) - K^2(t) + K(t) = 0. \label{eq:3.11-26}
\end{equation}
$K(t)$ is a scalar function of $t$; therefore, the solution can be found using separation of variables, yielding:
\begin{equation}
	K(t) = \frac{e^{(T-t)}}{e^{(T-t)} + e^{-(T-t)}}. \label{eq:3.11-27}
\end{equation}

Then, the optimal control law is:
$$\begin{align}
	u^*(t) &= -2\nabla_x J^*(x(t), t) \nonumber \\
	&= -2K(t)x(t). \label{eq:3.11-28}
\end{align}$$

Note that as $T \to \infty$, this linear time-varying feedback approaches a constant feedback ($K(t) \to 1$), and the controlled system:
$$\begin{align}
	\dot{x}(t) &= x(t) - 2x(t) \nonumber \\
	&= -x(t) \label{eq:3.11-29}
\end{align}$$
becomes stable. If this did not occur, the value of the performance measure would approach infinity.

### Solve by the Pontryagin’s maximum principle

$$\begin{align}
	\text{System dynamics:} \quad &\dot{x}(t) = x(t) + u(t) \nonumber \\
	\text{Cost function:} \quad &J = \frac{1}{4}x^2(T) + \int_0^T \frac{1}{4}u^2(t) dt \nonumber
\end{align}$$

By definition, the Hamiltonian function for this problem is:
$$\begin{align}
	H(x, u, p) &= L(x, u) + p(t) f(x, u) \nonumber \\
	&= \frac{1}{4}u^2(t) + p(t)[x(t) + u(t)] \label{eq:pmp_H}
\end{align}$$

According to Pontryagin's maximum principle, the optimal trajectory must satisfy 3 equations:
\begin{equation}
	\frac{\partial H}{\partial u} = 0 \implies \frac{1}{2}u(t) + p(t) = 0 \implies u^*(t) = -2p(t) \label{eq:pmp_u}
\end{equation}
\begin{equation}
	\dot{x}(t) = \frac{\partial H}{\partial p} = x(t) + u(t) = x(t) - 2p(t) \label{eq:pmp_state}
\end{equation}
\begin{equation}
	\dot{p}(t) = -\frac{\partial H}{\partial x} = -p(t) \label{eq:pmp_adjoint}
\end{equation}
At the terminal time $T$, the dual variable $p(T)$ is determined by the derivative of the terminal cost function $\Phi(x(T)) = \frac{1}{4}x^2(T)$:
\begin{equation}
	p(T) = \nabla_x \Phi(x(T)) = \frac{1}{2}x(T) \label{eq:pmp_transversality}
\end{equation}

**Solving the system of equations via the Sweep Method**

From \eqref{eq:pmp_state} and \eqref{eq:pmp_adjoint}, we have a Two-Point Boundary Value Problem. To find the feedback control law, we assume a linear relationship between the dual variable $p(t)$ and the state $x(t)$:
\begin{equation}
	p(t) = K(t)x(t) \label{eq:pmp_riccati_sub}
\end{equation}
Taking the derivative of both sides with respect to time $t$:
\begin{equation}
	\dot{p}(t) = \dot{K}(t)x(t) + K(t)\dot{x}(t) \label{eq:pmp_dp}
\end{equation}

Now, we substitute $\dot{p}(t)$ from \eqref{eq:pmp_adjoint} and $\dot{x}(t)$ from \eqref{eq:pmp_state} into equation \eqref{eq:pmp_dp}:
$$
-p(t) = \dot{K}(t)x(t) + K(t)[x(t) - 2p(t)]
$$
Further substituting $p(t) = K(t)x(t)$ into both sides:
$$
-K(t)x(t) = \dot{K}(t)x(t) + K(t)x(t) - 2K^2(t)x(t)
$$
Since this relation must hold for all state trajectories $x(t) \neq 0$, we can cancel $x(t)$ on both sides:
$$
-K(t) = \dot{K}(t) + K(t) - 2K^2(t)
$$
Rearranging, we obtain the Riccati differential equation for the function $K(t)$:
\begin{equation}
	\frac{1}{2}\dot{K}(t) + K(t) - K^2(t) = 0 \label{eq:pmp_riccati}
\end{equation}

Considering the boundary condition from equation \eqref{eq:pmp_transversality}:
$$
p(T) = K(T)x(T) = \frac{1}{2}x(T) \implies K(T) = \frac{1}{2}
$$

**Conclusion:**

The differential equation \eqref{eq:pmp_riccati} and boundary condition $K(T) = \frac{1}{2}$ yield equation \eqref{eq:3.11-26}, similar to the HJB method.
Optimal control law:
$$
u^*(t) = -2p(t) = -2K(t)x(t)
$$

Therefore, we also have the following relationship:
$$
p(t) = \nabla_x J^*(x, t) = K(t)x(t)
$$


{% endtab %}

{% endtabs %}
