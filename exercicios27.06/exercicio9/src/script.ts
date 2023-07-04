/*
Uma operação matemática bastante utilizada em probabilidade e estatística é o **fatorial**, representado por um **!** (ponto de exclamação). 
Ele consiste em realizar a multiplicação de todos os números (a partir de 1) até aquele colocado na operação. Veja os exemplos abaixo:
- `3! = 3*2*1 = 6`
- `4! = 4*3*2*1 = 24`
- `5! = 5*4*3*2*1 = 120`
- `6! = 6*5*4*3*2*1 = 720`
Isso vale para todos os números inteiros não negativos (também chamados de "números naturais"). Dois valores para se tomar 
cuidado são:  `1! = 1` e `0! = 1` (uma exceção da regra!).

Uma aplicação interessante do fatorial é o cálculo de anagramas de uma palavra. Anagrama é uma outra palavra (não precisa existir em português) 
 as mesmas letras da anterior em ordem diferentes. Por exemplo, anagramas da palavra `mesa` são: `ames`, `maes`, `meas`, `emsa`, `smea` 
 e muitos outros.

A quantidade de anagramas de uma palavra sem nenhuma letra repetida é o fatorial da quantidade de letras. Para `mesa`, a quantidade é `4! = 24`

Considerando tudo o que foi mencionado, escreva uma função que receba uma `palavra` (sem letras repetidas) e devolva a quantidade de anagramas 
que ela possui.

PERMUTAÇÕES / PERMUTATIONS
*/
function contador(palavra:string):number{
	let contadorAnagramas: number = palavra.length;
	let contador:number = 1;

	if (contadorAnagramas === 0 || contadorAnagramas === 1) { //aplicando regra de fatorial igual a 0 ou 1 
    return 1;
	}

	for (let i = 1; i <= contadorAnagramas;i++){
		contador *=i; // o mesmo que: contador = contador * i;
	}
	return contador;
}
console.log(contador('abcdef'));

//função para retornar todas as permutações da palavra;
const permutacoesString = (string: string): string[] => { //recebe uma string e retorna array de strings
	if (string.length <= 2) return string.length === 2 ? [string, string[1] + string[0]] : [string]; 
	return string
	  .split('')
	  .reduce(
		(contador: string[], letra: string, i: number) =>
		  contador.concat(permutacoesString(string.slice(0, i) + string.slice(i + 1)).map((val: string) => letra + val)),
		[]
	  );
  };
//console.log(permutacoesString(palavra));

//SOLUÇÕES DO PROFESSOR
function factorial(word: string) {
    let wordSize = word.length;    

    if (wordSize === 0 || wordSize === 1) { //aplicando regra de fatorial igual a 0 ou 1 
        return 1;
    }

    //com laço while
    let result = wordSize; //variável para receber os cálculos com a variável wordSize;
    while(wordSize > 1) { //enquanto tamanho da palavra for maior que 1
        wordSize--; //decrementando do tamanho da variável até chegar a igual ou menor do que 1
        result *= wordSize; //result = result * wordSize
    }
    return result;

    //com laço for
    /*for (var i = wordSize - 1; i > 1; i--) {
        wordSize *= i;
    }
    return wordSize;
    */
}

console.log(factorial('abcdef'));

