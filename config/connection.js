var mysql = require('mysql');
var app = require('../server.js');

// if (app.settings.env == 'development') {
    var connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'Avernus#1',
        database: 'burgers_db'
    });
// } else {
//     var connection = mysql.createConnection(process.env.JAWSDB_URL);
// };

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id: ' + connection.threadId);
});

module.exports = connection;