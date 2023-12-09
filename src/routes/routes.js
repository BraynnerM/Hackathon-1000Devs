// routes.js

const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const specs = require('./swaggerOptions');  // Substitua pelo caminho correto para o seu arquivo Swagger options
const campanhaController = require('./campanhaController');

// Rotas da Campanha
router.get('/campanhas', campanhaController.getCampanhas);
router.get('/campanhas/:id', campanhaController.getCampanhaById);
router.post('/campanhas', campanhaController.createCampanha);
router.put('/campanhas/:id', campanhaController.updateCampanha);
router.delete('/campanhas/:id', campanhaController.deleteCampanha);

//Rotas da Paciente

// Rota do Swagger
router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup(specs));

module.exports = router;

