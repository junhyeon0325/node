fetch("http://192.168.0.83/HelloJSP/replyList.do?bno=145")
  .then((Response) => Response.json())
  .then((result) => {
    console.log(result);
    result
      .filter((elem, idx, array) => {
        // 그니까 result라는 배열의 데이터들을 filter라는 배열에 넣는데 조건을 if문해서 return값이 true이면 그걸 filter에 넣는다는소리 같은데?
        if (elem.reply.indexOf("연습") == -1) {
          return false;
        } else {
          return true;
        }
      })
      .forEach((elem) => {
        // 그래서 여기서 그 저장된 elem 값들을 foreach반복문을 이용해서 출력하는거고
        console.log("댓글번호 : " + elem.replyNo);
      });
  })
  .catch(console.log);
// 댓글작성자가 01도 있고 03도 있고 그중에 03이라는 해당되는 replyNo를 쭉 출력해봐라
// 댓글에 연습이라고하는 구문이 포함된 글 번호를 출력해보고 싶다
