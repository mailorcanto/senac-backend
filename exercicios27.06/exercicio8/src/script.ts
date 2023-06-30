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

function renewId ():any{
	let data: Date = new Date ();

	const dataNasc: string | null = prompt('Digite a sua data de nascimento (dd/mm/aaaa):');
	let nasc: string[] = [];
	if (dataNasc) {
    	nasc = dataNasc.split("/");
	}
	let nascReordenada = new Date (`${nasc[2]},${nasc[1]},${nasc[0]}`);
	var idadeMilisegundos = Math.abs(data.getTime() - nascReordenada.getTime()); //converte as duas datas para milisegundos e retorna a diferença entre elas
	var idadeDias = Math.ceil(idadeMilisegundos / (1000 * 3600 * 24));  //transformando em segundos, dividindo pelos segundos de uma hora (3600)
	//e multiplicando por 24h para transformar milisegundos em dias
	console.log(idadeDias);

	const dataRenov: string | null = prompt('Digite a data de renovação de sua carteira (dd/mm/aaaa):');
	let renov: string[] = [];
	if (dataRenov) {
    	renov = dataRenov.split("/");
	}
	let renovReordenada = new Date (`${renov[2]},${renov[1]},${renov[0]}`);
	var renovMilisegundos = Math.abs(data.getTime() - renovReordenada.getTime());
	var renovDias = Math.ceil(renovMilisegundos / (1000 * 3600 * 24))
	console.log(renovDias);
	if (idadeDias / 365 <= 20){ 
		if(renovDias / 365 >= 5){
			return console.log('renovar?',true);
		}
		else {
			return console.log('renovar?',false);
		}
	}
	if (idadeDias / 365 >= 21 && idadeDias / 365 <=50){
		if(renovDias / 365 >= 10){
			return console.log('renovar?',true);
		}
		else {
			return console.log('renovar?',false);
		}
	}
	if (idadeDias / 365 > 50){
		if(renovDias / 365 >= 15){
			return console.log('renovar?',true);
		}
		else {
			return console.log('renovar?',false);
		}
	}
}

renewId();
