// function recursion1(arr) {
//   const len = arr.length;
//   if (len === 1) return arr[0];
//   return arr.pop() * recursion1(arr);
// }

// function recursion1(arr, sum) {
//   const len = arr.length;
//   if (len === 1) return sum;
//   return recursion1(arr, arr.pop() * sum);
// }

// function factorial(n) {
//   if (n === 1) return 1;
//   return n + factorial(n - 1);
// }

function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n + total);
}

const array = [1,3,4,5,6,7,8,9,1,2,3,4,512,134,12]

// console.log(recursion1(array, array[0]))

console.log(factorial(1000, 1))
