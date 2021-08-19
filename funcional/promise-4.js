function gerarNumeroEntre(min, max, tempo) {
    // Aplicando o conceito destructuring para inverter o valor das variáveis
    if (min > max)[max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function () {
            const fator = max - min + 1
            const valorAleatorio = parseInt(Math.random() * fator) + min
            resolve(valorAleatorio)
        }, tempo)
    })
}

// Retornando todos os valores somente quando a promise for resolvida, muito útil quando temos vários métodos em paralelo e precisamos de todos os dados no final para assim executar outras funções
function gerarVariosNumeros() {
    return Promise.all([
        gerarNumeroEntre(1, 60, 1000),
        gerarNumeroEntre(1, 60, 2000),
        gerarNumeroEntre(1, 60, 100),
        gerarNumeroEntre(1, 60, 2500),
        gerarNumeroEntre(1, 60, 300),
        gerarNumeroEntre(1, 60, 3500)
    ])
}

// Exibindo o tempo de execução de uma determinada função
console.time('Tempo de execução da promise')

// O .then() só será chamado quando todos os numeros forem resolvidos, ou seja, quando todas as promessas forem atendidas
gerarVariosNumeros()
    .then(console.log())
    .then(() => {
        // Referenciando quando o comando em questão finaliza, o label precisa ser o mesmo no time() e no timeEnd()
        console.timeEnd('Tempo de execução da promise')
    })