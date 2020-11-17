// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
//
// Your task is to process a string with "#" symbols.
//
//   Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
  var res = [];
  for (let i = 0; i < s.length; i++) {
    res.push(s[i]);
    if(s[i] === '#') {
      res.pop();
      res.pop();
    }
  }
  return res.join('');
};
