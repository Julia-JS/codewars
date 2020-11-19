// No Story
//
// No Description
//
// Only by Thinking and Testing
//
// Look at the result of testcase, guess the code!

function testIt(a, b) {
  return (a <= 9 && b <= 9) ? a * b : a.toString().split('').reduce((a, b) => +a + +b) * b.toString().split('').reduce((a, b) => +a + +b);
}
