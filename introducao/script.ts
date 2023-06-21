//DECLARAÇÃO DE VARIÁVEIS
const company: string = "Senac";
let age: number = 28;
let isCorrect:boolean = true;

//DECLARAÇÃO DE ARRAY
const arr: Array<number> = [1, 2, 3];
const array: number[] = [1, 2, 3];

//DECLARAÇÃO DE OBJETO
const person: {
    name: string,
    age: number
} = {
    name: "Senac",
    age: 50
}

//DECLARAÇÃO DO TIPO ANY (pode receber qualquer tipo)
let result: any;
result = "result";
result = 123;
result = true;

//DECLARAÇÃO DE FUNÇÃO TIPADA
function sum (n1: number, n2:number): number {
    return n1 + n2;
}

function resultSum (n1: number, n2: number): string{
    let result = n1 + n2;
    return `Resultado é ${result}.`;    
}

//DECLARAÇÃO DE FUNÇÃO VOID (se não colocar ? a função sempre vai esperar um valor quando for chamada)
function sayHello(name?:string): void{
    console.log("Hello, ",name || "world"); //recebe um nome ou exibe World
}




