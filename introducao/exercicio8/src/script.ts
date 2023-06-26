//a) Escreva uma função que receba uma string e retorne a string reversa. Em outras palavras, se o input da sua função for "abcd", a saída deve 
//ser "dcba" .

let sentence:string = 'ABCDE';
let array = sentence.split('');
let newArray = array.reverse();
let newSentence:string = newArray.join('');

console.log(sentence);
console.log(newSentence);