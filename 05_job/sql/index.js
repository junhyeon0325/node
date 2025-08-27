// sql/index.js
// import
const mysql = require("mysql2");

// connect pool 생성.
// db접속정보
const pool = mysql.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "dev01",
  password: "dev01",
  database: "dev",
  connectionLimit: 10, // 10개정도 풀을 만든다?
});

// "select * from customers" << 이걸 sql이라고 함, 이 쿼리가 sql에 매개값으로 들어온다 라는 의미, 그리고 아무것도 안들어오면 초기값으로 들어감
function execute(sql = "select * from customers", param = []) {
  return new Promise((resolve, reject) => {
    // promise는 동기방식으로 변경하는 역할

    pool.getConnection((err, connection) => {
      // connection = pool.getConnection();
      // connection정보를 잘 가져오면 connection.query를 실행, 오류가 생기면 err을 실행
      // getConnection => connection 객체 획득.

      if (err) {
        // console.log(err);
        return reject(err);
      }

      // 그래서 원레 밑에 여기 sql에 는 select로 시작하는 쿼리문이 있었는데 그게 위에 매개값 및 초기값으로 갔음
      connection.query(sql, param, (queryerr, results) => {
        connection.release(); // connection => pool 환원 // 사용했던 커넥션을 다시 pool에 넣겠다
        if (queryerr) {
          // console.log(err);
          resp.send("쿼리실행중 에러");
          return reject(queryErr);
        }
        // console.log(results); // 로그에도 한번 찍어보고
        // resp.send("실행완료."); // 웹브라우저에는 실행완료되었다고 표시
        // resp.json(results);
        resolve(results);
      }); // end of query().
    }); // end of getConnection().
  }); // end of promise
} // end of execute

module.exports = {
  execute,
};
