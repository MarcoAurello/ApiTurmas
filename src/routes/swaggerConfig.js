const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'API de Matrículas',
      version: '1.0.0',
      description: 'Documentação da API de Matrículas para PlanoDiretor',
    },
    basePath: '/api',
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
