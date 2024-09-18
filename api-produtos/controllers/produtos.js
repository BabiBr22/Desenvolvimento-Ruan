import database from '../database.js'


const listarProdutos = (req, res) => {
    // Rodar um SELECT na tabela de PRODUTOS
    res.status(200).send({ mensagem : 'ok '})
}

// Serve quando eu só tenho uma valor para exportar
// 👉 export default


// Exportar diversas variaveis
export { listarProdutos }