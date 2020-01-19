Array.prototype.myReduce = function(fn, iniV) {
  var redArr = Array.prototype.slice.call(this);
  var res = iniV ? iniV : redArr[0];
  var startIdx = iniV ? 0 : 1;
  for (var i = startIdx; i < redArr.length; i++) {
    res = fn.call(null, res, redArr[i], i, redArr);
  }
  return res;
}
