const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Nome da Sua API',
      version: '1.0.0',
      description: 'Descrição da Sua API',
    },
  },
  apis: ['./src/routes/routes.js'], 
};

const specs = swaggerJsdoc(options);

module.exports = specs;
