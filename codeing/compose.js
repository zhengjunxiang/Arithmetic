// function compose() {
//   var args = arguments;
//   var start = arguments.length - 1;
//   return function() {
//     var result = args[start].apply(this, arguments);
//     while (start--) result = args[start].call(this, result);
//     return result;
//   }
// }

function compose() {
  const args = arguments;
  let start = args.length - 1;
  return function() {
    let result = args[start].apply(this, arguments);
    while(start--) result = args[start].call(this, result);
    return result;
  }
}

function compose() {
  const args = arguments;
  let start = args.length - 1;
  return function() {
    let result = args[start].apply(this, arguments);
    while(start--) result = args[start].call(this, result);
    return result;
  }
}

function compose() {
  const args = arguments;
  let start = args.length - 1;
  return function() {
    let result = args[start].apply(this, arguments);
    while(start--) result = args[start].call(this, result);
    return result;
  }
}

var toUpperCase = function (x) { return x.toUpperCase(); };
var hello = function (x) { return 'HELLO, ' + x; };

var fn = compose(hello, toUpperCase);

console.log(fn('James'))

let a = {
  name: 'james'
}

console.log('a.name', a.name)
console.log('b.name', b.name)

console.log([1,2,3,4,5].splice(1))