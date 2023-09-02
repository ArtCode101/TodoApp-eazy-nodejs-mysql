const express = require('express')
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: 'root',
    database: 'todo'
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

const app = express()
app.use(express.json())

const port = 3000

app.listen(port,()=> {
    console.log('Running app http://localhost:'+port)
})