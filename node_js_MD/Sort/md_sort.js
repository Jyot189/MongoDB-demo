var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db) {
    if (err) throw err;
    var dbo=db.db("datbase_name");
    
    // var mysort={name:1};//asec
    var mysort={name:-1};
    

    dbo.collection("collection_name").find().sort(mysort).toArray(function(err,result){
        if (err) throw err;
        console.log(result);
        db.close();
    })

})