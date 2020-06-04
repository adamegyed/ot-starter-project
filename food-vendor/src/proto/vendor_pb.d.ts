// package: 
// file: vendor.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetVendorInfoRequest extends jspb.Message { 
    getVendorName(): string;
    setVendorName(value: string): GetVendorInfoRequest;

    getIngredient(): string;
    setIngredient(value: string): GetVendorInfoRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVendorInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetVendorInfoRequest): GetVendorInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVendorInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVendorInfoRequest;
    static deserializeBinaryFromReader(message: GetVendorInfoRequest, reader: jspb.BinaryReader): GetVendorInfoRequest;
}

export namespace GetVendorInfoRequest {
    export type AsObject = {
        vendorName: string,
        ingredient: string,
    }
}

export class GetVendorInfoReply extends jspb.Message { 
    getQuantityAvailable(): number;
    setQuantityAvailable(value: number): GetVendorInfoReply;

    getPrice(): number;
    setPrice(value: number): GetVendorInfoReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVendorInfoReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetVendorInfoReply): GetVendorInfoReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVendorInfoReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVendorInfoReply;
    static deserializeBinaryFromReader(message: GetVendorInfoReply, reader: jspb.BinaryReader): GetVendorInfoReply;
}

export namespace GetVendorInfoReply {
    export type AsObject = {
        quantityAvailable: number,
        price: number,
    }
}
