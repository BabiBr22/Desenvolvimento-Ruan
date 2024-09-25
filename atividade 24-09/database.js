import pg from 'pg';

const conexao = new pg.Client({
  connectionString: "postgres://avnadmin:AVNS_OPJhcJlqNiLV2Mjcs99@atividade-barbara-0012.d.aivencloud.com:22538/defaultdb",
ssl:{
    rejectUnauthorized : false,
}
});

try {
  await conexao.connect();
  console.log('Banco de dados conectado');
} catch (erro) {
  console.error('Erro ao conectar no banco de dados:', erro);
}

export default conexao;
