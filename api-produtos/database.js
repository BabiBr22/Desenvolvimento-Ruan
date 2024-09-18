//  Conexão com o banco de dados
import pg from 'pg'

const conexao = new pg.Client("postgresql://barbara:a9zDNLSs0UTTreuzvbHWKA@senai-api-1691.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full")


// Da para usar esse
conexao.connect().then(() => {
    console.log('Banco de dados conectou')
})
.catch(() => {
    console.log(erro)
})


// 👍 Ou esse. Elas fazem as mesmas coisas, e esse aqui é o mais usado! 
try {
    await conexao.connect()
    console.log('Banco de dados conectou')
} catch (erro) {

    console.log('Erro ao conectar no banco de dados')
    console.log(erro)
}

export default conexao