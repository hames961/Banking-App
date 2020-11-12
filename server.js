const express = require("express"); // import express package which will be used to create the backend service
const bodyParser = require("body-parser"); // import body-parser package which is used to parse the body's content from the request
const cors = require("cors");

const userRouter = require("./routers/user");
const accountRouter = require("./routers/account");
const transactionRouter = require("./routers/transaction");


// create an instance of express which will start the server.
application = express();
application.use(cors());
application.use(bodyParser.json()); // use body parser to specify how to convert body's content.

application.use("/user", userRouter); // tell the application to use mappings from the router object
application.use("/transaction", transactionRouter); 
application.use("/account", accountRouter);

// start the application on port 8000 since port 3000 used fro front end react
application.listen(8000, (error) => {
  if (!error) {
    console.log("Application started succesfully");
  }
});
