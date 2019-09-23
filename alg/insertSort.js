// 插入排序
// function insertSort(arr) {
//   let len = arr.length;
//   for(let i = 1; i < len; i++) {
//     for(let j = i; j > 0; j--) {
//       if (arr[j] < arr[j-1]) [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
//     }
//   }
//   return arr;
// }

// function insertSort(arr) {
//   var len = arr.length;
//   for (var i = 1; i < len; i++) {
//     for (var j = i; j > 0; j--) {
//       if (arr[j-1] > arr[j]) [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
//     }
//   }
//   return arr;
// }

function insertSort(arr) {
  var len = arr.length;
  for (var i = 1; i < len; i++) {
    for (var j = i; j > 0; j--) {
      if (arr[j-1] > arr[j]) [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
    }
  }
  return arr;
}

const arr = insertSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48])

console.log(arr)
