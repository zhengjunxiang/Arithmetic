function throttle(fn, delay) {
  let prev = Date.now();
  return function() {
    let context = this;
    let now = Date.now();
    if (now - prev >= delay) {
      fn.apply(context, arguments);
      prev = Date.now();
    }
  }
}

function throttle(fn, delay) {
  var prev = Date.now();
  return function() {
    let context = this;
    let now = Date.now;
    if (now - prev >= delay) {
      fn.apply(context, arguments);
      prev = Date.now();
    }
  }
}

function throttle(fn, delay) {
  let prev = Date.now(), timer = null;
  return function() {
    if (timer) clearTimeout(timer);
    const context = this, args = arguments, now = Date.now();
    if (now - prev >= delay) {
      fn.apply(this, arguments);
      prev = Date.now();
    } else timer = setTimeout(() => fn.apply(context, args), delay - now + prev);
  }
}

function throttle(fn, delay) {
  var prev = Date.now();
  return function() {
    var now = Date.now();
    if (now - prev >=delay) {
      fn.apply(this, [...arguments]);
      prev = Date.now();
    }
  }
}

function throttle(fn, delay) {
  var prev = Date.now();
  return function() {
    var now = Date.now();
    if (now - prev >= delay) {
      fn.apply(this, arguments);
      prev = Data.now();
    }
  }
}
