'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.
    //
    // Example:
    let products = [];

    for (let i = 0; i < 50; i++) {
      let date = new Date();
      products.push({
        id: i,
        productName: faker.commerce.productName(),
        departmentName: faker.commerce.department(),
        price: faker.commerce.price(),
        stockQuantity: faker.random.number(),
        createdAt: date,
        updatedAt: date
      })
    }
    return queryInterface.bulkInsert('Products', products, {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
