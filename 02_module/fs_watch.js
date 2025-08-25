// fs_watch.js
const fs = require("fs");
const path = require("path");
let sql = require("./sql.js");

fs.watchFile(__dirname + "/sql.js", () => {
  // watchFile이 친구가 /sql.js를 계속 감시하다가 변화가 생기면 콜백함수가 실행
  console.log("재시작 없이 반영.");
  // cache 지우고 새롭게 읽어들이기.
  delete require.cache[require.resolve("./sql.js")]; // 캐쉬에 저장되어 있는 파일 삭제
  sql = require("./sql.js"); // sql.js파일에 변경이 일어날 때마다 sql.js 재할당
});
