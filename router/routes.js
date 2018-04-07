const express = require('express')
const route = express.Router(); //方法
const userController = require('./../controller/allContoller.js')

route.get("/details.do",userController.details);
exports.routes=route; //公开