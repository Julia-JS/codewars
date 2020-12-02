// In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula (n k) = n!/(n-k)!, where n denotes a row of the triangle, and k is a position of a term in the row.
//
// Pascal's Triangle
//
// You can read Wikipedia article on Pascal's Triangle for more information.
//
// Task
// Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.
//
// n guarantees that terms of the Triangle won't overflow.
//
// Example:
// n = 1: [1]
// n = 2: [1,  1, 1]
// n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]

function pascalsTriangle(n) {
  let factorial = (k) => {
    let f = 1;
    for (let i = 1; i <= k; i++) {
      f = f * i;
    }
    return f;

  };
  let arr = Array.from({length: n}, (a, i) => Array.from({length: i + 1}, (b, j) => j === 0 || j === i ? 1 : Math.round(factorial(i) / (factorial(i - j) * factorial(j)))));

  return [].concat(...arr);
}

function pascalsTriangle(n) {
  let arr = [];
  let l = 0;
  for (let i = 0; i < n; i++) {
    l = arr.length - i;
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        arr.push(1);
      } else {
        arr.push(arr[l + j] + arr[l + j - 1]);
      }
    }
  }
  return arr;
}
