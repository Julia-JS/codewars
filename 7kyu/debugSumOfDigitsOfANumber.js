// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.
//
// Example
// 123  => 6
// 223  => 7
// 1337 => 15

function getSumOfDigits(integer) {
  var sum = 0;
  for(var ix = 0; ix < integer.toString().length; ix++) {
    sum += +integer.toString().charAt(ix);
  }
  return sum;
}
