const mysql = require('mysql');
const db = require('./config.js');
module.exports = {
    details: function (goods_id, callback) {
        const sql = "select * from goods,goods_detail where goods.goods_id=goods_detail.goods_id and goods.goods_id=?";
        db.query(sql, [goods_id], callback);
    },
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
}