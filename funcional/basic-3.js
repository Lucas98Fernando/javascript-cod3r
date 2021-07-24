// Arrow function
const bomDia = () => console.log("Bom dia !")
bomDia()

const saudacao = nome => `Olá, ${nome}!`
console.log(saudacao("Lucas"))

const somar = (...numeros) => {
    console.log(Array.isArray(numeros)) // Verifica se numeros é um array
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}

/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(somar(numeros)) */

// Forma alternativa
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6))

// Cálculo de potência
const potencia = base => {
    return exp => {
        return Math.pow(base, exp)
    }
}

// Implementação refatorada da função de cálculo de potência
const potenciaRefatorada = base => exp => Math.pow(base, exp)

console.log(potencia(2)(8))
console.log(potenciaRefatorada(2)(10))

// this

// Criando uma nova função dentro dos tipos em Javascript com o prototype, nesse caso foi criando um método ultimo() para Array
Array.prototype.ultimo = function () {
    // Pegando o último elemento do array
    console.log(this[this.length - 1])
}

// Nesse caso, o this não funciona com uma arrow function
Array.prototype.primeiroComArrowFunction = () => {
    // Não consigo acessa a instância do this
    console.log(this[0])
}

Array.prototype.primeiro = function () {
    // Não consigo acessa a instância do this
    console.log(this[0])
}

const num = [1, 2, 3]
num.ultimo()
num.primeiro()