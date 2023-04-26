/* let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adicionaCliente(cliente){
    clientesTrybeBank.push(cliente)
}

adicionaCliente('Joao')

console.log(clientesTrybeBank) */

 let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function removeCliente(cliente) {
    for (let i = 0; i < clientesTrybeBank.length; i += 1) {
        if (cliente === clientesTrybeBank[i]) {
        clientesTrybeBank.splice(i, 1); //apaga o elemento
        }
    }
}
console.log(clientesTrybeBank)
removeCliente('John')
console.log(clientesTrybeBank)

