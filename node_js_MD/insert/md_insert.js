var  MongoClient = require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

// MongoClient.connect(url,function(err,db){
//     if (err) throw err;
//     var dbo=db.db("mydb");
//     var myobj={name:"company",address:"highway 37"}

//     dbo.collection("customers").insertOne(myobj,function(err,res){
//         if (err) throw err;
//         console.log("1 insert");
//         db.close();
//     });
// })


// many insert 
MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo=db.db("datbase_name");
    var myobj=[{name:"company",address:"Highway 37"},
               {name:"company 2",address:"highway 71"}
            ]

    dbo.collection("collection_name").insertMany(myobj,function(err,res){
        if (err) throw err;
        console.log(" insert many count",res.insertedCount);
        db.close();
    });
})