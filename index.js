const express = require('express');

const logger = require('./middleware/logger');
const projectRouter = require('./routers/projectRouter');
const actionRouter = require('./routers/actionRouter');

const server = express();
const PORT = 4000;

server.use(express.json());
server.use(logger('short'));
server.use('/api/projects', projectRouter);
server.use('/api/project/:id/actions', actionRouter)

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})