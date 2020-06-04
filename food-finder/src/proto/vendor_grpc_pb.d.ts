// package: 
// file: vendor.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as vendor_pb from "./vendor_pb";

interface IFoodVendorServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getVendorInfo: IFoodVendorServiceService_IGetVendorInfo;
}

interface IFoodVendorServiceService_IGetVendorInfo extends grpc.MethodDefinition<vendor_pb.GetVendorInfoRequest, vendor_pb.GetVendorInfoReply> {
    path: string; // "/.FoodVendorService/GetVendorInfo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<vendor_pb.GetVendorInfoRequest>;
    requestDeserialize: grpc.deserialize<vendor_pb.GetVendorInfoRequest>;
    responseSerialize: grpc.serialize<vendor_pb.GetVendorInfoReply>;
    responseDeserialize: grpc.deserialize<vendor_pb.GetVendorInfoReply>;
}

export const FoodVendorServiceService: IFoodVendorServiceService;

export interface IFoodVendorServiceServer {
    getVendorInfo: grpc.handleUnaryCall<vendor_pb.GetVendorInfoRequest, vendor_pb.GetVendorInfoReply>;
}

export interface IFoodVendorServiceClient {
    getVendorInfo(request: vendor_pb.GetVendorInfoRequest, callback: (error: grpc.ServiceError | null, response: vendor_pb.GetVendorInfoReply) => void): grpc.ClientUnaryCall;
    getVendorInfo(request: vendor_pb.GetVendorInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vendor_pb.GetVendorInfoReply) => void): grpc.ClientUnaryCall;
    getVendorInfo(request: vendor_pb.GetVendorInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vendor_pb.GetVendorInfoReply) => void): grpc.ClientUnaryCall;
}

export class FoodVendorServiceClient extends grpc.Client implements IFoodVendorServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getVendorInfo(request: vendor_pb.GetVendorInfoRequest, callback: (error: grpc.ServiceError | null, response: vendor_pb.GetVendorInfoReply) => void): grpc.ClientUnaryCall;
    public getVendorInfo(request: vendor_pb.GetVendorInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vendor_pb.GetVendorInfoReply) => void): grpc.ClientUnaryCall;
    public getVendorInfo(request: vendor_pb.GetVendorInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vendor_pb.GetVendorInfoReply) => void): grpc.ClientUnaryCall;
}
