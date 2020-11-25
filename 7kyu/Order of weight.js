// Given an array of strings, sort the array into order of weight from light to heavy.
//
// Weight units are grams(G), kilo-grams(KG) and tonnes(T).
//
// Arrays will always contain correct and positive values aswell as uppercase letters.

function arrange(arr){
  let arrG = arr.filter(a => a.includes('G') && !a.includes('KG')).map(a => a.replace('G', '')).sort((a, b) => a - b).map(a => a + 'G');
  let arrKG = arr.filter(a => a.includes('KG')).map(a => a.replace('KG', '')).sort((a, b) => a - b).map(a => a + 'KG');
  let arrT = arr.filter(a => a.includes('T')).map(a => a.replace('T', '')).sort((a, b) => a - b).map(a => a + 'T');
  return arrG.concat(arrKG).concat(arrT);
}
