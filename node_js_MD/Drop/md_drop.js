var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db) {
    if (err) throw err;
    var dbo=db.db("datbase_name");

    // dbo.collection("collection_name").drop(function(err,delOk){
    //     if (err) throw err;
    //     if(delOk)
    //     console.log("collection deleted");
    //     db.close();
    // })

    dbo.collection("collection_name").dropCollection("collection_name",function(err,delOk){
        if (err) throw err;
        if(delOk)
        console.log("collection deleted");
        db.close();
    })
})