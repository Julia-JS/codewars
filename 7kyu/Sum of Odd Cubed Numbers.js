// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined/None/nil/NULL if any of the values aren't numbers.

function cubeOdd(arr) {
  return arr.every(a => typeof a === 'number') ? arr.map(a => a % 2 ? a ** 3 : 0).reduce((a, b) => a + b) : undefined;
}
