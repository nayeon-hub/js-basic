// 순수함수
function add(a, b) {
  return a + b;
}
// 순수함수는 언제 실행해도 동일한 값을 출력한다. 언제 평가되어도 상관없다.(안전하고 다루기 쉬움)
console.log(add(10, 5));
console.log(add(10, 5));
console.log(add(10, 5));

//add2는 c의 값에 따라 값이 달라지기 때문에 순수함수가 아니고 평가시점이 중요하다.
var c = 10;
function add2(a, b) {
  return a + b + c;
}

//c가 변경되기 전에 평가했느냐
console.log(add2(10, 2)); // 22
console.log(add2(10, 3));
console.log(add2(10, 4));
//c가 변경된 후에 평가했느냐
c = 20;
console.log(add2(10, 2)); // 32
console.log(add2(10, 3));
console.log(add2(10, 4));

// 결과가 달라지는 함수는 순수함수가 아니다
// 1. 인자는 동일하지만, 다른 결과를 낳음
// 2. 부수효과를 일으키는 함수  = 외부 상태를 변경하거나 직접 내부에서 변경

var c = 20;
function add3(a, b) {
  c = b; // 부수효과 존재 -> 순수함수가 아니다
  return a + b;
}
console.log("c:", c);
console.log(add3(20, 30));
console.log(add3(20, 30));
console.log(add3(20, 30));
console.log("c:", c);

var obj1 = { val: 10 };
function add4(obj, b) {
  obj.val += b;
}
console.log(obj1.val);
add4(obj1, 20);
console.log(obj1.val);

// 다시 순수 함수
var obj1 = { val: 10 };
function add5(obj, b) {
  return { val: obj.val + b }; //외부 상태는 변화시키지 않으면서 값을 다뤄가는 함수
}
console.log(obj1.val);
var obj2 = add5(obj1, 20);
console.log(obj1.val);
console.log(obj2.val);

// 일급함수
// 함수가 인자로 넘겨져서 다른 함수가 실행할 수 있다.
// 변수에 함수가 담길 수 있다.
var f1 = function (a) {
  return a * a;
};
console.log(f1);

var f2 = add;
console.log(f2);

function f3(f) {
  return f();
}
console.log(
  f3(function () {
    return 10;
  })
);

console.log(
  f3(function () {
    return 20;
  })
);

//add_maker
function add_maker(a) {
  return function (b) {
    return a + b;
  };
}

var add10 = function (b) {
  return 10 + b;
}; // add10 안에 function(b){return a+b;}가 들어가게 된다.
console.log(add10(20)); // 30
