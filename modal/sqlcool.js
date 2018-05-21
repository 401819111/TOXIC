
const mysql = require('mysql');
module.exports.sqlpool=function(){
    var pool={
        config:{
            host:'172.16.13.47',
            user:'root',
            password:'root',
            port:3306,
            database:'demo128'
        },
        connect:function(sql,arr,fn){
            const pool = mysql.createPool(this.config);
            pool.getConnection(function(err,connect){
                if(err){
                    console.log(err)
                }
                else{
                    connect.query(sql,arr,fn);
                }
            })
        }

    };
    return pool;
};
