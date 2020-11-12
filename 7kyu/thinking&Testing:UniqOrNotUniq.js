// No Story
//
// No Description
//
// Only by Thinking and Testing
//
// Look at result of testcase, guess the code!

function testit(a,b){
  return a.filter((a, i, x) => x.indexOf(a) === i).concat(b.filter((a, i, x) => x.indexOf(a) === i)).sort((a, b) => a - b);
}
