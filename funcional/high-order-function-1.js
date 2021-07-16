/* 
High order function: Quando um linguagem permite que uma função opere utilizando outras funções, por exemplo:
    - Passando uma função como argumento para outra função
    - Retornar uma função através de outra função
*/

function run(fn) {
    return `Result: ${fn()}`
}

function sayHello() {
    console.log("Hello, there !")
}

// Referência de sayHello para função run()
run(sayHello)

// Utilizando uma função anônima diretamente na função run
run(function() {
    console.log("Run !")
})

// Passando a função Math.random do Javascript como argumento para a função run(), onde cada vez que o código for executado, será exibido um valor diferente
const result = run(Math.random)
console.log(result)