import * as traceAgent from '@google-cloud/trace-agent';
traceAgent.start();
import * as restify from 'restify';
import FoodSupplierClient from './food_supplier_client';
import FoodVendorClient from './food_vendor_client';
import GetGoogleCredentials from './get_google_auth';

const server = restify.createServer();
const port = process.env.PORT || 8080;

const isDev: boolean = process.env.NODE_ENV === 'DEVELOPMENT';

// Configure connection to other services based on environment
const foodSupplierAddress = isDev
  ? 'localhost'
  : 'food-supplier-taij2wfjxq-uw.a.run.app';
const foodSupplierPort = isDev ? 8082 : 443;
const foodVendorAddress = isDev
  ? 'localhost'
  : 'food-vendor-taij2wfjxq-uw.a.run.app';
const foodVendorPort = isDev ? 8083 : 443;

// Construct and initialize clients
const foodSupplierClient = new FoodSupplierClient(
  foodSupplierAddress,
  foodSupplierPort,
  !isDev // Should be secure when not in development mode
);
const foodVendorClient = new FoodVendorClient(
  foodVendorAddress,
  foodVendorPort,
  !isDev // Should be secure when not in dev mode
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
      ingredient,
      !isDev
        ? await GetGoogleCredentials(`https://${foodSupplierAddress}`)
        : undefined
    );

    // Short-circuit if no vendors required
    if (vendorList.length === 0) {
      res.send(result);
      return;
    }

    // Send request to Food-Vendor service for each valid vendor for their stock and price of the given ingredient
    const vendorAuthToken = !isDev
      ? await GetGoogleCredentials(`https://${foodVendorAddress}`)
      : undefined;
    let vendorRequests = vendorList.map(vendorName =>
      foodVendorClient.GetVendorInfo(vendorName, ingredient, vendorAuthToken)
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
