const express = require('express')
const route = express.Router(); //方法
const userController = require('./../controller/allContoller.js')

route.get("/details.do",userController.details);
route.get("/user_information.do",userController.myInformation);//个人信息查询
route.get("/user_addinformation.do",userController.user_addinformation);//个人信息修改
route.get("/accountInformation.do",userController.accountInformation);//账户安全信息修改
route.get("/user_order.do",userController.user_order);//订单获取
route.get("/user_address.do",userController.addressGet);//地址获取
route.get("/address_change.do",userController.change_address);//地址改变
route.get("/address_add.do",userController.add_address);//地址添加
route.get("/address_delete.do",userController.address_delete);//地址删除
route.get("/set_default.do",userController.default_set);//设置默认
route.get("/user_collection.do",userController.user_collection);//收藏查询

exports.routes=route; //公开