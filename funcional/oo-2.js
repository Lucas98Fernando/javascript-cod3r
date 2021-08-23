// Implementando o exemplo do arquivo oo-1.js utilizando classe
class Produto {
    constructor(nome, preco, des = 0.10) {
        // Inicializando os atributos
        this.nome = nome
        this.preco = preco
        this.des = des
    }

    // Fazendo tratamento do atributo nome para ele se tornar um método
    get nome() {
        return `Nome do produto: ${this._nome}`
    }

    // Setter para converter o atributo nome para letras maiscúlas
    set nome(novoNome) {
        this._nome = novoNome.toUpperCase()
    }

    get preco() {
        return this._preco
    }

    // Garantindo que o valor do preco seja somente maior que 0, é nesse momento que a variável é criada
    set preco(novoPreco) {
        if (novoPreco >= 0) {
            this._preco = novoPreco
        }
    }

    // Quando o get é utilizado, você tem a possibilidade de acessar a função como se fosse um "atributo", sem a necessidade de utilizar os () na chamada
    get precoFinal() {
        return this.preco * (1 - this.des)
    }
}

// Criando novos objetos de Produto
const p1 = new Produto('TV', 1900.00)
// Atribuindo um novo valor ao atributo nome e invocando o método Setter que converte para maiúsculo
p1.nome = 'tv 4k - 43 polegadas'
p1.preco = -1500 // Não altera o preço da TV
console.log(p1.nome)
console.log(p1.precoFinal)

const p2 = new Produto('Playstation 4', 2600.00, 0.20)
console.log(p2.nome)
console.log(p2.precoFinal)