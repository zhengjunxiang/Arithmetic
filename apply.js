// Function.prototype.apply = function(context) {
//   if (typeof this !== 'function') throw new TypeError('Not Function');
//   context = context || window;
//   context.fn = this;
//   let result;
//   if (arguments[1]) {
//     result = context.fn(...arguments[1]);
//   } else {
//     result = context.fn();
//   }
//   delete context.fn;
//   return result;
// }

// Function.prototype.apply = function(context) {
//   if (typeof this !== 'function') throw new TypeError('Not Function');
//   context = context || window;
//   context.fn = this;
//   let result;
//   if (arguments[1]) {
//     result = context.fn(...arguments[1]);
//   } else {
//     result = context.fn();
//   }
//   delete context.fn;
//   return result;
// }

// Function.prototype.myApply = function(context) {
//   if (typeof this !== 'function') throw new TypeError('Not Function');
//   context = context || window;
//   context.fn = this;
//   let result;
//   if (arguments[1]) {
//     result = context.fn(...arguments[1]);
//   } else {
//     result = context.fn();
//   }
//   delete context[fn];
//   return result;
// }

Function.prototype.apply = function(context) {
  if (typeof this !== 'function') throw new TypeError('Not Function');
  context = context || window;
  let result = '';
  context.fn = this;
  if (arguments[1]) result = context.fn(...arguments[1]);
  else result = context.fn();
  delete context[fn];
  return result;
}