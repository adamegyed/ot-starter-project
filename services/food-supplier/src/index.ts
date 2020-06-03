import * as restify from 'restify';

const server = restify.createServer();
const port = 8080;

server.get('/', (req, res) => {
  res.send({
    field: 'value',
  });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
