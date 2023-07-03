/*
O CPF consiste de 11 dígitos cuja configuração respeita o formato XXX.XXX.XXX-XX. Para a construção de um número de CPF as seguintes regras 
são aplicadas.

- Os oito primeiros dígitos são os número-base
- O nono dígito é a região fiscal
- O penúltimo dígito é o dígito verificador (DV) módulo 11 dos nove dígitos anteriores
- O último dígito é o DV módulo 11 dos dez dígitos anteriores

Para o cálculo dos DV existem pesos associados a cada dígito, abaixo segue exemplo do cálculo dos DV do CPF com número-base 145382206.

Começamos utilizando os 9 primeiros dígitos multiplicando-os pela sequência decrescente de 10 à 2 e somamos esse resultado.

145.382.206-20

1  4  5  3  8  2  2  0  6
x  x  x  x  x  x  x  x  x
10 9  8  7  6  5  4  3  2
=  =  =  =  =  =  =  =  =
10 36 40 21 48 10 8  0  12

10 + 36 + 40 + 21 + 48 + 10 + 8 + 0 + 12 = 185

Com esse resultado agora basta realizar a operação de módulo 11. Ou seja:

185 % 11 = 9

O resto da divisão é 9. Agora para calcular o dígito verificador vamos subtrair este resto do número 11:

11 - 9 = 2

ATENÇÃO: Como o resultado da subtração foi 2, o primeiro dígito verificador é igual a 2. Caso o resultado dessa subtração for 10 ou maior, o 
penúltimo dígito verificador será o 0.

A validação do segundo dígito é semelhante a primeira, porém vamos considerar o primeiro dígito verificador calculado anteriormente. Por isso a 
multiplicação é feita de 11 à 2.

1  4  5  3  8  2  2  0  6  2
x  x  x  x  x  x  x  x  x  x
11 10 9  8  7  6  5  4  3  2
=  =  =  =  =  =  =  =  =  =
11 40 45 24 56 12 10 0  18 4

11 + 40 + 45 + 24 + 56 + 12 + 10 + 0 + 18 + 4 = 220

Novamente vamos efetuar a divisão por 11 usando o módulo:

220 % 11 = 0

E vamos fazer a subtração:

11 - 0 = 11

Como o valor é igual ou maior que `10`, o último dígito é `0`.

Assim, confirmamos os dois dígitos verificadores do nosso CPF 145.382.206-**20** e sabemos que esse CPF é válido. 

Outra regra muito importante é que CPFs com números iguais como: `111.111.111-11`, `222.222.222-22`, entre outros, são CPFs válidos pelo
algoritmo mas não existem no registro oficial. Assim esse tipo de CPF não pode ser usado.

Código à desenvolver:
Você deve criar uma função que receba o CPF no formato “xxx.xxx.xxx-xx” e faça uma validação do valor recebido. Caso o CPF recebido seja válido 
retorne um True e caso seja inválido retorne False
*/

let cpf: string = '01548031038'; //number não aceita 0 como primeiro valor
let arrayCPF: string[] = cpf.split(''); //transformando string em array de strings
var arrayConvertido = arrayCPF.map(function(str){return parseInt(str);}) //map para converter todos os valores do array para number

function somaArray(array:number[]):number{ //função para somar os valores dentro de um array
    let soma1:number = array.reduce(function(a, b) { return a + b; }, 0);
    let mod1:number = soma1 % 11; //resto divisão
    mod1 = 11 - mod1;
    return mod1;
}

function validarCpf (array:number[]):void{
    let teste1:number[]=[10,9,8,7,6,5,4,3,2]; //array para primeira validacao;
    let teste2:number[]=[11,10,9,8,7,6,5,4,3,2]; //array para segunda validacao;
    let arrayValidacao1:number[]=[];
    let arrayValidacao2:number[]=[];
    for (let i=0; i<teste1.length; i++){
        let calculo1:number = array[i]*teste1[i]; //fazendo a multiplicação do array na posição i pelo teste na posição i e salvando em um array;
        arrayValidacao1.push(calculo1);  //enviando resultados das multiplicações do array anterior para o arrayValidacao1;
    }
    
    if (somaArray(arrayValidacao1) == array[9] || somaArray(arrayValidacao1) >=10 && array[9] == 0){ //fazendo testes para ir para o próximo array ou retornar false
        for (let i=0; i<teste2.length; i++){
            let calculo2:number = array[i]*teste2[i];
            arrayValidacao2.push(calculo2);
        }
        if (somaArray(arrayValidacao2) == array[10] || somaArray(arrayValidacao2) >=10 && array[10] == 0){
            console.log('CPF válido?',true);
        }
        else {
            console.log('CPF válido?',false);
        }
    }
    else {
        console.log('CPF válido?',false);
    }
}
validarCpf(arrayConvertido);
