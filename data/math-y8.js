/* Kho câu hỏi: TOÁN — Year 8 FOUNDATION REVIEW (Maths Progress International, Book 8)
   Bộ ôn nền tảng tập trung — các chủ đề cốt lõi, hay ra thi Chuyên Anh Đề Án.
   7 chủ đề · ~15 câu mỗi chủ đề. */
window.QBANK = window.QBANK || [];

/* ============================================================
   Y8 · ANGLES   [exam:true]  — Question 1 của đề thi thật là câu góc
   ============================================================ */
window.QBANK.push(
  { s:"Math", topic:"Y8 · Angles", sub:"Angles on a line", year:8, exam:true,
    q:`Two angles lie on a straight line. One angle is 115°. What is the size of the other angle?`,
    a:`65°`,
    e:`Các góc trên một đường thẳng (angles on a straight line) cộng lại bằng 180°. Vậy góc còn lại = 180° − 115° = 65°.` },

  { s:"Math", topic:"Y8 · Angles", sub:"Angles at a point", year:8, exam:true,
    q:`Three angles meet at a point. Two of them are 140° and 95°. What is the size of the third angle?`,
    a:`125°`,
    e:`Các góc quanh một điểm (angles at a point) cộng lại bằng 360°. Góc thứ ba = 360° − 140° − 95° = 125°.` },

  { s:"Math", topic:"Y8 · Angles", sub:"Vertically opposite angles", year:8, exam:true,
    q:`Two straight lines cross. One of the angles formed is 72°. What is the size of the angle vertically opposite to it?`,
    a:`72°`,
    e:`Góc đối đỉnh (vertically opposite angles) luôn bằng nhau. Nên góc đối đỉnh của 72° cũng là 72°.` },

  { s:"Math", topic:"Y8 · Angles", sub:"Angles in a triangle", year:8, exam:true,
    q:`Two angles of a triangle are 47° and 68°. Work out the third angle.`,
    a:`65°`,
    e:`Tổng ba góc trong tam giác (angles in a triangle) bằng 180°. Góc thứ ba = 180° − 47° − 68° = 65°.` },

  { s:"Math", topic:"Y8 · Angles", sub:"Isosceles triangle", year:8, exam:true,
    q:`An isosceles triangle has an apex angle of 40°. Work out the size of each of the two equal base angles.`,
    a:`70°`,
    e:`Tam giác cân (isosceles triangle) có hai góc đáy bằng nhau. Hai góc đáy cộng lại = 180° − 40° = 140°, nên mỗi góc = 140° ÷ 2 = 70°.` },

  { s:"Math", topic:"Y8 · Angles", sub:"Equilateral triangle", year:8, exam:true,
    q:`What is the size of each interior angle of an equilateral triangle?`,
    a:`60°`,
    e:`Tam giác đều (equilateral triangle) có ba góc bằng nhau. Mỗi góc = 180° ÷ 3 = 60°.` },

  { s:"Math", topic:"Y8 · Angles", sub:"Exterior angle of a triangle", year:8, exam:true,
    q:`The two interior angles at one side of a triangle are 55° and 80°. Work out the exterior angle at the third vertex.`,
    a:`135°`,
    e:`Góc ngoài của tam giác (exterior angle) bằng tổng hai góc trong không kề nó: 55° + 80° = 135°.` },

  { s:"Math", topic:"Y8 · Angles", sub:"Angles in a quadrilateral", year:8, exam:true,
    q:`Three angles of a quadrilateral are 90°, 110° and 85°. Work out the fourth angle.`,
    a:`75°`,
    e:`Tổng bốn góc trong tứ giác (angles in a quadrilateral) bằng 360°. Góc thứ tư = 360° − 90° − 110° − 85° = 75°.` },

  { s:"Math", topic:"Y8 · Angles", sub:"Alternate angles", year:8, exam:true,
    q:`A straight line crosses two parallel lines. An angle of 63° is formed. What is the size of its alternate angle?`,
    a:`63°`,
    e:`Góc so le trong (alternate angles) giữa hai đường thẳng song song thì bằng nhau — tạo thành hình chữ Z. Vậy góc so le của 63° cũng là 63°.` },

  { s:"Math", topic:"Y8 · Angles", sub:"Corresponding angles", year:8, exam:true,
    q:`A straight line crosses two parallel lines. An angle of 118° is formed. What is the size of its corresponding angle?`,
    a:`118°`,
    e:`Góc đồng vị (corresponding angles) giữa hai đường thẳng song song thì bằng nhau — tạo thành hình chữ F. Vậy góc đồng vị của 118° cũng là 118°.` },

  { s:"Math", topic:"Y8 · Angles", sub:"Co-interior angles", year:8, exam:true,
    q:`A straight line crosses two parallel lines. A co-interior (allied) angle is 105°. What is the size of the other co-interior angle?`,
    a:`75°`,
    e:`Góc trong cùng phía (co-interior / allied angles) giữa hai đường song song cộng lại bằng 180° — tạo thành hình chữ C. Góc kia = 180° − 105° = 75°.` },

  { s:"Math", topic:"Y8 · Angles", sub:"Sum of interior angles", year:8, exam:true,
    q:`Work out the sum of the interior angles of a hexagon (6-sided polygon).`,
    a:`720°`,
    e:`Tổng các góc trong của đa giác n cạnh = 180° × (n − 2). Với lục giác n = 6: 180° × (6 − 2) = 180° × 4 = 720°.` },

  { s:"Math", topic:"Y8 · Angles", sub:"Interior angle of a regular polygon", year:8, exam:true,
    q:`Work out the size of each interior angle of a regular pentagon.`,
    a:`108°`,
    e:`Tổng góc trong ngũ giác = 180° × (5 − 2) = 540°. Ngũ giác đều có 5 góc bằng nhau: 540° ÷ 5 = 108°.` },

  { s:"Math", topic:"Y8 · Angles", sub:"Exterior angle of a regular polygon", year:8, exam:true,
    q:`Work out the size of each exterior angle of a regular octagon (8 sides).`,
    a:`45°`,
    e:`Tổng các góc ngoài của bất kỳ đa giác nào luôn bằng 360°. Bát giác đều có 8 góc ngoài bằng nhau: 360° ÷ 8 = 45°.` },

  { s:"Math", topic:"Y8 · Angles", sub:"Finding sides from exterior angle", year:8, exam:true,
    q:`The exterior angle of a regular polygon is 24°. How many sides does the polygon have?`,
    a:`15 sides`,
    e:`Số cạnh = 360° ÷ góc ngoài = 360° ÷ 24° = 15. Đa giác đều này có 15 cạnh.` },

  { s:"Math", topic:"Y8 · Angles", sub:"Angles in a triangle (algebra)", year:8, exam:true,
    q:`In a triangle the three angles are x, 2x and 3x. Work out the value of x, in degrees.`,
    a:`x = 30°`,
    e:`Tổng ba góc bằng 180°: x + 2x + 3x = 6x = 180°. Vậy x = 180° ÷ 6 = 30°.` }
);

