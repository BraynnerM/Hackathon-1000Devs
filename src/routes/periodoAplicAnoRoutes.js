import express from "express";
import {
  getPeriodosAno,
  getPeriodoAnoById,
  createPeriodoAno,
  updatePeriodoAno,
  deletePeriodoAno,
} from "../controllers/periodoAplicaAnoController";

const router = express.Router();

/**
 * @swagger
 * /api/periodos-ano:
 *   get:
 *     summary: Retorna todos os períodos de aplicação ano
 *     description: Obtém a lista de todos os períodos de aplicação ano registrados.
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/periodos-ano', getPeriodosAno);

/**
 * @swagger
 * /api/periodos-ano/{id}:
 *   get:
 *     summary: Retorna um período de aplicação ano pelo ID
 *     description: Obtém detalhes de um período de aplicação ano com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do período de aplicação ano
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/periodos-ano/:id', getPeriodoAnoById);

/**
 * @swagger
 * /api/periodos-ano:
 *   post:
 *     summary: Cria um novo período de aplicação ano
 *     description: Cria um novo período de aplicação ano com base nos dados fornecidos.
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/periodos-ano', createPeriodoAno);

/**
 * @swagger
 * /api/periodos-ano/{id}:
 *   put:
 *     summary: Atualiza um período de aplicação ano pelo ID
 *     description: Atualiza os detalhes de um período de aplicação ano com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do período de aplicação ano
 *     responses:
 *       200:
 *         description: OK
 */
router.put('/periodos-ano/:id', updatePeriodoAno);

/**
 * @swagger
 * /api/periodos-ano/{id}:
 *   delete:
 *     summary: Deleta um período de aplicação ano pelo ID
 *     description: Deleta um período de aplicação ano com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do período de aplicação ano
 *     responses:
 *       204:
 *         description: No Content
 */
router.delete('/periodos-ano/:id', deletePeriodoAno);

export default router;
