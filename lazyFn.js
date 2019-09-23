var lazy = (function() {
  var instance = null;
  return function() {
    if (instance) return instance;
    return instance = new Date();
  }
})();

function lazy() {
  if (lazy.inst) return lazy.inst;
  return lazy.inst = new Date();
}

function lazy() {
  if (lazy.fn) return lazy.fn;
  return lazy.fn = new Date();
}

function lazy() {
  var instance = new Date();
  lazy = function() {
    return instance;
  }
  return instance;
}

function lazy() {
  let instance = new Date();
  lazy = function () {
    return instance;
  }
  return instance;
}