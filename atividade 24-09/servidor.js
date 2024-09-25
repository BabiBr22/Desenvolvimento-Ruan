import express from 'express';
import routerFilmes from './routes/filmes.js';

const app = express();

// Middleware para aceitar JSON
app.use(express.json());

// Rotas
app.use(routerFilmes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
