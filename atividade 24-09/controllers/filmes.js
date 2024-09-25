import database from '../database.js'

// Listar todos os filmes
const listarFilmes = async (req, res) => {
    try {
        const resultado = await database.query('SELECT * FROM filmes');
        res.status(200).json({ filmes: resultado.rows });
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao listar filmes', erro });
    }
};

// Listar filmes por categoria
const listarFilmesPorCategoria = async (req, res) => {
    const { categoria } = req.params;
    try {
        const resultado = await database.query('SELECT * FROM filmes WHERE categoria = $1', [categoria]);
        res.status(200).json({ filmes: resultado.rows });
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao listar filmes por categoria', erro });
    }
};

// Cadastrar novo filme
const cadastrarFilme = async (req, res) => {
    const { titulo, categoria } = req.body;
    try {
        const resultado = await database.query('INSERT INTO filmes (titulo, categoria) VALUES ($1, $2) RETURNING *', [titulo, categoria]);
        res.status(201).json({ filme: resultado.rows[0], mensagem: 'Filme cadastrado com sucesso' });
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao cadastrar filme', erro });
    }
};

// Atualizar um filme
const atualizarFilme = async (req, res) => {
    const { id } = req.params;
    const { titulo, categoria } = req.body;
    try {
        const resultado = await database.query('UPDATE filmes SET titulo = $1, categoria = $2 WHERE id = $3 RETURNING *', [titulo, categoria, id]);
        res.status(200).json({ filme: resultado.rows[0], mensagem: 'Filme atualizado com sucesso' });
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao atualizar filme', erro });
    }
};

// Apagar um filme
const apagarFilme = async (req, res) => {
    const { id } = req.params;
    try {
        await database.query('DELETE FROM filmes WHERE id = $1', [id]);
        res.status(200).json({ mensagem: 'Filme apagado com sucesso' });
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao apagar filme', erro });
    }
};

// Exportar controladores
export { listarFilmes, listarFilmesPorCategoria, cadastrarFilme, atualizarFilme, apagarFilme };
