import database from '../database.js'


const listarProdutos = async (req, res) => {
    // Rodar um SELECT na tabela de PRODUTOS
    const resultado = await database.query('SELECT * FROM produtos')
    res.status(200).send({ mensagem : 'ok '})
}

// Serve quando eu só tenho uma valor para exportar
// 👉 export default


// Exportar diversas variaveis
export { listarProdutos }