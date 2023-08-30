function aplicaDesconto(livros){
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} //chave para sinalziar que retornaremos um obj
    })
    return livrosComDesconto
}