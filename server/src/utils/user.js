"use strict";
const bcrypt = require("bcrypt");

module.exports = {
    // 비밀번호 해싱
    hashedPassword : async (password) => {
        const saltRounds = 10;   // salt 복잡도 설정
        const salt = await bcrypt.genSalt(saltRounds);  // salt 생성(난수 데이터)
        return bcrypt.hash(password, salt);  // 비밀번호와 salt를 결합하여 해싱된 비밀번호 생성
    }, 
    // 평문 비밀번호와 해싱된 비밀번호가 일치한지 확인
    isPasswordCorrect : (hashedPassword, password) => {
        return bcrypt.compareSync(hashedPassword, password);
    }
};