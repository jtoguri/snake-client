const IP = "localhost";
const PORT = 50541;

// mapped keys contain both movement directions for the snake and messages to display on the game UI
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
};

// establish a specific key for client side exiting of the game
const exitKey = "\u0003";

module.exports = {
  IP,
  PORT,
  mappedKeys,
  exitKey
};