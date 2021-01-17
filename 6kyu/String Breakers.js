// I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces. If there are leftover characters, include those as well.
//
//   Example:
//
// N = 5;
//
// String = "This is an example string";
//
// Return value:
//   Thisi
// sanex
// ample
// strin
// g
//
// Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'

function stringBreakers(n, string){
  let res = '';
  const stringNew = string.replace(/[ ]/g, '');
  for (let i = 0; i < Math.ceil(string.length / n); i++) {
    res += stringNew.slice(i * n, (i + 1) * n);
    res += '\n';
  }

  return res.trim();
}
