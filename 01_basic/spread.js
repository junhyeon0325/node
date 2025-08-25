// ...args 펼침연산자. 52page
let ar1 = [1, 2, 3];
let ar2 = [4, 5, 6];
let result = [...ar1, ...ar2]; // 배열변수앞에 ...을 붙이면 됨.

console.log(result);

let str = "abcde";
console.log(...str); // 문자열도 가능, 분해한다라는 의미를 알 수 있음.

// object형태, Object Destructuring.
let obj = {
  firstName: "kildong",
  lastName: "Hong",
  age: 20,
};

let fn = obj.firstName;
let ln = obj.lastName;
let ag = obj.age;

let { firstName, lastName, age } = obj; // 요렇게 위에 변수를 하나하나 변수에 담는것이 아니라 한번에 객체를 받아서 변수에 담을 수 있음.
console.log(firstName, lastName, age);

// Array Destructuring. 교과서 53p~54p
let ary = [1, 2, 3];

let a = ary[0];
let b = ary[1];
let c = ary[2];

let [n1, n2, n3] = ary; // 위에보다는 요렇게 쓰는게 간단하다.

// 함수(매개변수) Default Function Parameter 교과서 55p
function sum(num1 = 0, num2 = 0) {
  // if (num2 == undefined) {
  //   if (num1 == undefined) return 0;
  //   // 값이 없으면 undefined
  //   return num1;
  // } // 요렇게 안쓰고 위에 매개변수에 = 0 이렇게 해주면 초기값으로 설정해주면 undefined가 되는경우 0이 들어간다.
  let result = num1 + num2;
  return result;
}

console.log(sum() + sum(1, 1));
