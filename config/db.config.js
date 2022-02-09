const mysql = require('mysql');
// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_emp'
});
// connect to database
dbConn.connect(function(error){
    //Error handler
    if(error) throw `Database Connection Failed: ${error}`;
    console.log('Database connected');
}); 

module.exports = dbConn;