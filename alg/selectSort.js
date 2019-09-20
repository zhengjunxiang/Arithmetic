// 选择排序
// function selectSort(arr) {
//   let len = arr.length;
//   for (var i = 0; i < len-1; i++) {
//     for(var j = i+1; j < len; j++) {
//       if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }
//   return arr;
// }

// function selectSort(arr) {
//   var len = arr.length;
//   for (var i = 0; i < len-1; i++) {
//     for(var j = i+1; j < len; j++) {
//       if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }
//   return arr;
// }

function selectSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i+1; j < len; j++) {
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}

const arr = selectSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48])

console.log(arr)
