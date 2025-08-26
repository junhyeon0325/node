const crypto = require("crypto");
const { pbkdf2 } = require("crypto");

// const timeout = setTimeout(() => {
//   console.log("1초 후에 실행됩니다.");
// }, 1000);

// const interval = setInterval(() => {
//   console.log("1초마다 실행됩니다.");
// }, 1000);

// const immediate = setImmediate(() => {
//   console.log(
//     "setImmediate() 함수 호출 뒤에 오는 모든 코드를 먼저 실행하고 바로 다음에 실행합니다."
//   );
// });

// console.log("setImmediate보다 먼저 실행됩니다.");

// setTimeout(() => {
//   clearInterval(interval);
// }, 3000);
const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) {
        reject(err);
      }
      resolve(buf.toString("base64"));
    });
  });
};
//createSalt();

const createCryptoPassword = async (plainPassword) => {
  let salt = await createSalt(); // salt생성
  console.log(salt);
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString("base64"), salt });
    });
  });
};
createCryptoPassword("test1234");

// 사용자로부터 입력받은 비밀번호, 데이터베이스에 저장된 salt값을 파라미터로 전달해서 암호화된 비밀번호 값을 가져오는 함수
const getCryptoPassword = (plainPassword, salt) => {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 9999, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve({
        password: key.toString("base64"),
        salt,
      });
    });
  });
};
