/*
Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”, e a data de emissão da sua carteira de 
//identidade (ex.: “07/11/2015”). A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa 
//ser renovada segundo os seguintes critérios:

- Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
- Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
- Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos
Dica 1: Você precisará da data atual para fazer as operações, uma opção é utilizar new Date() para obter a data atual
Dica 2: Para fazer as operações necessárias, você pode converter as datas para timestamp usando o método getTime() na data 
*/
//toLocaleDateString('pt-BR') <= converte para data local  

function receberData(data:string):number{
	let dataAtual: Date = new Date ();
	let dataArray = data.split("/");
	let dataReordenada: Date = new Date (`${dataArray[2]},${dataArray[1]},${dataArray[0]}`);
	let diferencaMilissegundos = dataAtual.getTime() - dataReordenada.getTime(); //converte as duas datas para milissegundos e retorna a diferença entre elas
	let tempoDias = Math.ceil(diferencaMilissegundos / (1000 * 3600 * 24));//transformando em segundos, dividindo pelos segundos de uma hora (3600)
	//e multiplicando por 24h para transformar milissegundos em dias
	let tempoAno = tempoDias / 365;
	return tempoAno;
}
function renewId ():void{
	let idade:number = receberData('10/10/2010');
	let renov:number = receberData('10/10/2017');

	if (idade <= 20 && renov >= 5){ 
			return console.log('renovar?',true);
	}
	else if (idade >= 21 && idade <=50 && renov >= 10){
			return console.log('renovar?',true);
	}
	else if (idade > 50 && renov >= 15){
			return console.log('renovar?',true);
	}
	else {
			return console.log('renovar?',false);
	}
}
renewId();
