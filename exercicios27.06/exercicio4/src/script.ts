/*
O seguinte array traz as pessoas colaboradoras de uma empresa, com seus salários, setores e se trabalham 
presencialmente ou por home office:
[
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]
Considerando o arrayacima, crie um ENUM para os setores e um type para as pessoas colaboradoras. 
Em seguida, crie uma função que receba este array como parâmetro e retorne apenas as pessoas do setor de
marketing que trabalham presencialmente. 
*/

enum setores {
	MAR = "marketing",
	FIN = "financeiro",
	VEN = "vendas",
}

type funcionarios = {
	nome: string,
	salario: number,
	setor: string,
	presencial: boolean
} 

let arrayFuncionarios: funcionarios [] = [
	{ nome: "Marcos", salario: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salario: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: "marketing", presencial: true }
]

function filtrarArray (array:any[]):any{
	let arrayMarketing:any[] = [];
	for (let i = 0; i < array.length; i++){
		if (array[i].setor == setores.MAR) {
			arrayMarketing.push(array[i]);
		}
	}
	return arrayMarketing;
}

console.log(filtrarArray(arrayFuncionarios));



	
	
