// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.
//
//   For example:
// solve("xyab","xzca") = "ybzc"
// --The first string has 'yb' which is not in the second string.
// --The second string has 'zc' which is not in the first string.
//   Notice also that you return the characters from the first string concatenated with those from the second string.

function solve(a,b){
  var firstArr = [];
  var secondArr = [];

  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a.charAt(i))) {
      firstArr.push(a.charAt(i));
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (!a.includes(b.charAt(i))) {
      secondArr.push(b.charAt(i));
    }
  }

  return firstArr.join('') + secondArr.join('');
};

function solve(a,b){
  return [...a].map(a => !b.includes(a) ? a : '').concat([...b].map(b => !a.includes(b) ? b : '')).join('');
};
