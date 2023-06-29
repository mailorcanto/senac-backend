/*
Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você precisa entender como eles 
guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas os débitos realizados pelo 
cliente.

Pensando em aumentar seu lucros, o banco quer identificar possíveis clientes precisando de empréstimos. Dessa forma, a sua tarefa é criar uma 
função que receba este array como parâmetro, atualize o saldo total descontando todos os débitos e retorne apenas os clientes com saldo negativo.
*/
type clientes = {
	cliente: string,
	saldoTotal: number,
	debitos: number[];
}
const arrayClientes: clientes []=[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [0] }
]
function retornarClientes (array: clientes[]):any{
	for (let i = 0; i <array.length;i++){
		let arraysomarDebitos: any; //criando array provisório para receber apenas a propriedade debitos
		arraysomarDebitos = (array[i].debitos); //recebendo apenas a propriedade debitos do array na posição [i]
		array[i].debitos = somarDebitos(arraysomarDebitos); //executando a função somarDebitos (na posição [i]) e enviando o retorno da função 
		//para o array original
	}
	function somarDebitos (array:number[]):any{
		let resultado = array.reduce((acumulador, valorAtual) => acumulador + valorAtual);
		return resultado;
	}
}
function subtrairDebitos (array: any[]):any{
	let arrayDevedores:any []=[];
	for (let i = 0; i <array.length;i++){
		if (array[i].saldoTotal - array[i].debitos < 0){
			array[i].saldoTotal = array[i].saldoTotal - array[i].debitos;
			arrayDevedores.push(array[i])
		}
	}
	return arrayDevedores;
}
retornarClientes(arrayClientes);
console.log(subtrairDebitos(arrayClientes));
