/*
Escreva uma função para converter de números normais para algarismos romanos (`string`).

Os romanos eram bem inteligentes. Eles conquistaram a maior parte da Europa e a governaram por centenas de anos. Inventaram estradas de 
concreto e até biquínis. Uma coisa que eles nunca descobriram foi o número zero. Isso tornou a escrita e a datação de histórias extensas de 
suas façanhas um pouco mais desafiadoras, mas o sistema de números que eles criaram ainda está em uso hoje. 

Os romanos escreviam números usando letras - I, V, X, L, C, D, M. Não há necessidade de converter números maiores que cerca de 3000. 
(Os próprios romanos não tendiam a ir mais alto)

A Wikipedia diz: Os algarismos romanos modernos são escritos expressando cada dígito separadamente, começando com o dígito mais à esquerda e 
pulando qualquer dígito com valor zero.

Para ver isso na prática, considere o exemplo de 1990.

Em algarismos romanos 1990 é MCMXC: 1000=M 900=CM 90=XC

Dica 1: Os principais dígitos dos números romanos são: M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1

Qualquer digito a ser construído pode ser feito utilizando esses como base.

Dica 2: Uma possível solução é construir um array de objetos com os principais dígitos do maior pro menor, percorra o vetor de dígitos 
decrementando sempre que possível aquele valor do ano base. Exemplo:

Array de objetos: [
{letra: M, valor: 1000},
{letra: CM, valor: 900},
{letra: D, valor: 500},
{letra: CD, valor: 400},
{letra: C, valor: 100},
{letra: XC, valor: 90},
{letra: L, valor: 50},
{letra: XL, valor: 40},
{letra: C, valor: 10},
{letra: IX, valor: 9},
{letra: V, valor: 5},
{letra: IV, valor: 4},
{letra: I, valor: 1}]

Ano 1990

1990-1000 = 990 e ficamos com a letra M

Não é possível subtrair 1000 de 990, ou seja, vamos para a próxima posição (900) 

990-900 = 90 e ficamos com CM, juntando com o que tínhamos: MCM

E assim sucessivamente até chegarmos a zero

*/

function retornaRomanos(num:number) {
    const numeraisRomanos:any = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let romanos:string = ''; //inicializando romanos como uma string através do ''(texto vazio);
    for (let i in numeraisRomanos ) {
      while ( num >= numeraisRomanos[i] ) { //enquanto número digitado for maior ou igual aos numeros dentro do array;
        romanos += i; //acrescentando numerais romanos à string roman;
        console.log(i); 
        num -= numeraisRomanos[i]; //subtraindo número digitado pelos números do array  
        console.log(num);
        console.log(numeraisRomanos[i]);
      } }
    return romanos;
  }

console.log(retornaRomanos(57));

function convertToRoman(num: number): string {
    const roman: { [key: string]: number } = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    let str:string = '';
  
    for (let i of Object.keys(roman)) { //Object.keys busca o nome das PROPRIEDADES de um objeto e índice(1, 2 etc) de um array
      let q = Math.floor(num / roman[i]); //dividindo 1988 por 1000, arredondando pra baixo: 1
      console.log(q);
      num -= q * roman[i]; //numero = numero(1988) - q(1) * roman[i](1000) = 988 
      console.log(num);
      str += i.repeat(q);
      console.log(str);
    }
  
    return str;
  }
//console.log(convertToRoman(1988));


//solução do professor
function convertToRoman(year: number):string{
  const values= [{symbol: 'M', value: 1000},
                {symbol: 'CM', value: 900},
                {symbol: 'D', value: 500},
                {symbol: 'CD', value: 400},
                {symbol: 'C', value: 100},
                {symbol: 'XC', value: 90},
                {symbol: 'L', value: 50},
                {symbol: 'XL', value: 40},
                {symbol: 'X', value: 10},
                {symbol: 'IX', value: 9},
                {symbol: 'V', value: 5},
                {symbol: 'IV', value: 4},
                {symbol: 'I', value: 1}]


  let result:string = '';
  for (const {symbol, value} of values){
    while (year >= value){ 
      result += symbol; //acrescentando símbolo correspondente à string result;
      year -= value; //diminuindo valores do ano conforme array;
    }
  }

  return result
}

console.log(convertToRoman(1990));
