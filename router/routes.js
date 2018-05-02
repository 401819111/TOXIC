const express = require('express')
const route = express.Router(); //方法
const userController = require('./../controller/allContoller.js')

route.get("/details.do",userController.details);
//个人中心
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
//登录注册
route.post("/login.14k",userController.loginControl) //登陆
route.post("/signUp.14k",userController.signUpControl) //注册
route.post('/sendCode.do',userController.sendCode); //注册发送短信
route.post('/ForgetPwd.do',userController.getBackPwd);//忘记密码
route.post('/sendCode2.do',userController.GetBackCode); //忘记密码的发送短信
//产品分类
route.post('/lh_cpfl.do',userController.lh_stulist);
// 前台获取
route.get('/viewFrontImg.do',userController.viewFrontImg);
exports.routes=route; //公开