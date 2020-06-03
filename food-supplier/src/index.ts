import * as restify from 'restify';

const server = restify.createServer();
const port = 8080;

server.get('/food-supplier', (req, res) => {
  res.send({
    field: 'value',
  });
});

server.get('/food-supplier/longer-url', (req, res) => {
  res.send({
    matching: 'value',
  });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
