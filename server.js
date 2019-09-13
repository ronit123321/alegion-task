"use strict";

var mockUsers = require("./mock-server/user.mock");
var cors = require('cors');

const express = require("express");

const PORT = 5000;

const app = express();
app.use(cors());

try {
  app.listen(PORT, () =>
    console.log(`server currently running on port ${PORT}`)
  );
} catch (error) {
  console.log(`error launching server on port ${PORT}`);
}

app.get("/", (req, res) => {
  res.status(400).send({
    errorMessage: "empty request url",
    errorId: 1001
  });
});

app.get("/users", (req, res) => {
  res.status(200).send(mockUsers.mockUserRaw.data);
});

app.get("/*", (req, res) => {
  res.status(400).send({
    errorMessage: "unknown request url",
    errorId: 1002
  });
});
