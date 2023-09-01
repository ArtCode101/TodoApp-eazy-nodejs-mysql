const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: 'root',
    database: 'todo',
    insecureAuth : false,
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    connection.end();
  });