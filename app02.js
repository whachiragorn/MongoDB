var mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "mydata"
})

con.connect(function (err) {
    if (err) throw err
    // console.log("Connected")

    // con.query("CREATE DATABASE mydata", function(err,result){
    //     if(err) throw err
    //     console.log("database")

    // })

    //     var sql = "CREATE TABLE students(id VARCHAR(5), firstname VARCHAR(50),lastname VARCHAR(50), age INT(11))"
    //     con.query(sql,function(err,result){
    //     if(err) throw err
    //     console.log("Table created")
    //     con.end
    // }) 

    //     var sql = "INSERT INTO students(id , firstname ,lastname , age ) VALUES ('1','Bob','Cat','20')"
    //     con.query(sql,function(err,result){
    //     if(err) throw err
    //     console.log("Insert 1 record")
    //     con.end();
    // }) 

    // var sql = "INSERT INTO students (id, firstname, lastname, age) VALUES ?"
    // var values = [
    //   ['1', 'Bob', 'Cat', 20],
    //   ['2', 'Tom', 'Cat', 19],
    //   ['3', 'Amy', 'Apple', 52],
    //   ['4', 'Hannah', 'Lamb', 21],
    //   ['5', 'Michael', 'Valley', 34],
    //   ['6', 'Sandy', 'Ocean', 28],
    //   ['7', 'Betty', 'Green', 15],
    //   ['8', 'Richard', 'Sky', 33],
    //   ['9', 'Susan', 'Bay', 48],
    //   ['10', 'Vicky', 'Yellow', 29],
    //   ['11', 'Ben', 'Park', 38],
    //   ['12', 'William', 'Central', 54],
    //   ['13', 'Chuck', 'May', 39],
    //   ['14', 'Viola', 'Sideway', 33]
    // ]
    //   con.query(sql, [values], function (err, result) {
    //     if (err) throw err;
    //     console.log("Number of records inserted: " + result.affectedRows);
    //   })

    // var sql = "SELECT * FROM students LIMIT 2,5"
    // con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log(result);

    // })

    //     var sql = "DELETE FROM students WHERE firstname = 'Amy'";
    //   con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("Number of records deleted: " + result.affectedRows);
    //   });


    // var sql = "SELECT * FROM students,SC,Course WHERE students.id=SC.id AND SC.cid='egco427'AND SC.cid=Course.cid"
    // con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     con.end
    // });

    var sql = "SELECT * FROM students,SC,Course WHERE students.id=SC.id AND students.firstname='Tom' AND SC.cid=Course.cid"
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        con.end
    });

})