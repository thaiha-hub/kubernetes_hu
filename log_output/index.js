const crypto = require("crypto");

const randomString = crypto.randomUUID(); // created once at startup

function logLine() {
  console.log(`${new Date().toISOString()}: ${randomString}`);
}

logLine();
setInterval(logLine, 5000);

