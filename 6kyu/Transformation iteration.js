// Write
//
// function transform(source, target){}
// that takes in 2 strings and transforms source into the target string.
//
//   For example
//
// transform('car','see') === ["car", "sar", "ser", "see"]
// transform('floor','brake') === ["floor", "bloor", "broor", "braor", "brakr", "brake"]
// transform('kata','math') === ["kata", "mata", "math"]
// source and target will always be of the same length

function transform(source, target) {
  let arr = [];
  for (let i = 0; i < source.length + 1; i++) {
    arr.push(target.slice(0, i) + source.slice(i));
  }
  return [...new Set(arr)];
}
