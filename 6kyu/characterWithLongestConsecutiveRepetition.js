// For a given string s find the character c (or C) with longest consecutive repetition and return:
// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.
//
// For empty string return:
// ["", 0]

function longestRepetition(s) {
  var parts = s.length ? s.match(/(.)\1*/g) : '';
  var maxLength = s.length ? parts[0].length : 0;
  var maxId = 0;

  for (let i = 1; i < parts.length; i++) {
    if (parts[i].length > maxLength) {
      maxLength = parts[i].length;
      maxId = i;
    }
  }
  return [s.length ? parts[maxId][0] : '', maxLength];
}
