import grpc from 'grpc';
import {FoodSupplierServiceClient} from './proto/supplier_grpc_pb';
import {ListVendorsRequest, ListVendorsReply} from './proto/supplier_pb';

export default class FoodSupplierClient {
  client: FoodSupplierServiceClient;

  constructor(address: string, port: number) {
    this.client = new FoodSupplierServiceClient(
      `${address}:${port}`,
      grpc.credentials.createInsecure()
    );
  }

  // Gets a list of viable vendors from the foodSupplier service asynchronously
  async getVendors(ingredient: string): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      // Construct the request
      let listVendorsRequest = new ListVendorsRequest();
      listVendorsRequest.setIngredient(ingredient);

      // Send the request and capture result
      this.client.listVendors(
        listVendorsRequest,
        (err: grpc.ServiceError | null, response: ListVendorsReply) => {
          if (err) {
            reject(err);
          }
          if (response) {
            resolve(response.getVendorsList());
          } else {
            reject(null);
          }
        }
      );
    });
  }
}
