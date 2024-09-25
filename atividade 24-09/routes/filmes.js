import express from 'express';
const router = express.Router();

import { listarFilmes, listarFilmesPorCategoria, cadastrarFilme, atualizarFilme, apagarFilme } from '../controllers/filmes.js';

router.get('/filmes', listarFilmes);
router.get('/filmes/:categoria', listarFilmesPorCategoria);
router.post('/filmes', cadastrarFilme);
router.put('/filmes/:id', atualizarFilme);
router.delete('/filmes/:id', apagarFilme);

export default router;
