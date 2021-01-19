// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
//
//   Note: no empty arrays will be given.
//
//   Examples
//   [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
//   [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
//   [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr.filter(a => a === arr[i]).length;
  }

  return Math.max(...Object.keys(obj).filter(key => obj[key] === Math.max(...Object.values(obj))));
}