/* ============================================================
   Y8 · FRACTIONS, DECIMALS & PERCENTAGES   [exam:true]
   ============================================================ */
window.QBANK.push(
  { s:"Math", topic:"Y8 · Fractions, decimals & percentages", sub:"Adding fractions", year:8, exam:true,
    q:`Work out 3/4 + 1/6. Give your answer as a fraction in its simplest form.`,
    a:`11/12`,
    e:`Mẫu chung của 4 và 6 là 12. 3/4 = 9/12, 1/6 = 2/12. Cộng: 9/12 + 2/12 = 11/12 (đã tối giản).` },

  { s:"Math", topic:"Y8 · Fractions, decimals & percentages", sub:"Subtracting fractions", year:8, exam:true,
    q:`Work out 5/6 − 2/5. Give your answer as a fraction in its simplest form.`,
    a:`13/30`,
    e:`Mẫu chung của 6 và 5 là 30. 5/6 = 25/30, 2/5 = 12/30. Trừ: 25/30 − 12/30 = 13/30 (đã tối giản).` },

  { s:"Math", topic:"Y8 · Fractions, decimals & percentages", sub:"Multiplying fractions", year:8, exam:true,
    q:`Work out 3/8 × 4/9. Give your answer as a fraction in its simplest form.`,
    a:`1/6`,
    e:`Nhân tử với tử, mẫu với mẫu: (3 × 4)/(8 × 9) = 12/72. Tối giản chia cho 12: 12/72 = 1/6.` },

  { s:"Math", topic:"Y8 · Fractions, decimals & percentages", sub:"Dividing fractions", year:8, exam:true,
    q:`Work out 3/4 ÷ 2/5. Give your answer as a fraction.`,
    a:`15/8`,
    e:`Chia phân số là nhân với phân số nghịch đảo (reciprocal): 3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8.` },

  { s:"Math", topic:"Y8 · Fractions, decimals & percentages", sub:"Mixed numbers", year:8, exam:true,
    q:`Work out 2 1/3 + 1 1/2. Give your answer as a mixed number.`,
    a:`3 5/6`,
    e:`Cộng phần nguyên: 2 + 1 = 3. Cộng phần phân số: 1/3 + 1/2 = 2/6 + 3/6 = 5/6. Kết quả: 3 5/6.` },

  { s:"Math", topic:"Y8 · Fractions, decimals & percentages", sub:"Fraction to decimal", year:8, exam:true,
    q:`Write the fraction 3/8 as a decimal.`,
    a:`0.375`,
    e:`Chia tử cho mẫu: 3 ÷ 8 = 0.375. Đây là decimal hữu hạn (terminating decimal).` },

  { s:"Math", topic:"Y8 · Fractions, decimals & percentages", sub:"Decimal to fraction", year:8, exam:true,
    q:`Write the decimal 0.64 as a fraction in its simplest form.`,
    a:`16/25`,
    e:`0.64 = 64/100. Chia cả tử và mẫu cho 4: 64/100 = 16/25 (đã tối giản).` },

  { s:"Math", topic:"Y8 · Fractions, decimals & percentages", sub:"Recurring decimal", year:8, exam:true,
    q:`Write the recurring decimal 0.4444... using dot notation.`,
    a:`0.4̇ (a dot above the 4)`,
    e:`Decimal lặp lại (recurring decimal) viết bằng cách đặt dấu chấm trên chữ số lặp. 0.4444... có chữ số 4 lặp mãi, viết là 0.4 với dấu chấm trên số 4.` },

  { s:"Math", topic:"Y8 · Fractions, decimals & percentages", sub:"Rounding decimals", year:8, exam:true,
    q:`Round 6.8345 to 2 decimal places.`,
    a:`6.83`,
    e:`Để làm tròn đến 2 chữ số thập phân, nhìn chữ số thứ 3 là 4. Vì 4 < 5 nên giữ nguyên: 6.8345 ≈ 6.83.` },

  { s:"Math", topic:"Y8 · Fractions, decimals & percentages", sub:"Percentage of an amount", year:8, exam:true,
    q:`Work out 15% of 560 m.`,
    a:`84 m`,
    e:`15% = 0.15. Nhân: 0.15 × 560 = 84 m. Hoặc: 10% là 56, 5% là 28, cộng lại 56 + 28 = 84 m.` },

  { s:"Math", topic:"Y8 · Fractions, decimals & percentages", sub:"Percentage increase", year:8, exam:true,
    q:`A shop increases the price of a mirror that costs $80 by 20%. Work out the new price.`,
    a:`$96`,
    e:`20% của 80 = 0.20 × 80 = 16. Giá mới = 80 + 16 = $96. Hoặc dùng multiplier: 80 × 1.20 = $96.` },

  { s:"Math", topic:"Y8 · Fractions, decimals & percentages", sub:"Percentage decrease", year:8, exam:true,
    q:`In a sale a mobile phone costing $320 is reduced by 45%. Work out the sale price.`,
    a:`$176`,
    e:`Giảm 45% nghĩa là còn lại 55%. Multiplier = 0.55. Giá bán = 320 × 0.55 = $176.` },

  { s:"Math", topic:"Y8 · Fractions, decimals & percentages", sub:"Finding the original amount", year:8, exam:true,
    q:`10% of an amount is 6.2 kg. Work out the original (100%) amount.`,
    a:`62 kg`,
    e:`Nếu 10% = 6.2 kg thì 100% lớn gấp 10 lần: 6.2 × 10 = 62 kg.` },

  { s:"Math", topic:"Y8 · Fractions, decimals & percentages", sub:"Reverse percentage", year:8, exam:true,
    q:`In a sale, jeans are reduced by 6% to a price of $28.20. Work out the original price.`,
    a:`$30`,
    e:`Giá sau giảm là 94% của giá gốc. 94% = 28.20, nên 1% = 28.20 ÷ 94 = 0.30. Giá gốc 100% = 0.30 × 100 = $30.` },

  { s:"Math", topic:"Y8 · Fractions, decimals & percentages", sub:"One amount as a percentage of another", year:8, exam:true,
    q:`Write 48 cm as a percentage of 1 m.`,
    a:`48%`,
    e:`Đổi cùng đơn vị trước: 1 m = 100 cm. Tỉ lệ = 48/100 = 48%.` },

  { s:"Math", topic:"Y8 · Fractions, decimals & percentages", sub:"Compound interest", year:8, exam:true,
    q:`Bình invests VND 800,000 at 3% compound interest per year. Work out the amount after 2 years.`,
    a:`VND 848,720`,
    e:`Lãi kép (compound interest) dùng multiplier 1.03 mỗi năm. Sau 2 năm: 800,000 × 1.03 × 1.03 = 800,000 × 1.0609 = 848,720 VND.` }
);

