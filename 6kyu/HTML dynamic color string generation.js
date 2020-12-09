// Generate a valid randomly generated rgb color string. Assume all of them have 6 digits always.
//
// Valid Output
// #ffffff
// #25a403
// #000001
//
// Non-Valid Output
// #fff
// #aaa
// #zzzzz
// cafebabe
// #a567567676576756A7

var generateColor = function() {
  let c = '0123456789abcdef';
  return '#' + (Array.from({length: 6}, (a, i) => c[Math.round(Math.random().toString() * 16)])).join('');
};
