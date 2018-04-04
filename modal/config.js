

const mysql = require('mysql')
module.exports={
    query:function(sql,arr,callback){

        //1.
        const mysql_user ={ 
            host   : 'localhost',
            user   : 'root',
            password : 'root',
            database : 'toxic'
          }; 
          var connection = mysql.createConnection(mysql_user); //建立数据库链接
           // 2                                        
          connection.connect(function(err) {                     //链接数据库
              if (err) {      //链接错误执行
                  console.log('[错误]' + err);
                  connection.end();
                  return;
              };
              console.log('链接成功');    //否则链接成功
          });
          // 3
         
          connection.query(sql,arr,callback)
          
        // 4
        connection.end()
    }
}