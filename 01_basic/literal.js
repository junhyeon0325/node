fetch("http://192.168.0.83/HelloJSP/mock.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    // 'Male' => 출력.
    // 'Female' => 출력.
    ["Male", "Female"].forEach((gender) => {
      console.log(
        `${gender} => ${data // 빽틱안에 연산식은 넣을 수 있음 data가 배열이다보니 (if는안됨)
          .filter((elem) => elem.gender == `${gender}`) // 앞에 있는 gender를 쓸려고 하는데 그럼 연산식 안에 ${}를 그냥 쓰면은 안되고 빽틱으로 ${}요걸 감싸야함
          .map((elem) => elem.first_name) // return값이 안에있다
          .join(", ")}` // 배열값을 문자열로 바꿔주는, 합쳐주는, 구분자를 콤마로(,) 하겠다 요런 의미
      );
    });
  })
  .catch(console.log);
