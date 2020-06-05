import * as restify from 'restify';
import FoodSupplierClient from './food_supplier_client';
import FoodVendorClient from './food_vendor_client';

const server = restify.createServer();
const port = process.env.PORT || 8080;

const isDev: boolean = process.env.NODE_ENV === 'DEVELOPMENT';

// Configure connection to other services based on environment
const foodSupplierAddress = isDev
  ? 'localhost'
  : 'food-supplier-dot-adam-starter-project.wl.r.appspot.com';
const foodSupplierPort = isDev ? 8082 : 80;
const foodVendorAddress = isDev
  ? 'localhost'
  : 'food-vendor-dot-adam-starter-project.wl.r.appspot.com';
const foodVendorPort = isDev ? 8083 : 80;

// Construct and initialize clients
const foodSupplierClient = new FoodSupplierClient(
  foodSupplierAddress,
  foodSupplierPort
);
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
    let result: any = {
      vendors: [],
    };
    if (!ingredient) {
      res.statusCode = 400;
      res.send({Error: 'You must specify an ingredient to search.'});
      return;
    }

    // Gather list of viable vendors from the Food-Supplier service
    const vendorList: string[] = await foodSupplierClient.getVendors(
      ingredient
    );

    // Short-circuit if no vendors required
    if (vendorList.length === 0) {
      res.send(result);
      return;
    }

    // Send request to Food-Vendor service for each valid vendor for their stock and price of the given ingredient
    let vendorRequests = vendorList.map(vendorName =>
      foodVendorClient.GetVendorInfo(vendorName, ingredient)
    );

    // Run requests in parallel
    let responses = await Promise.all(vendorRequests);

    // Populate reply JSON object
    responses.forEach(vendorData => {
      result.vendors.push(vendorData);
    });

    res.send(result);
  } catch (err) {
    res.statusCode = 500;
    res.send({Error: err});
  }
});

// Serve static content (frontend page)
server.get(
  '/food-finder/*',
  restify.plugins.serveStatic({
    directory: './static',
    default: 'ingredientsearch.html',
  })
);

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
