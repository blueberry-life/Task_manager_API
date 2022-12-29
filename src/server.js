// SECTION: builtin node.js packages
const http = require("http");
// !SECTION

// SECTION: 3rd party packages
require("dotenv").config();
// !SECTION

// SECTION: Local project file imports
const expressApp = require("./express");
// !SECTION

const port = process.env.PORT || 5000;
const server = http.createServer(expressApp);

server.listen(port, () => console.log(`server running on port ${port}....`));
