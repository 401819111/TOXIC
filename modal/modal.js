const mysql = require('mysql');
const db = require('./config.js');
module.exports = {
    // details: function (goods_id, callback) {
    //     const sql = "select * from goods,goods_detail where goods.goods_id=goods_detail.goods_id and goods.goods_id=?";
    //     db.query(sql, [goods_id], callback);
    // },
    myInformation:function(userName,userSex,userBirth,userPhone,callback){
        let Name="user_name,";
        let Sex="user_sex,";
        let Birth="user_birthday,";
        let Phone="user_tel";
        let content=Name+Sex+Birth+Phone;
        console.log(content)
        let sql="select "+content+" from user_information where user_id=1"
        console.log(sql)
        db.query(,callback)
    }
}