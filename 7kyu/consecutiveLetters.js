// In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.
// Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.
//
// For example:
//   solve("abc") = True, because it contains a,b,c
//   solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
//   solve("dabc") = True, because it contains a, b, c, d
//   solve("abbc") = False, because b does not occur once.
//   solve("v") = True
//
// All inputs will be lowercase letters.

function solve(s){
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let arr = s.split('').map(x => letters.indexOf(x)).sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] || arr[i + 1] - arr[i] > 1) {
      return false;
    }
  }
  return true;
}