/* ============================================================
   Y8 · RATIO & PROPORTION   [exam:true]
   ============================================================ */
window.QBANK.push(
  { s:"Math", topic:"Y8 · Ratio & proportion", sub:"Simplifying ratio", year:8, exam:true,
    q:`Simplify the ratio 12 : 18 to its simplest form.`,
    a:`2 : 3`,
    e:`Chia cả hai số cho ước chung lớn nhất (HCF) của 12 và 18 là 6: 12 ÷ 6 = 2, 18 ÷ 6 = 3. Vậy 12 : 18 = 2 : 3.` },

  { s:"Math", topic:"Y8 · Ratio & proportion", sub:"Simplifying ratio with decimals", year:8, exam:true,
    q:`Simplify the ratio 4.8 : 2 to its simplest form.`,
    a:`12 : 5`,
    e:`Nhân cả hai số với 10 để bỏ thập phân: 48 : 20. Sau đó chia cho HCF là 4: 48 ÷ 4 = 12, 20 ÷ 4 = 5. Vậy 4.8 : 2 = 12 : 5.` },

  { s:"Math", topic:"Y8 · Ratio & proportion", sub:"Sharing in a ratio", year:8, exam:true,
    q:`A piece of rope is 8.5 m long. It is cut in the ratio 3 : 2. Work out the length of the longer piece.`,
    a:`5.1 m`,
    e:`Tổng số phần = 3 + 2 = 5. Một phần = 8.5 ÷ 5 = 1.7 m. Phần dài hơn có 3 phần: 3 × 1.7 = 5.1 m.` },

  { s:"Math", topic:"Y8 · Ratio & proportion", sub:"Sharing in a 3-part ratio", year:8, exam:true,
    q:`$288 is shared between three friends in the ratio 2 : 3 : 4. How much does the friend with the largest share receive?`,
    a:`$128`,
    e:`Tổng số phần = 2 + 3 + 4 = 9. Một phần = 288 ÷ 9 = 32. Phần lớn nhất có 4 phần: 4 × 32 = $128.` },

  { s:"Math", topic:"Y8 · Ratio & proportion", sub:"Unit ratio", year:8, exam:true,
    q:`Write the ratio 5 : 20 in the form 1 : n.`,
    a:`1 : 4`,
    e:`Để đưa về dạng 1 : n, chia cả hai số cho số đầu tiên là 5: 5 ÷ 5 = 1, 20 ÷ 5 = 4. Vậy 5 : 20 = 1 : 4.` },

  { s:"Math", topic:"Y8 · Ratio & proportion", sub:"Direct proportion (unit method)", year:8, exam:true,
    q:`A car travels 25 miles in 2 hours at a constant speed. How many miles can it travel in 5 hours?`,
    a:`62.5 miles`,
    e:`Tìm quãng đường trong 1 giờ trước: 25 ÷ 2 = 12.5 miles/giờ. Sau 5 giờ: 12.5 × 5 = 62.5 miles.` },

  { s:"Math", topic:"Y8 · Ratio & proportion", sub:"Direct proportion (cost)", year:8, exam:true,
    q:`Hương buys 3 pairs of jeans for VND 1,200,000. At the same rate, how much do 7 pairs cost?`,
    a:`VND 2,800,000`,
    e:`Giá 1 chiếc quần = 1,200,000 ÷ 3 = 400,000 VND. Với 7 chiếc: 7 × 400,000 = 2,800,000 VND.` },

  { s:"Math", topic:"Y8 · Ratio & proportion", sub:"Best buy", year:8, exam:true,
    q:`Brand A: 6 lollies for $2.94. Brand B: 8 lollies for $3.84. Which brand is cheaper per lolly?`,
    a:`Brand B`,
    e:`Giá mỗi cái Brand A = 2.94 ÷ 6 = $0.49. Brand B = 3.84 ÷ 8 = $0.48. Brand B rẻ hơn ($0.48 < $0.49).` },

  { s:"Math", topic:"Y8 · Ratio & proportion", sub:"Recipe proportion", year:8, exam:true,
    q:`A pancake recipe uses 200 ml of milk to make 20 pancakes. How much milk is needed for 30 pancakes?`,
    a:`300 ml`,
    e:`Sữa cho 1 cái bánh = 200 ÷ 20 = 10 ml. Với 30 cái: 30 × 10 = 300 ml.` },

  { s:"Math", topic:"Y8 · Ratio & proportion", sub:"Finding a quantity from a ratio", year:8, exam:true,
    q:`Orange paint mixes red and yellow in the ratio 2 : 3. If 12 litres of red paint is used, how many litres of yellow paint are needed?`,
    a:`18 litres`,
    e:`Tỉ lệ red : yellow = 2 : 3. Red 12 lít ứng với 2 phần, nên 1 phần = 12 ÷ 2 = 6 lít. Yellow có 3 phần: 3 × 6 = 18 lít.` },

  { s:"Math", topic:"Y8 · Ratio & proportion", sub:"Percentage from a ratio", year:8, exam:true,
    q:`A dessert contains protein, carbohydrate and fat in the ratio 3 : 15 : 2. What percentage of the dessert is carbohydrate?`,
    a:`75%`,
    e:`Tổng số phần = 3 + 15 + 2 = 20. Carbohydrate có 15 phần: 15/20 = 0.75 = 75%.` },

  { s:"Math", topic:"Y8 · Ratio & proportion", sub:"Scaling a ratio", year:8, exam:true,
    q:`A large dessert weighs 3.5 times as much as a small dessert. A small dessert contains 9 g of protein. How much protein does the large dessert contain?`,
    a:`31.5 g`,
    e:`Dessert lớn nặng gấp 3.5 lần nên lượng protein cũng gấp 3.5 lần: 9 × 3.5 = 31.5 g.` },

  { s:"Math", topic:"Y8 · Ratio & proportion", sub:"Currency conversion", year:8, exam:true,
    q:`On a particular day, £11 is worth 15 euros. How many euros is £55 worth?`,
    a:`75 euros`,
    e:`£11 = 15 euros. £55 lớn gấp 5 lần £11 (55 ÷ 11 = 5), nên = 5 × 15 = 75 euros.` },

  { s:"Math", topic:"Y8 · Ratio & proportion", sub:"Medicine dose (ratio)", year:8, exam:true,
    q:`A medicine has 500 mg of ibuprofen dissolved in 40 ml of water. What volume of liquid contains a 200 mg dose?`,
    a:`16 ml`,
    e:`Tìm thể tích cho 1 mg: 40 ÷ 500 = 0.08 ml/mg. Với 200 mg: 200 × 0.08 = 16 ml.` },

  { s:"Math", topic:"Y8 · Ratio & proportion", sub:"Ratio total", year:8, exam:true,
    q:`Acid and water are mixed in the ratio 2 : 5 to make 288 ml of mixture. How much water is used?`,
    a:`205.71 ml`,
    e:`Tổng số phần = 2 + 5 = 7. Một phần = 288 ÷ 7 ≈ 41.142857 ml. Nước có 5 phần: 5 × 41.142857 ≈ 205.71 ml (làm tròn 2 chữ số thập phân).` }
);

