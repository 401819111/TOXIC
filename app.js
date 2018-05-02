'use strict'
const express =require('express'); //引用express模块
const logger= require('morgan'); //日志
const myapp =express();
const myejs=require('ejs') //ejs
const viewRoute=require("./router/viewRoute") //ejs
const cookieParser = require('cookie-parser') // cookie
const bodyParser = require('body-parser'); //post
const session = require('express-session');
const fs=require("fs")
const AV = require('leanengine'); //引用短信模块
AV.init({   //短信接口初始化

    appId: '1pDX5iHJuBy3hRizQw3rRAzk-gzGzoHsz',
    appKey: 'vCNSnDNh2TiX0H8xf8HPY9KP',
    masterKey: 'DkLJl32eEOVUhV8IMTV6Yuyx'

})
const Router = require('./router/routes.js') ;//引用路由
myapp.use(cookieParser())
myapp.use(bodyParser.urlencoded({ extended: false })); //解析urlencoeded编码的post参数，URLEncoded编码中,所有的字符均为ANSCII码
// myapp.use(logger('dev')); //日志

myapp.use(session({
    name: "14k",
    secret: "14k",
    saveUninitialized: true,
    cookie: {
        maxAge: 100000
    }, //失效时间
    rolling: true, //更新session-cookie失效时间 默认为false
    resave: true // 重新保存 ，每次请求 重新计时
}))
myapp.set("views", __dirname + "/views") //配置ejs
myapp.engine("html", myejs.__express)
myapp.set("view engine", "html")
myapp.use(viewRoute.routes) //使用路由
myapp.use(Router.routes) ;
var ip = require('ip');//获取ip地址
const ws=require('ws').Server;
var ws_server=new ws({
    host:ip.address(),
    port:8888
});
var connArr=new Array();
ws_server.on('connection',function(conn){
   connArr.push(conn);
    console.log('连接成功');
    conn.on('message',function(data){
        for(var i=0;i<connArr.length;i++){
            connArr[i].send(data);
        }
    })
    conn.on('close',function(){
        for(var i=0;i<connArr.length;i++){
            if(connArr[i]==conn){
                connArr.splice(i,1);
                break;
            }
        }
    })
});
myapp.use(express.static(__dirname+'/public'));//__dirname:全局变量，存储的是文件所在的文件目录
myapp.listen(8888,function () {
    console.log('请求成功')
});