// console에 "hello, world" 구문을 출력하는 함수 myFunc을 선언
function myFunc() {
  console.log("hello, world");
}
myFunc();

const defaultNum = 12;

const sum = (num1 = 0, num2 = 0) => {
  return num1 + num2;
};

// export { myFunc, defaultNum, sum }; // export를 함으로써 다른 파일들에서 import해서 사용할 수 있다.
// 위에처럼 export를 해도되고 이렇게 export를 해도되고 방법은 두가지이다.
module.exports = {
  defaultNum,
  sum,
  myFunc,
};
