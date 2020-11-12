const express = require("express");
const connection = require("../database");

// create a Router object to define URI mappings.
router = express.Router();

// URI mapping to display all user
router.get("/all", (request, response) => {
  // in the callback function, use mysql connection to execute select query

  connection.query(`select * from user`, (errors, results) => {                       //retrieve all records from user table
    // populate the response object with the results received from mysql server.         
    response.send(results);
  });
});

// URI mapping to display customer with an id specified in the request
router.get("/id", (request, response) => {                                               //router.get is to retrieve
  // in the callback function, use mysql connection to execute select query
  connection.query(
    `select * from user where ID = ${request.body.id}`,
    (errors, results) => {
      // populate the response object with the results received from mysql server.
      response.send(results);
    }
  );
});

router.put("/update/MOBILE", (request, response) => {                                   //router.put to do updates for values
  // in the callback function, use mysql connection to execute select query
  connection.query(
    `update user set mobile = ${request.body.mobile} where ID = ${request.body.id}`,
    (errors, results) => {
      // Populate the response with a success message
      response.send("Data inserted successfully");
    }
  );
});

// URI mapping to create customer with an id specified in the request              //router.post to create
router.post("/id", (request, response) => {
  // in the callback function, use mysql connection to execute select query          //`to bundle datas of each person tgt
  connection.query(
    `insert into user(ID, Name, mobile, password, icnumber) values('${request.body.ID}', '${request.body.Name}', '${request.body.mobile}', '${request.body.password}','${request.body.icnumber}')`
   , (errors, results) => {
      // populate the response object with the results received from mysql server.
      response.send(results);
    }
  );
});

// URI mapping to delete customer with an id specified in the request                 //router.delete to delete
router.delete("/id", (request, response) => {
  // in the callback function, use mysql connection to execute select query
  connection.query(
    `delete from user where ID = ${request.body.id}`,
    (errors, results) => {
      // populate the response object with the results received from mysql server.
      response.send(results);
    }
  );
});
module.exports = router;
