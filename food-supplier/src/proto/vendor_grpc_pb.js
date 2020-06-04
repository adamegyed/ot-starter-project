// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var vendor_pb = require('./vendor_pb.js');

function serialize_GetVendorInfoReply(arg) {
  if (!(arg instanceof vendor_pb.GetVendorInfoReply)) {
    throw new Error('Expected argument of type GetVendorInfoReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetVendorInfoReply(buffer_arg) {
  return vendor_pb.GetVendorInfoReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetVendorInfoRequest(arg) {
  if (!(arg instanceof vendor_pb.GetVendorInfoRequest)) {
    throw new Error('Expected argument of type GetVendorInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetVendorInfoRequest(buffer_arg) {
  return vendor_pb.GetVendorInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var FoodVendorServiceService = exports.FoodVendorServiceService = {
  getVendorInfo: {
    path: '/FoodVendorService/GetVendorInfo',
    requestStream: false,
    responseStream: false,
    requestType: vendor_pb.GetVendorInfoRequest,
    responseType: vendor_pb.GetVendorInfoReply,
    requestSerialize: serialize_GetVendorInfoRequest,
    requestDeserialize: deserialize_GetVendorInfoRequest,
    responseSerialize: serialize_GetVendorInfoReply,
    responseDeserialize: deserialize_GetVendorInfoReply,
  },
};

exports.FoodVendorServiceClient = grpc.makeGenericClientConstructor(FoodVendorServiceService);
