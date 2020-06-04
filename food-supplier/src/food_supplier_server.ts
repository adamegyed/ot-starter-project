import grpc from 'grpc';
import VendorList from './vendor_list';
import {ListVendorsReply, ListVendorsRequest} from './proto/supplier_pb';
import {
  IFoodSupplierServiceServer,
  FoodSupplierServiceService,
} from './proto/supplier_grpc_pb';

// Defines handler methods for the FoodSupplierService defined in protos/supplier.proto
export default class FoodSupplierServer implements IFoodSupplierServiceServer {
  listVendors(
    call: grpc.ServerUnaryCall<ListVendorsRequest>,
    callback: grpc.sendUnaryData<ListVendorsReply>
  ) {
    const ingredient: string = call.request.getIngredient();
    let reply = new ListVendorsReply();
    VendorList.forEach((supportedFoods: string[], vendorName: string) => {
      if (supportedFoods.includes(ingredient)) {
        reply.addVendors(vendorName);
      }
    });
    callback(null, reply);
  }
}
