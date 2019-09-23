function EventEmitter() {
  this._events = {};
}

EventEmitter.prototype.on = function(event, cd) {
  if (Array.isArray(event)) {
    for(var i = 0; i < event.length; i++) {
      this.on(event[i], cd);
    }
  } else (this._events[event] || (this._events[event] = [])).push(cd);
  return this;
}

EventEmitter.prototype.emit = function(event) {
  const evs = this._events[event];
  const args = Array.prototype.slice.call(arguments, 1);
  if (evs) {
    for(var i = 0; i < evs.length; i++) {
      evs[i].apply(this, args);
    }
  }
  return this;
}

EventEmitter.prototype.off = function(event, cd) {
  if (!arguments.length) {
    this._events = Object.create(null);
    return this;
  }
  if (Array.isArray(event)) {
    for(let i = 0; i < event.length; i++) {
      this.off(event[i], cd)
    }
    return this;
  }
  if (arguments.length === 1) {
    this._events[event] = null;
    return this;
  }
  for(var i = 0; i < this._events[event].length; i++) {
    if (this._events[event] === cd || this._events[event].fn === cd) {
      this._events[event].splice(i, 1);
    }
  }
  return this;
}

EventEmitter.prototype.once = function(event, cd) {
  function on() {
    this.off(event, cd);
    cd.apply(this, arguments);
  }
  on.fn = cd;
  this.on(event, on);
  return this;
}
