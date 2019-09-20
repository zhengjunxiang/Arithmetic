// 希尔排序
// function shellSort(arr, gaps) {
//   for(var i = 0; i < gaps.length; i++) {
//     let gap = gaps[i];
//     for(var j = i+gap; j < arr.length; j++) {
//       for(var k = j; k > 0; k-=gap) {
//         if (arr[k-gap] > arr[k]) [arr[k-gap], arr[k]] = [arr[k], arr[k-gap]];
//       }
//     }
//   }
//   return arr;
// }

function shellSort(arr, gaps) {
  for (var i = 0; i < gaps.length; i++) {
    var gap = gaps[i];
    for (var j = i + gap; j < arr.length; j += gap) {
      for (var k = j; k > 0; k-=gap ) {
        if (arr[k-gap] > arr[k]) [arr[k-gap], arr[k]] = [arr[k], arr[k-gap]];
      }
    }
  }
  return arr;
}

const arr = shellSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48], [3,2,1])

console.log(arr)
