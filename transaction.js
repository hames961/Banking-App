const express = require("express");
const connection = require("../database");

// create a Router object to define URI mappings.
router = express.Router();

// URI mapping to display all transaction
router.get("/all", (request, response) => {
  // in the callback function, use mysql connection to execute select query

  connection.query(`select * from transaction`, (errors, results) => {                       //retrieve all records from transaction table
    // populate the response object with the results received from mysql server.         
    response.send(results);
  });
});

// URI mapping to display transaction with transactionid specified in the request
router.get("/id", (request, response) => {                                               //router.get is to retrieve
  // in the callback function, use mysql connection to execute select query
  connection.query(
    `select * from transaction where transactionid = ${request.body.transactionid}`,
    (errors, results) => {
      // populate the response object with the results received from mysql server.
      response.send(results);
    }
  );
});

router.put("/update/transaction_type", (request, response) => {                                   //router.put to do updates for values
  // in the callback function, use mysql connection to execute select query
  connection.query(
    `update transaction set transaction_type = ${request.body.transaction_type} where transactionid = ${request.body.transactionid}`,
    (errors, results) => {
      // Populate the response with a success message
      response.send("Data inserted successfully");
    }
  );
});

// URI mapping to create transaction with an id specified in the request              //router.post to create
router.post("/id", (request, response) => {
  // in the callback function, use mysql connection to execute select query          //`to bundle datas of each person tgt
  connection.query(
    `insert into transaction(transactionid,transaction_type, account_number, amount, datacreated) values('${request.body.transactionid}', '${request.bodytransaction_type}', '${request.body.account_number}', '${request.body.amount}','${request.body.datacreated}')`
   , (errors, results) => {
      // populate the response object with the results received from mysql server.
      response.send(results);
    }
  );
});

// URI mapping to delete transaction with an id specified in the request                 //router.delete to delete
router.delete("/id", (request, response) => {
  // in the callback function, use mysql connection to execute select query
  connection.query(
    `delete from transaction where transactionid = ${request.body.id}`,
    (errors, results) => {
      // populate the response object with the results received from mysql server.
      response.send(results);
    }
  );
});
module.exports = router;