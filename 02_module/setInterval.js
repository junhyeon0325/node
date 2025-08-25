// setInterval.js
// import
const { log } = require("console");
const readline = require("readline");

// readline의 메소드중 createIntergace를 이용하는데
const rl = readline.createInterface({
  input: process.stdin, // standardin 축약
  output: process.stdout,
});

// count: 100 -> 0 1씩 감소
let count = 3;
setInterval(() => {
  if (count <= 0) {
    console.log("시간이종료되었습니다.");
    process.exit();
    //rl.close(); // stream은 사용 후 close();
  }
  count--;
  //console.log(`현재 count: ${count}`);
}, 1000);

let wordAry = "Lorem ipsum dolor sit, amet consectetur adipisicing elit." // Porro rem ducimus quidem adipisci maxime placeat quo cum eos ut tempora at necessitatibus quod tempore, harum quisquam possimus! Corrupti, nam reprehenderit." //
  .split(" "); // split해서 빈공간을 없앤 배열이
console.log(wordAry);
function myFunction() {
  // 100이 완료되기전에 배열에 있는 값을 clear하면 성공.
  // 100이 완료된 후 배열에 값이 있으면 실패.

  if (count > 0 && wordAry.length == 0) {
    console.log("성공");
    process.exit();
  } else if (count > 0) {
  } else {
    console.log("실패");
    process.exit();
  }

  rl.question("단어를 입력하세요.", (answer) => {
    // answer가 사용자가 입력한 값
    let search = answer; // 이걸 지우겠다라는걸 변수에 넣음
    let idx = wordAry.indexOf(search); // indexOf라는 메소드가 4번째 위치면 3을 리턴해줌
    wordAry.splice(idx, 1); // 삭제. 원레는(idx, 1, ?)로하면 ?로 바꾸는건데 없으니까 삭제를 의미

    wordAry.forEach((word) => {
      console.log(word);
    });

    myFunction(); // 입력이 될때까지 기다렸다가 자기함수 실행
  });
  // if (wordAry.length == 0) {
  //   break;
  // }
  //}
}
myFunction();
