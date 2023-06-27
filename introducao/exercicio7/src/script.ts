//Uma das definições de seres vivos implica em identificar se ele possui células ou não. Hoje em dia, sabe-se que as características deles ficam 
//salvas dentro de uma molécula, um tanto quanto grande, chamada de DNA (Ácido Desoxirribonucleico). Uma das tarefas mais importantes para a 
//sobrevivência das células é a transcrição do RNA (Ácido Ribonucleico) a partir de um DNA. Este processo consiste em identificar as bases 
//nitrogenadas que formam o DNA, em questão. Todas as moléculas de DNA podem ser representadas como uma sequência de bases nitrogenadas que podem 
//ser: a A (adenina), T (timina), G (guanina) ou C (citosina). Abaixo, há um exemplo disto

//ATT GCT GCG CAT TAA CGA CGC GTA

//Para se formar o RNA, devemos realizar a troca das bases nitrogenadas, seguindo a regra: A (adenina) vira U (uracila - específica do RNA); 
//T (timina) vira Adenina (A), C (citosina) vira G(guanina); e G (guanina) vira C (citosina).  O RNA transcrito a partir do exemplo de DNA acima 
//é:

//UAA CGA CGC GUA AUU GCU GCG CAU

//a) Escreva um programa que converta uma string de DNA em uma string de RNA. Para os exemplos acima, a entrada seria "ATTGCTGCGCATTAACGACGCGTA" 
//e a saída "UAACGACGCGUAAUUGCUGCGCAU"

let sequenceDna:string = `ATT GCT GCG CAT TAA CGA CGC GTA`;

function dnaToRna (sequence:string):string{
    let newSequence:string = sequence.toUpperCase();
    newSequence = sequence.replaceAll('A','U').replaceAll('T','A').replaceAll('C','Y').replaceAll('G','Z');
    newSequence = newSequence.replaceAll('Y','G').replaceAll('Z','C');
    newSequence = newSequence.toUpperCase();
    return newSequence; 
}
let sequenceRna:string = dnaToRna(sequenceDna); 
console.log(sequenceRna);

/*
exercício do professor
função que recebe string com nome e outra string com data
formato data: ("26/06/2023");
retornar string no formato:
`Olá me chamo ${nome}, nasci no dia ${dia} do mês ${} do ano de ${ano};
*/

let nome:string = `João da Silva`;
let nasc:string = `20/12/2000`;

function apresentacao (nome:string, data:string):string{
    let name:string = nome;
    let dividirData  = data.split('/');
    let frase:string = `Olá, me chamo ${name}, nasci no dia ${dividirData[0]}, do mês ${dividirData[1]}, do ano ${dividirData[2]}`
    return frase;
}
console.log(apresentacao(nome,nasc));

//SOLUÇÃO DO PROFESSOR
function apresentation(name: string, date: string): string {
    let splitDate = date.split('/');
    /* função para pegar a descrição do mês */
    //let month = getDescription(splitDate[1]);

    return `Olá me chamo ${name}, nasci no dia ${splitDate[0]} 
    do mês de ${splitDate[1]} do ano de ${splitDate[2]}`;

    /*return `Olá me chamo ${name}, nasci no dia ${splitDate[0]} do mês de ${month} do ano de ${splitDate[2]}`;*/
}

// função que recebe uma string com o mês numerico e retorna o mês por extenso
/*function getDescription(month: string): string {
    switch(month) {
        case '01':
            month = 'janeiro'
            break;
        case '02':
            month = 'fevereiro'
            break;
        case '03':
            month = 'março'
            break;
        case '04':
            month = 'abril'
            break;
        case '05':
            month = 'maio'
            break;
        case '06':
            month = 'junho'
            break;
        default:
            console.log('Não encontrado');
            break;
    }
    return month;
}*/

console.log(apresentation('Renato Gaúcho', '23/06/23'));
