import validator from "validator";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import path from "path";
import { hashPassword, verifyPassword } from "./passwordUtils.ts";

dotenv.config({ path: path.join(__dirname, "./config.env") });

if (!process.env.JWT_SECRET) {
  throw new Error(
    "Jwt Secret connection string not found in environment variables."
  );
}
if (!process.env.JWT_EXPIRES_Day) {
  throw new Error(
    "Jwt Expires Day connection string not found in environment variables."
  );
}

// 密碼測試
async function testPasswordHashing() {
  const hashedPassword = await hashPassword("123");
  console.log(`加密後的密碼：${hashedPassword}`);
  const isMatch = await verifyPassword("123", hashedPassword);
  if (!isMatch) console.log("密碼錯誤");
  else console.log("密碼正確");
}

testPasswordHashing();

const email = "test@example.com";
const password = "password123";

// 檢查郵件地址是否有效
if (validator.isEmail(email)) {
  console.log("Valid email");
} else {
  console.log("Invalid email");
}

// 檢查密碼是否至少包含8個字符
if (validator.isLength(password, { min: 8 })) {
  console.log("Valid password");
} else {
  console.log("Invalid password");
}

// 產生 JWT token：payload、secret、option
const payload = { user_id: 123 };
const secret_key = process.env.JWT_SECRET;
const options = { expiresIn: process.env.JWT_EXPIRES_Day }; // 過期時間

const token = jwt.sign(payload, secret_key, options);
console.log("JWT: ", token);

// 解密 JWT
jwt.verify(token, secret_key, (err, payload) => {
  if (err) {
    console.log("JWT驗證失敗：", err);
  } else {
    console.log("JWT驗證成功：", payload);
  }
});
