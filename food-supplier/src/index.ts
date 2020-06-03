import * as restify from 'restify';

const server = restify.createServer();
const port = 8080;

server.get('/food-supplier/healthcheck', (req, res) => {
  res.send({
    status: 'OK',
  });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
