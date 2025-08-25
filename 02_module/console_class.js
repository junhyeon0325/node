// console_class.js
// import
const fs = require("fs"); // fs는 파일시스템 모듈로 파일 읽기, 쓰기 등을 할 수 있는 내장 모듈
const { Console } = require("console"); // console 모듈 사용
const { defaultNum } = require("./helloworld");

// 파일을 생성 및 작성
const output = fs.createWriteStream("./stdout.log"); // 파일 쓰기가 가능하도록 스트림 생성
const errput = fs.createWriteStream("./stderr.log"); // 파일 쓰기가 가능하도록 스트림 생성

const logger = new Console({ stdout: output, stderr: errput }); // stdout은 그냥 로그를 찍는데 output을 실행하는데 이걸 stdout.log를 만들어서 로그를 찍는다라는 의미
const count = 5;
logger.log("디폴트값 : %d", defaultNum);
logger.error(`count: ` + count);

for (let i = 0; i < 10; i++) {
  logger.log(`i의 값은 ${i}`); // => 파일에 작성. // 이렇게 logger를 이용하면 console은 사라지지만 logger은 데이터를 남길 수 있음(나중에도 다시 볼 수 있음).
  console.log(`i의 값은 ${i}`); // => 콘솔에 출력.
}
