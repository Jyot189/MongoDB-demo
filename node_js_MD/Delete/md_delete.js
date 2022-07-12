var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db) {
    if (err) throw err;
    var dbo=db.db("datbase_name");
    
    // var myquery={
    //     address:"highway 71"
    // };
    

    // dbo.collection("collection_name").deleteOne(myquery,function(err,obj){
    //     if (err) throw err;
    //     console.log("1 document delete");
    //     db.close();
    // })

    //delete Many
    var myquery={
        address:/^h/
    };
    

    dbo.collection("collection_name").deleteMany(myquery,function(err,obj){
        if (err) throw err;
        console.log("document(s) deleted");
        db.close();
    })

})