// Gerar números da Mega-sena

function gerarNumeroEntre(min, max, numerosProibidos) {
    if (min > max)[max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const valorAleatorio = parseInt(Math.random() * fator) + min
        // Se o novo valor aleatório já foi gerado anteriormente, será chamado o reject
        if (numerosProibidos.includes(valorAleatorio)) {
            reject("Número repetido")
        } else {
            resolve(valorAleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    // Fazendo o tratamento de erro com o try e catch
    try {
        const numeros = []
        // O _ é para desprezar o número para percorrer o array
        // Esse for está utilizando o método do JS chamado fill(), para gerar um interador para simplismente percorrer o array, sem a necessidade de criar uma variável
        for (let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumeroEntre(1, 60, numeros))
        }
        // O retorno em uma função assícrona é o resolve da Promise
        return numeros
    } catch (e) {
        // Lançando uma nova exceção, caso a Promise não seja atendida
        // Se a quantidade de tentativas for maior que 5 a exceção será lançada
        if (tentativas > 5) {
            throw "Não foi possível gerar os números da Mega-sena"
        } else {
            return gerarMegaSena(qtdNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(6)
    .then(console.log)
    .catch(console.log)

/* gerarNumeroEntre(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log) */