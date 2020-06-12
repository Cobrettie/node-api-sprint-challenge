const express = require('express');

const server = express();
const PORT = 4000;

server.use(express.json())

server.get('/', (req, res) => {
  res.status(200).json({
    message: "Server running my friend"
  })
})

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})