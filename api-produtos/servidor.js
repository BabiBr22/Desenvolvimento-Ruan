/// Inicialização do express

import express from 'express'
const app = express()
import router from './routes/produto.js'

// Utilizar JSON nas requisições
app.use(express.json())

// Informar arquivo de rotas 
app.use(router)

app.listen(3000, () => console.log('Servidor rodando'))