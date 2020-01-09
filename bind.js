Function.prototype.bind = function(context) {
  if (typeof this !== 'function') throw new TypeError('Error');
  const _this = this, args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) return new _this(...args, ...arguments);
    _this.apply(context, args.concat(...arguments))
  }
}

Function.prototype.bind = function(context) {
  if (typeof this !== 'function') throw new TypeError('Error');
  var args = [...arguments].slice(1);
  var _this = this;
  return function F() {
    if (this instanceof F) return new _this(...args, ...arguments);
    else _this.apply(context, args.concat(...arguments));
  }
}

Function.prototype.bind = function(context) {
  if (typeof this !== 'function') throw new TypeError('Error');
  const _this = this, args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) return new _this(...args, ...arguments);
    _this.apply(context, args.concat(...arguments));
  }
}

Function.prototype.bind = function(context) {
  if (typeof this !== 'function') throw new TypeError('Error');
  const _this = this, args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) return new _this(...args, ...arguments);
    _this.apply(context, args.concat(...arguments))
  }
}

Function.prototype.bind = function(context) {
  if (typeof this !== 'function') throw new TypeError('Error');
  const _this = this, args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) return new _this(...args, ...arguments);
    else _this.apply(context, args.concat(...arguments));
  }
}

Function.prototype.bind = function(context) {
  const _this = this, args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) return new _this(...args, ...arguments);
    _this.apply(context, args.concat(...arguments));
  }
}
