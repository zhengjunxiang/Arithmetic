// function binaryFind(arr, target) {
//   var low = 0, high = arr.length-1, mid;
//   while (low <= high) {
//     mid = Math.floor((low+high)/2);
//     if (target === arr[mid]) return mid;
//     if (target > arr[mid]) low = mid+1;
//     else high = mid-1;
//   }
//   return -1;
// }

function binaryFind(arr, target) {
  var low = 0, high = arr.length-1, mid;
  while(low <= high) {
    mid = Math.floor((low+high)/2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
}

var n = binaryFind([1,2,4,6,7,9], 1);

console.log(n)
