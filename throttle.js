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
  let prev = Date.now();
  let timer = null;
  return function() {
    clearTimeout(timer);
    const context = this;
    const args = arguments;
    let now = Date.now();
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay - (now - prev));
    if (now - prev >= delay) {
      clearTimeout(timer);
      timer = null;
      fn.apply(this, arguments);
      prev = Date.now();
    }
  }
}
