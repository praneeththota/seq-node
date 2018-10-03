'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Users',
      'data',
      Sequelize.JSON
    )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Users', 'data')
  }
};
