// package: 
// file: supplier.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as supplier_pb from "./supplier_pb";

interface IFoodSupplierServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listVendors: IFoodSupplierServiceService_IListVendors;
}

interface IFoodSupplierServiceService_IListVendors extends grpc.MethodDefinition<supplier_pb.ListVendorsRequest, supplier_pb.ListVendorsReply> {
    path: string; // "/.FoodSupplierService/ListVendors"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<supplier_pb.ListVendorsRequest>;
    requestDeserialize: grpc.deserialize<supplier_pb.ListVendorsRequest>;
    responseSerialize: grpc.serialize<supplier_pb.ListVendorsReply>;
    responseDeserialize: grpc.deserialize<supplier_pb.ListVendorsReply>;
}

export const FoodSupplierServiceService: IFoodSupplierServiceService;

export interface IFoodSupplierServiceServer {
    listVendors: grpc.handleUnaryCall<supplier_pb.ListVendorsRequest, supplier_pb.ListVendorsReply>;
}

export interface IFoodSupplierServiceClient {
    listVendors(request: supplier_pb.ListVendorsRequest, callback: (error: grpc.ServiceError | null, response: supplier_pb.ListVendorsReply) => void): grpc.ClientUnaryCall;
    listVendors(request: supplier_pb.ListVendorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: supplier_pb.ListVendorsReply) => void): grpc.ClientUnaryCall;
    listVendors(request: supplier_pb.ListVendorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: supplier_pb.ListVendorsReply) => void): grpc.ClientUnaryCall;
}

export class FoodSupplierServiceClient extends grpc.Client implements IFoodSupplierServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listVendors(request: supplier_pb.ListVendorsRequest, callback: (error: grpc.ServiceError | null, response: supplier_pb.ListVendorsReply) => void): grpc.ClientUnaryCall;
    public listVendors(request: supplier_pb.ListVendorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: supplier_pb.ListVendorsReply) => void): grpc.ClientUnaryCall;
    public listVendors(request: supplier_pb.ListVendorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: supplier_pb.ListVendorsReply) => void): grpc.ClientUnaryCall;
}
