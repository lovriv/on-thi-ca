/* Kho câu hỏi: TOÁN — Year 9 (Maths Progress International, Pearson KS3) */
/* Units 1-6. Đề luyện thi Chuyên Anh Đề Án lớp 10 (Sở GD TP.HCM). */
/* Field exam: true = topic xuất hiện trong đề thật 2025-2026 (Units 1,2,3,5). */
/*             false = topic không nằm trong pattern đề (Units 4,6). */
window.QBANK = window.QBANK || [];

/* ============ UNIT 1 — Significant figures & standard form ============ */
window.QBANK.push(
{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Significant figures", year:9, exam:true,
  q:`What is the number 47.368, rounded to 4 significant figures?`,
  a:`47.37`,
  e:`Significant figure thứ 5 là chữ số 8 (≥ 5) → làm tròn lên. Em đếm 4 chữ số đầu: 4, 7, 3, 6 → chữ số thứ 5 là 8 nên 6 tăng lên 7. Kết quả: 47.37. Nhớ là số 0 ở đầu KHÔNG tính là significant figure.` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Significant figures", year:9, exam:true,
  q:`What is the number 0.00662, rounded to 1 significant figure?`,
  a:`0.007`,
  e:`Với số nhỏ hơn 1, các số 0 ở đầu chỉ là "chỗ trống" không tính. Significant figure đầu tiên là 6. Chữ số tiếp theo là 6 (≥ 5) → làm tròn lên thành 7. Kết quả: 0.007. Great job nếu em nhớ bỏ qua các số 0 dẫn đầu!` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Significant figures", year:9, exam:true,
  q:`What is the number 579452, rounded to 2 significant figures?`,
  a:`580000`,
  e:`Hai significant figures đầu là 5 và 7. Chữ số thứ 3 là 9 (≥ 5) → 7 tăng lên 8. Các chữ số còn lại đổi thành 0 để giữ giá trị place value. Kết quả: 580000.` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Rounding", year:9, exam:true,
  q:`What is the following number, rounded to the nearest thousandth (3 decimal places)? 6.74829`,
  a:`6.748`,
  e:`Thousandth = vị trí thứ 3 sau dấu phẩy. Số 6.748|29 — chữ số ngay sau vị trí thứ 3 là 2 (< 5) → giữ nguyên. Kết quả: 6.748.` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Estimating", year:9, exam:true,
  q:`Estimate the value of 37 × 492 by rounding each number to 1 significant figure.`,
  a:`20000`,
  e:`Làm tròn mỗi số về 1 s.f.: 37 → 40, 492 → 500. Rồi nhân: 40 × 500 = 20000. Estimate giúp em kiểm tra nhanh đáp án máy tính có hợp lý không.` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Estimating", year:9, exam:true,
  q:`Estimate the value of 6230 × 26 by rounding each number to 1 significant figure.`,
  a:`180000`,
  e:`6230 → 6000, 26 → 30. Nhân: 6000 × 30 = 180000. (Đáp án chính xác là 161980, nên estimate khá gần — good check!)` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Index laws", year:9, exam:true,
  q:`Simplify and write 3⁵ × 3⁴ as a single power of 3.`,
  a:`3⁹`,
  e:`Quy tắc nhân lũy thừa cùng cơ số: cộng số mũ (add the indices). 3⁵ × 3⁴ = 3⁵⁺⁴ = 3⁹.` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Index laws", year:9, exam:true,
  q:`Simplify and write 7¹² ÷ 7⁵ as a single power of 7.`,
  a:`7⁷`,
  e:`Quy tắc chia lũy thừa cùng cơ số: trừ số mũ (subtract the indices). 7¹² ÷ 7⁵ = 7¹²⁻⁵ = 7⁷.` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Index laws", year:9, exam:true,
  q:`Simplify and write (2⁴)³ as a single power of 2.`,
  a:`2¹²`,
  e:`Lũy thừa của một lũy thừa (power of a power): nhân các số mũ. (2⁴)³ = 2⁴ˣ³ = 2¹².` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Negative indices", year:9, exam:true,
  q:`Write 10⁻³ as an ordinary decimal number.`,
  a:`0.001`,
  e:`Số mũ âm nghĩa là nghịch đảo (reciprocal): 10⁻³ = 1 ÷ 10³ = 1 ÷ 1000 = 0.001.` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Negative indices", year:9, exam:true,
  q:`What is the value of 5⁻², written as a fraction?`,
  a:`1/25`,
  e:`5⁻² = 1 ÷ 5² = 1 ÷ 25 = 1/25. Số mũ âm = lấy nghịch đảo rồi mới mũ dương.` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Zero index", year:9, exam:true,
  q:`What is the value of 8⁰?`,
  a:`1`,
  e:`Bất kỳ số nào (khác 0) mũ 0 đều bằng 1. Vậy 8⁰ = 1. Quy tắc nhỏ nhưng hay quên!` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Powers of fractions", year:9, exam:true,
  q:`What is the value of (2/3)³, written as a fraction?`,
  a:`8/27`,
  e:`Khi mũ một phân số, mũ cả tử và mẫu: (2/3)³ = 2³/3³ = 8/27.` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Standard form", year:9, exam:true,
  q:`Write the number 23500 in standard form.`,
  a:`2.35 × 10⁴`,
  e:`Standard form là A × 10ⁿ với 1 ≤ A < 10. Dời dấu phẩy về sau chữ số 2: 2.35. Đã dời 4 chỗ → mũ là 4. Kết quả: 2.35 × 10⁴.` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Standard form", year:9, exam:true,
  q:`Write the number 0.00035 in standard form.`,
  a:`3.5 × 10⁻⁴`,
  e:`Số nhỏ hơn 1 → mũ âm. Dời dấu phẩy đến sau chữ số 3: 3.5. Đã dời 4 chỗ sang phải → mũ là −4. Kết quả: 3.5 × 10⁻⁴.` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Standard form", year:9, exam:true,
  q:`Write the number 5.4 × 10⁵ as an ordinary number.`,
  a:`540000`,
  e:`Nhân 5.4 với 10⁵ = 100000. 5.4 × 100000 = 540000. Cách nhanh: dời dấu phẩy 5 chỗ sang phải.` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Standard form", year:9, exam:true,
  q:`Write the number 7 × 10⁻³ as an ordinary decimal number.`,
  a:`0.007`,
  e:`10⁻³ = 0.001. Vậy 7 × 0.001 = 0.007. Mũ âm → số rất nhỏ.` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Standard form", year:9, exam:true,
  q:`The number 27 × 10⁵ is not written correctly in standard form. Rewrite it correctly in standard form.`,
  a:`2.7 × 10⁶`,
  e:`Trong standard form A × 10ⁿ, phần A phải thỏa 1 ≤ A < 10, nhưng 27 lớn hơn 10. Viết lại 27 = 2.7 × 10¹, nên 27 × 10⁵ = 2.7 × 10¹ × 10⁵ = 2.7 × 10⁶.` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Calculating with standard form", year:9, exam:true,
  q:`Work out (2.7 × 10³) × (4 × 10²). Give your answer in standard form.`,
  a:`1.08 × 10⁶`,
  e:`Nhân phần số: 2.7 × 4 = 10.8. Nhân phần lũy thừa: 10³ × 10² = 10⁵. Được 10.8 × 10⁵. Vì 10.8 ≥ 10 nên viết lại: 1.08 × 10¹ × 10⁵ = 1.08 × 10⁶.` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Calculating with standard form", year:9, exam:true,
  q:`Work out (6 × 10⁸) ÷ (3 × 10²). Give your answer in standard form.`,
  a:`2 × 10⁶`,
  e:`Chia phần số: 6 ÷ 3 = 2. Chia phần lũy thừa: 10⁸ ÷ 10² = 10⁶. Kết quả: 2 × 10⁶.` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Calculating with standard form", year:9, exam:true,
  q:`The distance from the Earth to the Sun is about 1.5 × 10⁸ km. Light travels at 3 × 10⁵ km/s. How long does light take to travel from the Sun to the Earth? Give your answer in seconds.`,
  a:`500 seconds`,
  e:`Thời gian = quãng đường ÷ tốc độ = (1.5 × 10⁸) ÷ (3 × 10⁵). Phần số: 1.5 ÷ 3 = 0.5. Phần lũy thừa: 10⁸ ÷ 10⁵ = 10³. Được 0.5 × 10³ = 500 giây (khoảng 8 phút 20 giây).` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Word problem", year:9, exam:true,
  q:`A football stadium in Hồ Chí Minh City seats 42785 people. The average ticket price is VND 180,000. Estimate the total ticket money for one full match by rounding each number to 1 significant figure.`,
  a:`VND 8,000,000,000`,
  e:`Làm tròn: 42785 → 40000; 180000 → 200000. Nhân: 40000 × 200000 = 8 000 000 000 VND (8 tỷ đồng). Estimate giúp em kiểm tra nhanh con số có hợp lý không.` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Word problem", year:9, exam:true,
  q:`Lan measures the mass of a virus as 0.0000000042 g. Write this mass in standard form.`,
  a:`4.2 × 10⁻⁹ g`,
  e:`Dời dấu phẩy đến sau chữ số 4: được 4.2. Đếm số chỗ dời sang phải: 9 chỗ. Vì số rất nhỏ → mũ âm. Kết quả: 4.2 × 10⁻⁹ g.` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Word problem", year:9, exam:true,
  q:`A computer hard drive belonging to Minh holds 2 × 10¹² bytes. One photo is about 4 × 10⁶ bytes. How many photos can the drive hold? Give your answer in standard form.`,
  a:`5 × 10⁵ photos`,
  e:`Số ảnh = dung lượng ÷ cỡ một ảnh = (2 × 10¹²) ÷ (4 × 10⁶). Phần số: 2 ÷ 4 = 0.5. Phần lũy thừa: 10¹² ÷ 10⁶ = 10⁶. Được 0.5 × 10⁶ = 5 × 10⁵ ảnh (tức 500000 ảnh).` },

{ s:"Math", topic:"Unit 1 — Significant figures & standard form", sub:"Rounding", year:9, exam:true,
  q:`Mai rounds a whole number to 2 significant figures and gets 670. What is the largest whole number she could have started with?`,
  a:`674`,
  e:`Để làm tròn 2 s.f. cho ra 670, số gốc phải nằm trong khoảng 665 đến 674 (vì 675 sẽ làm tròn thành 680). Số nguyên lớn nhất là 674.` }
);

