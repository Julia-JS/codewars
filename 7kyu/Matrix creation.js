// Create an identity matrix of the specified size( >= 0).
//
// Some examples:
//
//   (1)  =>  [[1]]
//
//   (2) => [ [1,0],
//          [0,1] ]
//
//            [ [1,0,0,0,0],
//            [0,1,0,0,0],
//   (5) =>   [0,0,1,0,0],
//            [0,0,0,1,0],
//            [0,0,0,0,1] ]

function getMatrix(number) {
  return Array.from({length: number}, (a, i) => Array.from({length: number}, (b, j) => i === j ? 1 : 0));
}
