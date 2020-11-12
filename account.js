const express = require("express");
const connection = require("../database");

// create a Router object to define URI mappings.
router = express.Router();

// URI mapping to display all account
router.get("/all", (request, response) => {                                           //router.get is to retrieve
 console.log("account calllllll")
  // in the callback function, use mysql connection to execute select query
  connection.query(`select * from account`, (errors, results) => {
      if(errors){
          console.log(errors);
          response.status(400).send("Server error.");
      } else {
    // populate the response object with the results received from mysql server.
    response.send(results);
      }
  });
});


router.put("/update/account_type", (request, response) => {                                   //router.put to do updates for values
  // in the callback function, use mysql connection to execute select query
  connection.query(
    `update account set account_type = ${request.body.account_type} where account_number = ${request.body.account_number}`,
    (errors, results) => {
      // Populate the response with a success message
      response.send("Data inserted successfully");
    }
  );
});

                                                                                     //router.post to create
router.post("/post", (request, response) => {
  // in the callback function, use mysql connection to execute select query          //`to bundle datas of each person tgt
  connection.query(
    `insert into account(account_number, account_type, balance, max_limit, date_created, userid) values('${request.body.account_number}', '${request.body.account_type}', '${request.body.balance}', '${request.body.max_limit}','${request.body.date_created}', '${request.body.userid}')`
   , (errors, results) => {
      // populate the response object with the results received from mysql server.
      response.send(results);
    }
  );
});

                                                                                          //router.delete to delete
router.delete("/delete", (request, response) => {
  // in the callback function, use mysql connection to execute select query
  connection.query(
    `delete from account where account_number = ${request.body.account_number}`,
    (errors, results) => {
      // populate the response object with the results received from mysql server.
      response.send(results);
    }
  );
});
module.exports = router;