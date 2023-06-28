"use strict";
/*
Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você precisa entender como eles
guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas os débitos realizados pelo
cliente.

Pensando em aumentar seu lucros, o banco quer identificar possíveis clientes precisando de empréstimos. Dessa forma, a sua tarefa é criar uma
função que receba este array como parâmetro, atualize o saldo total descontando todos os débitos e retorne apenas os clientes com saldo negativo.
*/
const arrayClientes = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
];
const sum = arrayClientes.reduce((accumulator, object) => {
    for (let i = 0; i < arrayClientes.length; i++) {
        return accumulator += object.debitos[i];
    }
}, 0);
console.log(sum);
function calcularSaldo(array) {
    let clientesDebito = [];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].debitos;
        let saldoAtualizado = array[i].saldoTotal - array[i].debitos;
        if (saldoAtualizado < 0) {
            clientesDebito.push(array[i]);
        }
    }
    if (clientesDebito !== null) {
        return clientesDebito;
    }
    else {
        return console.log('Não há clientes em débito');
    }
}
console.log(calcularSaldo(arrayClientes));
//# sourceMappingURL=script.js.map