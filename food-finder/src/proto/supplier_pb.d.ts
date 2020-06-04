// package: 
// file: supplier.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ListVendorsRequest extends jspb.Message { 
    getIngredient(): string;
    setIngredient(value: string): ListVendorsRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListVendorsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListVendorsRequest): ListVendorsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListVendorsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListVendorsRequest;
    static deserializeBinaryFromReader(message: ListVendorsRequest, reader: jspb.BinaryReader): ListVendorsRequest;
}

export namespace ListVendorsRequest {
    export type AsObject = {
        ingredient: string,
    }
}

export class ListVendorsReply extends jspb.Message { 
    clearVendorsList(): void;
    getVendorsList(): Array<string>;
    setVendorsList(value: Array<string>): ListVendorsReply;
    addVendors(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListVendorsReply.AsObject;
    static toObject(includeInstance: boolean, msg: ListVendorsReply): ListVendorsReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListVendorsReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListVendorsReply;
    static deserializeBinaryFromReader(message: ListVendorsReply, reader: jspb.BinaryReader): ListVendorsReply;
}

export namespace ListVendorsReply {
    export type AsObject = {
        vendorsList: Array<string>,
    }
}
