// Description:
// There is a 2D array arr:
//
// [[1],[2,3],[4,5,6],[7,8,9,10]]
// Task1: Write a function split. Split 2D array to two arrays:
//
// Result:
// array 1: all numbers in 2D array   array 2: Leave all subarrays and
// fill in the length of
// each subarray
// [  [1,2,3,4,5,6,7,8,9,10],            [[1],[2],[3],[4]]  ]
// Task2: Write a function join. Join two array(like the result above) to one array(like the arr above)
//
// Some Examples
// split:
//
// arr= [[1],[2,3],[4,5,6],[7,8,9,10]]
// split(arr) === [  [1,2,3,4,5,6,7,8,9,10],  [[1],[2],[3],[4]]  ]
//
// arr= [[1,3,5],[2,4,6],[7,8,9]]
// split(arr) === [  [1,3,5,2,4,6,7,8,9],  [[3],[3],[3]]  ]
//
// join:
//
// arr1=[1,2,3,4,5,6,7,8,9,10],  arr2=[[1],[2],[3],[4]]
// join(arr1,arr2) === [[1],[2,3],[4,5,6],[7,8,9,10]]
//
// arr1=[1,3,5,2,4,6,7,8,9],  arr2=[[3],[3],[3]]
// join(arr1,arr2) === [[1,3,5],[2,4,6],[7,8,9]]

function split(arr){
  return [[].concat(...arr), arr.map(a => [a.length])];

}

function join(arr1,arr2){
  let arr = [];
  for (let i = 0; i < arr2.length; i++) {
    arr.push(arr1.splice(0, arr2[i]));
  }
  return arr;
}
