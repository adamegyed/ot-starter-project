'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Product', [
     {
     id: 1,
     name: 'Apples',
     quantity: 20,
     price: 99,
     vendor_name: "Trader Joe's",
   },
   {
    id: 2,
    name: 'Oranges',
    quantity: 10,
    price: 119,
    vendor_name: "Trader Joe's",
  },
  {
    id: 3,
    name: 'Oranges',
    quantity: 45,
    price: 80,
    vendor_name: "Felipe's Produce",
  },
  {
    id: 4,
    name: 'Bread',
    quantity: 30,
    price: 249,
    vendor_name: "Felipe's Produce",
  },
  {
    id: 5,
    name: 'Apples',
    quantity: 32,
    price: 87,
    vendor_name: 'Safeway',
  },
  {
    id: 6,
    name: 'Ice Cream',
    quantity: 28,
    price: 449,
    vendor_name: 'Safeway',
  },
  {
    id: 7,
    name: 'Milk',
    quantity: 50,
    price: 149,
    vendor_name: 'Safeway',
  },
   ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Product', null, {});
  }
};
