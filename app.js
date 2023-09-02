const express = require('express')
const mysql = require('mysql2');
const port = 3000 | process.env.port

const connection = mysql.createConnection({
    host: process.env.dbhostname,
    port: process.env.dbport,
    user: process.env.dbuser,
    password: process.env.dbpassword,
    database: process.env.dbname
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

const app = express()
app.use(express.json())

app.post("/todo/create",(req, res)=>{
    const topic = req.body.topic
    const message = req.body.message

    const queryString = `insert into todos(topic, message) values('${topic}', '${message}')`

    try {
        connection.query(queryString,(err, result)=>{
            if (err){
                res.status(500).send(err)
                throw err
            }
            res.status(201).send()
        })
    }catch (ex){
        res.status(500).send(ex)
    }
})

app.get("/todo/get/:id",(req,res)=>{
    const id = req.param("id")
    const queryString = `select * from todos where id = ${id}`
    try {
        connection.query(queryString,(err, result)=>{
            if (err){
                res.status(500).send(err)
                throw err
            }

            if (result.length <= 0){
                res.status(404).json("data not found!")
            }else{
                res.status(200).json(result[0])
            }
        })
    }catch (ex){
        res.status(500).send(ex)
    }
})

app.listen(port,()=> {
    console.log('Running app http://localhost:'+port)
})