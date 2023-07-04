"use strict";
function retornaRomanos(num) {
    var numeraisRomanos = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let romanos = '';
    for (let i in numeraisRomanos) {
        while (num >= numeraisRomanos[i]) {
            romanos += i;
            console.log(i);
            num -= numeraisRomanos[i];
            console.log(num);
            console.log(numeraisRomanos[i]);
        }
    }
    return romanos;
}
console.log(retornaRomanos(2023));
function convertToRoman(num) {
    const roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    let str = '';
    for (let i of Object.keys(roman)) {
        let q = Math.floor(num / roman[i]);
        console.log(q);
        num -= q * roman[i];
        console.log(num);
        str += i.repeat(q);
        console.log(str);
    }
    return str;
}
//# sourceMappingURL=script.js.map