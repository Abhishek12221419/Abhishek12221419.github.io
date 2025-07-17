import bcrypt, { hash } from "bcrypt"
// const pwd = "pass1234";
// const hashedpwd = await bcrypt.hash(pwd,10);
// console.log(hashedpwd);

const check = await bcrypt.compare("pass1234","$2b$10$/K2HMgYNpW0LIlDu8sirgeurIlNHz4xoctcOMPNPygB19Ow.fhel2");
console.log(check);