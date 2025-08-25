// fs_write.js
const fs = require("fs");

// fs.readFile / fs.readFileSync 활용해서 stdout.log 정보를 읽어들이고
// ./file_log.txt에 쓰는걸로 해보자

let errBuf = fs.readFile("./stdout.log", "utf8", (err, buf) => {
  if (err) {
    console.error(err);
    return;
  }
  fs.writeFile(
    "./file_log.txt",
    errBuf,
    { encoding: "utf8", flag: "a" }, // flag "a"는 누적하는 방식
    (err) => {
      // 마지막은 콜백함수
      if (err) {
        console.error("예외발생");
        return;
      }
      console.log("파일생성완료!");
    }
  );
});
