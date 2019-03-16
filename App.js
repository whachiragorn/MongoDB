var mongoClient = require('mongodb').MongoClient

var url = "mongodb://localhost:27017/"

mongoClient.connect(url, function(err,db){
    if(err) throw err
    var dbo = db.db("example01")
    var query ={name: /^B/}
    var updatedItem = {$set :{name:"Box" ,price:50}}
    // var keysort ={name:1}
    // dbo.createCollection("products",function(err, res){
    //     if (err) throw err
    //     console.log("Collection created")
    //     db.close
    // })

    //  var obj ={name : "Coffe mug",price :10}

    // var obj = [ 
    //     { name: "Book", price: 10 },
    //     { name: "Pencil", price: 5 },
    //     { name: "Calculator", price: 40 },
    //     { name: "Notebook", price: 15 },
    //     { name: "T-Shirt", price: 20 },
    //     { name: "Jacket", price: 20 }
    //   ]



    // dbo.collection("products").find(query).sort(keysort).toArray(function(err, result){
    //     if(err) throw err
    //     console.log(result)
    //     db.close()
    // })

    dbo.collection("products").updateOne(query,updatedItem,function(err, res){
        if(err) throw err
        console.log(res.result.nModified+ " item(s) is updated")
        db.close()
    })
})