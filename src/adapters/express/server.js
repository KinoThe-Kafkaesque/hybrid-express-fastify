const express = require('express');
const service = require('../../application/helloUseCase');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const data = service.getHello();
  res.send(data);
});

start = async () => {
  app.listen(port, () => {
    console.log(`Express server running on port ${port}`);
  });
};
module.exports = { start: start };