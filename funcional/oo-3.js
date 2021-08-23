// Orientação a objetos

// Função contrutora
function Produto(nome, preco, desc = 0.15) {
    // Quando você utiliza this.nome = nome, você está inserindo o valor do nome na instância gerada, dessa forma, os atribuitos se tornarão públicos
    this.nome = nome
    this.preco = preco
    this._desc = desc

    // Preço com desconto
    this.precoFinal = function () {
        return this.preco * (1 - this.desc)
    }
}

// Criando uma nova funcionalidade para Produto utilizando o prototype
Produto.prototype.log = function () {
    console.log(`Nome: ${this.nome} Preço: ${this.preco}`)
}

// Definindo propriedade para o Objeto, passando por parâmetro que ele será inserido dentro do Produto.prototype, o nome dela será 'desc' e os atributos da propriedades são o get e o set
Object.defineProperty(Produto.prototype, 'desc', {
    get: function () {
        return this._desc
    },
    set: function (novoDesc) {
        if (novoDesc >= 0 && novoDesc <= 1) {
            this._desc = novoDesc
        }
    }
})

Object.defineProperty(Produto.prototype, 'descString', {
    get: function () {
        return `O desconto foi de ${this._desc * 100}%`
    }
})

// Criando novos objetos de Produto
const p1 = new Produto('Caneta', 2.30)
console.log(p1.nome)

const p2 = new Produto('TV', 1899.90)
p2.log()
console.log(p2.nome)
console.log(p2.precoFinal())
p2.desc = 2 // Se o valor do Set para o desc for maior que 1 ou menor que 0, ele será desconsiderado 
console.log(p2.desc)
console.log(p2.descString)