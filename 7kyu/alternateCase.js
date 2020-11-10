// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper.
// E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i).toLowerCase()) {
      arr.push(s.charAt(i).toUpperCase());
    } else if (s.charAt(i) === s.charAt(i).toUpperCase()) {
      arr.push(s.charAt(i).toLowerCase());
    }
  }
  return arr.join('');
}
