var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db) {
    if (err) throw err;
    var dbo=db.db("datbase_name");
   
    // var myquery={address:"highway 37"};
    // var newvalues={$set:{address:"set height"}};//you add other field also like name update

    // dbo.collection("collection_name").updateOne(myquery,newvalues,function(err,res){
    //     if (err) throw err;
    //     console.log("document updated");
    //     db.close();
    // })

    var myquery={address:/^h/};
    var newvalues={$set:{address:"set height"}};//you add other field also like name update

    dbo.collection("collection_name").updateMany(myquery,newvalues,function(err,res){
        if (err) throw err;
        console.log("docuement(s) updated");
        db.close();
    })

})