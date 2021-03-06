// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//
// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {
  var arr = {};
  string.split('').map((i) => arr[i] = arr[i] + 1 || 1);
  return arr;
}

function count (string) {
  return string.split('').reduce((a, i) => (a[i] = a[i] + 1 || 1, a), {});
}
