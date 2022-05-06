const express = require("express");
const app = express();

const port = 4848;

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});