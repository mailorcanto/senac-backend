/*
Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você precisa entender como eles 
guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas os débitos realizados pelo 
cliente.

Pensando em aumentar seu lucros, o banco quer identificar possíveis clientes precisando de empréstimos. Dessa forma, a sua tarefa é criar uma 
função que receba este array como parâmetro, atualize o saldo total descontando todos os débitos e retorne apenas os clientes com saldo negativo.
*/
function ajustaPreco (preco :number): string {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',');
	return "R$ "+valorAjustado;
}

type Estoques = {
	nome: string;
	quantidade: number;
	valorUnitario: number | string;
};

let arrayEstoques: Estoques[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
];

function retornarEstoques (array:any[]):any{
	let arrayOrdenado: Estoques[] = []; //criando array para receber informações do array original e ser reordenado conforme estoque
	for (let i = 0; i < array.length; i ++){
		let valUnit: string = (ajustaPreco(array[i].valorUnitario as number)); //criando variável valorUnit, executando função ajustaPreco no 
		//loop atual e atribuindo o retorno desta função para a variável criada
		array[i].valorUnitario = valUnit; //igualando a propriedade valorUnitario do array recebido como parâmetro à variável valorUnit 
		//(ex: R$ 51,04)
		arrayOrdenado.push(array[i]);//enviando o loop atual do array/parâmetro para a variável arrayOrdenado
	}
	arrayOrdenado.sort(function(a, b):any { //recebendo array na função para reordenar conforme quantidade de estoque
		if (a.quantidade > b.quantidade) {
		  return -1;
		} else {
		  return true;
		}
	  })
	return arrayOrdenado; //retornando array pronto	  
}
console.log(retornarEstoques(arrayEstoques));
