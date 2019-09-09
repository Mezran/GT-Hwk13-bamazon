'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.
    //
    // Example:
    let products = [];

      let date = new Date();
      products.push({
        productName: 'Roman Candle',
        departmentName: 'BAM products',
        price: 4,
        stockQuantity: 197,
        createdAt: date,
        updatedAt: date
      })
      products.push({
        productName: 'Party Poper',
        departmentName: 'BAM products',
        price: 7,
        stockQuantity: 460,
        createdAt: date,
        updatedAt: date
      })
      products.push({
        productName: 'Sparkler',
        departmentName: 'BAM products',
        price: 87,
        stockQuantity: 9099,
        createdAt: date,
        updatedAt: date
      })
      products.push({
        productName: 'Cake',
        departmentName: 'BAM products',
        price: 12,
        stockQuantity: 0,
        createdAt: date,
        updatedAt: date
      })
      products.push({
        productName: 'Catherine Wheel',
        departmentName: 'BAM products',
        price: 13,
        stockQuantity: 987,
        createdAt: date,
        updatedAt: date
      })
      products.push({
        productName: 'Airbomb',
        departmentName: 'BAM products',
        price: 2,
        stockQuantity: 68,
        createdAt: date,
        updatedAt: date
      })
      products.push({
        productName: "Judas' Belt",
        departmentName: 'BAM products',
        price: 13,
        stockQuantity: 14,
        createdAt: date,
        updatedAt: date
      })
      products.push({
        productName: 'Quarter Stick',
        departmentName: 'BAM products',
        price: 21,
        stockQuantity: 899,
        createdAt: date,
        updatedAt: date
      })
      products.push({
        productName: 'Cherry Bomb',
        departmentName: 'BAM products',
        price: 7,
        stockQuantity: 9,
        createdAt: date,
        updatedAt: date
      })


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