/* ============================================================
   Y8 · ALGEBRA BASICS   [exam:false]
   ============================================================ */
window.QBANK.push(
  { s:"Math", topic:"Y8 · Algebra basics", sub:"Collecting like terms", year:8, exam:false,
    q:`Simplify 3x + 5x.`,
    a:`8x`,
    e:`Cộng các số hạng đồng dạng (like terms): 3x + 5x = 8x. Cộng hệ số 3 + 5 = 8, giữ nguyên biến x.` },

  { s:"Math", topic:"Y8 · Algebra basics", sub:"Collecting like terms", year:8, exam:false,
    q:`Simplify 7t + 5g − 2g − 5t.`,
    a:`2t + 3g`,
    e:`Nhóm theo biến: 7t − 5t = 2t và 5g − 2g = 3g. Kết quả: 2t + 3g.` },

  { s:"Math", topic:"Y8 · Algebra basics", sub:"Multiplying terms", year:8, exam:false,
    q:`Simplify 2a × 5a.`,
    a:`10a²`,
    e:`Nhân hệ số: 2 × 5 = 10. Nhân biến: a × a = a². Kết quả: 10a².` },

  { s:"Math", topic:"Y8 · Algebra basics", sub:"Index laws", year:8, exam:false,
    q:`Simplify x⁵ × x³.`,
    a:`x⁸`,
    e:`Khi nhân các luỹ thừa cùng cơ số, cộng số mũ (index law): x⁵ × x³ = x⁵⁺³ = x⁸.` },

  { s:"Math", topic:"Y8 · Algebra basics", sub:"Expanding brackets", year:8, exam:false,
    q:`Expand 5(x + 7).`,
    a:`5x + 35`,
    e:`Nhân số ngoài ngoặc với từng số hạng bên trong: 5 × x = 5x và 5 × 7 = 35. Kết quả: 5x + 35.` },

  { s:"Math", topic:"Y8 · Algebra basics", sub:"Expanding brackets", year:8, exam:false,
    q:`Expand −2(a + 3).`,
    a:`−2a − 6`,
    e:`Nhân −2 với từng số hạng: −2 × a = −2a và −2 × 3 = −6. Chú ý dấu âm. Kết quả: −2a − 6.` },

  { s:"Math", topic:"Y8 · Algebra basics", sub:"Expand and simplify", year:8, exam:false,
    q:`Expand and simplify 4(x + 5) + 3(x − 6).`,
    a:`7x + 2`,
    e:`Khai triển: 4x + 20 + 3x − 18. Gộp số hạng đồng dạng: 4x + 3x = 7x và 20 − 18 = 2. Kết quả: 7x + 2.` },

  { s:"Math", topic:"Y8 · Algebra basics", sub:"Expanding with a variable", year:8, exam:false,
    q:`Expand x(x + 5).`,
    a:`x² + 5x`,
    e:`Nhân x với từng số hạng: x × x = x² và x × 5 = 5x. Kết quả: x² + 5x.` },

  { s:"Math", topic:"Y8 · Algebra basics", sub:"Factorising", year:8, exam:false,
    q:`Fully factorise 3x + 9.`,
    a:`3(x + 3)`,
    e:`Ước chung lớn nhất (HCF) của 3x và 9 là 3. Đặt 3 ra ngoài ngoặc: 3x + 9 = 3(x + 3).` },

  { s:"Math", topic:"Y8 · Algebra basics", sub:"Factorising completely", year:8, exam:false,
    q:`Fully factorise 6x² + 18x.`,
    a:`6x(x + 3)`,
    e:`HCF của 6x² và 18x là 6x. Đặt 6x ra ngoài: 6x² + 18x = 6x(x + 3). Kiểm tra: 6x × x = 6x², 6x × 3 = 18x.` },

  { s:"Math", topic:"Y8 · Algebra basics", sub:"Substitution", year:8, exam:false,
    q:`Work out the value of 3x + 8 when x = 4.`,
    a:`20`,
    e:`Thay x = 4 vào: 3 × 4 + 8 = 12 + 8 = 20.` },

  { s:"Math", topic:"Y8 · Algebra basics", sub:"Substitution with two variables", year:8, exam:false,
    q:`Work out the value of 6(x + y) when x = 4 and y = 5.`,
    a:`54`,
    e:`Thay số vào ngoặc trước: x + y = 4 + 5 = 9. Sau đó 6 × 9 = 54.` },

  { s:"Math", topic:"Y8 · Algebra basics", sub:"Solving one-step equations", year:8, exam:false,
    q:`Solve 5x = 45.`,
    a:`x = 9`,
    e:`Để tìm x, chia cả hai vế cho 5: x = 45 ÷ 5 = 9.` },

  { s:"Math", topic:"Y8 · Algebra basics", sub:"Solving two-step equations", year:8, exam:false,
    q:`Solve 4x − 5 = 23.`,
    a:`x = 7`,
    e:`Cộng 5 vào hai vế: 4x = 28. Sau đó chia cho 4: x = 28 ÷ 4 = 7.` },

  { s:"Math", topic:"Y8 · Algebra basics", sub:"Solving equations with brackets", year:8, exam:false,
    q:`Solve 5(a + 8) = 55.`,
    a:`a = 3`,
    e:`Chia hai vế cho 5: a + 8 = 11. Sau đó trừ 8: a = 11 − 8 = 3.` },

  { s:"Math", topic:"Y8 · Algebra basics", sub:"Solving equations (unknown both sides)", year:8, exam:false,
    q:`Solve 5m + 2 = 7m − 10.`,
    a:`m = 6`,
    e:`Chuyển m về một vế: 2 + 10 = 7m − 5m, tức 12 = 2m. Chia cho 2: m = 6.` }
);

