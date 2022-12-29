// SECTION: builtin node.js packages
// !SECTION

// SECTION: 3rd party packages
const express = require("express");
// !SECTION

// SECTION: Local project file imports

// !SECTION

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

module.exports = app;
