const net = require("net");
const { IP, PORT } = require("./constants")

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // once a connection to the server is established let the client know with a success message and send the name of the client to the server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write('Name: JT');
  });

  // log any incoming messages from the server to the client
  conn.on("data", (data) => {
    console.log(data);
  });  

  return conn;
};

module.exports = {
  connect
}