/* ============================================================
   Y8 · SEQUENCES & FUNCTIONS   [exam:false]
   ============================================================ */
window.QBANK.push(
  { s:"Math", topic:"Y8 · Sequences & functions", sub:"Next term", year:8, exam:false,
    q:`Write the next term of the sequence 1, 4, 7, 10, ...`,
    a:`13`,
    e:`Quy tắc liên tiếp (term-to-term rule) là cộng 3. Số hạng tiếp theo = 10 + 3 = 13.` },

  { s:"Math", topic:"Y8 · Sequences & functions", sub:"Term-to-term rule", year:8, exam:false,
    q:`What is the term-to-term rule of the sequence 200, 160, 128, 102.4, ...?`,
    a:`Multiply by 0.8`,
    e:`Mỗi số hạng bằng 80% số hạng trước: 200 × 0.8 = 160, 160 × 0.8 = 128. Quy tắc là nhân với 0.8.` },

  { s:"Math", topic:"Y8 · Sequences & functions", sub:"nth term (linear)", year:8, exam:false,
    q:`Write the nth term of the sequence 4, 7, 10, 13, ...`,
    a:`3n + 1`,
    e:`Hiệu giữa các số hạng là 3, nên nth term bắt đầu bằng 3n. Thử n = 1: 3 × 1 = 3, cần thêm 1 để được 4. Vậy nth term = 3n + 1.` },

  { s:"Math", topic:"Y8 · Sequences & functions", sub:"nth term (linear)", year:8, exam:false,
    q:`Write the nth term of the sequence 5, 9, 13, 17, ...`,
    a:`4n + 1`,
    e:`Hiệu chung là 4, nên nth term có dạng 4n + c. Thử n = 1: 4 × 1 = 4, cần thêm 1 để được 5. Vậy nth term = 4n + 1.` },

  { s:"Math", topic:"Y8 · Sequences & functions", sub:"Finding a specific term", year:8, exam:false,
    q:`A sequence has nth term 3n + 1. Work out the 20th term.`,
    a:`61`,
    e:`Thay n = 20 vào công thức: 3 × 20 + 1 = 60 + 1 = 61.` },

  { s:"Math", topic:"Y8 · Sequences & functions", sub:"Checking a term", year:8, exam:false,
    q:`A sequence has nth term 3n + 1. Is 23 a term of this sequence? Answer Yes or No.`,
    a:`No`,
    e:`Đặt 3n + 1 = 23 thì 3n = 22, n = 22/3 ≈ 7.33. Vì n không phải số nguyên nên 23 không nằm trong dãy.` },

  { s:"Math", topic:"Y8 · Sequences & functions", sub:"Decreasing sequence", year:8, exam:false,
    q:`Write the next term of the sequence 30, 26, 22, 18, ...`,
    a:`14`,
    e:`Quy tắc là trừ 4 mỗi lần. Số hạng tiếp theo = 18 − 4 = 14.` },

  { s:"Math", topic:"Y8 · Sequences & functions", sub:"Function machine", year:8, exam:false,
    q:`A function machine multiplies the input by 3 then adds 2. What is the output when the input is 5?`,
    a:`17`,
    e:`Đầu vào 5: nhân 3 được 15, cộng 2 được 17. Đầu ra là 17.` },

  { s:"Math", topic:"Y8 · Sequences & functions", sub:"Inverse function machine", year:8, exam:false,
    q:`A function machine multiplies the input by 4 then subtracts 1. The output is 19. What was the input?`,
    a:`5`,
    e:`Làm ngược lại (inverse): từ đầu ra 19, cộng 1 được 20, rồi chia 4 được 5. Đầu vào là 5.` },

  { s:"Math", topic:"Y8 · Sequences & functions", sub:"Function as an equation", year:8, exam:false,
    q:`A function machine multiplies x by 2 then adds 5 to give y. Write the equation linking x and y.`,
    a:`y = 2x + 5`,
    e:`Nhân x với 2 rồi cộng 5: y = 2x + 5.` },

  { s:"Math", topic:"Y8 · Sequences & functions", sub:"Substituting into a function", year:8, exam:false,
    q:`For the function y = 3x − 6, work out the value of y when x = 3.`,
    a:`y = 3`,
    e:`Thay x = 3: y = 3 × 3 − 6 = 9 − 6 = 3.` },

  { s:"Math", topic:"Y8 · Sequences & functions", sub:"Solving from a function", year:8, exam:false,
    q:`For the function y = 3x − 6, work out the value of x when y = 6.`,
    a:`x = 4`,
    e:`Thay y = 6: 6 = 3x − 6. Cộng 6 vào hai vế: 12 = 3x. Chia cho 3: x = 4.` },

  { s:"Math", topic:"Y8 · Sequences & functions", sub:"Square number sequence", year:8, exam:false,
    q:`Write the next term of the sequence 1, 4, 9, 16, 25, ...`,
    a:`36`,
    e:`Đây là dãy số chính phương (square numbers): 1², 2², 3², 4², 5². Số hạng tiếp theo là 6² = 36.` },

  { s:"Math", topic:"Y8 · Sequences & functions", sub:"Sum of a 3-term sequence", year:8, exam:false,
    q:`Three consecutive integers sum to 63. What is the largest of the three integers?`,
    a:`22`,
    e:`Gọi ba số là n, n+1, n+2. Tổng: 3n + 3 = 63, nên 3n = 60, n = 20. Ba số là 20, 21, 22. Số lớn nhất là 22.` },

  { s:"Math", topic:"Y8 · Sequences & functions", sub:"Fibonacci-style sequence", year:8, exam:false,
    q:`In a sequence each term is the sum of the two terms before it. The sequence starts 2, 3, 5, 8, ... Write the next term.`,
    a:`13`,
    e:`Mỗi số bằng tổng hai số liền trước. Số hạng tiếp theo = 5 + 8 = 13.` }
);

