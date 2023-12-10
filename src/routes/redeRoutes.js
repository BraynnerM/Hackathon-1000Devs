import express from 'express';
import {
  getRedes,
  getRedeById,
  createRede,
  updateRede,
  deleteRede
} from '../controllers/redeController';

const router = express.Router();

/**
 * @swagger
 * /api/redes:
 *   get:
 *     summary: Retorna todas as redes
 *     description: Obtém a lista de todas as redes registradas.
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/redes', getRedes);

/**
 * @swagger
 * /api/redes/{id}:
 *   get:
 *     summary: Retorna uma rede pelo ID
 *     description: Obtém detalhes de uma rede com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da rede
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/redes/:id', getRedeById);

/**
 * @swagger
 * /api/redes:
 *   post:
 *     summary: Cria uma nova rede
 *     description: Cria uma nova rede com base nos dados fornecidos.
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/redes', createRede);

/**
 * @swagger
 * /api/redes/{id}:
 *   put:
 *     summary: Atualiza uma rede pelo ID
 *     description: Atualiza os detalhes de uma rede com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da rede
 *     responses:
 *       200:
 *         description: OK
 */
router.put('/redes/:id', updateRede);

/**
 * @swagger
 * /api/redes/{id}:
 *   delete:
 *     summary: Deleta uma rede pelo ID
 *     description: Deleta uma rede com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da rede
 *     responses:
 *       204:
 *         description: No Content
 */
router.delete('/redes/:id', deleteRede);

export default router;
