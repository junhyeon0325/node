const express = require("express");
require("dotenv").config({
  path: "./.env",
});
const nodemail = require("./nodemail");
const xlsx = require("xlsx");
const sql = require("./sql");

console.log(process.env);

const app = express();
app.use(express.urlencoded()); // 요청 정보에 있는 x-www-form-urlencoded 타입

// 라우팅.
app.get("/", (req, resp) => {
  resp.send("/");
});
app.get("/mail", (req, resp) => {
  resp.send(`<form action="mail" method="post">
      <table>
        <tr>
          <th>보내는이:</th>
          <td><input type="email" name="sender" value="jjh990325@daum.net"></td>
        </tr>
        <tr>
          <th>받는이:</th>
          <td><input type="email" name="receiver"></td>
        </tr>
        <tr>
          <th>제목:</th>
          <td><input type="text" name="subject"></td>
        </tr>
        <tr>
          <th>내용:</th>
          <td><textarea name="content"></textarea></td>
        </tr>
        <tr>
          <td colspan = "2" align="center">
            <input type="submit" value="메일보내기">
          </td>
        </tr>
      </table>
    </form>`);
});

app.post("/mail", (req, resp) => {
  console.log(req.body);
  let data = {
    from: req.body.sender,
    to: req.body.receiver,
    subject: req.body.subject,
    text: req.body.content,
  }; // from, to, subject, text(html)
  nodemail.mailSend(data);
  resp.send("done");
});

// "excel_down" => customers 테이블의 데이터를 logs/customer2.xlsx로 저장
app.get("/excel_down", (req, resp) => {
  async function db_to_excel() {
    const workbook = xlsx.utils.book_new(); // workbook생성.
    let resultSet = await sql.execute("select * from customers"); // 바로 못가져와서 then을 하던지 함수로만들면 된다
    console.log(resultSet);
    // 배열 => sheet : json_to_sheet.
    const firstSheet = xlsx.utils.json_to_sheet(resultSet, {
      header: ["id", "name", "email", "phone", "address"],
    });
    xlsx.utils.book_append_sheet(workbook, firstSheet, "Customers"); // 시트생성
    xlsx.writeFile(workbook, "./logs/customers2.xlsx"); // 엑셀파일 생성
  }
  db_to_excel();
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
