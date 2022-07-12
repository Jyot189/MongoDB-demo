var  MongoClient = require('mongodb').MongoClient;
var url="mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    console.log("Create Database");
    db.close();
})
//MD is database is not created until is content is available