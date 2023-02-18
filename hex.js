const dotenv = require('dotenv');
const expressServer = require('./src/adapters/express/server');
const fastifyServer = require('./src/adapters/fastify/server');

dotenv.config();

const adapter = process.env.ADAPTER || 'express';

if (adapter === 'express') {
  expressServer.start();
} else if (adapter === 'fastify') {
  fastifyServer.start();
} else {
  console.error(`Unknown adapter: ${adapter}`);
  process.exit(1);
}
