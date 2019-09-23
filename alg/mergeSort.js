// 归并排序
// function mergeSort(arr) {
//   if (arr.length < 2) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = arr.slice(0, mid), right = arr.slice(mid);
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   var arr = [];
//   while(left.length && right.length) {
//     if (left[0] > right[0]) arr.push(right.shift());
//     else arr.push(left.shift());
//   }
//   while(left.length)
//     arr.push(left.shift());
//   while(right.length)
//     arr.push(right.shift());
//   return arr;
// }

// function mergeSort(arr) {
//   if (arr.length < 2) return arr;
//   var mid = Math.floor(arr.length/2);
//   var left = arr.slice(0, mid), right = arr.slice(mid);
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   var arr = [];
//   while(left.length && right.length) {
//     if (left[0] > right[0]) arr.push(right.shift());
//     else arr.push(left.shift());
//   }
//   while(left.length) {
//     arr.push(left.shift());
//   }
//   while(right.length) {
//     arr.push(right.shift());
//   }
//   return arr;
// }

// function mergeSort(arr) {
//   if (arr.length < 2) return arr;
//   const mid = Math.floor(arr.length / 2), left = arr.slice(0, mid), right = arr.slice(mid);
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   var arr = [];
//   while(left.length && right.length) {
//     if (left[0] > right[0]) arr.push(right.shift());
//     else arr.push(left.shift());
//   }
//   while(left.length)
//     arr.push(left.shift());
//   while(right.length)
//     arr.push(right.shift());
//   return arr;
// }

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length/2), left = arr.slice(0, mid), right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const arr = [];
  while(left.length && right.length) {
    if (left[0] > right[0]) arr.push(right.shift());
    else arr.push(left.shift());
  }
  while(left.length)
    arr.push(left.shift());
  while(right.length)
    arr.push(right.shift());
  return arr;
}

var arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(mergeSort(arr));
