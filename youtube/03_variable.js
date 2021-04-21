// 1. Use strict
// added in ES5
// Use this for Vanila Javascript.
"use strict";
console.log(age);

// 2. Variable
// let (added in ES6)
// memory의 값을 읽기 변경가능 r/w(read/write)

// block scope
let globalName = "global name";
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

//global 변수는 application이 실행되는 순간부터 끝까지 memory에 탑재되어 있기때문에 적당히 써야함.

// var (don't ever use this!)
// var hoisting 어디에 선언했는지 상관없이 선언한 변수를 가장 위로 끌어올려주는 것
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant -> immutalbe data type
// read only
// use const whenever possible.
// only use let if variable needs to change.
// pointer를 이용하여 memory에 할당하는데 pointer가 잠겨있음.

// favor immutable data type always for a few reasons:
// - security 값변경 방지
// - thread safety 동시에 값 변경 x
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// 4.Variable types

// primitive, single item : number, string, boolean, null, undefined, symbol
// permitive type - 값 자체 value가 memory에 저장됨

// object, box container
// object를 가리키는 reference(주소)가 저장되있는 형태
// reference를 통해서 실제 object가 담겨있는 memory를 가리키게 됨
// function, first-class function

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type : ${typeof count}`);
console.log(`value: ${size}, type : ${typeof size}`);

// number - special numeric values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting}, type : ${typeof greeting}`);
const helloBob = `hi + ${brendan}`;
console.log(`value: ${helloBob}, type : ${typeof helloBob}`);

// boolean
// false:0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type : ${typeof canRead}`);
console.log(`value: ${test}, type : ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type : ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type : ${typeof x}`);

// symbol, create unique indentifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);

const gsymbol1 = Symbol.for("id");
const gsymbol2 = Symbol.for("id");
console.log(gsymbol1 === gsymbol2);
console.log(`value: ${symbol1.description}, type : ${typeof symbol1}`);

// 5. Dynamic typing : dynamically typed language
let text = "hello";
console.log(text.charAt(0));
console.log(`value : ${text}, type = ${typeof text}`);
text = 1;
console.log(`value : ${text}, type = ${typeof text}`);
text = "7" + 5;
console.log(`value : ${text}, type = ${typeof text}`);
text = "8" / "2";
console.log(`value : ${text}, type = ${typeof text}`);
console.log(text.charAt(0)); // string 아님

// Note!
// Immutable data types : primitive types, frozen objects (i.e. object.freeze())
// primitive type은 저장되어 있는 값을 변경하는 것이 아니라 memory에 저장 된 값을 꺼냈다가 다시 넣는 형식이기에 immutable data이다.

// Mutable data types : "all objects" by default are mutable in JS
// ex) array, object
