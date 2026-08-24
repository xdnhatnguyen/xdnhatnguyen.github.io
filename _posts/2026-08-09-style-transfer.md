---
layout: post
title: "Project Report: Style Transfer Visualization"
date: 2026-08-09
categories: Deep-Learning
tags: [Style Transfer, Generative Models]
---

## Giới thiệu
Báo cáo này trình bày kết quả thực nghiệm của mô hình Stable Diffusion với bài toán Style Transfer. Mục tiêu của phương pháp là kết hợp nội dung (content) của một bức ảnh với phong cách nghệ thuật (style) của một bức ảnh khác.

Trong đợt thử nghiệm này, ba hình ảnh content (a cat, a can, a dog) được đưa qua mô hình cùng với nhiều phong cách khác nhau (antimonocromatismo, color, cyberpunk, flat, poster, rain princess, starry night), kèm với object prompting. Dưới đây là ma trận kết quả lọc ra những style có độ hội tụ và hiệu ứng thị giác tốt nhất.

Đây là kết quả đầu cho ý tưởng patch-shuffle ảnh ở không gian latent của mô hình nhầm giải quyết hai bài toán: (1) tránh được content leakage bởi ý tưởng patch-shuffle, (2) khắc phục điểm yếu tạo ra grid line của phương pháp nói trên với ảnh ở không gian pixel. 

## Trực quan hóa kết quả

<div style="overflow-x: auto; margin-top: 20px;">
  <table style="border-collapse: collapse; text-align: center; width: 100%; min-width: 800px;">
    <tr>
      <th style="padding: 10px; border: 1px solid #ddd; background-color: rgba(0,0,0,0.05);">Content \ Style</th>
      <th style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/antimonocromatismo.png" alt="antimonocromatismo" style="width:120px; object-fit:cover; border-radius:6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"><br><span style="font-size: 0.85em; font-weight: normal; color: #555;">Antimonocromatismo</span></th>
      <th style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/color.png" alt="color" style="width:120px; object-fit:cover; border-radius:6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"><br><span style="font-size: 0.85em; font-weight: normal; color: #555;">Color</span></th>
      <th style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/cyberpunk.png" alt="cyberpunk" style="width:120px; object-fit:cover; border-radius:6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"><br><span style="font-size: 0.85em; font-weight: normal; color: #555;">Cyberpunk</span></th>
      <th style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/flat.png" alt="flat" style="width:120px; object-fit:cover; border-radius:6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"><br><span style="font-size: 0.85em; font-weight: normal; color: #555;">Flat</span></th>
      <th style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/poster.png" alt="poster" style="width:120px; object-fit:cover; border-radius:6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"><br><span style="font-size: 0.85em; font-weight: normal; color: #555;">Poster</span></th>
      <th style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/rain_princess.png" alt="rain_princess" style="width:120px; object-fit:cover; border-radius:6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"><br><span style="font-size: 0.85em; font-weight: normal; color: #555;">Rain Princess</span></th>
      <th style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/the_starry_night.png" alt="the_starry_night" style="width:120px; object-fit:cover; border-radius:6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"><br><span style="font-size: 0.85em; font-weight: normal; color: #555;">The Starry Night</span></th>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd; background-color: rgba(0,0,0,0.02);"><img src="/assets/img/style_transfer_v1/can.jpg" alt="can" style="width:120px; object-fit:cover; border-radius:6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"><br><b>Can</b></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/antimonocromatismo_can.png" alt="antimonocromatismo_can.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/color_can.png" alt="color_can.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/cyberpunk_can.png" alt="cyberpunk_can.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/flat_can.png" alt="flat_can.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/poster_can.png" alt="poster_can.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/rain_princess_can.png" alt="rain_princess_can.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/the_starry_night_can.png" alt="the_starry_night_can.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd; background-color: rgba(0,0,0,0.02);"><img src="/assets/img/style_transfer_v1/cat.jpg" alt="cat" style="width:120px; object-fit:cover; border-radius:6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"><br><b>Cat</b></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/antimonocromatismo_cat.png" alt="antimonocromatismo_cat.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/color_cat.png" alt="color_cat.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/cyberpunk_cat.png" alt="cyberpunk_cat.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/flat_cat.png" alt="flat_cat.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/poster_cat.png" alt="poster_cat.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/rain_princess_cat.png" alt="rain_princess_cat.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/the_starry_night_cat.png" alt="the_starry_night_cat.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd; background-color: rgba(0,0,0,0.02);"><img src="/assets/img/style_transfer_v1/dog.jpg" alt="dog" style="width:120px; object-fit:cover; border-radius:6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"><br><b>Dog</b></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/antimonocromatismo_dog.png" alt="antimonocromatismo_dog.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/color_dog.png" alt="color_dog.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/cyberpunk_dog.png" alt="cyberpunk_dog.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/flat_dog.png" alt="flat_dog.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/poster_dog.png" alt="poster_dog.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/rain_princess_dog.png" alt="rain_princess_dog.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><img src="/assets/img/style_transfer_v1/the_starry_night_dog.png" alt="the_starry_night_dog.png" style="width:120px; object-fit:cover; border-radius:6px; transition: transform 0.2s;" loading="lazy" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></td>
    </tr>
  </table>
</div>

## Đánh giá
* Các style mang tính mảng khối rõ ràng (Flat, Poster) hoặc có texture mạnh (Starry Night, Rain Princess) cho ra kết quả bám sát cấu trúc của ảnh gốc mà vẫn thể hiện được đặc trưng nghệ thuật.
* Nhưng nhìn chung vẫn chưa thể hiện được các phong cách khó hơn về mảng khối và độ chi tiết. 

