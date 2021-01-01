// Given an array of integers, find the one that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  const obj = [...A].reduce((a, i) => {a[i] = a[i] ? a[i] + 1 : 1; return a}, {});
  return +Object.entries(obj).filter(a => (a[1] % 2))[0][0];
}
