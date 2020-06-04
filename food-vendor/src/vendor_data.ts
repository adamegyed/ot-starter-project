// Defines the stocked amount and price of each ingredient by vendor
// First number is count, second is price
let vendorMap: Map<string, Map<string, [number, number]>> = new Map();

vendorMap.set(
  "Trader Joe's",
  new Map([
    ['Apples', [20, 99]],
    ['Oranges', [10, 119]],
  ])
);
vendorMap.set(
  "Felipe's Produce",
  new Map([
    ['Oranges', [45, 80]],
    ['Bread', [30, 249]],
  ])
);
vendorMap.set(
  'Safeway',
  new Map([
    ['Apples', [32, 87]],
    ['Ice Cream', [28, 449]],
    ['Milk', [50, 149]],
  ])
);

export default vendorMap;
