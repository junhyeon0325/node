// url_exe.js
const urlInfo =
  "https://username:pass@test.example.com:8080/prod/computer/pageInfo?page=3&pcode=ABC#hash"; // 실제 url은 아니고 테스트 해볼려고
const myUrl = new URL(urlInfo);

// console.log(myUrl.href); // href는 전체경로
// console.log(myUrl.origin); // origin은
// console.log(myUrl.searchParams.get("pcode"));
// console.log(myUrl.searchParams.keys()); // 파라미터 key값들을 알 수 있음
// console.log(myUrl.searchParams.values()); // 파라미터 value값들을 알 수 있음
