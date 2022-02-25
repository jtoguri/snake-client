// play.js is file that is run to connect the client to the server, utilizing both the client and input modules

const net = require("net");
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const conn = connect();

setupInput(conn);