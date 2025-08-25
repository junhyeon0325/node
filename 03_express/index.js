const express = require("express");

const app = express(); // express 인스턴스 생성.

// url - 실행함수. => 라우팅. url은 항상 매개변수가 2개다
// get방식 / 이거만 치면 여기가 실행
app.get("/", (req, resp) => {
  resp.send("/ 경로 호출됨.");
});

// get방식 /start 이걸 치면 이걸 실행
app.get("/start", (req, resp) => {
  resp.send("/start 경로 호출됨.");
});

app.get("/json", (req, resp) => {
  resp.json({ id: "user01", pw: "1111" });
});

// 그냥 http://localhost:3000/main 요렇게 치면은 에러남 왜? get방식이기때문에
app.post("/main", (req, resp) => {
  resp.send("/main 경로를 post 요청방식으로 호출함");
});

// 서버스타트
// 매개변수가 2개인데 한개는 포트번호, 한개는 콜백함수
app.listen(3000, () => {
  console.log("http://localhost:3000 서버실행.");
});
