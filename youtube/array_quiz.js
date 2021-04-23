"use strict";

// Quiz
// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  console.log(fruits.toString());
}

// Q2. make an array out of a string
// const fruits = "🍓,🥝,🍌,🍒";
// console.log(fruits.)

// Q3. make this array look like rhis : [5,4,3,2,1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  array.splice(0, 2);
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
{
  students.forEach((value) => {
    if (value.score === 90) {
      console.log(value.name);
    }
  });
}

// Q6. make an array of enrolled students
{
  const enrolled = students.filter((value) => value.enrolled === true);
  console.log(enrolled);
}

// Q7. make an array containing only the student's scores

const score = [];
students.forEach((value) => {
  score.push(value.score);
});
console.log(score);

// Q8. check if there is a student with the score lower than 50

const check = students.filter((value) => value.score < 50);
check.forEach((value) => {
  console.log(value.name);
});

// Q9. compute students' average score
let sum = 0;
score.forEach((value) => {
  sum += value;
});
console.log(sum / score.length);

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'

console.log(score.toLocaleString());
const s = score.sort();
console.log(s.toLocaleString());
