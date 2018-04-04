'use strict'
const express =require('express'); //引用express模块
const logger= require('morgan'); //日志
const myapp =express();
const myejs=require('ejs') //ejs

 //const viewRoute=require("./router/ejsRoute") //ejs
const cookieParser = require('cookie-parser') // cookie
const bodyParser = require('body-parser'); //post
const session = require('express-session');

const Router = require('./router/routes.js') //引用路由
//myapp.set("views",__dirname+'/view');
//myapp.engine("html",myejs.__express);
//myapp.set("public engine","html");
myapp.use(cookieParser())
myapp.use(bodyParser.urlencoded({ extended: false })); //解析urlencoeded编码的post参数，URLEncoded编码中,所有的字符均为ANSCII码
myapp.use(logger('dev')); //日志
myapp.use(session({
    name: "14k",
    secret: "14k",
    saveUninitialized: true,
    cookie: {
        maxAge: 666666
    }, //失效时间
    rolling: true, //更新session-cookie失效时间 默认为false
    resave: true // 重新保存 ，每次请求 重新计时
}))

myapp.use(Router.routes) 
myapp.use(express.static(__dirname+'/public'));//__dirname:全局变量，存储的是文件所在的文件目录
myapp.listen(7777,function () {
    console.log('请求成功')
});
