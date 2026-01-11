// Configuring the server port
// Look for the PORT environment variable, otherwise default to 3000
const port = process.env.PORT || 3000

// Worker code to create a simple HTTP server
// create a server that responds with "Hello!!! It works!" to all requests
const http = require('http')

// Announce server creation
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello!!! It works!\n')
})

server.listen(port, () => {
  console.log(`Server started in port ${port}`)
})
