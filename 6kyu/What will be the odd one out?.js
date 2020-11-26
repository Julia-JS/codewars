// Complete the function that takes a string as an input, and return a list of all the unpaired characters
// (i.e. they show up an odd number of times in the string), in the order they were encountered as an array.
// In case of multiple appearances to choose from, take the last occurence of the unpaired character.
//
// Notes:
// A wide range of characters is used, and some of them may not render properly in your browser.
// Your solution should be linear in terms of string length to pass the last test.
// Examples
// "Hello World"   -->  ["H", "e", " ", "W", "r", "l", "d"]
// "Codewars"      -->  ["C", "o", "d", "e", "w", "a", "r", "s"]
// "woowee"        -->  []
// "wwoooowweeee"  -->  []
// "racecar"       -->  ["e"]
// "Mamma"         -->  ["M"]
// "Mama"          -->  ["M", "m"]

function oddOneOut(str) {
  let obj = str.split('').reduce((a, i) => {
    a[i] = a[i] ? a[i] + 1 : 1;
    return a
  }, {});
  let arr = [];
  str = str.split('').reverse();
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] % 2) {
      delete obj[str[i]];
      arr.push(str[i]);
    }
  }
  return arr.reverse();
}
