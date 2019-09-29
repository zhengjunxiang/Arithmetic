Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') throw new TypeError('Not Function');
  context = context || window;
  var args = [...arguments].slice[1];
  var fn = Symbol('fn');
  context[fn] = this;
  var result = context[fn](...args)
  delete context[fn];
  return result;
}

Function.prototype.myCall = function (context) {
  if (typeof this !== 'function') throw new TypeError('Not Function');
  context = context || window;
  context.fn = this;
  var args = [...arguments].slice(1);
  var result = context.fn(...args);
  delete context[fn];
  return result;
}
