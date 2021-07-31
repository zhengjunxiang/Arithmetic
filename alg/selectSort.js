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

// function selectSort(arr) {
//   var len = arr.length;
//   for (var i = 0; i < len - 1; i++) {
//     for (var j = i+1; j < len; j++) {
//       if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }
//   return arr;
// }

// function selectSort(arr) {
//   if (arr.length <=1) return arr;
//   for(var i = 0; i < arr.length - 1; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) [arr[j], arr[i]] = [arr[i], arr[j]];
//     }
//   }
//   return arr;
// }

function selectSort(arr) {
  if (arr.length < 2) return arr;
  for(let i = 0; i < arr.length -1; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}

const arr = selectSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48])

console.log(arr)
