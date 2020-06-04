import * as restify from 'restify';
import FoodSupplierClient from './food_supplier_client';
import FoodVendorClient from './food_vendor_client';

const server = restify.createServer();
const port = process.env.PORT || 8080;

const foodSupplierAddress = 'localhost'; // Fill in
const foodSupplierPort = 8082;
const foodSupplierClient = new FoodSupplierClient(
  foodSupplierAddress,
  foodSupplierPort
);

const foodVendorAddress = 'localhost';
const foodVendorPort = 8083;
const foodVendorClient = new FoodVendorClient(
  foodVendorAddress,
  foodVendorPort
);

// Enable URL parameters
server.use(restify.plugins.queryParser());

// Server status healthcheck
server.get('/food-finder/healthcheck', (req, res) => {
  res.send({
    status: 'OK',
  });
});

// Search for vendors with given ingredient
// Returns json object with vendor names associated to quantity and price of ingredient
server.get('/food-finder/search', async (req, res) => {
  try {
    const ingredient = req.query.ingredient;
    if (!ingredient) {
      res.statusCode = 400;
      res.send({Error: 'You must specify an ingredient to search.'});
      return;
    }

    // Gather list of viable vendors from the Food-Supplier service
    const vendorList: string[] = await foodSupplierClient.getVendors(
      ingredient
    );

    // Send request to Food-Vendor service for each valid vendor for their stock and price of the given ingredient
    let vendorRequests = vendorList.map(vendorName =>
      foodVendorClient.GetVendorInfo(vendorName, ingredient)
    );

    // Run requests in parallel
    let responses = await Promise.all(vendorRequests);

    // Construct and populate reply JSON object
    let result: any = {
      vendors: [],
    };
    responses.forEach(vendorData => {
      result.vendors.push(vendorData);
    });

    res.send(result);
  } catch (err) {
    res.send({Error: err});
  }
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
