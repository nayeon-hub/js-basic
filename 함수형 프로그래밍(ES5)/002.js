var users = [
  { id: 1, name: "ID", age: 36 },
  { id: 2, name: "BJ", age: 32 },
  { id: 3, name: "JM", age: 32 },
  { id: 4, name: "PJ", age: 27 },
  { id: 5, name: "HA", age: 25 },
  { id: 6, name: "JE", age: 26 },
  { id: 7, name: "JI", age: 31 },
  { id: 8, name: "MP", age: 23 },
];

// 1. 명령형 코드
// 나이가 30이하인 users
var temp_users = [];
for (var i = 0; users.length > i; i++) {
  if (users[i].age <= 30) {
    temp_users.push(users[i]);
  }
}
console.log(temp_users);

// 나이가 30이상인 user의 name
var names = [];
for (var i = 0; i < temp_users.length; i++) {
  names.push(temp_users[i].name);
}
console.log(names);

// 나이가 30미만인 users
var temp_users = [];
for (var i = 0; users.length > i; i++) {
  if (users[i].age < 30) {
    temp_users.push(users[i]);
  }
}
console.log(temp_users);

// 나이가 30세 미만인 user의 age
var ages = [];
for (var i = 0; i < temp_users.length; i++) {
  ages.push(temp_users[i].age);
}
console.log(ages);

// 2. _filter, _map으로 리펙토링(재활용성이 높아짐)
// 응용형 함수 - 함수가 함수를 받아서 원하는 시점에 해당하는 함수가 알고 있는 인자에 적용하는 것
function _filter(users, predi) {
  var new_list = [];
  for (var i = 0; i < users.length; i++) {
    if (predi(users[i])) {
      // users[i].age >= 30 조건 중복!
      // 조건을 함수에게 완전히 위임함
      new_list.push(users[i]);
    }
  }
  return new_list;
}

console.log(
  _filter(users, function (user) {
    return user.age >= 30;
  })
);

console.log(
  _filter(users, function (user) {
    return user.age < 30;
  })
);

// console.log(
//   _filter([1, 2, 3, 4], function (num) {
//     return num % 2;
//   })
// );

// console.log(
//   _filter([1, 2, 3, 4], function (num) {
//     return !(num % 2);
//   })
// );

// map function
// 데이터의 형이 보이지 않음 - 재사용성이 높아짐
function _map(list, mapper) {
  var new_list = [];
  for (var i = 0; i < list.length; i++) {
    new_list.push(mapper(list[i])); // 무엇을 new_list에 push할 것인가를 mapper에게 위임함
  }
  return new_list;
}

var over_30 = _filter(users, function (user) {
  return user.age >= 30;
});
console.log(over_30);

var names = _map(over_30, function (user) {
  return user.name;
});
console.log(names);

var under_30 = _filter(users, function (user) {
  return user.age < 30;
});
console.log(under_30);

var ages = _map(under_30, function (user) {
  return user.age;
});
console.log(ages);

console.log(
  _map([1, 2, 3], function (num) {
    return num * 2;
  })
);

console.log(
  _map(
    _filter(users, function (user) {
      return user.age < 30;
    }),
    function (user) {
      return user.name;
    }
  )
);
