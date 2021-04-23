// JSON
// Javascript Object Notation
// JSON이라는 object를 사용하면 간단하게 가능

// 1. Object to JSON
// stringft(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  //   symbol: Symbol("id"),
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);
json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key:${key}, value:${value}`);
  return key === "name" ? "ellie" : value;
});

console.log(json);

// 2. JSON to Object

console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump();
// 함수는 selialize 될때 포함되지 않아서 출력하면 error가 발생함.
// data들만 json으로 변환하여 함수는 포함되지 않았기 때문에 다시 obj로 바꿀때 존재하지 않는다.
