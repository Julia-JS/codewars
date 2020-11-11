// Your task is to write function factorial

function factorial(n){
  return Array.from({length: n},(_, i) => i + 1).reduce((a, b) => a * b, 1);
}
