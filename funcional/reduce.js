/* 
    reduce:

    - É uma função Javascript voltada para reduzir os valores de um array em um único valor
    - Geralmente recebe até 4 parâmetros na função (acumulador, elementoAtual, indice,  arrayOriginal)
    - Como funciona ? Internamente ele irá fazer um laço for, percorrendo cada elemento do array e realizará a operação informada 
*/

// Array de números
const numbers = [1, 2, 3, 4, 5, 6]

// Função de soma
const sum = (total, el) => total + el

// Aplicando o reduce no array numbers, passando como argumento a função sum
const total = numbers.reduce(sum)

/* 
    - Solução alternativa, passando a função diretamente:
     
    const totalAlternative = numbers.reduce((total, el) => total + el)
*/

console.log(total)

// A função average recebe 4 argumentos (acumulador, elementoAtual, indice, arrayOriginal)
const average = (acc, el, i, array) => {
    // Verifica se está no último elemento do array, o tamanho do array nesse cenário é igual a 6, por isso precisa subtrair com 1, pois o i comeca com 0 e vai até 5
    if (i === array.length - 1) {
        // Caso esteja no último elemento, a função retorna a média, garantindo que fizemos a soma completa de todos os elementos do array
        return (acc + el) / array.length
    } else {
        // Se a condição acima não for atendida, será retornado somente a soma do valor total com o valor atual
        return acc + el
    }
}

const totalAverage = numbers.reduce(average)

console.log(totalAverage)