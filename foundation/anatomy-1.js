// Function declaration

function sayHello() {
    console.log("Hello world !")
}

sayHello()

// Função com argumento
function sayHelloTo(name) {
    console.log("Hello, " + name + "!")
}

sayHelloTo("Mike")

function sayHelloTo(name) {
    console.log(`Hello, ${name}!`)
}

sayHelloTo("Lucas")

// Função com retorno
function sayHi() {
    return "Hi, world!"
}

// Atribuindo a uma variável o que foi retornado na função
let welcome = sayHi()
console.log(welcome)

function sayHiTo(name) {
    return `Hi, ${name}!`
}

console.log(sayHiTo("Lucas"))