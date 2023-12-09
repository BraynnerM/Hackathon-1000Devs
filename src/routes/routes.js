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


export default router;
