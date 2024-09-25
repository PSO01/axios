"use strict";

const express = require("express");
const router = express.Router();

const userRoute = require("./users");

router.use('/', userRoute);

module.exports = router;