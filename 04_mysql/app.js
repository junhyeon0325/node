// app.js
// import
const express = require("express");
const mysql = require("mysql2");
const parser = require("body-parser");

// connect pool 생성.
const pool = mysql.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "dev01",
  password: "dev01",
  database: "dev",
  connectionLimit: 10, // 10개정도 풀을 만든다?
});

const app = express();
app.use(parser.urlencoded()); // x-www-form-urlencoded 키 벨류 형태
app.use(parser.json());

// 라우팅
app.get("/", (req, resp) => {
  resp.send("/ 실행");
});

// 고객목록
app.get("/customers", (req, resp) => {
  // connection = pool.getConnection();
  pool.getConnection((err, connection) => {
    // connection정보를 잘 가져오면 connection.query를 실행, 오류가 생기면 err을 실행
    // getConnection => connection 객체 획득.
    if (err) {
      console.log(err);
      return;
    }
    connection.query("select * from customers", (err, results) => {
      if (err) {
        console.log(err);
        resp.send("쿼리실행중 에러");
        return;
      }
      console.log(results); // 로그에도 한번 찍어보고
      // resp.send("실행완료."); // 웹브라우저에는 실행완료되었다고 표시
      resp.json(results);
      connection.release(); // connection => pool 환원 // 사용했던 커넥션을 다시 pool에 넣겠다
    }); // end of query().
  }); // end of getConnection().
});

// 등록.
app.post("/customer", (req, resp) => {
  console.log(req.body.param);
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err);
      return;
    }
    connection.query(
      "insert into customers set ?",
      [req.body.param], // [{name:'방재우', email:'bang@email', phone:'010-11'}]
      (err, results) => {
        if (err) {
          console.log(err);
          resp.send("쿼리실행중 에러");
          return;
        }
        console.log(results);
        resp.json(results);
        connection.release();
      }
    ); // end of query().
  }); // end of getConnection().
});

// http://localhost:8080/boardList.do?page=3 // 전에는 이렇게 해서 했다
// http://localhost:3000/customer/:id
// 삭제
app.delete("/customer/:id", (req, resp) => {
  console.log(req.params);
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err);
      return;
    }
    connection.query(
      "delete from customers where ?",
      [req.params],
      (err, results) => {
        if (err) {
          console.log(err);
          resp.send("쿼리실행중 에러");
          return;
        }
        console.log(results);
        resp.json(results);
        connection.release();
      }
    ); // end of query().
  }); // end of getConnection().
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
