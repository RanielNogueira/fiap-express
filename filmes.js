class Filme {
    constructor(nome, diretor, lancamento) {
        this.nome = nome
        this.diretor = diretor
        this.lancamento = lancamento

    }
}

const filmes = [
    new Filme('O Poderoso Chefão', 'Francis Ford Copola', 1972),
    new Filme('Vingadores: Ultimato', 'Joe Russo, Anthony Russo', 2019),
    new Filme('Intocáveis', 'Eric Toledano, Oliviers Nakache', 2012)
]

module.exports.filmes = filmes;