/* ============ UNIT 2 — 2D shapes & 3D solids ============ */
window.QBANK.push(
{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Circumference", year:9, exam:true,
  q:`A circle has a diameter of 14 cm. What is its circumference? Use π ≈ 3.14 and give your answer to 1 decimal place.`,
  a:`44.0 cm`,
  e:`Công thức chu vi: C = π × d. C = 3.14 × 14 = 43.96 cm ≈ 44.0 cm. Nhớ: circumference dùng đường kính (diameter), không phải bán kính.` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Circumference", year:9, exam:true,
  q:`A circle has a radius of 5 cm. What is its circumference, in terms of π?`,
  a:`10π cm`,
  e:`C = 2 × π × r = 2 × π × 5 = 10π cm. "In terms of π" nghĩa là giữ nguyên ký hiệu π trong đáp án, không cần nhân ra số thập phân.` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Area of circle", year:9, exam:true,
  q:`A circle has a radius of 6 cm. What is its area? Use π ≈ 3.14 and give your answer to 1 decimal place.`,
  a:`113.0 cm²`,
  e:`Công thức diện tích: A = π × r². A = 3.14 × 6² = 3.14 × 36 = 113.04 ≈ 113.0 cm². Nhớ bình phương bán kính TRƯỚC khi nhân với π.` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Area of circle", year:9, exam:true,
  q:`A circle has a radius of 7 cm. What is its area, in terms of π?`,
  a:`49π cm²`,
  e:`A = π × r² = π × 7² = 49π cm². Để dạng "in terms of π" cho đáp án chính xác tuyệt đối.` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Area of circle", year:9, exam:true,
  q:`A circle has a diameter of 20 cm. What is its area? Use π ≈ 3.14 and give your answer in cm².`,
  a:`314 cm²`,
  e:`Đường kính 20 cm → bán kính = 20 ÷ 2 = 10 cm. A = π × r² = 3.14 × 10² = 3.14 × 100 = 314 cm². Cẩn thận: phải đổi diameter sang radius trước!` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Volume of prism", year:9, exam:true,
  q:`A box-shaped (cuboid) container has length 45 cm, width 30 cm and height 20 cm. Calculate its volume. Give your answer in cm³.`,
  a:`27000 cm³`,
  e:`Thể tích hình hộp chữ nhật = dài × rộng × cao = 45 × 30 × 20 = 27000 cm³.` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Volume of prism", year:9, exam:true,
  q:`A triangular prism has a cross-section that is a triangle of area 12 cm². The length of the prism is 8 cm. Calculate its volume. Give your answer in cm³.`,
  a:`96 cm³`,
  e:`Thể tích lăng trụ = diện tích mặt cắt ngang (cross-section) × chiều dài = 12 × 8 = 96 cm³.` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Volume of prism", year:9, exam:true,
  q:`A triangular prism has a right-angled triangle cross-section with the two shorter sides 6 cm and 5 cm. The prism is 10 cm long. Calculate its volume. Give your answer in cm³.`,
  a:`150 cm³`,
  e:`Diện tích tam giác vuông = ½ × 6 × 5 = 15 cm². Thể tích = diện tích mặt cắt × chiều dài = 15 × 10 = 150 cm³.` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Surface area", year:9, exam:true,
  q:`A cube has edges of length 4 cm. Calculate its total surface area. Give your answer in cm².`,
  a:`96 cm²`,
  e:`Hình lập phương có 6 mặt vuông bằng nhau. Diện tích một mặt = 4 × 4 = 16 cm². Tổng = 6 × 16 = 96 cm².` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Surface area", year:9, exam:true,
  q:`A cuboid has dimensions 5 cm by 3 cm by 2 cm. Calculate its total surface area. Give your answer in cm².`,
  a:`62 cm²`,
  e:`Hình hộp có 3 cặp mặt. Diện tích = 2(5×3) + 2(5×2) + 2(3×2) = 2(15) + 2(10) + 2(6) = 30 + 20 + 12 = 62 cm².` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Cylinder", year:9, exam:true,
  q:`A cylinder has a radius of 3 cm and a height of 10 cm. Calculate its volume. Use π ≈ 3.14 and give your answer in cm³.`,
  a:`282.6 cm³`,
  e:`Thể tích hình trụ: V = π × r² × h = 3.14 × 3² × 10 = 3.14 × 9 × 10 = 282.6 cm³.` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Cylinder", year:9, exam:true,
  q:`A cylinder has a diameter of 1.4 m and a height of 2.5 m. Calculate its volume. Give your answer in m³, rounded to 2 decimal places. Use π ≈ 3.14.`,
  a:`3.85 m³`,
  e:`Đường kính 1.4 m → bán kính = 0.7 m. V = π × r² × h = 3.14 × 0.7² × 2.5 = 3.14 × 0.49 × 2.5 = 3.8465 ≈ 3.85 m³.` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Pythagoras", year:9, exam:true,
  q:`A right-angled triangle has two shorter sides of 3 cm and 4 cm. What is the length of the hypotenuse? Give your answer in cm.`,
  a:`5 cm`,
  e:`Định lý Pythagoras: c² = a² + b². c² = 3² + 4² = 9 + 16 = 25. c = √25 = 5 cm. Đây là bộ ba số Pythagoras nổi tiếng (3, 4, 5).` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Pythagoras", year:9, exam:true,
  q:`A right-angled triangle has two shorter sides of 5 cm and 12 cm. What is the length of the hypotenuse? Give your answer in cm.`,
  a:`13 cm`,
  e:`c² = 5² + 12² = 25 + 144 = 169. c = √169 = 13 cm. Bộ ba (5, 12, 13) cũng là một bộ ba Pythagoras đẹp.` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Pythagoras", year:9, exam:true,
  q:`A right-angled triangle has a hypotenuse of 10 cm and one shorter side of 8 cm. What is the length of the other shorter side? Give your answer in cm.`,
  a:`6 cm`,
  e:`Khi tìm cạnh ngắn, ta TRỪ: a² = c² − b² = 10² − 8² = 100 − 64 = 36. a = √36 = 6 cm.` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Pythagoras", year:9, exam:true,
  q:`A right-angled triangle has two shorter sides of 6 cm and 8 cm. What is the length of the hypotenuse? Give your answer in cm.`,
  a:`10 cm`,
  e:`c² = 6² + 8² = 36 + 64 = 100. c = √100 = 10 cm. Đây cũng là bộ ba (6, 8, 10) — gấp đôi của (3, 4, 5).` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Naming 3D solids", year:9, exam:true,
  q:`What name is given to a three-dimensional shape with 6 rectangular faces, 12 edges and 8 vertices?`,
  a:`Cuboid`,
  e:`Đó là cuboid (hình hộp chữ nhật). Faces = mặt, edges = cạnh, vertices = đỉnh. Nếu cả 6 mặt là hình vuông thì gọi là cube.` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Parts of a circle", year:9, exam:true,
  q:`In a circle, what name is given to a straight line that joins two points on the circumference but does NOT pass through the centre?`,
  a:`Chord`,
  e:`Đó là chord (dây cung). Nếu đường thẳng đi QUA tâm thì gọi là diameter (đường kính).` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Parts of a circle", year:9, exam:true,
  q:`What name is given to part of the circumference of a circle (a curved section of its edge)?`,
  a:`Arc`,
  e:`Đó là arc (cung tròn). Phần "miếng bánh" giới hạn bởi hai bán kính và một cung gọi là sector (hình quạt).` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Semicircle", year:9, exam:true,
  q:`A semicircle has a radius of 6 cm. What is its area, in terms of π?`,
  a:`18π cm²`,
  e:`Diện tích hình tròn đầy đủ = π × r² = π × 36 = 36π. Semicircle (nửa hình tròn) = một nửa: 36π ÷ 2 = 18π cm².` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Word problem", year:9, exam:true,
  q:`Minh is designing a cylindrical water tank for his rooftop garden in Gò Vấp. The tank has a diameter of 2 m and a height of 3 m. What volume of water can it hold when full? Use π ≈ 3.14 and give your answer in m³.`,
  a:`9.42 m³`,
  e:`Đường kính 2 m → bán kính = 1 m. V = π × r² × h = 3.14 × 1² × 3 = 9.42 m³. Đó là 9420 lít nước.` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Word problem", year:9, exam:true,
  q:`Lan wants to fence a circular flower bed of radius 4 m. Fencing wire costs VND 25,000 per metre. How much will the wire cost to go once around the bed? Use π ≈ 3.14.`,
  a:`VND 628,000`,
  e:`Cần biết chu vi: C = 2 × π × r = 2 × 3.14 × 4 = 25.12 m. Chi phí = 25.12 × 25000 = 628000 VND.` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Word problem", year:9, exam:true,
  q:`Cường leans a 13 m ladder against a wall. The foot of the ladder is 5 m from the wall. How high up the wall does the ladder reach? Give your answer in m.`,
  a:`12 m`,
  e:`Thang là cạnh huyền (hypotenuse) của tam giác vuông. Chiều cao = √(13² − 5²) = √(169 − 25) = √144 = 12 m.` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Word problem", year:9, exam:true,
  q:`Mai's bicycle wheel has a radius of 35 cm. How far does the bicycle travel in one full turn of the wheel? Use π ≈ 3.14 and give your answer in cm.`,
  a:`219.8 cm`,
  e:`Một vòng quay = chu vi bánh xe. C = 2 × π × r = 2 × 3.14 × 35 = 219.8 cm (khoảng 2.2 m mỗi vòng).` },

{ s:"Math", topic:"Unit 2 — 2D shapes & 3D solids", sub:"Word problem", year:9, exam:true,
  q:`A rectangle has length 8 cm and width 5 cm. Both dimensions are increased by 50%. What is the new area of the rectangle? Give your answer in cm².`,
  a:`90 cm²`,
  e:`Tăng 50%: chiều dài mới = 8 × 1.5 = 12 cm; chiều rộng mới = 5 × 1.5 = 7.5 cm. Diện tích mới = 12 × 7.5 = 90 cm². (Diện tích cũ chỉ 40 cm² — tăng hơn gấp đôi!)` }
);

