const express = require("express");
const app = express();
require("dotenv").config();
require("./db/conn");
const router = require("./routers/router");

//middlewares
app.use(express.json());

app.use("/api/v1/bootcamps", router);

app.listen(process.env.PORT || 4000, (req, res) => {
  console.log("server is listening on port 5000");
});
