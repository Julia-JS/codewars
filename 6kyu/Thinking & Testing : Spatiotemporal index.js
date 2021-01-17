// No Story
//
// No Description
//
// Only by Thinking and Testing
//
// Look at result of testcase, guess the code!

// //KeyWords:datatype, convert, sort, length, other...
// Test.assertSimilar(testit(["1m","2m","3m"]), ["1m","2m","3m"], "")
// Test.assertSimilar(testit(["3m","2m","1m"]), ["1m","2m","3m"], "")
// Test.assertSimilar(testit(["1km","2dm","3cm"]), ["3cm","2dm","1km"], "")
// Test.assertSimilar(testit(["1km","1m","1dm","1cm","1mm"]), ["1mm","1cm","1dm","1m","1km"], "")
// //Click "Submit" try more testcase...

function testit(arr){
  const metricsLength = {
    mm: 0.001,
    cm: 0.01,
    dm: 0.1,
    m: 1,
    km: 1000
  };

  const metricsTime = {
    ms: 1 / 600000,
    s: 1 / 60,
    m: 1,
    h: 60,
    d: 1440
  };

  let obj = {};

  if (arr.every(a => metricsLength[a.match(/[a-z]/ig).join('')])) {
    for (let i = 0; i < arr.length; i++) {
      obj[arr[i]] = +(arr[i].match(/[0-9]/g).join('')) * metricsLength[arr[i].match(/[a-z]/ig).join('')];
    }
  } else if (arr.every(a => metricsTime[a.match(/[a-z]/ig).join('')])) {
    for (let i = 0; i < arr.length; i++) {
      obj[arr[i]] = +(arr[i].match(/[0-9]/g).join('')) * metricsTime[arr[i].match(/[a-z]/ig).join('')];
    }  } else {
    return null;
  }

  return Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
}
