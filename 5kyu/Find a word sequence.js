// Description:
//   Find a special word sequence that the tail of each word is the same as the head of the next word(the tail of last word is same as the head of first word).
//
// A global variable wordList is preloaded(given by a string array and all words are lowercase). All words should select from wordList.
//
//   An argument headTail will be given, like this:
//
// "c4d4e8"
// It means:
//
//   Three word should be find out
// First word is "c??d"
// (head is "c",tail is "d", length is 4)
// Second word is "d??e"
// (head is "d",tail is "e", length is 4)
// Third word is "e??????c"
// (head is "e",tail is "c", length is 8)
// The number between head and tail is the length of word. It always be a positive integer.
//
//   The result should be an array that contains all words:
//
//   The result of example above should be one of:
//   ['card','date','economic']
//     ['cold','date','economic']
// If no valid result found, return an empty array [].

function findWordSequence(headTail){
  let h = headTail.split(/(?=[a-z])/);
  let arr = [];
  for (let i = 0; i < h.length; i++) {
    let arrEl = [];
    for (let j = 0; j < h[i].slice(1); j++) {
      if (j === 0) {
        arrEl.push(h[i][0]);
      } else if (j !== 0 && j !== h[i].slice(1) - 1) {
        arrEl.push('*');
      } else if (j === h[i].slice(1) - 1) {
        if (i === h.length - 1) {
          arrEl.push(h[0][0]);
        } else {
          arrEl.push(h[i + 1][0]);
        }
      }
    }
    arr.push(arrEl.join(''));
    arrEl = [];
  }
  let res = arr.map(a => wordList.filter(w => w.length === a.length && w[0] === a[0] && w[w.length - 1] === a[a.length - 1])[0]);
  if (res.some(a => a === undefined)) {
    return [];
  } else {
    return res;
  }
}
