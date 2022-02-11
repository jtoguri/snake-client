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

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }

  const mappedKeys = {
    w: "Move: up",
    a: "Move: left",
    s: "Move: down",
    d: "Move: right",
    h: "Say: HI!",
    g: "Say: GG!",
    b: "Say: Bye",
    f: "Say: FAIL",
    u: "Say: You suck"
  }

  if (mappedKeys[key]) {
    connection.write(mappedKeys[key]);
  }
};

module.exports = {
  setupInput
};