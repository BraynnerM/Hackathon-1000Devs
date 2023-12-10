import express from 'express';
import {
  getCampanhaVacinas,
  getCampanhaVacinaById,
  createCampanhaVacina,
  updateCampanhaVacina,
  deleteCampanhaVacina
} from '../controllers/campanhaVacinaController';

const router = express.Router();

/**
 * @swagger
 * /api/campanhas/{id}/campanha-vacinas:
 *   get:
 *     summary: Retorna todas as vacinas da campanha
 *     description: Obtém a lista de vacinas de uma campanha específica.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da campanha
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/:id/campanhas-vacinas', getCampanhaVacinas);

/**
 * @swagger
 * /api/campanhas/{id}/campanha-vacinas/{idVacina}:
 *   get:
 *     summary: Retorna uma vacina específica da campanha
 *     description: Obtém detalhes de uma vacina específica de uma campanha.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da campanha
 *       - in: path
 *         name: idVacina
 *         required: true
 *         description: ID da vacina
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/:id/campanhas-vacinas/:idVacina', getCampanhaVacinaById);

/**
 * @swagger
 * /api/campanhas/{id}/campanha-vacinas:
 *   post:
 *     summary: Cria uma nova vacina para a campanha
 *     description: Adiciona uma nova vacina à campanha especificada.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da campanha
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/:id/campanhas-vacinas', createCampanhaVacina);


/**
 * @swagger
 * /api/campanhas/{id}/campanha-vacinas/{idVacina}:
 *   put:
 *     summary: Atualiza uma vacina específica da campanha
 *     description: Atualiza os detalhes de uma vacina específica de uma campanha.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da campanha
 *       - in: path
 *         name: idVacina
 *         required: true
 *         description: ID da vacina
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 */
router.put('/:id/campanhas-vacinas/:idVacina', updateCampanhaVacina);

/**
 * @swagger
 * /api/campanhas/{id}/campanha-vacinas/{idVacina}:
 *   delete:
 *     summary: Deleta uma vacina específica da campanha
 *     description: Remove uma vacina específica da campanha.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da campanha
 *       - in: path
 *         name: idVacina
 *         required: true
 *         description: ID da vacina
 *     responses:
 *       204:
 *         description: No Content
 */
router.delete('/:id/campanhas-vacinas/:idVacina', deleteCampanhaVacina);

export default router;
