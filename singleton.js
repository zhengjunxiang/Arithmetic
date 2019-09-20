var Singleton = (function() {
  var instance = null;

  function Single(args) {
    this.name = args.name;
    this.age = args.age;
  }
  Single.prototype.sayName = function() {
    console.log(this.name)
    return this;
  }

  return {
    getInstance: function(args) {
      if (instance) {
        instance.name = args.name;
        instance.age = args.age;
        return instance;
      }
      return instance = new Single(args);
    }
  }
})();

var singleton1 = Singleton.getInstance({name: 'James', age: 30}).sayName();
var singleton2 = Singleton.getInstance({name: 'Wade', age: 40}).sayName();

console.log(singleton1 === singleton2)
