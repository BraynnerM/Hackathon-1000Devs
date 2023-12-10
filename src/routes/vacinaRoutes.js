import express from 'express';
import {
  getVacinas,
  getVacinaById,
  getVacinasPorAnoExato,
  getVacinasAteIdade,
  getVacinasAteIdadeMeses,
  getVacinasPorMesExato,
  getVacinasPorPaciente,
  getVacinasPendentesPorPaciente,
  getVacinaByProtecao,
  createVacina,
  updateVacina,
  deleteVacina
} from '../controllers/vacinasController';

const router = express.Router();

/**
 * @swagger
 * /api/vacinas:
 *   get:
 *     summary: Retorna todas as vacinas
 *     description: Obtém a lista de todas as vacinas registradas.
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/vacinas', getVacinas);

/**
 * @swagger
 * /api/vacinas/{id}:
 *   get:
 *     summary: Retorna uma vacina pelo ID
 *     description: Obtém detalhes de uma vacina com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da vacina
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/vacinas/:id', getVacinaById);

/**
 * @swagger
 * /api/vacinas/protecao/{protecao}:
 *   get:
 *     summary: Retorna vacinas por proteção
 *     description: Obtém vacinas com base no tipo de proteção fornecido.
 *     parameters:
 *       - in: path
 *         name: protecao
 *         required: true
 *         description: Tipo de proteção da vacina
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/vacinas/protecao/:protecao', getVacinaByProtecao);

/**
 * @swagger
 * /api/vacinas:
 *   post:
 *     summary: Cria uma nova vacina
 *     description: Cria uma nova vacina com base nos dados fornecidos.
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/vacinas', createVacina);

/**
 * @swagger
 * /api/vacinas/{id}:
 *   put:
 *     summary: Atualiza uma vacina pelo ID
 *     description: Atualiza os detalhes de uma vacina com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da vacina
 *     responses:
 *       200:
 *         description: OK
 */
router.put('/vacinas/:id', updateVacina);

/**
 * @swagger
 * /api/vacinas/{id}:
 *   delete:
 *     summary: Deleta uma vacina pelo ID
 *     description: Deleta uma vacina com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da vacina
 *     responses:
 *       204:
 *         description: No Content
 */
router.delete('/vacinas/:id', deleteVacina);

/**
 * @swagger
 * /api/vacinas/vacinas-por-ano-exato/{idade}:
 *   get:
 *     summary: Retorna vacinas por idade exata
 *     description: Obtém a lista de vacinas registradas para uma idade exata.
 *     parameters:
 *       - in: path
 *         name: idade
 *         required: true
 *         description: Idade exata do paciente
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/vacinas-por-ano-exato/:idade', getVacinasPorAnoExato);

/**
 * @swagger
 * /api/vacinas/vacinas-ate-idade/{idade}:
 *   get:
 *     summary: Retorna vacinas até uma idade específica
 *     description: Obtém a lista de vacinas registradas para pacientes com idade até o valor fornecido.
 *     parameters:
 *       - in: path
 *         name: idade
 *         required: true
 *         description: Idade máxima do paciente
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/vacinas-ate-idade/:idade', getVacinasAteIdade);

/**
 * @swagger
 * /api/vacinas/vacinas-por-mes-exato/{idadeMeses}:
 *   get:
 *     summary: Retorna vacinas por idade em meses exatos
 *     description: Obtém a lista de vacinas registradas para uma idade em meses exatos.
 *     parameters:
 *       - in: path
 *         name: idadeMeses
 *         required: true
 *         description: Idade em meses do paciente
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/vacinas-por-mes-exato/:idadeMeses', getVacinasPorMesExato);

/**
 * @swagger
 * /api/vacinas/vacinas-ate-idade-meses/{idadeMeses}:
 *   get:
 *     summary: Retorna vacinas até uma idade em meses específica
 *     description: Obtém a lista de vacinas registradas para pacientes com idade em meses até o valor fornecido.
 *     parameters:
 *       - in: path
 *         name: idadeMeses
 *         required: true
 *         description: Idade em meses máxima do paciente
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/vacinas-ate-idade-meses/:idadeMeses', getVacinasAteIdadeMeses);

/**
 * @swagger
 * /api/vacinas/vacinas-por-paciente/{id_paciente}:
 *   get:
 *     summary: Retorna vacinas por paciente
 *     description: Obtém vacinas associadas a um paciente específico.
 *     parameters:
 *       - in: path
 *         name: id_paciente
 *         required: true
 *         description: ID do paciente
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/vacinas-por-paciente/:id_paciente', getVacinasPorPaciente);

/**
 * @swagger
 * /api/vacinas/vacinas-pendentes/{id_paciente}:
 *   get:
 *     summary: Retorna vacinas pendentes por paciente
 *     description: Obtém vacinas pendentes para um paciente específico.
 *     parameters:
 *       - in: path
 *         name: id_paciente
 *         required: true
 *         description: ID do paciente
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/vacinas-pendentes/:id_paciente', getVacinasPendentesPorPaciente);

export default router;
