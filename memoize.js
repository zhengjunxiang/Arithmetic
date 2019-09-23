function memoize(fn) {
  var cache = {};
  return function() {
    var key = Array.prototype.join.call(arguments, ',');
    if (key in cache) return cache[key];
    else return cache[key] = fn.apply(this, arguments);
  }
}

function memoize(fn) {
  var cache = {};
  return function () {
    var key = [...arguments].join(',');
    if (cache[key]) return cache[key];
    else cache[key] = fn.apply(this, [...arguments]);
  }
}