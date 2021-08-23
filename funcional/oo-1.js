// Orientação a objetos

// Função contrutora
function Produto(nome, preco, desc = 0.15) {
    // Quando você utiliza this.nome = nome, você está inserindo o valor do nome na instância gerada, dessa forma, os atribuitos se tornarão públicos
    this.nome = nome
    this.preco = preco

    // Preço com desconto
    this.precoFinal = function () {
        return this.preco * (1 - desc)
    }

    // Caso querira um atributo privado que pertece apenas ao escopo da função
    // let atributoPrivado = 2
}

// Criando novos objetos de Produto
const p1 = new Produto('TV', 1899.90)
console.log(p1.nome)
console.log(p1.precoFinal())
// console.log(p1.atributoPrivado) // undefined

const p2 = new Produto('Caneta', 2.30)
console.log(p2.nome)