function myNew(fn) {
  return function() {
    let obj = {
      __proto__: fn.prototype
    }
    fn.call(obj, ...arguments);
    return obj;
  }
}

function myNew(fn) {
  return function() {
    var obj = {
      __proto__: fn.prototype
    };
    fn.apply(obj, arguments);
    return obj;
  }
}

function myNew(fn) {
  return function() {
    var obj = {
      __proto__: fn.prototype
    };
    fn.apply(obj, arguments);
    return obj;
  }
}

function myNew(fn) {
  return function () {
    const obj = {
      __proto__: fn.prototype
    }

    fn.apply(obj, arguments);
    return obj;
  }
}

