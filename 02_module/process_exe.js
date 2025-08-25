// process_exe.js

// imoprt
// import process from "process";
// import os from "os";
// import path from "path";
const path = require("path");

// 요걸 잘 기억해달라고 하심 자주 쓰나봄
console.log(__filename); // D:\git\node\02_module\process_exe.js
console.log(__dirname); // D:\git\node\02_module

console.log(path.basename(__filename)); // process_exe.js
console.log(path.basename(__dirname)); // 02_module

let result = path.format({ dir: "c:/Users/admin", base: ".gitconfig" });
console.log(result);

result = path.parse("C:/Users/admin/.gitconfig"); // parse는 format과 반대로 보여준다, pathObjec로 보여줌
console.log(result);
