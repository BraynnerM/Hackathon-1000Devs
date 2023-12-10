import express from 'express';
import {
  getVacinasAplicadas,
  getVacinaAplicadaById,
  createVacinaAplicada,
  updateVacinaAplicada,
  deleteVacinaAplicada
} from '../controllers/vacinaAplicadaController';

import {  
  getVacinasPorPaciente,
  getVacinasPendentesPorPaciente, 
} from '../controllers/vacinasController';
const router = express.Router();

/**
 * @swagger
 * /api/vacinas-aplicadas:
 *   get:
 *     summary: Retorna todas as vacinas aplicadas
 *     description: Obtém a lista de todas as vacinas aplicadas registradas.
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/vacinas-aplicadas', getVacinasAplicadas);

/**
 * @swagger
 * /api/vacinas-aplicadas/{id}:
 *   get:
 *     summary: Retorna uma vacina aplicada pelo ID
 *     description: Obtém detalhes de uma vacina aplicada com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da vacina aplicada
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/vacinas-aplicadas/:id', getVacinaAplicadaById);

/**
 * @swagger
 * /api/vacinas-aplicadas:
 *   post:
 *     summary: Cria uma nova vacina aplicada
 *     description: Cria uma nova vacina aplicada com base nos dados fornecidos.
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/vacinas-aplicadas', createVacinaAplicada);

/**
 * @swagger
 * /api/vacinas-aplicadas/{id}:
 *   put:
 *     summary: Atualiza uma vacina aplicada pelo ID
 *     description: Atualiza os detalhes de uma vacina aplicada com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da vacina aplicada
 *     responses:
 *       200:
 *         description: OK
 */
router.put('/vacinas-aplicadas/:id', updateVacinaAplicada);

/**
 * @swagger
 * /api/vacinas-aplicadas/{id}/{idVacina}:
 *   delete:
 *     summary: Deleta uma vacina aplicada pelo ID
 *     description: Deleta uma vacina aplicada com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da vacina aplicada
 *       - in: path
 *         name: idVacina
 *         required: true
 *         description: ID da vacina
 *     responses:
 *       204:
 *         description: No Content
 */
router.delete('/vacinas-aplicadas/:id/:idVacina', deleteVacinaAplicada);


/**
 * @swagger
 * /api/pacientes/{id_paciente}/vacinas:
 *   get:
 *     summary: Retorna vacinas por paciente
 *     description: Obtém a lista de vacinas registradas para um paciente específico com base no ID do paciente fornecido.
 *     parameters:
 *       - in: path
 *         name: id_paciente
 *         required: true
 *         description: ID do paciente
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/pacientes/:id_paciente/vacinas', getVacinasPorPaciente);

/**
 * @swagger
 * /api/pacientes/{id_paciente}/vacinas-pendentes:
 *   get:
 *     summary: Retorna vacinas pendentes por paciente
 *     description: Obtém a lista de vacinas pendentes para um paciente específico com base no ID do paciente fornecido.
 *     parameters:
 *       - in: path
 *         name: id_paciente
 *         required: true
 *         description: ID do paciente
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/pacientes/:id_paciente/vacinas-pendentes', getVacinasPendentesPorPaciente);


export default router;
