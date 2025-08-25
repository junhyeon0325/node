// fs_read.js
// import
const fs = require("fs");

// import한 fs의 readFile함수
// 비동기(non블로킹)/동기(블로킹)
fs.readFile("./stdout.log", "utf8", (err, buf) => {
  // callback이 나중에 부르겠다요런 의미, 매개값스타일이 보통 이럼, 비동기 방식으로 실행된다.
  if (err) {
    console.error(err);
    return;
  }
  console.log(buf);
});

let errBuf = fs.readFileSync("./stderr.log", "utf8"); // 동기방식 파일을 옵션으로 지정한 문자 인코딩을 이용해서 utf-8 형식으로 읽은 후 결과를 반환하는 동기 방식 함수
console.log(errBuf);

console.log("다른코드");
