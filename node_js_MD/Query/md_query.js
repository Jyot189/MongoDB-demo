var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db) {
    if (err) throw err;
    var dbo=db.db("datbase_name");
    // var query={
    //     name:"jyot"
    // };
    
    
    //filter with reguler expression
    var query={
        name: /^j/
    };

    dbo.collection("collection_name").find(query).toArray(function(err,result){
        if (err) throw err;
        console.log(result);
        db.close();
    })



})