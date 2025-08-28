// app.js
// import
const express = require("express");
const parser = require("body-parser");
const sql = require("./sql");
const prodSql = require("./sql/sql"); // {}

// console.log(prodSql["imageList"].query);

const app = express();
app.use(parser.urlencoded()); // x-www-form-urlencoded 키 벨류 형태
app.use(parser.json());

// 라우팅
app.get("/", (req, resp) => {
  resp.send("/ 실행");
});

// 상품쿼리
app.post("/api/:alias", async (req, resp) => {
  // console.log(req.params.alias); // 파라미터 값이 쿼리문 이름임
  // console.log(prodSql[req.params.alias].query); // 이렇게하면 파라미터 값에 따라 쿼리문이 달라짐
  let search = prodSql[req.params.alias].query; // 쿼리문을 search에 넣음
  let param = req.body.param; // [{product_id:9, type:1, path:test.jpg}]
  try {
    let result = await sql.execute(search, param);
    resp.json(result);
  } catch (err) {
    resp.json({ retCode: "Error" });
  }
});

// 고객목록
app.get("/customers", async (req, resp) => {
  try {
    let customerList = await sql.execute("select * from customers");
    resp.json(customerList);
  } catch (err) {
    resp.json({ retCode: "Error" });
  }
});

// 등록.
app.post("/customer", async (req, resp) => {
  console.log(req.body.param);
  try {
    let result = await sql.execute("insert into customers set ?", [
      req.body.param,
    ]);
    resp.json(result);
  } catch (err) {
    resp.json({ retCode: "Error" });
  }
});

// http://localhost:8080/boardList.do?page=3 // 전에는 이렇게 해서 했다
// http://localhost:3000/customer/:id
// 삭제
app.delete("/customer/:id", async (req, resp) => {
  try {
    let deleteCustomer = await sql.execute("delete from customers where ?", [
      req.params,
    ]);
    resp.json(deleteCustomer);
  } catch (err) {
    resp.json({ retCode: "Error" });
  }
});

app.put("/customer", async (req, resp) => {
  console.log(req.body);
  try {
    let updateCustomer = await sql.execute(
      "update customers set name=?, email=?, phone=? where id = ?",
      [req.body.name, req.body.email, req.body.phone, req.body.id]
      // "update customers set ? where id = ?",
      // [req.body.param, req.body.id]
    );
    resp.json(updateCustomer);
  } catch (err) {
    resp.json({ retCode: "Error" });
  }
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
