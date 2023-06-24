"use strict";
function operations(num1, num2) {
    let sum = num1 + num2;
    let difference = num1 - num2;
    let multi = num1 * num2;
    let div = num1 / num2;
    return `Números recebidos: ${num1} e ${num2}
    soma: ${sum}
    subtração:${difference}
    multiplicação: ${multi}
    divisão: ${div}`;
}
let retorno = operations(600, 45);
console.log(retorno);
//# sourceMappingURL=script.js.map