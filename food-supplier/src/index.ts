import * as restify from 'restify';
import * as grpc from 'grpc';
import FoodSupplierServer from './food_supplier_server';
import {
  IFoodSupplierServiceServer,
  FoodSupplierServiceService,
} from './proto/supplier_grpc_pb';

// Initialize a basic http server for service healthcheck
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

// Initialize GRPC Server
const grpcServer = new grpc.Server();
grpcServer.addService<IFoodSupplierServiceServer>(
  FoodSupplierServiceService,
  new FoodSupplierServer()
);
grpcServer.bind(`localhost:${port}`, grpc.ServerCredentials.createInsecure());
grpcServer.start();
