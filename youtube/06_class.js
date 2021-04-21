"use strict";
// Object-oriendted programming
// class : template
// object : instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    //   if(value < 0){
    //       throw Error("age can not be negative!");
    //   }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "j0b", -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!

class Experiment {
  publicField = 2;
  #privateField = 0; //class 내에서만 값 읽고 변경이 가능함.(최근추가되서 bable이용해야하고 아직 이름.)
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static prperties and methods
// Too soon!

class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); //object
console.log(Article.publisher); //class
Article.printPublisher();
//object, data와 상관없이 class가 가지고 있는 고유값, data와 상관없이 동일하게 반복되는 method를 "static"이라는 키워드를 사용하게되면 class에 연결되어 있기때문에 object를 이용하지 않고 class name을 이용해서 값을 호출할 수 있다.

//어떨때 사용? object, 들어오는 data와 상관없이 공통적으로 class에서 사용할 수 있는 거라면 memory의 사용을 줄일 수 있음!

//class안에 있는 fields와 method는 새로운 object를 생성할 때마다 그대로 복제되어서 값만 지정된 값으로 변경해서 만들어짐

//

// 5. Inheritance
// a way for one class to extend another class.

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  //overriding
  getArea() {
    return (this.width * this.height) / 2;
  }
  draw() {
    super.draw();
    //shape에서 정의된 draw를 호출하고 싶으면 , 부모의 method도 호출 가능.
    console.log("🔺");
  }

  toString() {
    return `Triangle : color : ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking : instanceOf
// 왼쪽의 object가 오른쪽에 있는 class의 instance인지 아닌지를 즉, 이 object가 이 class로 만들어졌는지 확인하는 것
console.log(rectangle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape);
// true -> shape을 상속함
console.log(triangle instanceof Object);
// true -> js에서 만든 모든 클래스의 object들은 js의 object를 상속한 것

//어떤 object든지 공통적인 method 사용가능.
console.log(triangle.toString());
