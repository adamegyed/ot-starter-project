import grpc from 'grpc';
import {FoodVendorServiceClient} from './proto/vendor_grpc_pb';
import {GetVendorInfoRequest, GetVendorInfoReply} from './proto/vendor_pb';
import VendorData from './vendor_data';

export default class FoodVendorClient {
  client: FoodVendorServiceClient;

  constructor(address: string, port: number, secure?: boolean | undefined) {
    this.client = new FoodVendorServiceClient(
      `${address}:${port}`,
      secure ? grpc.credentials.createSsl() : grpc.credentials.createInsecure()
    );
  }

  // Gets the quantity and price of an ingredient from a specified vendor
  async GetVendorInfo(
    vendorName: string,
    ingredient: string,
    bearerToken?: string | undefined
  ): Promise<VendorData> {
    return new Promise<VendorData>((resolve, reject) => {
      // Construct the request
      let getVendorInfoRequest = new GetVendorInfoRequest();
      getVendorInfoRequest.setVendorName(vendorName);
      getVendorInfoRequest.setIngredient(ingredient);

      // Define the callback function
      const callback = (
        err: grpc.ServiceError | null,
        response: GetVendorInfoReply
      ) => {
        if (err || !response) {
          reject(err);
        }
        if (response) {
          resolve({
            name: vendorName,
            ingredient: ingredient,
            quantity: response.getQuantityAvailable(),
            price: response.getPrice(),
          });
        } else {
          reject(null);
        }
      };

      // Optionally, attach the bearer authorization token
      if (bearerToken) {
        let metadata = new grpc.Metadata();
        metadata.add('Authorization', `Bearer ${bearerToken}`);

        this.client.getVendorInfo(getVendorInfoRequest, metadata, callback);
      } else {
        this.client.getVendorInfo(getVendorInfoRequest, callback);
      }
    });
  }
}
