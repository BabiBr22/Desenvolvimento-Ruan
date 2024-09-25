import pg from 'pg';

const conexao = new pg.Client({
  connectionString: "",
ssl:{
    rejectUnauthorized : false,
    ca: ""
}
});

try {
  await conexao.connect();
  console.log('Banco de dados conectado');
} catch (erro) {
  console.error('Erro ao conectar no banco de dados:', erro);
}

export default conexao;
