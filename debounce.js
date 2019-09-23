function debounce(fn, delay) {
  let timer = null;
  return function() {
    const context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay)
  }
}

// function debounce(fn, delay) {
//   var timer = null;
//   return function() {
//     const context = this, args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, args);
//     }, delay)
//   }
// }

function debounce(fn, delay) {
  var timer = null;
  return function() {
    if (timer) clearTimeout(timer);
    const context = this, args = arguments;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay)
  }
}
