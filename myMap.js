Array.prototype.myMap = function(fn, context) {
  var newArray = Array.prototype.slice.call(this);
  var arr = [];
  for(var i =0; i < newArray.length; i++) {
    arr.push(fn.call(context, newArray[i], i, this));
  }
  return arr;
}

var myArr = [1,3,4,6,7];

var curArr = myArr.myMap(function(item, index) {
  return item*2;
})

console.log('curArr', curArr)
