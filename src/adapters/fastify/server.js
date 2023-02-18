const fastify = require('fastify')();
const service = require('../../application/helloUseCase');

fastify.get('/', async (request, reply) => {
  const data = service.getHello();
  return data;
});

start = async () => {
  fastify.listen(3000, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Fastify server running on ${address}`);
  });
};
module.exports = { start: start };