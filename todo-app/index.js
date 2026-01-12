// Configuring the server port
// Look for the PORT environment variable, otherwise default to 3000
const port = process.env.PORT || 3000

// Worker code to create a simple HTTP server
// create a server that responds with "Hello!!! It works!" to all requests
const http = require('http')

// Announce server creation
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Todo App</h1><p>Welcome to my awesome Todo-app running on Kubernetees</p>')
})

server.listen(port, () => {
  console.log(`Server started in port ${port}`)
})
