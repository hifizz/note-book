/**
 * 借用构造函数继承
 */

function SuperType() {
  this.colors = ['red', 'green', 'yellow'];
}

function SubType() {
  SuperType.call(this);
}

const instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors) // ['red', 'green', 'yellow', 'black']

const instance2 = new SubType();
alert(instance1.colors) // ['red', 'green', 'yellow']
