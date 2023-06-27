//a) Escreva uma função que receba uma string e retorne a string reversa. Em outras palavras, se o input da sua função for "abcd", a saída deve 
//ser "dcba" .

let sentence:string = 'ABCDE';
let array = sentence.split('');
let newArray = array.reverse();
let newSentence:string = newArray.join('');

console.log(sentence);
console.log(newSentence);

/*exercício do professor
Criar uma função que recebe o primeiro nome e o sobrenome, o sobrenome pode ser nulo, mas se vier,
exibir nome completo
*/

let nome:string = 'João';
let sobrenome: null = null;

function fullName(primeiro:string, segundo:string | null){
    let primeiroNome:string = primeiro;
    let segundoNome = segundo;
    let frase:string;
    if (segundoNome !== null){
        frase = `Nome: ${primeiroNome} ${segundoNome}`;
    }else{
        frase = `Nome: ${primeiroNome}`
    }
    return frase;
}

console.log(fullName(nome,sobrenome));
