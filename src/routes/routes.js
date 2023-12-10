// routes.js
import express from 'express';
import {
    getCampanhas,
    getCampanhaById,
    createCampanha,
    updateCampanha,
    deleteCampanha
} from '../controllers/campanhaController';
import {
    getVacinas,
    getVacinaById,
    getVacinaByProtecao,
    createVacina,
    updateVacina,
    deleteVacina
} from '../controllers/vacinasController';
import {
    getRedes,
    getRedeById,
    createRede,
    updateRede,
    deleteRede
}
    from '../controllers/redeController';
import {
    getPacientes,
    getPacienteById,
    createPaciente,
    updatePaciente,
    deletePaciente
} from '../controllers/pacienteController';

import {
    getVacinasAplicadas,
    getVacinaAplicadaById,
    createVacinaAplicada,
    updateVacinaAplicada,
    deleteVacinaAplicada
} from '../controllers/vacinaAplicadaController';

import {
    getCampanhaVacinas,
    getCampanhaVacinaById,
    createCampanhaVacina,
    updateCampanhaVacina,
    deleteCampanhaVacina
} from '../controllers/campanhaVacinaController';

import {
    getPeriodos,
    getPeriodoById,
    createPeriodo,
    updatePeriodo,
    deletePeriodo
} from '../controllers/periodoAplicacaoMesController';

const router = express.Router();

// Rotas da Campanha
router.get('/campanhas', getCampanhas);
router.get('/campanhas/:id', getCampanhaById);
router.post('/campanhas', createCampanha);
router.put('/campanhas/:id', updateCampanha);
router.delete('/campanhas/:id', deleteCampanha);

// Rotas da Paciente
router.get('/pacientes', getPacientes);
router.get('/pacientes/:id', getPacienteById);
router.post('/pacientes', createPaciente);
router.put('/pacientes/:id', updatePaciente);
router.delete('/pacientes/:id', deletePaciente);

// Rotas Vacina Aplicada
router.get('/vacinas-aplicadas', getVacinasAplicadas);
router.get('/vacinas-aplicadas/:id', getVacinaAplicadaById);
router.post('/vacinas-aplicadas', createVacinaAplicada);
router.put('/vacinas-aplicadas/:id', updateVacinaAplicada);
router.delete('/vacinas-aplicadas/:id', deleteVacinaAplicada);

// Rotas Campanha Vacina
router.get('/campanhas-vacinas', getCampanhaVacinas);
router.get('/campanhas-vacinas/:id', getCampanhaVacinaById);
router.post('/campanhas-vacinas', createCampanhaVacina);
router.put('/campanhas-vacinas/:id', updateCampanhaVacina);
router.delete('/campanhas-vacinas/:id', deleteCampanhaVacina);

// Rotas da Vacina
router.get('/vacinas', getVacinas);
router.get('/vacinas/:id', getVacinaById);
router.get('/vacinas/protecao/:protecao', getVacinaByProtecao);
router.post('/vacinas', createVacina);
router.put('/vacinas/:id', updateVacina);
router.delete('/vacinas/:id', deleteVacina);

// Rotas da Rede
router.get('/redes', getRedes);
router.get('/redes/:id', getRedeById);
router.post('/redes', createRede);
router.put('/redes/:id', updateRede);
router.delete('/redes/:id', deleteRede);

// Rotas de Período Aplicação Mês
router.get('/periodos', getPeriodos);
router.get('/periodos/:id', getPeriodoById);
router.post('/periodos', createPeriodo);
router.put('/periodos/:id', updatePeriodo);
router.delete('/periodos/:id', deletePeriodo);

// Rotas de Período Aplicação Ano
router.get('/periodos', getPeriodos);
router.get('/periodos/:id', getPeriodoById);
router.post('/periodos', createPeriodo);
router.put('/periodos/:id', updatePeriodo);
router.delete('/periodos/:id', deletePeriodo);

export default router;