/* ============ UNIT 3 — Quadratics ============ */
window.QBANK.push(
{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Sequences", year:9, exam:true,
  q:`What are the first three terms of the sequence with nth term 3n + 2?`,
  a:`5, 8, 11`,
  e:`Thay n = 1, 2, 3 vào 3n + 2: n=1 → 3+2 = 5; n=2 → 6+2 = 8; n=3 → 9+2 = 11. Vậy dãy là 5, 8, 11.` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Sequences", year:9, exam:true,
  q:`What is the nth term of the arithmetic sequence 5, 10, 15, 20, ... ?`,
  a:`5n`,
  e:`Common difference (hiệu chung) = 5. nth term có dạng 5n + c. Với n=1 phải ra 5 → 5(1) + c = 5 → c = 0. Vậy nth term = 5n.` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Sequences", year:9, exam:true,
  q:`What is the nth term of the arithmetic sequence 2, 5, 8, 11, ... ?`,
  a:`3n − 1`,
  e:`Common difference = 3 → nth term dạng 3n + c. Với n=1: 3(1) + c = 2 → c = −1. Vậy nth term = 3n − 1.` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Quadratic sequences", year:9, exam:true,
  q:`What are the first three terms of the quadratic sequence with nth term T(n) = 2n² + 4?`,
  a:`6, 12, 22`,
  e:`Thay n = 1, 2, 3: T(1) = 2(1)² + 4 = 6; T(2) = 2(4) + 4 = 12; T(3) = 2(9) + 4 = 22. Dãy bậc hai (có n²) không tăng đều.` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Geometric sequences", year:9, exam:true,
  q:`A geometric sequence starts 2, 6, 18, ... What is the next term?`,
  a:`54`,
  e:`Common ratio (tỉ số chung) = 6 ÷ 2 = 3. Số tiếp theo = 18 × 3 = 54. Dãy nhân (geometric) thì nhân với cùng một số.` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Geometric sequences", year:9, exam:true,
  q:`What is the common ratio of the geometric sequence 100, 10, 1, 0.1, ... ?`,
  a:`0.1`,
  e:`Tỉ số chung = số sau ÷ số trước = 10 ÷ 100 = 0.1 (hay 1/10). Dãy giảm dần nên tỉ số là phân số nhỏ hơn 1.` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Expanding", year:9, exam:true,
  q:`Expand and simplify the expression: (x + 3)(x + 2)`,
  a:`x² + 5x + 6`,
  e:`Nhân từng cặp (dùng FOIL): x·x + x·2 + 3·x + 3·2 = x² + 2x + 3x + 6 = x² + 5x + 6.` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Expanding", year:9, exam:true,
  q:`Expand and simplify the expression: (x − 4)(x + 6)`,
  a:`x² + 2x − 24`,
  e:`x·x + x·6 + (−4)·x + (−4)·6 = x² + 6x − 4x − 24 = x² + 2x − 24. Cẩn thận dấu âm khi nhân!` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Expanding", year:9, exam:true,
  q:`Expand and simplify the expression: (3x − 2)(2x + 5)`,
  a:`6x² + 11x − 10`,
  e:`3x·2x + 3x·5 + (−2)·2x + (−2)·5 = 6x² + 15x − 4x − 10 = 6x² + 11x − 10.` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Expanding", year:9, exam:true,
  q:`Expand and simplify the expression: (2x − 3)(x + 5)`,
  a:`2x² + 7x − 15`,
  e:`2x·x + 2x·5 + (−3)·x + (−3)·5 = 2x² + 10x − 3x − 15 = 2x² + 7x − 15.` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Expanding (square)", year:9, exam:true,
  q:`Expand and simplify the expression: (x + 5)²`,
  a:`x² + 10x + 25`,
  e:`(x + 5)² nghĩa là (x + 5)(x + 5). Kết quả = x² + 5x + 5x + 25 = x² + 10x + 25. Quy tắc nhanh: (x + a)² = x² + 2ax + a².` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Expanding (square)", year:9, exam:true,
  q:`Expand and simplify the expression: (2x + 1)²`,
  a:`4x² + 4x + 1`,
  e:`(2x + 1)(2x + 1) = 4x² + 2x + 2x + 1 = 4x² + 4x + 1.` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Difference of two squares", year:9, exam:true,
  q:`Expand and simplify the expression: (x + 7)(x − 7)`,
  a:`x² − 49`,
  e:`Đây là "difference of two squares" (hiệu hai bình phương): (x + a)(x − a) = x² − a². Vậy (x + 7)(x − 7) = x² − 49. Các số hạng ở giữa triệt tiêu nhau.` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Factorising", year:9, exam:true,
  q:`Fully factorise the following expression: x² + 7x + 10`,
  a:`(x + 5)(x + 2)`,
  e:`Tìm hai số NHÂN ra 10 và CỘNG ra 7. Đó là 5 và 2 (5×2=10, 5+2=7). Vậy x² + 7x + 10 = (x + 5)(x + 2).` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Factorising", year:9, exam:true,
  q:`Fully factorise the following expression: x² + 9x + 18`,
  a:`(x + 3)(x + 6)`,
  e:`Hai số nhân ra 18 và cộng ra 9: đó là 3 và 6. Vậy x² + 9x + 18 = (x + 3)(x + 6).` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Factorising", year:9, exam:true,
  q:`Fully factorise the following expression: x² − 7x + 12`,
  a:`(x − 3)(x − 4)`,
  e:`Cần nhân ra +12 và cộng ra −7 → cả hai số đều âm: −3 và −4 ((−3)×(−4)=12, (−3)+(−4)=−7). Vậy = (x − 3)(x − 4).` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Factorising", year:9, exam:true,
  q:`Fully factorise the following expression: x² − 7x − 18`,
  a:`(x − 9)(x + 2)`,
  e:`Cần nhân ra −18 (một dương, một âm) và cộng ra −7. Đó là −9 và +2 ((−9)×2=−18, −9+2=−7). Vậy = (x − 9)(x + 2).` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Factorising", year:9, exam:true,
  q:`Fully factorise the following expression: x² − 12x − 28`,
  a:`(x − 14)(x + 2)`,
  e:`Cần nhân ra −28 và cộng ra −12. Đó là −14 và +2 ((−14)×2=−28, −14+2=−12). Vậy = (x − 14)(x + 2).` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Factorising", year:9, exam:true,
  q:`Fully factorise the following expression: x² + 4x − 12`,
  a:`(x + 6)(x − 2)`,
  e:`Cần nhân ra −12 và cộng ra +4. Đó là +6 và −2 (6×(−2)=−12, 6+(−2)=4). Vậy = (x + 6)(x − 2).` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Factorising (DOTS)", year:9, exam:true,
  q:`Fully factorise the following expression: x² − 25`,
  a:`(x + 5)(x − 5)`,
  e:`Đây là hiệu hai bình phương: x² − 25 = x² − 5² = (x + 5)(x − 5). Dạng a² − b² = (a + b)(a − b).` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Solving quadratics", year:9, exam:true,
  q:`Solve the equation x² + 9 = 90. Give both the positive and negative solutions.`,
  a:`x = 9 or x = −9`,
  e:`x² + 9 = 90 → x² = 81 → x = √81 = ±9. Một số bình phương luôn có hai căn: dương và âm. Vậy x = 9 hoặc x = −9.` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Solving quadratics", year:9, exam:true,
  q:`Solve the equation x² + 6x + 8 = 0 by factorising.`,
  a:`x = −2 or x = −4`,
  e:`Phân tích: x² + 6x + 8 = (x + 2)(x + 4) = 0. Một tích bằng 0 khi một thừa số bằng 0: x + 2 = 0 → x = −2, hoặc x + 4 = 0 → x = −4.` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Solving quadratics", year:9, exam:true,
  q:`Solve the equation x² + 6x = 27 by factorising.`,
  a:`x = 3 or x = −9`,
  e:`Đưa về dạng bằng 0: x² + 6x − 27 = 0. Phân tích: (x − 3)(x + 9) = 0. Vậy x = 3 hoặc x = −9.` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Word problem", year:9, exam:true,
  q:`The length of a rectangular garden is 4 m more than its width. The area is 96 m². What is the width of the garden? Give your answer in m.`,
  a:`8 m`,
  e:`Gọi chiều rộng = w. Chiều dài = w + 4. Diện tích: w(w + 4) = 96 → w² + 4w − 96 = 0 → (w + 12)(w − 8) = 0 → w = 8 hoặc w = −12. Chiều rộng không thể âm → w = 8 m.` },

{ s:"Math", topic:"Unit 3 — Quadratics", sub:"Word problem", year:9, exam:true,
  q:`Bình is 2 years older than his sister Mai. The product of their ages is 99. How old is Mai?`,
  a:`9 years old`,
  e:`Gọi tuổi Mai = x. Tuổi Bình = x + 2. Tích tuổi: x(x + 2) = 99 → x² + 2x − 99 = 0 → (x + 11)(x − 9) = 0 → x = 9 hoặc x = −11. Tuổi không âm → Mai 9 tuổi (Bình 11 tuổi).` }
);

