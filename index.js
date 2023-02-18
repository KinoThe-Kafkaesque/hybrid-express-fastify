const express = require('express');
const fastify = require('fastify')();

const app = express();
const useFastify = true; // set to false to use Express instead

if (useFastify) {
  const fastify = require('fastify')();

  fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
  });

  fastify.listen(3000, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening on ${address}`);
  });
} else {
  const express = require('express');
  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });
}
