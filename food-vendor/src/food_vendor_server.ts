import grpc from 'grpc';
import VendorData from './vendor_data';
import Models from './models'
import {GetVendorInfoRequest, GetVendorInfoReply} from './proto/vendor_pb';
import {
  IFoodVendorServiceServer,
  FoodVendorServiceService,
} from './proto/vendor_grpc_pb';

// Defines handler methods for the FoodVendorService defined in protos/vendor.proto
export default class FoodVendorServer implements IFoodVendorServiceServer {
  async getVendorInfo(
    call: grpc.ServerUnaryCall<GetVendorInfoRequest>,
    callback: grpc.sendUnaryData<GetVendorInfoReply>
  ) {
    const vendorName: string = call.request.getVendorName();
    const ingredient: string = call.request.getIngredient();
    let reply = new GetVendorInfoReply();
    if (VendorData.get(vendorName)) {

      let Product: any = Models.Product;
      let product = await Product.findOne({
        where: {
          vendor_name: vendorName,
        }
      });


      let ingredientData = VendorData.get(vendorName)?.get(ingredient);
      if (!ingredientData) {
        callback(
          new Error('Specified vendor does not carry that ingredient'),
          null
        );
        return;
      }

      reply.setQuantityAvailable(product.quantity);
      reply.setPrice(product.price);
    } else {
      callback(new Error('Vendor name not found.'), null);
      return;
    }
    callback(null, reply);
  }
}
