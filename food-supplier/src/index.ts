import * as traceAgent from '@google-cloud/trace-agent';
traceAgent.start();
import * as grpc from 'grpc';
import FoodSupplierServer from './food_supplier_server';
import {
  IFoodSupplierServiceServer,
  FoodSupplierServiceService,
} from './proto/supplier_grpc_pb';

const port = process.env.PORT || 8080;

// Initialize gRPC Server
const grpcServer = new grpc.Server();
grpcServer.addService<IFoodSupplierServiceServer>(
  FoodSupplierServiceService,
  new FoodSupplierServer()
);
grpcServer.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure());
grpcServer.start();
console.log(`Food Supplier service listening on port ${port}`);