/* ============ UNIT 4 — Constructions ============ */
window.QBANK.push(
{ s:"Math", topic:"Unit 4 — Constructions", sub:"Vocabulary", year:9, exam:false,
  q:`In constructions, what is meant by the word "bisect"?`,
  a:`To cut exactly in half`,
  e:`"Bisect" nghĩa là chia (một đoạn thẳng hoặc một góc) thành hai phần bằng nhau. Ví dụ: angle bisector chia một góc thành hai góc bằng nhau.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Vocabulary", year:9, exam:false,
  q:`What name is given to the line that cuts a line segment exactly in half and crosses it at 90°?`,
  a:`Perpendicular bisector`,
  e:`Đó là perpendicular bisector (đường trung trực). "Perpendicular" = vuông góc (90°), "bisector" = chia đôi. Mọi điểm trên đường này cách đều hai đầu mút.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Vocabulary", year:9, exam:false,
  q:`In geometry, what is meant by the word "perpendicular"?`,
  a:`At right angles (90°)`,
  e:`"Perpendicular" nghĩa là vuông góc — hai đường thẳng cắt nhau tạo thành góc 90°.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Vocabulary", year:9, exam:false,
  q:`In a construction, what name is given to a curved line drawn with compasses?`,
  a:`An arc`,
  e:`"Arc" là một đoạn cung tròn vẽ bằng compa (compasses). Trong dựng hình, các arc giao nhau giúp xác định điểm chính xác.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Tools", year:9, exam:false,
  q:`Which two instruments are used to construct an accurate triangle from three side lengths, without measuring any angles?`,
  a:`A ruler and a pair of compasses`,
  e:`Dùng ruler (thước) để vẽ đoạn thẳng và compasses (compa) để vẽ các arc. Giao của các arc cho đỉnh thứ ba của tam giác.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Angle bisector", year:9, exam:false,
  q:`An angle bisector divides a 70° angle into two equal angles. What is the size of each smaller angle?`,
  a:`35°`,
  e:`Angle bisector chia góc làm đôi: 70° ÷ 2 = 35°. Mỗi góc nhỏ là 35°.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Angle bisector", year:9, exam:false,
  q:`An angle bisector divides an angle into two equal parts, each measuring 24°. What was the size of the original angle?`,
  a:`48°`,
  e:`Hai góc bằng nhau 24° ghép lại tạo góc gốc: 24° × 2 = 48°.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Constructing angles", year:9, exam:false,
  q:`Which angle can be constructed exactly using only a ruler and compasses, by drawing an equilateral triangle?`,
  a:`60°`,
  e:`Tam giác đều có cả ba góc bằng 60°. Vì vậy dựng một tam giác đều bằng compa và thước cho ta một góc 60° chính xác — không cần thước đo độ (protractor).` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Constructing angles", year:9, exam:false,
  q:`A 60° angle is bisected with a ruler and compasses. What is the size of each new angle?`,
  a:`30°`,
  e:`A 30° angle is built by first constructing a 60° angle (from an equilateral triangle), then using an angle bisector to cut it exactly in half: 60° ÷ 2 = 30°. The bisector splits any angle into two equal parts, so bisecting 60° always gives 30°. — Góc 30° được dựng bằng cách dựng góc 60° (từ tam giác đều) rồi dùng angle bisector chia đôi: 60° ÷ 2 = 30°. Đường phân giác (bisector) chia một góc thành hai phần bằng nhau, nên chia đôi 60° luôn cho 30°.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Constructing angles", year:9, exam:false,
  q:`A right angle is bisected with a ruler and compasses. What is the size of each new angle?`,
  a:`45°`,
  e:`A 45° angle is built by first constructing a 90° angle (a perpendicular line), then using an angle bisector to cut it exactly in half: 90° ÷ 2 = 45°. The bisector splits any angle into two equal parts, so bisecting a right angle always gives 45°. — Góc 45° được dựng bằng cách dựng góc vuông 90° (perpendicular line) rồi dùng angle bisector chia đôi: 90° ÷ 2 = 45°. Đường phân giác chia một góc thành hai phần bằng nhau, nên chia đôi góc vuông luôn cho 45°.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Nets", year:9, exam:false,
  q:`What name is given to a flat 2D shape that folds up to make a 3D solid?`,
  a:`A net`,
  e:`"Net" là hình phẳng 2D — khi gấp lại theo các cạnh sẽ tạo thành hình khối 3D. Designer đóng gói dùng net để tạo hộp.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Nets", year:9, exam:false,
  q:`How many square faces are there in the net of a cube?`,
  a:`6`,
  e:`Hình lập phương (cube) có 6 mặt vuông, nên net của nó gồm 6 hình vuông.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Nets", year:9, exam:false,
  q:`A triangular prism is made from a net. How many rectangular faces does the net contain?`,
  a:`3`,
  e:`Lăng trụ tam giác có 2 mặt tam giác (hai đầu) và 3 mặt chữ nhật (các mặt bên). Vậy net có 3 hình chữ nhật.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Equilateral triangle", year:9, exam:false,
  q:`An equilateral triangle is constructed with sides of 7.5 cm. What is the size of each interior angle?`,
  a:`60°`,
  e:`Tam giác đều luôn có ba góc bằng nhau. Tổng ba góc trong tam giác là 180°, nên mỗi góc = 180° ÷ 3 = 60°.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Triangle inequality", year:9, exam:false,
  q:`A triangle is said to have sides 3 cm, 4 cm and 10 cm. What is the sum of the two shorter sides?`,
  a:`7 cm`,
  e:`The two shorter sides add to 3 + 4 = 7 cm. The triangle inequality rule says the sum of the two shorter sides must be GREATER than the longest side. Here 7 cm is less than 10 cm, so the two compass arcs never meet and the triangle cannot be constructed. — Hai cạnh ngắn cộng lại: 3 + 4 = 7 cm. Quy tắc tam giác (triangle inequality): tổng hai cạnh ngắn phải LỚN HƠN cạnh dài nhất. Ở đây 7 cm nhỏ hơn 10 cm → hai arc của compa sẽ không giao nhau, không dựng được tam giác.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Triangle inequality", year:9, exam:false,
  q:`A triangle has sides 6 cm, 8 cm and 9 cm. By adding the two shorter sides, show that this triangle can be constructed.`,
  a:`6 + 8 = 14, which is greater than 9`,
  e:`Quy tắc tam giác: tổng hai cạnh ngắn phải lớn hơn cạnh dài nhất. Kiểm tra: 6 + 8 = 14 > 9 (cạnh dài nhất) → thỏa quy tắc, nên dựng được tam giác.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Perpendicular bisector property", year:9, exam:false,
  q:`Point P lies on the perpendicular bisector of line segment AB. P is 6 cm from A. How far is P from B?`,
  a:`6 cm`,
  e:`Một tính chất quan trọng: mọi điểm trên perpendicular bisector cách đều hai đầu mút. Vậy nếu P cách A 6 cm thì P cũng cách B 6 cm.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Scale drawing", year:9, exam:false,
  q:`In a scale drawing, 1 cm represents 4 m. What real-life length does a 3 cm line represent?`,
  a:`12 m`,
  e:`Mỗi 1 cm = 4 m. Vậy 3 cm = 3 × 4 = 12 m ngoài thực tế.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Scale drawing", year:9, exam:false,
  q:`In a scale drawing, 1 cm represents 4 m. How long should a line be to represent a real distance of 10 m?`,
  a:`2.5 cm`,
  e:`Đổi ngược: chia thực tế cho tỉ lệ. 10 m ÷ 4 m mỗi cm = 2.5 cm.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Scale drawing", year:9, exam:false,
  q:`Nam makes a scale drawing of a 700 cm ladder using a scale of 1 cm to 100 cm. How long is the ladder in his drawing?`,
  a:`7 cm`,
  e:`Tỉ lệ 1 cm : 100 cm. 700 cm ÷ 100 = 7 cm. Cây thang dài 7 cm trên bản vẽ.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Construction marks", year:9, exam:false,
  q:`When constructing a shape with compasses, why should you NOT rub out your construction arcs?`,
  a:`They show the method was used correctly`,
  e:`Construction marks (các arc) chứng minh em đã dựng hình đúng bằng compa và thước, không phải đo. Trong bài thi, để lại chúng là bằng chứng làm bài.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Word problem", year:9, exam:false,
  q:`Dũng makes a scale model of a 220 m wide pyramid base using a scale of 1 cm to 50 m. How wide is the base in his model?`,
  a:`4.4 cm`,
  e:`Tỉ lệ 1 cm : 50 m. 220 m ÷ 50 = 4.4 cm. Đáy mô hình rộng 4.4 cm.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Word problem", year:9, exam:false,
  q:`Lan draws a plan of a room. The real room is 8 m long. On her plan it measures 16 cm. How many metres does each centimetre represent?`,
  a:`0.5 m`,
  e:`Mỗi cm đại diện cho: 8 m ÷ 16 cm = 0.5 m. Vậy tỉ lệ là 1 cm : 0.5 m.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Word problem", year:9, exam:false,
  q:`Tracy is constructing a square-based pyramid net. The base square has a side of 6 cm and there are 4 identical triangular faces. How many faces does the complete net have in total?`,
  a:`5`,
  e:`Một mặt đáy hình vuông + 4 mặt tam giác bên = 5 mặt tất cả. Square-based pyramid luôn có 5 faces.` },

{ s:"Math", topic:"Unit 4 — Constructions", sub:"Constructing angles", year:9, exam:false,
  q:`Mai bisects a 90° angle, then bisects one of the resulting angles again. What is the size of the smallest angle she has made?`,
  a:`22.5°`,
  e:`Bước 1: 90° ÷ 2 = 45°. Bước 2: chia đôi tiếp 45° ÷ 2 = 22.5°. Mỗi lần bisect lại chia đôi góc.` }
);

