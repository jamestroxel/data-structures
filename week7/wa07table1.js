const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config({path: '../.env'});  

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'jtroxel';
db_credentials.host = 'data-structures.cj2bazt69614.us-east-1.rds.amazonaws.com';
db_credentials.database = 'aa';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;
console.log(process.env.AWSRDS_PW)
// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

// Sample SQL statement to create a table: 
var thisQuery = "CREATE TABLE aalocations (address varchar(100), lat double precision, long double precision, building varchar(100), floorInfo varchar(100), groupName varchar(100), dayTime varchar(100), wcAccess varchar(100), details varchar(100));";
// Sample SQL statement to delete a table: 
// var thisQuery = "DROP TABLE aalocations;"; 

client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});