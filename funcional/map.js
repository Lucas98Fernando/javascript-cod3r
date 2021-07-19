/* 
    map:
    
    - É uma função do Javascript que utiliza outras funções como argumento 
    - Utilizada geralmente para transformar arrays
    - Sempre o resultado final do array, terá o mesmo tamanho do original
    - Como funciona ? Internamente ele irá fazer um laço for, percorrendo cada elemento do array e realizando a transformações desses elementos
*/

// Array de números
const numbers = [1, 2, 3, 4, 5, 6]

// Transformando o array de números em um outro array, onde o valor em cada posição foi multiplicado por 2, o array original permanece com os mesmos valores
const numbersx2 = numbers.map(function(n) {
    return n * 2
})

// Implementando o map refatorado, usando arrow function
const numbersx2Refactored = numbers.map(n => n * 2)

console.log(numbersx2)
console.log(numbersx2Refactored)

// Array de objetos dos estudantes
const students = [
    {name: 'Lucas', score: 7.2},
    {name: 'João', score: 9.7},
    {name: 'Mateus', score: 5.1},
    {name: 'Maria', score: 8.6}
]

// Método que pega apenas as notas e pode ser reutilisado diversas vezes
const getScores = el => el.score

// Criando um novo array apenas com as notas do estudantes, passando por argumento a referência da função getScores
// O Math.ceil é um método do Javascript para arredondar valores para cima
const onlyScores = students.map(getScores).map(Math.ceil)

// Implementação refatorada que possui o mesmo resultado
const onlyScoresRefactored = students.map(getScores).map(Math.ceil)

console.log(onlyScores)
console.log(onlyScoresRefactored)