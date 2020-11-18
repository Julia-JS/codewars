// Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.
//
//   Note: This includes any characters
//
// Examples
// 'abbbbc'  => 'abc'    #  answer: 3
// 'abbcca'  => 'abca'   #  answer: 2
// 'ab cca'  => 'ab ca'  #  answer: 1

function countRepeats(str) {
  return (str.match(/(?=(.))\1{2,}/g) || []).filter(a => a.length > 1).map(a => a.length - 1).reduce((a, b) => a + b, 0);
}
