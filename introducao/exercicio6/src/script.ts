/*
function operations (num1: number, num2: number): void {
    let sum: number = num1 + num2;
    let difference: number = num1 - num2;
    let multi: number = num1 * num2; 
    let div: number = num1 / num2; 

    console.log(`Números recebidos: ${num1} e ${num2}
    soma: ${sum}
    subtração:${difference}
    multiplicação: ${multi}
    divisão: ${div}`)
}

operations(10, 20);
*/

function operations (num1: number, num2: number): string {
    let sum: number = num1 + num2;
    let difference: number = num1 - num2;
    let multi: number = num1 * num2; 
    let div: number = num1 / num2; 

    return `Números recebidos: ${num1} e ${num2}
    soma: ${sum}
    subtração:${difference}
    multiplicação: ${multi}
    divisão: ${div}`
}

let retorno:string = operations(600, 45);
console.log(retorno);