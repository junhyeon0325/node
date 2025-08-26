// index2.js
const express = require("express");
const app = express(); // express 인스턴스.
const bodyParser = require("body-parser"); // body정보 해석처리. // body 이렇게 쳐도 안나오면 body-parser모듈을 설치해야한다. ctrl + space하면 나온다
const multer = require("multer");
const path = require("path");
// CORS 동일출처원칙.
const cors = require("cors");

// 해석기? 파디파서
app.use(bodyParser.urlencoded()); // id=u01&pw=1111 // key value 형식으로 값을 처리해주는 urlencoded방식
app.use(bodyParser.json()); // {"id":"user01”, “pw”:”1234”}

// multer 셋업.
// 이미지 / 일반 파일 구분해서 업로드.
const storage = multer.diskStorage({
  // 디스크 저장소 정의
  destination: (req, file, cb) => {
    cb(null, "uploads/file/"); // 첫번째 값이 에러인데 null uploads라는 폴더를
  },
  filename: (req, file, cb) => {
    // originalname을 콘솔에 찍어보니까 이상하게 찍혀있어서 한글로 처리 할려고 추가
    const originalname = Buffer.from(file.originalname, "latin1").toString(
      "utf8"
    );
    cb(null, new Date().valueOf() + originalname); // 2025-08-20-시간+홍길동.jpg // 첫번째 값 에러 null, extname이라는게 파일이름을 가져오는 함수,
  },
});
const uploads = multer({
  storage: storage,
});

// 이미지 업로드.
const imgStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/image/"); // 첫번째 값이 에러인데 null uploads라는 폴더를
  },
  filename: (req, file, cb) => {
    // originalname을 콘솔에 찍어보니까 이상하게 찍혀있어서 한글로 처리 할려고 추가
    const originalname = Buffer.from(file.originalname, "latin1").toString(
      "utf8"
    );
    cb(null, new Date().valueOf() + originalname); // 2025-08-20-시간+홍길동.jpg // 첫번째 값 에러 null, extname이라는게 파일이름을 가져오는 함수,
  },
});
const imgUploads = multer({
  storage: imgStorage,
  fileFilter: (req, file, cb) => {
    // 이미지 파일여부 image/jpg, image/png
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("이미지 파일만 업로드할 수 있습니다."), false);
    }
  },
});

// 아래에 쓴 origin서버만 접속이 되게 허용하도록 하는거
const corsOpt = {
  origin: "http://localhost:5500",
};
// 이걸 해줘야 html에서 fetch해서 json객체를 볼 수 있음. // cors() 여기 안에 위에 corsOpt를넣으면 됨 만약에 안넣으면 다 허용됨
app.use(cors());

app.get("/", (req, resp) => {
  resp.send("/ 요청");
});

// 요청방식: post
app.post("/login", (req, resp) => {
  resp.send("요청id: " + req.body.id + ", 요청pw: " + req.body.pw);
});

// multi-part요청 : http://localhost:3000/upload
app.post("/fileupload", uploads.single("filename"), (req, resp) => {
  console.log(req.file);
  resp.send("파일 업로드 성공");
});
app.post("/imgupload", imgUploads.single("image"), (req, resp) => {
  console.log(req.file);
  resp.send("이미지 업로드 성공");
});

// json결과반환
app.get("/bookList", (req, resp) => {
  const list = [
    { no: 1, title: "이것이자바다" },
    { no: 2, title: "웹기초" },
  ];
  resp.json(list);
});

// 에러처리
app.use((err, req, resp) => {
  if (err instanceof multer.MulterError) {
    resp.status(400).send("Multer에러 발생" + err);
  } else if (err) {
    resp.status(400).send(err);
  }
});

app.listen(3000, () => {
  console.log("http://localhost:3000 서버실행");
});
