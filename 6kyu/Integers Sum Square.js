// Given positive integers n and m, find all integers less than n whose the square of the sum of thier digits is equal to m. If you haven't such integers return No result.
//
// m=5, n=4    -> [2]
// m=50, n=15  -> 'No result'
// m=156, n=16 -> [4,13,22,31,40,103,112,121,130]
// m=297, n=25 -> [5,14,23,32,41,50,104,113,122,131,140,203,212,221,230]

const intSumSq = (n,m) => {
  if ((m ** .5) % 1) {
    return 'No result';
  }
  let res = Array.from({length: n - 1}, (a, i) => i + 1).filter(b => b.toString().split('').reduce((x, y) => +x + +y, 0) === m ** .5);
  return res.length ? res : 'No result';
}
