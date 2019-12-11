var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'mysql669.umbler.com',
  port     : 41890,
  user     : 'smartcampus',
  password : 'W|9MM9)vIi',
  database : 'smartcampus',
  multipleStatements: true
});

connection.connect(err => {
  if (err) throw err
  console.log('connected!')
});

module.exports = connection