// 第二版
// function sub_curry(fn) {
//   var args = [].slice.call(arguments, 1);
//   return function () {
//     return fn.apply(this, args.concat([].slice.call(arguments)));
//   };
// }

// function curry(fn, length) {
//   length = length || fn.length;
//   var slice = Array.prototype.slice;
//   return function () {
//     if (arguments.length < length) {
//       var combined = [fn].concat(slice.call(arguments));
//       return curry(sub_curry.apply(this, combined), length - arguments.length);
//     } else return fn.apply(this, arguments);
//   };
// }

// function sub_curry(fn) {
//   var args = [].slice.call(arguments, 1);
//   return function() {
//     return fn.apply(this, args.concat([].slice.call(arguments)));
//   }
// }

// function curry(fn, length) {
//   length = length || fn.length;
//   var slice = Array.prototype.slice;
//   return function() {
//     if (arguments.length < length) {
//       var combined = [fn].concat(slice.call(arguments));
//       return curry(sub_curry.apply(this, combined), length - arguments.length);
//     } else return fn.apply(this, arguments);
//   }
// }

// function sub_curry(fn) {
//   var args = [].slice.call(arguments, 1);
//   return function() {
//     return fn.apply(this, args.concat([].slice.call(arguments)));
//   }
// }

// function curry(fn, length) {
//   length = length || fn.length;
//   var slice = Array.prototype.slice;
//   return function() {
//     if (length > arguments.length) {
//       var combined = [fn].concat(slice.call(arguments));
//       return curry(sub_curry.apply(this, combined), length - arguments.length);
//     } else return fn.apply(this, arguments);
//   }
// }

// function sub_curry(fn) {
//   var args = [].slice.call(arguments, 1);
//   return function() {
//     return fn.apply(this, args.concat([].slice.call(arguments)));
//   }
// }

// function curry(fn, length) {
//   length = length || fn.length;
//   var slice = Array.prototype.slice;
//   return function() {
//     if (length > arguments.length) {
//       var combined = [fn].concat(slice.call(arguments));
//       return curry(sub_curry.apply(this, combined), length - arguments.length);
//     } else return fn.apply(this, arguments);
//   }
// }

// function sub_curry(fn) {
//   const args = [...arguments].slice(1);
//   console.log('args', args);
//   return function() {
//     console.log('arguments', ...arguments);
//     return fn.apply(this, args.concat([...arguments]));
//   }
// }

// function curry(fn, length) {
//   // 首次调用时，记录函数的参数个数
//   let len = length || fn.length;
//   console.log('len', len);
//   return function() {
//     console.log('arguments-curry:', ...arguments);
//     if (len > arguments.length) {
//       const combined = [fn].concat([...arguments]);
//       return curry(sub_curry.apply(this, combined), len - arguments.length)
//     } else return fn.apply(this, [...arguments])
//   }
// }

function curry(fn) {
  const argsLength = fn.length;
  const arrArgs = [];
  return function fc() {
    arrArgs.push(...arguments);
    if (argsLength - arrArgs.x <=0) return fn.apply(this, arrArgs);
    else return fc;
  }
}

const fn = curry(function(a,b,c) {
  return [a,b,c]
});

console.log(fn('a')('b')('c'))
