// Easy; Make a box
// Given a number as a parameter, return an array containing strings which form a box.
//   Like this:
//
// n = 5
//
//   [
//   '-----',
//     '-   -',
//     '-   -',
//     '-   -',
//     '-----'
//   ]
// n = 3
//
//   [
//   '---',
//     '- -',
//     '---'
//   ]

function box(n){
  return Array.from({length: n}, (a, i) => i === 0 || i === n - 1 ? '-'.repeat(n) : '-' + ' '.repeat(n - 2) + '-');
}
