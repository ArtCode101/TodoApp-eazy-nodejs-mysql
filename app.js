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


app.listen(port,()=> {
    console.log('Running app http://localhost:'+port)
})