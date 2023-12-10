const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Vacinação',
      version: '1.0.0',
      description: 'Api desafio da hackathon 1000devs',
    },
  },
  apis: ['./src/routes/routes.js'], 
};

const specs = swaggerJsdoc(options);

module.exports = specs;
