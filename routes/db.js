var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'ec2-174-129-255-21.compute-1.amazonaws.com',
  user     : 'pluixcfucscqgg',
  password : '4b851aaf1780d5bdb1ca410c8240be0c6076ae1c740538eae0f66321df597221',
  database : 'dc5hun8fstubfr',
  multipleStatements: true
});

connection.connect();

module.exports = connection