/* ============ UNIT 5 — Inequalities & equations ============ */
window.QBANK.push(
{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Substitution", year:9, exam:true,
  q:`What is the value of 4d + c² when c = 3 and d = 2?`,
  a:`17`,
  e:`Thay c = 3, d = 2: 4d + c² = 4(2) + 3² = 8 + 9 = 17. Nhớ tính lũy thừa (c²) trước khi cộng.` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Substitution", year:9, exam:true,
  q:`What is the value of 5c² + 2d³ when c = 3 and d = 2?`,
  a:`61`,
  e:`5c² = 5 × 3² = 5 × 9 = 45. 2d³ = 2 × 2³ = 2 × 8 = 16. Tổng = 45 + 16 = 61.` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Substitution", year:9, exam:true,
  q:`Use the formula F = 1.8C + 32 to convert 10°C into degrees Fahrenheit.`,
  a:`50°F`,
  e:`Thay C = 10: F = 1.8 × 10 + 32 = 18 + 32 = 50. Vậy 10°C = 50°F.` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Substitution", year:9, exam:true,
  q:`Use the formula F = ma to work out the value of F when m = 6 and a = 4.`,
  a:`24`,
  e:`F = ma = 6 × 4 = 24. Đây là công thức lực trong vật lý: lực = khối lượng × gia tốc.` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Index laws", year:9, exam:true,
  q:`Simplify and write 3⁶ × 3² as a single power of 3.`,
  a:`3⁸`,
  e:`Nhân lũy thừa cùng cơ số → cộng số mũ: 3⁶ × 3² = 3⁶⁺² = 3⁸.` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Index laws", year:9, exam:true,
  q:`Simplify and write x⁹ ÷ x⁴ as a single power of x.`,
  a:`x⁵`,
  e:`Chia lũy thừa cùng cơ số → trừ số mũ: x⁹ ÷ x⁴ = x⁹⁻⁴ = x⁵.` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Index laws", year:9, exam:true,
  q:`What is the value of any number (other than zero) raised to the power 0, for example 4⁰?`,
  a:`1`,
  e:`Bất kỳ số nào khác 0 mũ 0 đều bằng 1. Vậy 4⁰ = 1. (Lý do: x³ ÷ x³ = x⁰, mà bất kỳ số chia chính nó = 1.)` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Inequalities", year:9, exam:true,
  q:`Solve the following inequality: x + 9 < 11`,
  a:`x < 2`,
  e:`Trừ 9 hai vế: x + 9 − 9 < 11 − 9 → x < 2. Giải bất phương trình giống giải phương trình, chỉ giữ dấu bất đẳng thức.` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Inequalities", year:9, exam:true,
  q:`Solve the following inequality: 2y ≤ 14`,
  a:`y ≤ 7`,
  e:`Chia hai vế cho 2 (số dương → giữ nguyên dấu): y ≤ 14 ÷ 2 → y ≤ 7.` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Inequalities", year:9, exam:true,
  q:`Solve the following inequality: 3n − 8 > 1`,
  a:`n > 3`,
  e:`Cộng 8 hai vế: 3n > 9. Chia 3: n > 3.` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Inequalities", year:9, exam:true,
  q:`Solve the following inequality: −3x > 15`,
  a:`x < −5`,
  e:`Chia hai vế cho −3. QUAN TRỌNG: khi chia (hoặc nhân) cho số ÂM, phải ĐỔI CHIỀU dấu bất đẳng thức. Vậy x < 15 ÷ (−3) → x < −5.` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Inequalities", year:9, exam:true,
  q:`Solve the following double inequality: 1 ≤ y + 6 < 9`,
  a:`−5 ≤ y < 3`,
  e:`Trừ 6 cho cả ba phần: 1 − 6 ≤ y < 9 − 6 → −5 ≤ y < 3.` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Writing inequalities", year:9, exam:true,
  q:`Write an inequality for the following statement. Use x to represent the number of bottles: "Bình has at most 35 water bottles in the cupboard."`,
  a:`x ≤ 35`,
  e:`"At most 35" nghĩa là nhiều nhất 35 — tức là 35 hoặc ít hơn. Vậy x ≤ 35 (dấu ≤ vì có thể bằng 35).` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Writing inequalities", year:9, exam:true,
  q:`Write an inequality for the following statement. Use x to represent the number of marbles: "Mai has more than 23 marbles in her bag."`,
  a:`x > 23`,
  e:`"More than 23" nghĩa là lớn hơn 23 (không bao gồm 23). Vậy x > 23 (dùng dấu > chứ không phải ≥).` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Solving equations", year:9, exam:true,
  q:`Solve the equation 3(y + 5) = 9.`,
  a:`y = −2`,
  e:`Mở ngoặc: 3y + 15 = 9. Trừ 15: 3y = −6. Chia 3: y = −2.` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Solving equations", year:9, exam:true,
  q:`Solve the equation 2x + 5 = 9.`,
  a:`x = 2`,
  e:`Trừ 5 hai vế: 2x = 4. Chia 2: x = 2.` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Solving equations", year:9, exam:true,
  q:`Solve the equation 7(p − 3) = 2(2p + 6).`,
  a:`p = 11`,
  e:`Mở ngoặc cả hai vế: 7p − 21 = 4p + 12. Chuyển p về một bên: 7p − 4p = 12 + 21 → 3p = 33 → p = 11.` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Solving equations", year:9, exam:true,
  q:`Solve the equation 3x − 11 = x + 5.`,
  a:`x = 8`,
  e:`Chuyển x về một vế: 3x − x = 5 + 11 → 2x = 16 → x = 8.` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Expanding", year:9, exam:true,
  q:`Expand and simplify the expression: y(y² + 7y)`,
  a:`y³ + 7y²`,
  e:`Nhân y vào từng số hạng trong ngoặc: y × y² = y³; y × 7y = 7y². Kết quả: y³ + 7y².` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Factorising", year:9, exam:true,
  q:`Fully factorise the following expression: 4x² + 8x`,
  a:`4x(x + 2)`,
  e:`Tìm thừa số chung lớn nhất (HCF) của 4x² và 8x: đó là 4x. Đưa ra ngoài: 4x² + 8x = 4x(x + 2).` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Factorising", year:9, exam:true,
  q:`Fully factorise the following expression: 6x² − 2x`,
  a:`2x(3x − 1)`,
  e:`HCF của 6x² và 2x là 2x. 6x² − 2x = 2x(3x − 1). Kiểm tra: 2x × 3x = 6x², 2x × (−1) = −2x. Đúng!` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Changing the subject", year:9, exam:true,
  q:`Make x the subject of the formula y = x + 5.`,
  a:`x = y − 5`,
  e:`"Make x the subject" nghĩa là viết lại sao cho x đứng một mình ở vế trái. Từ y = x + 5, trừ 5 hai vế: x = y − 5.` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Changing the subject", year:9, exam:true,
  q:`Make x the subject of the formula y = 4x − 9.`,
  a:`x = (y + 9) ÷ 4`,
  e:`Từ y = 4x − 9, cộng 9: y + 9 = 4x. Chia 4: x = (y + 9) ÷ 4 (hay (y + 9)/4).` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Changing the subject", year:9, exam:true,
  q:`Make r the subject of the formula C = 2πr.`,
  a:`r = C ÷ (2π)`,
  e:`Từ C = 2πr, chia cả hai vế cho 2π: r = C ÷ (2π). Đây chính là cách tìm bán kính khi biết chu vi.` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Word problem", year:9, exam:true,
  q:`A plumber in District 1 charges a call-out fee of VND 200,000 plus VND 150,000 per hour. Write a formula for the total charge C (in VND) for a job lasting h hours.`,
  a:`C = 200000 + 150000h`,
  e:`Phí cố định (call-out) là 200000. Mỗi giờ thêm 150000, làm h giờ → 150000h. Tổng: C = 200000 + 150000h.` },

{ s:"Math", topic:"Unit 5 — Inequalities & equations", sub:"Word problem", year:9, exam:true,
  q:`Dũng thinks of an integer and doubles it. The answer is greater than 2 but smaller than 14. Write an inequality for x, the integer, then state all the possible values.`,
  a:`2 < 2x < 14, so x = 2, 3, 4, 5, 6`,
  e:`"Gấp đôi x" là 2x. "Lớn hơn 2, nhỏ hơn 14": 2 < 2x < 14. Chia cả ba phần cho 2: 1 < x < 7. Các số nguyên: 2, 3, 4, 5, 6.` }
);

