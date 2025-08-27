// excel.js
const xlsx = require("xlsx");
const sql = require("./sql");
require("dotenv").config({ path: "./.env" });

// console.log(firstSheet["A2"].v);
// firstSheet["B2"].v = "Hongkildong";
// firstSheet["A3"] = { v: "99", t: "n" };
// firstSheet["B3"] = { v: "김민규", t: "s" };
// firstSheet["C3"] = { v: "min@email.com", t: "s" };
// firstSheet["D3"] = { v: "010-4444-4444", t: "s" };
// firstSheet["E3"] = { v: "국민은행 옆길", t: "s" };
// firstSheet["!ref"] = "A1:E3"; // 워크시트 범위 갱신
// xlsx.writeFile(workbook, "./logs/write2.xlsx");

// db 조회 후 => 엑셀파일.
async function db_to_excel() {
  const workbook = xlsx.utils.book_new(); // workbook생성.
  let resultSet = await sql.execute("select * from customers"); // 바로 못가져와서 then을 하던지 함수로만들면 된다
  console.log(resultSet);
  // 배열 => sheet : json_to_sheet.
  const firstSheet = xlsx.utils.json_to_sheet(resultSet, {
    header: ["id", "name", "email", "phone", "address"],
  });
  xlsx.utils.book_append_sheet(workbook, firstSheet, "Customers"); // 시트생성
  xlsx.writeFile(workbook, "./logs/customers.xlsx"); // 엑셀파일 생성
  // 시트 -> workbook -> customers.xlsx
}
db_to_excel();

console.log("파일 저장 완료");

function excel_to_db() {
  const workbook = xlsx.readFile("./logs/write2.xlsx");
  // console.log(workbook.SheetNames);
  const firstSheetName = workbook.SheetNames[0]; // 시트이름
  const firstSheet = workbook.Sheets[firstSheetName]; // 시트하나 가져옴
  let jsonSheet = xlsx.utils.sheet_to_json(firstSheet);
  console.log(jsonSheet);
  jsonSheet.forEach(async (customer) => {
    let result = await sql.execute("insert into customers set ?", customer);
    console.log(result);
  });
}
