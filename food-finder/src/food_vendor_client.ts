import grpc from 'grpc';
import {FoodVendorServiceClient} from './proto/vendor_grpc_pb';
import {GetVendorInfoRequest, GetVendorInfoReply} from './proto/vendor_pb';
import {stringify} from 'querystring';
import VendorData from './vendor_data';

export default class FoodVendorClient {
  client: FoodVendorServiceClient;

  constructor(address: string, port: number) {
    this.client = new FoodVendorServiceClient(
      `${address}:${port}`,
      grpc.credentials.createInsecure()
    );
  }

  // Gets the quantity and price of an ingredient from a specified vendor, returned in a tuple in that order
  async GetVendorInfo(
    vendorName: string,
    ingredient: string
  ): Promise<VendorData> {
    return new Promise<VendorData>((resolve, reject) => {
      // Construct the request
      let getVendorInfoRequest = new GetVendorInfoRequest();
      getVendorInfoRequest.setVendorName(vendorName);
      getVendorInfoRequest.setIngredient(ingredient);

      // Send the request and capture result
      this.client.getVendorInfo(
        getVendorInfoRequest,
        (err: grpc.ServiceError | null, response: GetVendorInfoReply) => {
          if (err) {
            reject(err);
          }
          resolve({
            name: vendorName,
            ingredient: ingredient,
            quantity: response.getQuantityAvailable(),
            price: response.getPrice(),
          });
        }
      );
    });
  }
}