/* ============================================================
   Y8 · AREA, PERIMETER & VOLUME   [exam:false]
   ============================================================ */
window.QBANK.push(
  { s:"Math", topic:"Y8 · Area, perimeter & volume", sub:"Area of a rectangle", year:8, exam:false,
    q:`Work out the area of a rectangle with length 9 cm and width 4 cm. Give units.`,
    a:`36 cm²`,
    e:`Diện tích hình chữ nhật = chiều dài × chiều rộng = 9 × 4 = 36 cm².` },

  { s:"Math", topic:"Y8 · Area, perimeter & volume", sub:"Perimeter of a rectangle", year:8, exam:false,
    q:`Work out the perimeter of a rectangle with length 9 cm and width 4 cm. Give units.`,
    a:`26 cm`,
    e:`Chu vi hình chữ nhật = 2 × (chiều dài + chiều rộng) = 2 × (9 + 4) = 2 × 13 = 26 cm.` },

  { s:"Math", topic:"Y8 · Area, perimeter & volume", sub:"Area of a triangle", year:8, exam:false,
    q:`Work out the area of a triangle with base 50 mm and perpendicular height 39 mm. Give units.`,
    a:`975 mm²`,
    e:`Diện tích tam giác = ½ × đáy × chiều cao = ½ × 50 × 39 = 25 × 39 = 975 mm².` },

  { s:"Math", topic:"Y8 · Area, perimeter & volume", sub:"Area of a parallelogram", year:8, exam:false,
    q:`Work out the area of a parallelogram with base 9 cm and perpendicular height 2 cm. Give units.`,
    a:`18 cm²`,
    e:`Diện tích hình bình hành = đáy × chiều cao vuông góc = 9 × 2 = 18 cm².` },

  { s:"Math", topic:"Y8 · Area, perimeter & volume", sub:"Area of a trapezium", year:8, exam:false,
    q:`Work out the area of a trapezium with parallel sides 6 cm and 9 cm, and height 4 cm. Give units.`,
    a:`30 cm²`,
    e:`Diện tích hình thang = ½ × (a + b) × h = ½ × (6 + 9) × 4 = ½ × 15 × 4 = 30 cm².` },

  { s:"Math", topic:"Y8 · Area, perimeter & volume", sub:"Area of a square", year:8, exam:false,
    q:`Work out the area of a square with side length 7 cm. Give units.`,
    a:`49 cm²`,
    e:`Diện tích hình vuông = cạnh × cạnh = 7 × 7 = 49 cm².` },

  { s:"Math", topic:"Y8 · Area, perimeter & volume", sub:"Compound shape area", year:8, exam:false,
    q:`A compound shape is a 9 cm by 6 cm rectangle with a triangle of base 9 cm and height 4 cm on top. Work out the total area. Give units.`,
    a:`72 cm²`,
    e:`Diện tích hình chữ nhật = 9 × 6 = 54 cm². Diện tích tam giác = ½ × 9 × 4 = 18 cm². Tổng = 54 + 18 = 72 cm².` },

  { s:"Math", topic:"Y8 · Area, perimeter & volume", sub:"Volume of a cuboid", year:8, exam:false,
    q:`Work out the volume of a cuboid with length 8 cm, width 5 cm and height 3 cm. Give units.`,
    a:`120 cm³`,
    e:`Thể tích hình hộp chữ nhật = dài × rộng × cao = 8 × 5 × 3 = 120 cm³.` },

  { s:"Math", topic:"Y8 · Area, perimeter & volume", sub:"Volume of a cube", year:8, exam:false,
    q:`Work out the volume of a cube with side length 5 cm. Give units.`,
    a:`125 cm³`,
    e:`Thể tích hình lập phương = cạnh³ = 5 × 5 × 5 = 125 cm³.` },

  { s:"Math", topic:"Y8 · Area, perimeter & volume", sub:"Surface area of a cuboid", year:8, exam:false,
    q:`Work out the surface area of a cuboid with length 5 cm, width 4 cm and height 2 cm. Give units.`,
    a:`76 cm²`,
    e:`Diện tích bề mặt = 2(ab + bc + ac) = 2(5×4 + 4×2 + 5×2) = 2(20 + 8 + 10) = 2 × 38 = 76 cm².` },

  { s:"Math", topic:"Y8 · Area, perimeter & volume", sub:"Surface area of a cube", year:8, exam:false,
    q:`Work out the surface area of a cube with side length 3 cm. Give units.`,
    a:`54 cm²`,
    e:`Hình lập phương có 6 mặt vuông bằng nhau. Mỗi mặt = 3 × 3 = 9 cm². Tổng = 6 × 9 = 54 cm².` },

  { s:"Math", topic:"Y8 · Area, perimeter & volume", sub:"Finding side from area", year:8, exam:false,
    q:`A square has an area of 64 cm². Work out the length of one side. Give units.`,
    a:`8 cm`,
    e:`Cạnh hình vuông = căn bậc hai của diện tích = √64 = 8 cm.` },

  { s:"Math", topic:"Y8 · Area, perimeter & volume", sub:"Unit conversion (area)", year:8, exam:false,
    q:`Convert 6 cm² into mm².`,
    a:`600 mm²`,
    e:`1 cm = 10 mm, nên 1 cm² = 10 × 10 = 100 mm². Vậy 6 cm² = 6 × 100 = 600 mm².` },

  { s:"Math", topic:"Y8 · Area, perimeter & volume", sub:"Volume and capacity", year:8, exam:false,
    q:`A tank holds 4500 cm³ of water. How many litres is this? (1 litre = 1000 cm³)`,
    a:`4.5 litres`,
    e:`1 lít = 1000 cm³. Vậy 4500 cm³ = 4500 ÷ 1000 = 4.5 lít.` },

  { s:"Math", topic:"Y8 · Area, perimeter & volume", sub:"Volume word problem", year:8, exam:false,
    q:`A swimming pool is a cuboid measuring 50 m by 25 m with a depth of 3 m. Work out its volume. Give units.`,
    a:`3750 m³`,
    e:`Thể tích = dài × rộng × cao = 50 × 25 × 3 = 3750 m³.` }
);

