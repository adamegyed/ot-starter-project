// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var supplier_pb = require('./supplier_pb.js');

function serialize_ListVendorsReply(arg) {
  if (!(arg instanceof supplier_pb.ListVendorsReply)) {
    throw new Error('Expected argument of type ListVendorsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListVendorsReply(buffer_arg) {
  return supplier_pb.ListVendorsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListVendorsRequest(arg) {
  if (!(arg instanceof supplier_pb.ListVendorsRequest)) {
    throw new Error('Expected argument of type ListVendorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListVendorsRequest(buffer_arg) {
  return supplier_pb.ListVendorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var FoodSupplierServiceService = exports.FoodSupplierServiceService = {
  listVendors: {
    path: '/FoodSupplierService/ListVendors',
    requestStream: false,
    responseStream: false,
    requestType: supplier_pb.ListVendorsRequest,
    responseType: supplier_pb.ListVendorsReply,
    requestSerialize: serialize_ListVendorsRequest,
    requestDeserialize: deserialize_ListVendorsRequest,
    responseSerialize: serialize_ListVendorsReply,
    responseDeserialize: deserialize_ListVendorsReply,
  },
};

exports.FoodSupplierServiceClient = grpc.makeGenericClientConstructor(FoodSupplierServiceService);
