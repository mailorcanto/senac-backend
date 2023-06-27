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
let firstName:string = 'João';
let surname: string | null = null;

function fullName(first:string, last:string | null):string{
    let phrase:string;
    if (last !== null){
        return phrase = `Nome: ${first} ${last}`;
    }else{
        return phrase = `Nome: ${first}`
    }
}

console.log(fullName(firstName,surname));
