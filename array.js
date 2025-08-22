// [].sort()

let fruits = ["apple", "cherry", "banana"];

fruits.sort(); // sort를 하면은 배열에 있는 값들을 정렬해줌 순서는 abc, 가나다 순서

fruits.forEach((fruit) => {
  //console.log(fruit);
});

let numbers = [1, 10, 100, 2, 12, 44];
numbers.sort(function (a, b) {
  if (b > a) {
    return 1; // 위치를 변경 : 양의 값
  } else {
    return -1; // 위치를 유지 : 음의 값
  }
}); // a, b 두개값을 비교한다
numbers.forEach((element) => {
  //console.log(element);
});

// filter()
[
  { name: "Hong", point: 10 },
  { name: "Kim", point: 23 },
  { name: "Park", point: 46 },
  { name: "Choi", point: 17 },
  { name: "Hwang", point: 56 },
]
  .filter((elem, idx, ary) => {
    //console.log(elem);
    if (elem.point > 30) {
      // 30보다 큰값을 새로운 생성.
      return true;
    }
  })
  .forEach((elem) => {
    console.log(elem.name); // 46, 56
  }); // 익명함수이고 화살표함수임

// map (mapping)
// A -> A'
// {name, age, point} => {object}
