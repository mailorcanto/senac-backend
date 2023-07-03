"use strict";
let cpf = '01548031028';
let arrayCPF = cpf.split('');
var arrayConvertido = arrayCPF.map(function (str) { return parseInt(str); });
function somaArray(array) {
    let soma1 = array.reduce(function (a, b) { return a + b; }, 0);
    let mod1 = soma1 % 11;
    mod1 = 11 - mod1;
    return mod1;
}
function validarCpf(array) {
    let teste1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    let teste2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    let arrayValidacao1 = [];
    let arrayValidacao2 = [];
    for (let i = 0; i < teste1.length; i++) {
        let calculo1 = array[i] * teste1[i];
        arrayValidacao1.push(calculo1);
    }
    if (somaArray(arrayValidacao1) == array[9] || somaArray(arrayValidacao1) >= 10 && array[9] == 0) {
        for (let i = 0; i < teste2.length; i++) {
            let calculo2 = array[i] * teste2[i];
            arrayValidacao2.push(calculo2);
        }
        if (somaArray(arrayValidacao2) == array[10] || somaArray(arrayValidacao2) >= 10 && array[10] == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
console.log(validarCpf(arrayConvertido));
//# sourceMappingURL=script.js.map