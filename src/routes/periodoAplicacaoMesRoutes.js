import express from 'express';
import {
  getPeriodos,
  getPeriodoById,
  createPeriodo,
  updatePeriodo,
  deletePeriodo
} from '../controllers/periodoAplicacaoMesController';

const router = express.Router();

/**
 * @swagger
 * /api/periodos:
 *   get:
 *     summary: Retorna todos os períodos de aplicação mês
 *     description: Obtém a lista de todos os períodos de aplicação mês registrados.
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/periodos', getPeriodos);

/**
 * @swagger
 * /api/periodos/{id}:
 *   get:
 *     summary: Retorna um período de aplicação mês pelo ID
 *     description: Obtém detalhes de um período de aplicação mês com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do período de aplicação mês
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/periodos/:id', getPeriodoById);

/**
 * @swagger
 * /api/periodos:
 *   post:
 *     summary: Cria um novo período de aplicação mês
 *     description: Cria um novo período de aplicação mês com base nos dados fornecidos.
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/periodos', createPeriodo);

/**
 * @swagger
 * /api/periodos/{id}:
 *   put:
 *     summary: Atualiza um período de aplicação mês pelo ID
 *     description: Atualiza os detalhes de um período de aplicação mês com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do período de aplicação mês
 *     responses:
 *       200:
 *         description: OK
 */
router.put('/periodos/:id', updatePeriodo);

/**
 * @swagger
 * /api/periodos/{id}:
 *   delete:
 *     summary: Deleta um período de aplicação mês pelo ID
 *     description: Deleta um período de aplicação mês com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do período de aplicação mês
 *     responses:
 *       204:
 *         description: No Content
 */
router.delete('/periodos/:id', deletePeriodo);

export default router;
