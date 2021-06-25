'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Genres', 
     [
        {
          genreName: 'Pop',
          createdAt: new Date (),
          updatedAt: new Date ()
        },
        {
          genreName: 'Indonesia',
          createdAt: new Date (),
          updatedAt: new Date ()
        },
        {
          genreName: 'Jazz',
          createdAt: new Date (),
          updatedAt: new Date ()
        },
        {
          genreName: 'Rock',
          createdAt: new Date (),
          updatedAt: new Date ()
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Genres', null, {});
  }
};
