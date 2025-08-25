let reg = /World/g; // 이 값을 찾아서
// reg = new RegExp("World");

let str = `Hello Hi..
World!
World`;

console.log(str.replace(/world/gi, "세상!")); // 요 값으로 바꾸겠다는 의미 g = global, i = ignore

console.log(reg.exec(str)); // test 메소드 true냐 false냐로 반환해주는 메소드
