require("dotenv").config()

const username = process.env.DBUSERNAME;
const name = process.env.DBNAME;
const password = process.env.DBPASSWORD;
const host = process.env.DBHOST;
const port = process.env.DBPORT;



module.exports = {  "development":{
    "username": process.env.DBUSERNAME,
    "password": process.env.DBPASSWORD,
    "database": process.env.DBNAME,
    "host": process.env.DBHOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DBUSERNAME,
    "password": process.env.DBPASSWORD,
    "database": process.env.DBNAME,
    "host": process.env.DBHOST,
    "dialect": "mysql"
  }
}
