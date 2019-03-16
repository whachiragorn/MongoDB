var mongoClient = require('mongodb').MongoClient

var url = "mongodb://localhost:27017/"

mongoClient.connect(url, function(err,db){
    if(err) throw err
    var dbo = db.db("example01")
    var query ={major: "Science" }
    var updatedItem = {$set :{id:5,firstname:"Adam",lastname:"Zoo",age:22 ,major:"Math"}}
    
    
    var keysort ={age: -1}


    dbo.createCollection("students",function(err, res){
        if (err) throw err
        console.log("Collection created")
        db.close

        var obj =[
            {id:1,firstname:"Bob",lastname:"Cat",age:21,major:"Math"},
            {id:2,firstname:"Tom",lastname:"Cat",age:18,major:"Science"},
            {id:3,firstname:"Mary",lastname:"Lamb",age:19,major:"Science"},
            {id:4,firstname:"Linda",lastname:"Lamb",age:21,major:"IT"}
        ]
    
        dbo.collection("students").insertMany(obj,function(err, result)
        {
            if(err) throw err
            console.log(result)
            var age = {age:{$lt:20}}

        dbo.collection("students").find(age).sort(keysort).toArray(function(err, result){ //Find age <20
            if(err) throw err
            console.log(result)
            
            // db.close()
        })

        dbo.collection("students").find(query).toArray(function(err, result) //Find Science
        {
            if(err) throw err
            console.log(result)
            db.close()
        })
        
        })

        var lastnameupdate ={lastname:"Lamb"}
        var keyupdate ={$set :{lastname:"Fox"}}
        dbo.collection("students").updateOne(lastnameupdate,keyupdate,function(err, res){ //Update lamb to Fox
            if(err) throw err
            console.log(res.result.nModified+ " item(s) is updated")
            db.close()
        })

        dbo.collection("students").insertOne(updatedItem,function(err, res){ //Insert Adam
            if(err) throw err
            console.log("item insert")
            db.close()
        })
    })
    
    })

    
