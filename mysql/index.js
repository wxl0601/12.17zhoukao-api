

var mysql = require('mysql');
var pool = mysql.createPool({
    port:3306,
    user:'root',
    password:'root',
    database:"1609b",
    connectionLimit:100
})

module.exports = function(sql,arr,ck){
    ck = ck ? ck : arr;
    arr = arr || [];
    pool.getConnection(function(err,con){
        if(err){
            ck && ck(err)
        }
        con.query(sql,arr,function(err,results,filed){
            if(err){
                ck && ck(err)
            }
            ck && ck(null,results,filed)
            con.release()

        })
    })
     
}