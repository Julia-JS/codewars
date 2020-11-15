// Your task is to generate the Fibonacci sequence to n places, with each alternating value as "skip". For example:
//
// "1 skip 2 skip 5 skip 13 skip 34"
//
// Return the result as a string
//
// You can presume that n is always a positive integer between (and including) 1 and 64.

function skiponacci(n) {
  if (n < 2) {
    return [1];
  } else {
    var arr = [0, 1];
    for (let i = 1; i < n; i++) {
      arr[i + 1] = arr[i - 1] + arr[i];
    }
  }
  return arr.slice(1).map((a, i) => i % 2 ? 'skip' : a).join(' ');
}

function skiponacci(n) {
  var a = 0, b = 1;
  return Array.from({length: n}, (_,i) => {[a, b] = [b, a + b]; return i % 2 ? 'skip' : a;}).join(' ');
}
