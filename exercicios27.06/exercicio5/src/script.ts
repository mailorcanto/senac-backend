//Considerando o array de usuários abaixo, crie uma função que receba este array como parâmetro e retorne uma lista com apenas os emails
//dos usuários “admin”. 

const arrayUsuarios: {name: string, email: string, role: string} [] = 
[{name: "Rogério", email: "roger@email.com", role: "user"},
{name: "Ademir", email: "ademir@email.com", role: "admin"},
{name: "Aline", email: "aline@email.com", role: "user"},
{name: "Jéssica", email: "jessica@email.com", role: "user"},  
{name: "Adilson", email: "adilson@email.com", role: "user"},  
{name: "Carina", email: "carina@email.com", role: "admin"}];

function returnArray (array:any[]):any{
	let arrayAdmins:any[] = [];
	for (let i = 0; i < array.length; i++){
		if (array[i].role == 'admin') {
			arrayAdmins.push(array[i]);
		}
	}
	return arrayAdmins;
}

console.log(returnArray(arrayUsuarios));