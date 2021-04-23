"use strict";
// Q1. make a string out of an array
// array.join(seperator?)
// seperator default : ,
// array.toString - doesn't have a seperator
{
  const fruits = ["apple", "banana", "orange"];
  console.log(fruits.join());
}

// Q2. make an array out of a string
// string API - split(seperator, limit?)
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(",");
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// reverse는 배열 자체를 변화시킴
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. "make new array" without the first two elements
// splice는 배열 자체에서 삭제시킴
// splice(start, deleteCount?)
// slice(start,end) end는 exclusive
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
//  Returns the value of the first element in the array where predicate is true, and undefined
// find
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
// filter
{
  const result = students.filter((student) => student.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// mapping
// 배열안에 들어있는 모든 요소들을 callback 함수(전달해준 함수)로 가공되어진 값, return값으로 대체되는 것
// 원하는 함수를 이용해서 다른 방식의 데이터를 만들고 싶을 때 유용하다.
// callback 함수의 인자는 최대한 이해하기 쉬운 단어를 사용한다.
{
  //   ex) const result = students.map((student) => student.score * 2);
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
// some 조건에 맞는 배열 원소가 있다면 true를 반환함
// every 조건에 맞는 배열들이 모두 충족된다면 true를 반환함
{
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = students.every((student) => student.score < 50);
  console.log(result2);
}

// Q9. compute students' average score
// 누적하는 함수, return 값이 존재해야함
// return값이 prev로 전달됨.
{
  const result = students.reduce((prev, curr) => {
    // console.log("------------");
    // console.log(prev);
    // console.log(curr);
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);
}
// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
