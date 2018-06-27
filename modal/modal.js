const mysql = require('mysql');
const db = require('./config.js');
var AV = require('leanengine');
module.exports = {
    details: function (goods_id, callback) {
        const sql = "select * from goods,goods_detail where goods.goods_id=goods_detail.goods_id and goods.goods_id=?";
        db.query(sql, [goods_id], callback);
    },
    //个人中心
    myInformation:function(userId,callback){
        let sql="select * from user_information where user_id=?";
        // console.log(sql)
        db.query(sql,[userId],callback)
    },
    user_addinformation:function(userId,nameAdd,birthAdd,callback){
        // console.log(sexAdd)
        let sql="update user_information set user_name=?,user_birthday=? where user_id=?";
        db.query(sql,[nameAdd,birthAdd,userId],callback)
    },
    accountInformation:function(userId,emailUpdate,phoneUpdate,oldPassword,newPassword,callback){
        // console.log(sexAdd)
        let sql="update user_information set user_email=?,user_tel=?,user_password=? where user_id=? and user_password=?";
        db.query(sql,[emailUpdate,phoneUpdate,newPassword,userId,oldPassword],callback)
    },
    addressGet:function(userId,callback){
        let sql="select * from address_detailed where user_id=?";
        db.query(sql,[userId],callback)
    },
    change_address:function(userId,change_recName,change_recTel,change_recProvince,change_recCity,change_recCounty,change_recDetailed,getAddress_id,callback){
        let sql="update address_detailed set address_recvname=?,address_tel=?,address_province=?,address_city=?,address_county=?,address_detailed=? where user_id=? and address_id=?";
        db.query(sql,[change_recName,change_recTel,change_recProvince,change_recCity,change_recCounty,change_recDetailed,userId,getAddress_id],callback)
    },
    add_address:function(userId,add_recName,add_recTel,add_recProvince,add_recCity,add_recCounty,add_recDetailed,callback){
        let sql="INSERT INTO address_detailed VALUES (null, ?, ?, ?, ?, ?, null, ?, ?, '0', '1');";
        db.query(sql,[userId,add_recProvince,add_recCity,add_recCounty,add_recDetailed,add_recTel,add_recName],callback)
    },
    address_delete:function(userId,getAddress_id,callback){
        let sql="delete from address_detailed where user_id=? and address_id=?";
        db.query(sql,[userId,getAddress_id],callback)
    },
    default_set:function(userId,getAddress_id,callback){
        let sql="update address_detailed set address_default=1 where user_id=? and address_id=?;update address_detailed set address_default=0 where user_id=? and address_id!=?;";
        db.query(sql,[userId,getAddress_id,userId,getAddress_id],callback)
    },
    user_order:(userId,li_content,callback)=>{
        if(li_content=="所有订单"){
            let sql="SELECT goods.goods_cover,goods.goods_name,order1.order_id,order1.sum_price,order1.order_state,order_details.order_date,order_details.order_gdnum FROM order1,order_details,goods WHERE order_details.goods_id=goods.goods_id AND order1.order_id=order_details.order_id AND order1.user_id=?"
            db.query(sql,[userId],callback)
        }else{
            let sql="SELECT goods.goods_cover,goods.goods_name,order1.order_id,order1.sum_price,order1.order_state,order_details.order_date,order_details.order_gdnum FROM order1,order_details,goods WHERE order_details.goods_id=goods.goods_id AND order1.order_id=order_details.order_id AND order1.user_id=? And order1.order_state=?"
            db.query(sql,[userId,li_content],callback)
        }
    },
    user_collection:function(userId,callback){
        let sql="SELECT collection.col_id,goods.goods_cover,goods.goods_name,goods.goods_sale FROM collection,goods WHERE collection.goods_id=goods.goods_id AND user_id=?";
        db.query(sql,[userId],callback)
    },
    //登录页
    login:(name,pwd,callback)=>{
        const sql="select * from user_information where user_account= ?  and user_password=?" 
        db.query(sql,[name,pwd],callback) 
    },
    signUp:(res,name,pwd,phone,code,callback)=>{

         AV.Cloud.verifySmsCode(code, phone).then((data)=> {
             console.log(typeof("phone"))
             const sql="INSERT INTO user_information (user_tel,user_account,user_password)  VALUES (?,?,?)" 
             db.query(sql,[phone,name,pwd],callback); 
         },(err)=>{
             res.send("fail2")
         })
    },
    queryUser:(name,callback)=>{
        const sql="select * from user_information where user_account=? " 
        db.query(sql,name,callback) 
    },
    ForgotPwd:(res,name,phone,code,newPwd,callback)=>{
        AV.Cloud.verifySmsCode(code, phone).then((data)=> {
            const sql="update user_information set user_password= ? where user_tel= ?"
            db.query(sql,[newPwd,phone],callback); 
        },(err)=>{
            // console.log(err)
            res.send("fail2")
        })
    },
    //产品分类
    lh_stulist:function (callback) {
        const sql="select*from goods "
        db.query(sql,[],callback)
    },
    // 前台获取
    viewFrontImg:function(callback){
        const sql ="SELECT * FROM front_control";
        db.query(sql,callback);
    },
    //向定制表加数据
    addCustom:function (custom_price,key_num,board_color,key_light,custom_img,custom_detail,user_id,callback) {
        const sql = " INSERT INTO keyboard_custom (custom_price,key_num,board_color,key_light,custom_img,custom_detail,user_id) VALUES(?,?,?,?,?,?,?);INSERT INTO order1(custom_id,iscustom) VALUES((select @@IDENTITY),'定制订单',);";
        db.query(sql,[custom_price,key_num,board_color,key_light,custom_img,custom_detail,user_id],callback);
    },
    addToTheCar:function (userId,goods_id,car_gdnum,callback) {
        const sql = " INSERT INTO car_details (user_id,car_gdnum,goods_id) VALUES(?,?,?)";
        db.query(sql,[userId,car_gdnum,goods_id],callback);
    },
    getUserId:function(name,callback){
        const sql =" SELECT user_id FROM user_information where user_account= ?";
        db.query(sql,name,callback);
    },
    //购物车
    getCar:function(id,callback){
        console.log(id);
        const sql =" SELECT * FROM goods,car_details where goods.goods_id = car_details.goods_id AND  user_id= ?";
        db.query(sql,id,callback);
    },
    getId:function(name,callback){
        const sql =" SELECT user_id FROM user_information where user_account= ?";
        db.query(sql,name,callback);
    },
    deleteShopCar:function(goods_id,id,callback){
        console.log(goods_id);
        console.log(id);
        const sql =" DELETE  FROM car_details where goods_id= ? and user_id=? ";
        db.query(sql,[goods_id,id],callback);
    },
}