/* ============================================================
   Y8 · NUMBERS   [exam:false]
   ============================================================ */
window.QBANK.push(
  { s:"Math", topic:"Y8 · Numbers", sub:"Adding negative numbers", year:8, exam:false,
    q:`Work out −12 + −15.`,
    a:`−27`,
    e:`Cộng hai số âm: kết quả vẫn âm và có độ lớn là tổng. −12 + −15 = −27.` },

  { s:"Math", topic:"Y8 · Numbers", sub:"Subtracting negative numbers", year:8, exam:false,
    q:`Work out 12 − −15.`,
    a:`27`,
    e:`Trừ một số âm giống như cộng số dương: 12 − (−15) = 12 + 15 = 27.` },

  { s:"Math", topic:"Y8 · Numbers", sub:"Multiplying negative numbers", year:8, exam:false,
    q:`Work out −6 × −4.`,
    a:`24`,
    e:`Âm nhân âm bằng dương (negative × negative = positive): −6 × −4 = 24.` },

  { s:"Math", topic:"Y8 · Numbers", sub:"Dividing negative numbers", year:8, exam:false,
    q:`Work out −20 ÷ 5.`,
    a:`−4`,
    e:`Âm chia dương bằng âm (different signs give a negative answer): −20 ÷ 5 = −4.` },

  { s:"Math", topic:"Y8 · Numbers", sub:"Difference of temperatures", year:8, exam:false,
    q:`The temperature in Moscow is −12 °C and in Florida it is 27 °C. Work out the difference in temperature.`,
    a:`39 °C`,
    e:`Hiệu nhiệt độ = 27 − (−12) = 27 + 12 = 39 °C.` },

  { s:"Math", topic:"Y8 · Numbers", sub:"Squaring", year:8, exam:false,
    q:`Work out (−5)².`,
    a:`25`,
    e:`Bình phương một số âm cho kết quả dương: (−5)² = −5 × −5 = 25.` },

  { s:"Math", topic:"Y8 · Numbers", sub:"Powers", year:8, exam:false,
    q:`Work out 2⁵.`,
    a:`32`,
    e:`2⁵ = 2 × 2 × 2 × 2 × 2 = 32.` },

  { s:"Math", topic:"Y8 · Numbers", sub:"Square root", year:8, exam:false,
    q:`Work out the positive square root of 144.`,
    a:`12`,
    e:`Căn bậc hai dương của 144 là số dương nhân với chính nó bằng 144: 12 × 12 = 144, nên √144 = 12.` },

  { s:"Math", topic:"Y8 · Numbers", sub:"Priority of operations", year:8, exam:false,
    q:`Work out 3 + 4 × 2.`,
    a:`11`,
    e:`Theo thứ tự BIDMAS, nhân trước cộng: 4 × 2 = 8, rồi 3 + 8 = 11.` },

  { s:"Math", topic:"Y8 · Numbers", sub:"Priority of operations with brackets", year:8, exam:false,
    q:`Work out (3 + 4)² − 12 ÷ 4.`,
    a:`46`,
    e:`BIDMAS: ngoặc trước (3 + 4) = 7, rồi luỹ thừa 7² = 49, rồi chia 12 ÷ 4 = 3, cuối cùng 49 − 3 = 46.` },

  { s:"Math", topic:"Y8 · Numbers", sub:"Prime factor decomposition", year:8, exam:false,
    q:`Write 300 as a product of its prime factors, using index notation.`,
    a:`2² × 3 × 5²`,
    e:`Phân tích: 300 = 2 × 150 = 2 × 2 × 75 = 2 × 2 × 3 × 25 = 2 × 2 × 3 × 5 × 5. Viết bằng luỹ thừa: 2² × 3 × 5².` },

  { s:"Math", topic:"Y8 · Numbers", sub:"Highest common factor", year:8, exam:false,
    q:`Work out the highest common factor (HCF) of 60 and 84.`,
    a:`12`,
    e:`60 = 2² × 3 × 5 và 84 = 2² × 3 × 7. Thừa số nguyên tố chung là 2² × 3 = 12. HCF là 12.` },

  { s:"Math", topic:"Y8 · Numbers", sub:"Lowest common multiple", year:8, exam:false,
    q:`Work out the lowest common multiple (LCM) of 8 and 36.`,
    a:`72`,
    e:`8 = 2³ và 36 = 2² × 3². LCM lấy luỹ thừa cao nhất của mỗi thừa số: 2³ × 3² = 8 × 9 = 72.` },

  { s:"Math", topic:"Y8 · Numbers", sub:"Index law (multiplying powers)", year:8, exam:false,
    q:`Write 3⁴ × 3³ as a single power of 3.`,
    a:`3⁷`,
    e:`Khi nhân các luỹ thừa cùng cơ số, cộng số mũ: 3⁴ × 3³ = 3⁴⁺³ = 3⁷.` },

  { s:"Math", topic:"Y8 · Numbers", sub:"Index law (dividing powers)", year:8, exam:false,
    q:`Write 6⁸ ÷ 6⁵ as a single power of 6.`,
    a:`6³`,
    e:`Khi chia các luỹ thừa cùng cơ số, trừ số mũ: 6⁸ ÷ 6⁵ = 6⁸⁻⁵ = 6³.` }
);