/* ============ UNIT 6 — Data & averages ============ */
window.QBANK.push(
{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Mean", year:9, exam:false,
  q:`What is the mean of these test scores: 6, 8, 10, 7, 9?`,
  a:`8`,
  e:`Mean (trung bình cộng) = tổng các số ÷ số lượng số. Tổng = 6 + 8 + 10 + 7 + 9 = 40. Có 5 số → 40 ÷ 5 = 8.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Median", year:9, exam:false,
  q:`What is the median of these numbers: 3, 7, 2, 9, 5?`,
  a:`5`,
  e:`Median (trung vị) = giá trị giữa khi sắp xếp theo thứ tự. Sắp xếp: 2, 3, 5, 7, 9. Giá trị giữa (số thứ 3 trên 5) là 5.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Median", year:9, exam:false,
  q:`What is the median of these numbers: 4, 8, 6, 10, 2, 12?`,
  a:`7`,
  e:`Sắp xếp: 2, 4, 6, 8, 10, 12. Có 6 số (chẵn) → median là trung bình của hai số giữa: (6 + 8) ÷ 2 = 7.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Mode", year:9, exam:false,
  q:`What is the mode of these numbers: 4, 7, 4, 9, 4, 7, 2?`,
  a:`4`,
  e:`Mode (mốt) = giá trị xuất hiện nhiều nhất. Số 4 xuất hiện 3 lần, nhiều hơn các số khác. Vậy mode = 4.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Range", year:9, exam:false,
  q:`What is the range of these numbers: 12, 5, 18, 9, 3, 15?`,
  a:`15`,
  e:`Range (khoảng biến thiên) = giá trị lớn nhất − giá trị nhỏ nhất = 18 − 3 = 15. Range cho biết dữ liệu phân tán rộng bao nhiêu.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Range", year:9, exam:false,
  q:`What is the range of these heights: 5 cm, 3 cm, 0 cm, 2 cm, 10 cm, 5 cm, 6 cm?`,
  a:`10 cm`,
  e:`Range = lớn nhất − nhỏ nhất = 10 − 0 = 10 cm.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Mean", year:9, exam:false,
  q:`The mean of four numbers is 9. Three of the numbers are 7, 11 and 8. What is the fourth number?`,
  a:`10`,
  e:`Nếu mean của 4 số là 9 thì tổng = 9 × 4 = 36. Ba số đã biết cộng lại: 7 + 11 + 8 = 26. Số thứ tư = 36 − 26 = 10.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Vocabulary", year:9, exam:false,
  q:`What name is given to data that you collect yourself, for example by carrying out your own survey?`,
  a:`Primary data`,
  e:`Primary data (dữ liệu sơ cấp) là dữ liệu em tự thu thập. Còn dữ liệu lấy từ nguồn khác (sách, internet) gọi là secondary data.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Vocabulary", year:9, exam:false,
  q:`What name is given to data that someone else has already collected, for example from a website or report?`,
  a:`Secondary data`,
  e:`Secondary data (dữ liệu thứ cấp) là dữ liệu do người khác thu thập sẵn — như báo cáo chính phủ, internet, sách báo.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Vocabulary", year:9, exam:false,
  q:`In a survey, what is meant by a "biased" sample?`,
  a:`A sample that does not fairly represent the whole population`,
  e:`"Biased" (thiên lệch) nghĩa là mẫu không công bằng — một số nhóm bị chọn nhiều hơn nhóm khác, làm kết quả sai lệch. Ví dụ hỏi tuổi người dân nhưng chỉ khảo sát ở cửa hàng thú cưng.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Vocabulary", year:9, exam:false,
  q:`In a questionnaire, what is meant by a "leading question"?`,
  a:`A question that encourages a particular answer`,
  e:`Leading question (câu hỏi dẫn dắt) là câu hỏi khiến người trả lời nghiêng về một đáp án. Ví dụ "Bạn có đồng ý rằng tập thể dục rất vui không?" — nên đổi thành "Bạn có thích tập thể dục không?".` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Vocabulary", year:9, exam:false,
  q:`What type of data is the height of students, which can take any value within a range?`,
  a:`Continuous data`,
  e:`Height is continuous data because it is MEASURED and can take any value within a range (e.g. 152.3 cm). The two types are: discrete data, which is COUNTED and only takes separate whole values (number of students, number of cars); and continuous data, which is MEASURED and takes any value in a range (height, mass, time). — Chiều cao là continuous data vì nó được ĐO và nhận mọi giá trị trong một khoảng (ví dụ 152,3 cm). Hai loại dữ liệu: discrete data (rời rạc) là dữ liệu ĐẾM được, chỉ nhận giá trị riêng lẻ (số học sinh, số ô tô); continuous data (liên tục) là dữ liệu ĐO được, nhận mọi giá trị trong một khoảng (chiều cao, khối lượng, thời gian).` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Grouped data", year:9, exam:false,
  q:`In a grouped frequency table, a class is given as 110 ≤ L < 140. What is the midpoint of this class?`,
  a:`125`,
  e:`Midpoint (điểm giữa) = (giá trị đầu + giá trị cuối) ÷ 2 = (110 + 140) ÷ 2 = 250 ÷ 2 = 125. Midpoint dùng để ước lượng mean của dữ liệu nhóm.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Grouped data", year:9, exam:false,
  q:`When finding the mean from a grouped frequency table, what value is used to represent each class?`,
  a:`The midpoint of the class`,
  e:`The midpoint of each class is used to represent every value in that class. Once data has been grouped, the exact value of each item within a class is unknown, so the midpoint stands in for them all. Because of this substitution, the result is only an ESTIMATE of the mean, not the exact value. — Midpoint (điểm giữa) của mỗi class được dùng để đại diện cho mọi giá trị trong class đó. Khi dữ liệu đã được nhóm lại, ta không biết giá trị chính xác của từng phần tử trong mỗi class, nên dùng midpoint thay thế. Vì sự thay thế này, kết quả chỉ là estimate (ước lượng) của mean, không chính xác tuyệt đối.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Grouped data", year:9, exam:false,
  q:`A grouped frequency table has classes 0 ≤ d < 5, 5 ≤ d < 10 and 10 ≤ d < 15. The value d = 5 should go in which class?`,
  a:`5 ≤ d < 10`,
  e:`Chú ý dấu ≤ và <. Class 0 ≤ d < 5 chỉ nhận tới NHỎ HƠN 5. Class 5 ≤ d < 10 nhận từ 5 trở lên. Vậy d = 5 nằm trong class 5 ≤ d < 10.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Estimating mean", year:9, exam:false,
  q:`A grouped frequency table has two classes. The class with midpoint 10 has frequency 3; the class with midpoint 20 has frequency 2. Estimate the mean.`,
  a:`14`,
  e:`Estimate mean = tổng (midpoint × frequency) ÷ tổng frequency. = (10×3 + 20×2) ÷ (3 + 2) = (30 + 40) ÷ 5 = 70 ÷ 5 = 14.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Frequency table", year:9, exam:false,
  q:`A frequency table shows: 0 siblings (5 pupils), 1 sibling (3 pupils), 2 siblings (2 pupils). What is the total number of siblings?`,
  a:`7`,
  e:`Nhân số anh chị em với số học sinh rồi cộng: (0×5) + (1×3) + (2×2) = 0 + 3 + 4 = 7 anh chị em tổng cộng.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Frequency table", year:9, exam:false,
  q:`A frequency table shows: score 0 (2 pupils), score 1 (4 pupils), score 2 (4 pupils). What is the mean score?`,
  a:`1.2`,
  e:`Tổng điểm = (0×2) + (1×4) + (2×4) = 0 + 4 + 8 = 12. Tổng số học sinh = 2 + 4 + 4 = 10. Mean = tổng điểm ÷ số học sinh = 12 ÷ 10 = 1.2.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Scatter graphs", year:9, exam:false,
  q:`On a scatter graph, what type of correlation is shown when one quantity increases as the other increases?`,
  a:`Positive correlation`,
  e:`Positive correlation (tương quan dương): khi một đại lượng tăng thì đại lượng kia cũng tăng. Các điểm đi lên từ trái sang phải.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Scatter graphs", year:9, exam:false,
  q:`On a scatter graph, what type of correlation is shown when one quantity decreases as the other increases?`,
  a:`Negative correlation`,
  e:`Negative correlation (tương quan âm): khi một đại lượng tăng thì đại lượng kia giảm. Các điểm đi xuống từ trái sang phải.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Outliers", year:9, exam:false,
  q:`In a set of data, what name is given to a value that is much larger or smaller than the rest?`,
  a:`An outlier`,
  e:`Outlier là một giá trị bất thường, cách xa hẳn các giá trị còn lại. Nó có thể do lỗi đo đạc hoặc một trường hợp đặc biệt.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Word problem", year:9, exam:false,
  q:`In a Maths test, Lan scored 7, 9, 6, 8 and 10 over five weeks. What is her mean score?`,
  a:`8`,
  e:`Tổng = 7 + 9 + 6 + 8 + 10 = 40. Có 5 tuần → mean = 40 ÷ 5 = 8 điểm.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Word problem", year:9, exam:false,
  q:`A shop in Quận 5 records its daily customers for one week: 120, 145, 130, 200, 110, 135, 160. What is the range?`,
  a:`90`,
  e:`Range = lớn nhất − nhỏ nhất = 200 − 110 = 90 khách. Range cho biết sự chênh lệch ngày đông nhất và vắng nhất.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Word problem", year:9, exam:false,
  q:`Minh wants to survey the favourite sports of all 1500 students in his school. He decides to take a sample of 10% of the students. How many students should he survey?`,
  a:`150 students`,
  e:`10% của 1500 = 1500 × 0.1 = 150 học sinh. Mẫu 10% dân số là cỡ mẫu hợp lý: đủ lớn để tin cậy mà không tốn quá nhiều thời gian. Mẫu quá nhỏ (vd 5) thì không đại diện.` },

{ s:"Math", topic:"Unit 6 — Data & averages", sub:"Word problem", year:9, exam:false,
  q:`The mean number of books read by 6 students in a month is 5. Five of them read 4, 6, 3, 7 and 5 books. How many books did the sixth student read?`,
  a:`5`,
  e:`Mean 5 với 6 học sinh → tổng = 5 × 6 = 30 quyển. Năm bạn đầu đọc: 4 + 6 + 3 + 7 + 5 = 25. Bạn thứ sáu đọc = 30 − 25 = 5 quyển.` }
);
