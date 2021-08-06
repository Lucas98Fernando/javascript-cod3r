function gerarNumeroEntre(min, max) {
    if (min > max) {
        // Aplicando o conceito destructuring para inverter o valor das variáveis
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        const fator = max - min + 1
        const valorAleatorio = parseInt(Math.random() * fator) + min
        resolve(valorAleatorio)
    })
}

gerarNumeroEntre(1, 60).then(num => num * 10).then(numx10 => console.log(`O número gerado foi ${numx10}`))