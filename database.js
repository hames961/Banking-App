const mysql = require("mysql");

// define parameters for MySQL connection
parameters = {
  host: "127.0.0.1", // address where the mysql server is running
 // port: 3000, // port where the mysql server is running
  user: "root", // username for login
  password: "password", // password for login
  database: "nusmoneyappfordata", // database to use to execute queries
};

// define the connection
connection = mysql.createConnection(parameters);

// connect to mysql server
connection.connect((error) => {
  if (error) {
    // if you get any error, display the error
    console.log(error);
  } else {
    // otherwise display that connection was successful
    console.log("Connection successful");
  }
});

module.exports = connection;