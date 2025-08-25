// import { myFunc, sum } from "./helloworld.js";
// 아래처럼 import를 해도된다, 단 위에처럼 할려면 .js를 붙여줘야하고 아래처럼하면 .js를 안붙여도 된다.
const { myFunc, sum } = require("./helloworld");

myFunc();
let n1 = 11;
let n2 = 13;
console.log(`두수 ${n1}, ${n2}의 합은 ${sum(n1, n2)}`);
