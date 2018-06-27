
// const mysql = require('mysql');
// module.exports.sqlpool=function(){
//     var pool={
//         config:{
//             host:'localhost',
//             user:'root',
//             password:'root',
//             port:3306,
//             database:'toxic'
//         },
//         connect:function(sql,arr,fn){
//             const pool = mysql.createPool(this.config);
//             pool.getConnection(function(err,connect){
//                 if(err){
//                     console.log(err)
//                 }
//                 else{
//                     connect.query(sql,arr,fn);
//                 }
//             })
//         }

//     };
//     return pool;
// };
