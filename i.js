// let company = { // тот же самый объект, сжатый для краткости
//   sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//   development: {
//     sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//     internals: [{name: 'Jack', salary: 1300}]
//   }
// };
//
// sumSalaries = (dep) => {
//   if (Array.isArray(dep)) {
//     return dep.reduce((a, b) => a + b.salary, 0);
//   } else {
//     let sum = 0;
//     for (let subDep of Object.values(dep)) {
//       sum += sumSalaries(subDep);
//       console.log(subDep);
//     }
//     return sum;
//   }
// };
//
// console.log(sumSalaries(company));

// sumTo = (n) => {
//   let sum = 0;
//
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//
//   return sum;
// };
//
// console.log(sumTo(100));

// sumTo = (n) => {
//   return n === 1 ? n : n + sumTo(n - 1);
// };
//
// console.log(sumTo(100));

// sumTo = (n) => {
//   return (n + 1) * n / 2;
// };
//
// console.log(sumTo(100));

// f = (n) => n === 1 ? n : n * f(n - 1);
// console.log(f(10));

// fib = (n) => {
//   let arr = [1, 1];
//
//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 2] + arr[i - 1]);
//   }
//
//   return arr[n];
// };
//
// console.log(fib(5));

// fib = (n) => {
//   return n <= 1 ? 1 : fib(n - 1) + fib(n - 2);
// };
//
// console.log(fib(77));

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// printList = (list) => {
//   let tmp = list;
//
//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }
// };
//
// printList(list);

// printList = (list) => {
//   if (list.next) {
//     printList(list.next);
//   }
//
//   console.log(list.value);
// };
//
// printList(list);

// f = (first, second, ...args) => {
//   let sum = 0;
//   for (let i of args) {
//     sum += i;
//   }
//   console.log(first);
//   console.log(second);
//   console.log(args[0]);
// };
//
// f(1, 2, 3, 4, 5);

// showName = () => {
//   console.log( arguments.length );
//   console.log( arguments[0] );
//   console.log( arguments[1] );
//
//   // for (let arg of arguments) alert(arg);
// }

// showName('first');

