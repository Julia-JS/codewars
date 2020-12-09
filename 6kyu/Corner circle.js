// Corner circle
// A circle with radius r is placed in a right angled corner, where r is an integer and ≥ 1.
//
// circles
// What is the radius of the smaller circle, rounded to two decimal places?

function cornerCircle(r) {
  let m = Math.SQRT2;
  return +((r * m - r - (((r * m - r) ** 2) / (r + r * m))) / 2).toFixed(2);
}
