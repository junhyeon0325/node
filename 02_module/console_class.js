// console_class.js
// import
const { Console } = require("console");
const fs = require("fs");
const { defaultNum } = require("./helloworld");

// 파일을 생성 및 작성
const output = fs.createWriteStream("./stdout.log");
const errput = fs.createWriteStream("./stderr.log");

const logger = new Console({ stdout: output, stderr: errput }); // stdout은 그냥 로그를 찍는데 output을 실행하는데 이걸 stdout.log를 만들어서 로그를 찍는다라는 의미
logger.log("디폴트값 : %d", defaultNum);
logger.error("에러가 발생했습니다.");

for (let i = 0; i < 10; i++) {
  logger.log(`i의 값은 ${i}`); // => 파일에 작성. // 이렇게 logger를 이용하면 console은 사라지지만 logger은 데이터를 남길 수 있음(나중에도 다시 볼 수 있음).
  console.log(`i의 값은 ${i}`); // => 콘솔에 출력.
}
