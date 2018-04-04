const mysql= require('mysql');
const db = require('./config.js');
module.exports={
    details:function(goods_id,callback){
    const sql ="select * from goods,goods_detail where goods.goods_id=goods_detail.goods_id and goods.goods_id=?";
    db.query(sql,[goods_id],callback);
}
}