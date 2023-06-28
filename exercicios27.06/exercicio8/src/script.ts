/*
Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”, e a data de emissão da sua carteira de 
//identidade (ex.: “07/11/2015”). A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa 
//ser renovada segundo os seguintes critérios:

- Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
- Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
- Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos
*/

//function renovarID ():any{
	let dataNasc = prompt('Informe sua data de nascimento: (dd/mm/aaaa)');
	let dataEmis = prompt('Informe a data de emissão da sua carteira: (dd/mm/aaaa)');
	let nasc: any = dataNasc?.split('/');
	let emis: any = dataEmis?.split('/');
	let nascReordenada:any = [nasc[2], nasc[1], nasc[0]].join("/");
	let emisReordenada:any = [emis[2], emis[1], emis[0]].join("/");
	const today: Date = new Date();
	const dateString: any = today.toLocaleDateString();
	console.log(new Date(dateString).getTime() - nascReordenada.toLocaleDateString() < 20);
	if (dateString - nascReordenada < 20){
		if (dateString - emisReordenada > 5){
			console.log(true);
		}
		else {
			console.log(false);
		}
	}
//}

//console.log(renovarID());
