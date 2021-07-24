// somar(3)(4)(5)

function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

// Passando somente o valor de a e b, com atribuição a uma constante
const somaAB = somar(4)(6)
// Logo em seguida, foi passado o valor de c
console.log(somaAB(10))
// Passando o 3 argumento diretamente
console.log(somar(3)(4)(5))

// Função que recebe 2 valores e 1 função como argumento
function calcular(a) {
    return function(b) {
        return function(fn) {
         return fn(a, b)
        }
    }
}

function sum(a, b) {
    return a + b
}

function multiplication(a, b) {
    return a * b
}

const r1 = calcular(8)(2)(sum)
const r2 = calcular(15)(3)(multiplication)

console.log(r1)
console.log(r2)