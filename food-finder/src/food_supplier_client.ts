import grpc from 'grpc';
import {FoodSupplierServiceClient} from './proto/supplier_grpc_pb';
import {ListVendorsRequest, ListVendorsReply} from './proto/supplier_pb';

export default class FoodSupplierClient {
  client: FoodSupplierServiceClient;

  constructor(address: string, port: number, secure?: boolean | undefined) {
    this.client = new FoodSupplierServiceClient(
      `${address}:${port}`,
      secure ? grpc.credentials.createSsl() : grpc.credentials.createInsecure()
    );
  }

  // Gets a list of viable vendors from the foodSupplier service asynchronously
  async getVendors(
    ingredient: string,
    bearerToken?: string | undefined
  ): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      // Construct the request
      let listVendorsRequest = new ListVendorsRequest();
      listVendorsRequest.setIngredient(ingredient);

      // Define the callback function
      const callback = (
        err: grpc.ServiceError | null,
        response: ListVendorsReply
      ) => {
        if (err) {
          reject(err);
        }
        if (response) {
          resolve(response.getVendorsList());
        } else {
          reject(null);
        }
      };

      // Optionally, attach the bearer authorization token to the request
      if (bearerToken) {
        let metadata = new grpc.Metadata();
        metadata.add('Authorization', `Bearer ${bearerToken}`);

        this.client.listVendors(listVendorsRequest, metadata, callback);
      } else {
        this.client.listVendors(listVendorsRequest, callback);
      }
    });
  }
}
