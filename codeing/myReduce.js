Array.prototype.myReduce = function(fn, iniV) {
  var redArr = Array.prototype.slice.call(this);
  var res = iniV ? iniV : redArr[0];
  var startIdx = iniV ? 0 : 1;
  for (var i = startIdx; i < redArr.length; i++) {
    res = fn.call(null, res, redArr[i], i, redArr);
  }
  return res;
}

Array.prototype.myReduce = function(fn, initV) {
  var newArr = Array.prototype.slice.call(this);
  var res = initV ? initV : newArr[0];
  var startIndex = initV ? 0 : 1;
  for (var i = startIndex; i < newArr.length; i++) {
    res = fn.call(null, res, newArr[i], i, newArr)
  }
  return res;
}
