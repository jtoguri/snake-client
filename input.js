const { mappedKeys, exitKey } = require("./constants")

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// compares the key value to all mapped keys
const handleUserInput = function (key) {
  if (key === exitKey) {
    process.exit();
  }

  if (mappedKeys[key]) {
    connection.write(mappedKeys[key]);
  }
};

module.exports = {
  setupInput
};