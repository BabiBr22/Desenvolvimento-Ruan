// Importar o pacote express
import express from 'express'

// Inicia uma instância do express
const app = express()
// Pode ser o nome que eu quiser em vez de app

// Configurar o uso de JSON na api
app.use(express.json())

// Base de dados em formato de variavel
const livros = {
    aventura : [], 
    suspense : [],
    romance : [],
    ficcao : [],
}

// Definir URLs (rotas) da API
// 1- Listagem geral
app.get('/livros', (req, res) => {
    res.status(200).send({ livros })
})
// 2 - Listagem por categoria
app.get('/livros/:categoria', (req, res) => {
    // Reconhecer a categoria que foi enviada após '/livros/'
    const categoria = req.params.categoria

    // ⏳ Forma mais simples de fazer o switch: ⏳
    // switch(categoria){
    //     case 'aventura' :
    //         res.status(200).send({ livros: livros[categoria] })
    //     break

    // Outra forma: Estrutura condicional para dar diferentes respostas para cada categoria
    switch(categoria){
        case 'aventura' :
            res.status(200).send({ livros: livros.aventura })
        break // Se não tiver break ele considera os outros como verdade tbm

        case 'suspense' :
            res.status(200).send({ livros: livros.suspense })
        break

        case 'romance' :
            res.status(200).send({ livros: livros.romance })
        break

        case 'ficcao' :
            res.status(200).send({ livros: livros.ficcao })
        break

        default: 
        res.status(404).send({mensagem : 'Categoria invalida'})
    }   
       
})

// 3 - Criação de novos livros
app.post('/livros/:categoria', (req, res) => {
    // Armazenar a categoria informada na URL
    const categoria = req.params.categoria
    // Armazenar o nome do livro informado via body
    const livro = req.body.livro
    // Estrutura para definir em qual categoria ser armazenado
    switch(categoria){
        case 'aventura' :
            // Adicionar livro na lista de aventura
            livros.aventura.push({ nome: livro })
            res.status(201).send({ mensagem : `Livros ${livro} adicionado`})
        break

        case 'suspense' :
            // Adicionar livro na lista de suspense
            livros.suspense.push({ nome: livro })
            res.status(201).send({ mensagem : `Livros ${livro} adicionado`})
        break

        case 'romance' :
            // Adicionar livro na lista de romance
            livros.romance.push({ nome: livro })
            res.status(201).send({ mensagem : `Livros ${livro} adicionado`})
        break

        case 'ficcao' :
            // Adicionar livro na lista de ficcao
            livros.ficcao.push({ nome: livro })
            res.status(201).send({ mensagem : `Livros ${livro} adicionado`})
        break

        
    }
})


// Indicar que o servidor vai rodar na porta 3000
app.listen(3000, () => console.log('Servidor iniciado'))