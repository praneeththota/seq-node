'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    // Load default options.
    // sequelizePaperTrailOptions.defaultAttributes = {
    //   documentId: 'document_id',
    //   revisionId: 'revision_id'
    // };

    // Revision model
    var attributes = {
      documentId: {
        type: Sequelize.INTEGER
      },
      revisionId: {
        type: Sequelize.INTEGER
      },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      model: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      document: {
        type: Sequelize.TEXT('MEDIUMTEXT'),
        allowNull: false
      },
      'user_id': {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    };
    // attributes[sequelizePaperTrailOptions.defaultAttributes.documentId] = {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // };
    // attributes[sequelizePaperTrailOptions.revisionAttribute] = {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // };

    //queryInterface.createTable('Revisions', attributes);


    attributes = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      path: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      document: {
        type: Sequelize.TEXT('MEDIUMTEXT'),
        allowNull: false
      },
      diff: {
        type: Sequelize.TEXT('MEDIUMTEXT'),
        allowNull: false
      },
      revision_id: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    };

    // RevisionChange model
    queryInterface.createTable('RevisionChange', attributes);
  },

  down: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.dropTable('Revision'),
      queryInterface.dropTable('RevisionChange')
    ]);
  }
};