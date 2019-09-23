function instanceOf (left, right) {
  let L = left.__proto__,
    R = right.prototype;
  while(true) {
    if (L === R) return true;
    if (L === null) return false;
    L = L.__proto__;
  }
}

// function instanceOf(left, right) {
//   var L = left.__proto__, R = right.prototype;
//   while(true) {
//     if (L === R) return true;
//     if (L === null) return false;
//     L = L.__proto__;
//   }
// }

function instanceOf(left, right) {
  let L = left.__proto__, R = right.prototype;
  while(true) {
    if (L === R) return true;
    if (L === null) return false;
    L = L.__proto__;
  }
}
