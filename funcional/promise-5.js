// Recebe um valor e uma chance de dá erro
function funcionaOuNao(valor, chanceErro) {
    // Retorna uma promise que recebe o resolve e reject (para tratamento de erro)
    return new Promise((resolve, reject) => {
        // Se o valor de chance de erro for maior que o número randômico que será gerado dinamicamente, o reject será chamado
        try {
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                // resolve retorna o valor recebido por parâmetro na função
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionaOuNao('Funcionou', 0.5)
    .then(v => console.log(`Resultado: ${v}`))
    // Tratando o erro diretamente dentro de um .then()
    // Quando o erro é tratado dentro do .then() o .catch() NÃO SERÁ CHAMADO
    .then(v => consol.log(v), err => console.log(`Erro específico: ${err}`))
    // Tratamento de erros com catch()
    .catch(err => console.log(`Erro: ${err}`))
    // Após um catch() pode ser utilizado outros .then()
    .then(() => console.log('Fim!'))