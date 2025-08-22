// 교과서 page 59
// 학생 : 학번, 이름, 키, 몸무게...
//      : 먹는다, 잔다, 공부한다...
// 객체(인스턴스) =>
let std1 = {
  stdNo: 1234,
  stdName: "홍길동",
  height: 170,
  eat: function (food) {
    console.log(food + "을 먹는다");
  },
  sleep(hours) {
    console.log(hours + "동안 잔다.");
  },
};

// 객체 -> 설계도.
class Student {
  // 생성자.
  constructor(stdNo, stdName, height) {
    this.stdNo = stdNo;
    this.stdName = stdName;
    this.height = height;
  }

  eat(food) {
    console.log(food + "를 먹는다.");
  }
  sleep(hours) {
    console.log(hours + "동안 잔다.");
  }
}

let std2 = new Student(1235, "김민수", 180); // 요렇게 인스턴스를 만들거나 맨위에처럼 인스턴스를 만들거나, 내용이 많아지면 이렇게 인스턴스를 만드는게 편할끼다.
let std3 = new Student(1237, "최민식", 166);

console.log(std1.stdNo, std1.stdName);
console.log(std2.stdNo, std2.stdName);
