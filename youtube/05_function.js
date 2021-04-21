// Function
// - fundamental building block in the program
// - subprogram can be used multiple times 재사용
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body ··· returns;}
// one function === one thing
// naming : doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS object로 간주되기 때문에 parameter로 전달할 수 도 있고, 변수에 할당가능

function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello@");
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj) {
  obj.name = "coder";
}

const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  //   if (from === undefined) {
  //     from = "unknown";
  //   }
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// 4. Rest parameters (added in ES6)
// ... 배열형태로 parameter에 전달
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}

printAll("dream", "coding", "ellie");

// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); //local variable
  console.log(globalMessage);
  //return undefined
}

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(result);
console.log(`sum:${sum(1, 2)}`);

// 7.Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic ...
  }
}

// TIP! 함수안에서 user.point가 10일 때 upgradeUser를 실행할 block을 작성하면 가독성이 떨어짐 -> if else를 번갈아 쓰기보다는 조건이 맞지 않을 때는 "빨리 리턴시키고" 필요한 로직을 그 다음에 선언하는 것

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  //long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable 변수할당
// can be passed as an argument to other functions. parameter전달
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.

const print = function () {
  //anonymous function
  console.log("print");
};
print();
const printAgain = print;
// 함수를 변수에 넣을 수도 있다.
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callbak function using function expression
function randomQuiz(answer, printYes, printNo) {
  //2개의 callback function이 parameter로 전달하고, 조건에 따라 그 function을 불러서 실행시켜
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debugger's stack traces
// recursions 재귀함수
const printNo = function print() {
  console.log("no!");
  //print();
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
  console.log("simplePrint!");
};

const simplePrintOther = () => console.log("simplePrint!");
const addOne = (a, b) => a + b;
const addAnother = (a, b) => {
  //do something more
  return a * b;
};

//IIFE : Immediately Inoked Function Expression

(function hello() {
  console.log("IIFE");
})();

// Fun quiz time❤
// function calculate (command, a, b)
// command : add, substract, divide, multiply, remainder

function calculate1(command, a, b) {
  if (command === "+") {
    console.log(a + b);
  } else if (command === "-") {
    console.log(a - b);
  } else if (command === "*") {
    console.log(a * b);
  } else if (command === "/") {
    console.log(a / b);
  } else if (command === "%") {
    console.log(a % b);
  } else {
    console.log("wrong");
  }
}

function calculate2(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substrict":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      throw Error("unknown command");
  }
}
//정해진 data를 처리하는 경우 if문 보다는 switch문을 사용하는 것이 더 좋다.

calculate("+", 1, 2);
calculate("-", 1, 2);
calculate("*", 1, 2);
calculate("/", 1, 2);
calculate("%", 1, 2);
