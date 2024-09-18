import express from 'express'
const router = express.Router()

//Importar crontroller
import { listarProdutos } from '../controllers/produtos.js'

router.get('/produtos', listarProdutos)

// Exportar definições de rotas
export default router