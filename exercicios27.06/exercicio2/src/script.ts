//Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável. 

let nome:string = 'João da Silva';
let idade:number = 50;

function receberParametro (parametro:any){
    return console.log(typeof parametro)
}

receberParametro(nome);

