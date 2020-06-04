import grpc from 'grpc';
import FoodVendorServer from './food_vendor_server';
import {
  IFoodVendorServiceServer,
  FoodVendorServiceService,
} from './proto/vendor_grpc_pb';

const port = process.env.PORT || 8080;

//Initialize gRPC Server
const grpcServer = new grpc.Server();
grpcServer.addService<IFoodVendorServiceServer>(
  FoodVendorServiceService,
  new FoodVendorServer()
);
grpcServer.bind(`localhost:${port}`, grpc.ServerCredentials.createInsecure());
grpcServer.start();
console.log(`Food Vendor service listening on port ${port}`);
