// [].reduce();
let result = [10, 15, 20, 25, 30].reduce((acc, elem) => {
  // acc는 이전값, elem은 현재값
  console.log(acc, elem);
  if (elem % 2 == 0) acc.push(elem);
  return acc; // 다음순번의 acc값으로 쓰여짐 >> acc = return값 이라는소리네
}, []); // [].push(10) 추가. << 이게 acc초기값임 acc 자체가 이전값을 보여주니까 처음에 이전값이라는게 없으니까 여기에 초기값을 설정해주는거

console.log(result); // [10, 20, 30]
