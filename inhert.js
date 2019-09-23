function Parent(name) {
  this.name = name;
}

function Children(name) {
  Parent.call(this);
  this.name = name;
}

Children.prototype = Object.create(Parent.prototype);
Children.prototype.constructor = Children;

function Parent(name) {
  this.name = name;
}

function Child(name) {
  Parent.call(this);
  this.name = name;
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;