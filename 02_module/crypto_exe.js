// crypto_exe.js
// import
const { rejects } = require("assert");
const { create } = require("domain");
const crypto = require("crypto");

let pass = crypto.createHash("sha512").update("test1234").digest("base64"); // 암호화 방식이 다양하게 있는데 sha512를 사용하겠따, test1234를 암호화를 한거
// let pass = crypto.createHash("sha512").update("test1234").digest("hex"); // 암호화 방식이 다양하게 있는데 sha512를 사용하겠따

// console.log(pass);

const createSalt = () => {
  return new Promise((resolve, reject) => {
    // promise객체생성, 성공했을때는 resolve
    crypto.randomBytes(64, (err, buf) => {
      // 64바이트의 임의의 값을 생성, err은 에러가 있으면은 if(err)이 나오고 ,비동기함수라서 promise함수로 감싼다
      if (err) {
        // 실패.
        reject(err);
      }
      // 성공
      resolve(buf.toString("base64")); // 만들어진값이 buf값인데 resolve값에 매개값을 전달하겠다. reject // base64 문자 인코딩 방식
    });
  });

  // promise
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => console.error(err));
};
// createSalt();
// salt 값을 활용해서 평문 -> 암화화문 변경.
const createCryptoPassword = async (trPw) => {
  let salt = await createSalt();
  console.log(salt);
  salt =
    "7jDz58rB4zDKHC4elv++s5AtqU0aM+WVNl8mSUZogun5tsiu4p5LLyjXm8Od7bgB5v2eemYBlqSmE3KrUIyNjA=="; // 암호화하기 위한 salt값
  pw =
    "OwHDhzFlb9THERPPoFwgYSY4Smfm21Tr++CZuIyP/iahe3WXcONbyBeFIcOqzy26Uk6ETNUYHj9fBrB8eoWk6A=="; // 변경된 비밀번호 암호화된 값
  crypto.pbkdf2(trPw, salt, 100000, 64, "sha512", (err, buf) => {
    if (err) {
      console.log("err=>", err);
    }
    // console.log(buf.toString("base64"));
    let crPw = buf.toString("base64");
    if (pw == crPw) {
      console.log("비밀번호가 동일함.");
    } else {
      console.log("비밀번호를 확인하세요.");
    }
  });
};
createCryptoPassword("test1234");

// const createCryptoPassword = async (trPw) => {
//   let salt = await createSalt(); // salt생성
//   return new Promise((resolve, reject) => {
//     crypto.pbkdf2(trPw, salt, 100000, 64, "sha512", (err, key) => {
//       if (err) {
//         console.log("err=>", err);
//       }
//       resolve({ password: key.toString("base64"), salt });
//     });
//   });
// };
