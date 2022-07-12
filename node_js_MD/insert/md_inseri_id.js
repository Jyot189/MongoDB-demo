var  MongoClient = require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo=db.db("datbase_name");//dnmy database name
    var myobj=[
        {_id:200 , name:'jyot'},
        {_id:4753, name:'jk'},
        {_id:4558,name:'jmk'}
    ]
            

    dbo.collection("collection_name").insertMany(myobj,function(err,res){
        if (err) throw err;
        console.log(res);
        db.close();
    });

    // dbo.collection("collection_name").findOne({},function(err,result){
    //     if (err) throw err;
    //     console.log(result.name);
    //     db.close();
    // })

    // dbo.collection("collection_name").find({}).toArray(function(err,result){
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // })

    // dbo.collection("collection_name").find({},{projection:{_id:0,name:1}}).toArray(function(err,result){
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // })
})