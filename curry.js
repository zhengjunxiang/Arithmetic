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

function sub_curry(fn) {
  const args = [...arguments].slice(1);
  return function() {
    return fn.apply(this, args.concat([...arguments]));
  }
}

function curry(fn, length) {
  let len = length || fn.length;
  return function() {
    if (len > arguments.length) {
      const combined = [fn].concat([...arguments]);
      return curry(sub_curry.apply(this, combined), len - arguments.length)
    } else return fn.apply(this, [...arguments])
  }
}

const fn = curry(function(a,b,c) {
  return [a,b,c]
});

console.log(fn('a')('b')('c'))
