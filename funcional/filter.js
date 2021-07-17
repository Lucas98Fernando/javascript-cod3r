/*
    filter:
    - É uma função do Javascript que utiliza outras funções como argumento 
    - O objetivo é filtrar através de condicionais
    - Será gerado um novo array, contudo, nem sempre ele terá o mesmo tamanho do array original, como acontece no map
    - Como funciona ? Internamente ele irá fazer um laço for, percorrendo cada elemento do array e verificado se a condição informa é atendida, retornando true ou false
*/

// Array original de números
const numbers = [1, 2, 3, 4, 5, 6]

// Utiliza o filter para verificar quais são os elementos do array original que são maiores que 0
const greatherThanZero = numbers.filter(el => el > 0)

// Utiliza o filter para verificar quais são os elementos do array original que são maiores que 10 
const greatherThanTen = numbers.filter(el => el > 10)

// Verifica elementos pares com o filter
const even = numbers.filter(el => el % 2 == 0)

// Array original de estudantes
const students = [
    {name: 'Lucas', score: 7.2},
    {name: 'João', score: 9.7},
    {name: 'Mateus', score: 5.1},
    {name: 'Maria', score: 8.6}
]

// Utiliza o filter para verificar quais são os elementos do array original que possuem a nota maior que 8, irá devolver um array com 2 posições
const niceStudents = students.filter(el => el.score >= 8)

console.log(greatherThanZero)
console.log(greatherThanTen)
console.log(even)
console.log(niceStudents)