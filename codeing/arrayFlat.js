// function flat(arr) {
//   let array = [];
//   for(var i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       array = array.concat(flat(arr[i]));
//     } else array.push(arr[i]);
//   }
//   return array;
// }

// function flat(arr) {
//   return arr.toString().split(',').map(item => item-0);
// }

// function flat(arr) {
//   return arr.reduce(function(prev, next) {
//     return prev.concat(Array.isArray(next) ? flat(next) : next);
//   }, []);
// }

// function flat(arr) {
//   while (arr.some(function(item) {
//     return Array.isArray(item);
//   })) {
//     arr = [].concat(...arr)
//   }
//   return arr;
// }

// function flat(arr) {
//   return arr.toString().split(',').map(item => item-0);
// }

// function flat(arr) {
//   return arr.reduce(function(prev, next) {
//     return prev.concat(Array.isArray(next) ? flat(next) : next);
//   }, [])
// }

// function flat(arr) {
//   while(arr.some(item => Array.isArray(item)))
//     arr = [].concat(...arr);
//   return arr;
// }

// function flat(arr) {
//   while(arr.some(item => Array.isArray(item)))
//     arr = [].concat(...arr);
//   return arr;
// }

function flat(arr) {
  return arr.reduce(function(prev, next) {
    return prev.concat(Array.isArray(next) ? flat(next) : next);
  }, []);
}

var arr = flat([1,2,[342,52, [34,545], [4,[6,[32]]]], 12, [21,4]])

console.log(arr)
