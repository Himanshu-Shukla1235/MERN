require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routers/routes1");
const connectDb = require("./Database/connectDb");
const port = 8000;
const chalk = require("chalk");
const errMiddleware = require("./middlewares/errMiddleware");
//---------------------------------------------------middlewares--------------------------------->>>
app.use(express.json());
app.use("/api/auth", router);
app.use(errMiddleware)

// -----------------------------------------------------routes--------------------------------------->>>
connectDb().then(
  app.listen(port, () => {
    console.log(chalk.underline(`hello listinig to the port ${port}`));
  })
);
