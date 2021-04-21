// Objects
// one of the JavaScript's data types.
// acollection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = {key : value}

// 인자가 많아지면 추가해야 되는게 많아지기 때문에 개선하고자 object 사용

// object를 만드는 방법
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax - object의 constructor가 호출됨.

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

// with JavaScript magic(dynamically typed language)
// can add properties later
ellie.hasjob = true;
console.log(ellie.hasjob);

// can delete properties later
delete ellie.hasjob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie["name"]); //computed
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj.key);
  console.log(obj[key]); //동적으로 키를 받아올 때
}

printValue(ellie, "name");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = makePerson("ellie", 30);
console.log(person4);
function makePerson(name, age) {
  return {
    name, //name: name,
    age, //age: age,
  };
} //이전에 클래스가 없었을 때

// 4. Constructor Function
const person5 = new Person("ellie", 30);
console.log(person5);

function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
} // 다른 계산없이 순수하게 object만 생성하는 함수는 함수명을 대문자로

// 5. in operator : property existence check (key in obj)
// 해당 object안에 key를 확인하는 법
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for(key in obj)
for (key in ellie) {
  console.log(key);
}

//for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user;
//user는 data의 ref의 값을 가지고 있음으로 user2도 user의 ref와 같음
user2.name = "coder";
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
//기본 탑재된 object 그리고 상속가능

// const user4 = {};
// Object.assign(user4, user);
// console.log(user4);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); //뒤의 값을 덮어씌운다는 점 유의할 것
console.log(mixed.color);
console.log(mixed.size);
