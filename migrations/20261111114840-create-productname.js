'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Productnames', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      productName: {
        type: Sequelize.STRING,
        allownull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allownull: false
      },
      stock: {
         type: Sequelize.INTEGER,
         allownull: false
      }, 
      productimage: {
         type: Sequelize.INTEGER,
         allownull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Productnames');
  }
};