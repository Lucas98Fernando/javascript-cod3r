/* Implementação conhecida como Currying, voltada para reuso de código
    - Currying é o processo de transformar uma função que espera vários argumentos em uma função que espera um único argumento e retorna outra função curried. 
*/
function finalPrice(tax) {
    // A função finalPrice, retorna uma outra função
    return function (price) {
        return price * (1 + tax)
    }
}

/* 
    Forma refatorada da função finalPrice
    const finalPrice = tax => (price => price * (1 + tax))
*/

// Armazenando a taxa de imposto de uma determinada cidade
const nycFinalPrice = finalPrice(0.875)

// Passando os argumentos para a função finalPrice, onde o valor de nycFinalPrice é uma constante
console.log(nycFinalPrice(12.4))

// Forma alternativa de fazer a mesma coisa
console.log(finalPrice(0.875)(12.4))

// Outra forma de passar os argumentos para função
console.log(finalPrice(0.875)(12.4))