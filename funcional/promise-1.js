/* 
    - A promisse irá retornar algo no futuro, ela tem como objetivo trazer melhorias para as funções callback
    - Ela gera um objeto, recebe uma função como parâmetro 
    - A função .then() sempre recebe somente um parâmetro
*/

const primeiroElemento = array => array[0]

const primeiraLetra = string => string[0]

const letraMinuscula = letra => letra.toLowerCase()

new Promise(function (resolve) {
    resolve('Lucas', 'Pedro', 'Heloísa', 'Maria')
})

// Funções encadeadas, o then sempre vai receber o resultado da execução anterior
    .then(primeiroElemento) // Resultado: Lucas
    .then(primeiraLetra) // Resultado: L
    .then(letraMinuscula) // Resultado: l
    .then(console.log) // É o mesmo que: .then(v => console.log(v))
    // Resultado final: l