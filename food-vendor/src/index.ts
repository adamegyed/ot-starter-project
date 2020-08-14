const opentelemetry = require('@opentelemetry/api');
const {NodeTracerProvider} = require('@opentelemetry/node');
const {SimpleSpanProcessor} = require('@opentelemetry/tracing');
const { TraceExporter } = require('@google-cloud/opentelemetry-cloud-trace-exporter');

const projectId = 'cloud-debugging';

// GOOGLE_APPLICATION_CREDENTIALS are expected by a dependency of this code
// and not this code itself. Checking for existence here but not retaining (as not needed)
if (!projectId) {
  throw Error('Unable to proceed without a Project ID');
}

const provider = new NodeTracerProvider();

// Initialize the exporter
const exporter = new TraceExporter({projectId: projectId});

// Configure the span processor to send spans to the exporter
provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

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
grpcServer.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure());
grpcServer.start();
console.log(`Food Vendor service listening on port ${port}`);
