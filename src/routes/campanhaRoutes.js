import express from 'express';
import {
  getCampanhas,
  getCampanhaById,
  createCampanha,
  updateCampanha,
  deleteCampanha,
  addVacinaToCampanha,
  removeVacinaFromCampanha,
  getCampanhasPorData,
  getCampanhasPorProtecao
} from '../controllers/campanhaController';

const router = express.Router();

/**
 * @swagger
 * /api/campanhas:
 *   get:
 *     summary: Retorna todas as campanhas
 *     description: Obtém a lista de todas as campanhas registradas.
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/campanhas', getCampanhas);

/**
 * @swagger
 * /api/campanhas/{id}:
 *   get:
 *     summary: Retorna uma campanha pelo ID
 *     description: Obtém detalhes de uma campanha com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da campanha
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/campanhas/:id', getCampanhaById);

/**
 * @swagger
 * /api/campanhas:
 *   post:
 *     summary: Cria uma nova campanha
 *     description: Cria uma nova campanha com base nos dados fornecidos.
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/campanhas', createCampanha);

/**
 * @swagger
 * /api/campanhas/{id}:
 *   put:
 *     summary: Atualiza uma campanha pelo ID
 *     description: Atualiza os detalhes de uma campanha com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da campanha
 *     responses:
 *       200:
 *         description: OK
 */
router.put('/campanhas/:id', updateCampanha);

/**
 * @swagger
 * /api/campanhas/{id}:
 *   delete:
 *     summary: Deleta uma campanha pelo ID
 *     description: Deleta uma campanha com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da campanha
 *     responses:
 *       204:
 *         description: No Content
 */
router.delete('/campanhas/:id', deleteCampanha);


/**
 * @swagger
 * /api/campanhas/vacina:
 *   post:
 *     summary: Adiciona uma vacina a uma campanha
 *     description: Adiciona uma vacina à campanha com base nos dados fornecidos.
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/campanhas/vacina', addVacinaToCampanha);

/**
 * @swagger
 * /api/campanhas/{id_campanha}/vacinas/{id_vacina}:
 *   delete:
 *     summary: Remove uma vacina de uma campanha
 *     description: Remove uma vacina da campanha com base nos IDs fornecidos.
 *     parameters:
 *       - in: path
 *         name: id_campanha
 *         required: true
 *         description: ID da campanha
 *       - in: path
 *         name: id_vacina
 *         required: true
 *         description: ID da vacina
 *     responses:
 *       204:
 *         description: No Content
 */
router.delete('/campanhas/:id_campanha/vacinas/:id_vacina', removeVacinaFromCampanha);

/**
 * @swagger
 * /api/campanhas/data/{data}:
 *   get:
 *     summary: Retorna campanhas por data
 *     description: Obtém a lista de campanhas registradas em uma data específica.
 *     parameters:
 *       - in: path
 *         name: data
 *         required: true
 *         description: Data da campanha (formato YYYY-MM-DD)
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/campanhas/data/:data', getCampanhasPorData);

/**
 * @swagger
 * /api/campanhas/protecao/{protecao}:
 *   get:
 *     summary: Retorna campanhas por nível de proteção
 *     description: Obtém a lista de campanhas registradas com um determinado nível de proteção.
 *     parameters:
 *       - in: path
 *         name: protecao
 *         required: true
 *         description: Nível de proteção da campanha
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/campanhas/protecao/:protecao', getCampanhasPorProtecao);

export default router;
