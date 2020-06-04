import grpc from 'grpc';
import VendorData from './vendor_data';
import {GetVendorInfoRequest, GetVendorInfoReply} from './proto/vendor_pb';
import {
  IFoodVendorServiceServer,
  FoodVendorServiceService,
} from './proto/vendor_grpc_pb';

// Defines handler methods for the FoodVendorService defined in protos/vendor.proto
export default class FoodVendorServer implements IFoodVendorServiceServer {
  getVendorInfo(
    call: grpc.ServerUnaryCall<GetVendorInfoRequest>,
    callback: grpc.sendUnaryData<GetVendorInfoReply>
  ) {
    const vendorName: string = call.request.getVendorName();
    const ingredient: string = call.request.getIngredient();
    let reply = new GetVendorInfoReply();
    if (VendorData.get(vendorName)) {
      let ingredientData = VendorData.get(vendorName)?.get(ingredient);
      if (!ingredientData) {
        callback(
          new Error('Specified vendor does not carry that ingredient'),
          null
        );
        return;
      }
      reply.setQuantityAvailable(ingredientData[0]);
      reply.setPrice(ingredientData[1]);
    } else {
      callback(new Error('Vendor name not found.'), null);
      return;
    }
    callback(null, reply);
  }
}
