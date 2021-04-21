// 기존언어는 동일한 data type에 맞게 array안에 값을 넣을 수 있다.
// 자료구조, 알고리즘
"user strict";

//Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
//index가 0부터 시작하기 때문에!

console.clear();
// 3. Looping over an array
// print all fruits

// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach - callbackfn
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push : add an item to the end
fruits.push("🍓", "🍑");
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift("🍓", "🍋");
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift,unshift are slower than pop,push

//전체를 shift시키고 지우거나 더하기 때문에 시간이 오래걸린다. 배열이 길수록 shift를 반복하기 때문에 pop,push를 사용하는게 더 좋다.

// splice: remove an item by index position
fruits.push("🥝", "🍍");
console.log(fruits);
fruits.splice(1, 1); //1 index부터 개수를 적어주지 않으면 전부를 제거함
console.log(fruits);
fruits.splice(1, 1, "🍉", "🥥");
// fruits.splice(1, 0, "🍉", "🥥");
console.log(fruits);

// combine two arrays
const fruits2 = ["🥭", "🍊"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍋"));
console.log(fruits.indexOf("🥝"));

// includes
console.log(fruits.includes("🥝"));
console.log(fruits.includes("🍒"));
console.log(fruits.indexOf("🍒"));

// lastIndexOf
console.clear();
fruits.push("🍎");
console.log(fruits);
console.log(fruits.indexOf("🍎"));
console.log(fruits.lastIndexOf("🍎"));

console.log(fruits.toString());
console.log(fruits.length);

const num = [1, 2, 3, 4, 5];
console.log(typeof num[1]);
console.log(typeof num.toLocaleString());
