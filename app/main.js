let livros = []
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBucarLivrosAPI()

async function getBucarLivrosAPI(){
    const res = await fetch(endPointAPI)
    //pegando a resposta da requisição e atribuindo a livros
    livros = await res.json()

    let livrosComDesconto = aplicaDesconto(livros)

    console.table(livros)

    exibirLivrosNaTela(livrosComDesconto)

}

