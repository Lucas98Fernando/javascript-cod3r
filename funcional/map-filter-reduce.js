/*
    Utilizando map, filter e reduce juntos
*/

const students = [{
        name: 'Lucas',
        score: 7.2
    },
    {
        name: 'João',
        score: 9.7
    },
    {
        name: 'Mateus',
        score: 5.1
    },
    {
        name: 'Maria',
        score: 8.6
    }
]

// Função para pegar somente as notas dos alunos
const getScores = el => el.score

// Função para pegar somente as notas >= 8
const niceStudents = el => el.score >= 8

// Função para cálculo de média
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

// Gerando a média geral somente dos estudantes com a nota >= 8
console.log(
    students.filter(niceStudents).map(getScores).reduce(average)
)