// Given a string of binary numbers of length 3 sort the numbers in ascending order but only order the even numbers and leave all odd numbers in their place.
//
//   Example:
//
// evenBinary("101 111 100 001 010") // returns "101 111 010 001 100"
// Note: make sure all the binary numbers have a length of 3

function evenBinary(n) {
  let evens = n.split(' ').filter(a => !(parseInt(a, 2) % 2)).sort((x, y) => parseInt(x, 2) - parseInt(y, 2));
  return n.split(' ').map(a => !(parseInt(a, 2) % 2) ? evens.shift() : a).join(' ');
}
