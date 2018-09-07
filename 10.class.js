// class

// es5
var Person = function(name, age) {
  this.name = name;
  this.age = age;
};

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

Person.prototype.sayHi = function() {
  console.log('내이름은 ' + this.name + '이야 만나서 반가워');
  console.log('올해 나이는 ' + this.age + '살이야');
};

var peter = new Person('피터 파커', 23);
console.log('peter: ', peter);
peter.sayHi();

// es6
class _Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`내이름은 ${this.name}이야 만나서 반가워`);
    console.log(`올해 나이는 ${this.age}살이야`);
  }
}

const gwen = new _Person('그웬 스테이시', 22);
console.log('gwen: ', gwen);
gwen.sayHi();

// inheritance
class Spiderman extends _Person {
  constructor(name, age, tools) {
    super(name, age);
    this.tools = tools;
  }

  static getSpiderman() {
    return new Spiderman('venom', 23, 'black-web');
  }

  web() {
    console.log('Server is listening on port 9000...');
  }
  get nameAndAge() {
    return this.name + ' ' + this.age;
  }

  set nameAndAge(obj) {
    this.name = obj.name;
    this.age = obj.age
  }
}

const spiderman = new Spiderman('스파이더맨', 23, 'web');
spiderman.sayHi();
spiderman.web();

const venom = Spiderman.getSpiderman();
venom.sayHi();
venom.web();
console.log('venom.nameAndAge: ', venom.nameAndAge);
venom.nameAndAge = { name: '에디브룩', age: 22 };
console.log('venom.nameAndAge: ', venom.nameAndAge);
