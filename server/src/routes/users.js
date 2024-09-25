"use strict";

// 모듈
const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user.ctrl");
const refreshCtrl = require("../controllers/refresh.ctrl");
const authToken = require("../middlewares/authJWT");

router.post("/login", userCtrl.process.login);
router.delete("/logout",userCtrl.process.logout);
router.post("/users", userCtrl.process.register);
router.post("/tokens", refreshCtrl);

// 테스트용 라우터들
router.get("/test",authToken, (req,res)=>{
    res.send("인증된 사용자만 접근 허용")
})

module.exports = router;