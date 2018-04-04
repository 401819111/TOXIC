const express = require('express')
const route = express.Router(); //方法
const useController = require('./../controller/allContoller.js')

route.get("/details.do",useController.details);
exports.routes=route; //公开