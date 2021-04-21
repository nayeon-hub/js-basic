// 1. String concatenation

console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals:

''''
1 + 2 = ${1 + 2}`);

console.log("ellie's \nbook");

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preINcrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter
// conter = conter + 1
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y

// 5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators : || (or), && (and), !(not)
const value1 = false; //or true
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// value1이 true일 경우 그 다음 부분은 쳐다보지도 않고 끝남으로 check()가 실행되지 않음
// 코드짤때 연산을 많이하는 무거운 코드는 맨 끝에! 앞에가 false일 때 마지못해 실행할 수 있도록

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// null이라면 true를 반환하기 때문에!
// if (nullableObject != null) {
//   nullableObject.something;
//}

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("😱");
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // f
//same value but "different reference"
console.log(ellie1 === ellie2); // f
//same value but "different reference"
console.log(ellie1 === ellie3); // t
//same value and "same reference"

//equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false (type 다름 - number, boolean)
console.log("" == false); // true
console.log("" === false); // false (type 다름 - string, boolean)
console.log(null == undefined); //true
console.log(null === undefined); // false

// 8. Conditional operators : if
// if, else if, else
const name = "ellie";
if (name === "ellie") {
  console.log("Welcome, Ellie!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

// 9. Ternary operator : ?
// condition ? value1 : value2 (간단히 확인할 때 사용)
console.log(name === "ellie" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox": //case연달아 묶을 수 있음
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11.Loops
// while loop, while the condition is truthy
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do wile loop, body code is executed first,
// then check the condition.
console.log(i);
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);
//먼저 블럭을 실행해서 출력 후, i가 0인지 아닌지를 check
//블럭을 먼저 실행하고 싶다면, do-while을 사용하고 조건을 확인한 수 블럭을 실행하고 싶다면 while을 사용해라

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for:${i}`);
}

for (i = 3; i > 0; i = i - 2) {
  //inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break,continue
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0 || i === 0) {
    continue;
  }
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i); //맞는 경우만 바로 출력해버리는게 좀 더 좋다.
  }
}

for (let i = 0; i < 10; i++) {
  if (i > 8) {
    break; //아닌 경우를 만나면 바로 break할 수 있도록 먼저 선언하기
  } else {
    console.log(i);
  }
}
