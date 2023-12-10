// routes.js
import express from 'express';
import { getCampanhas, getCampanhaById, createCampanha, updateCampanha, deleteCampanha } from '../controllers/campanhaController';
const router = express.Router();

// Rotas da Campanha
router.get('/campanhas', getCampanhas);
router.get('/campanhas/:id', getCampanhaById);
router.post('/campanhas', createCampanha);
router.put('/campanhas/:id', updateCampanha);
router.delete('/campanhas/:id', deleteCampanha);

// Rotas da Paciente

// Rotas da Vacina
router.get('/vacinas', getVacinas);
router.get('/vacinas/:id', getVacinaById);
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
