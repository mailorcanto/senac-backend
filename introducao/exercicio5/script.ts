function checkIdUpdate():boolean {
const currentYear = Number(prompt("Digite o ano atual"))
const birthYear = Number(prompt("Digite o ano de nascimento"))
const issueYear = Number(prompt("Digite o ano de emissão do documento"))

    const age:number = currentYear - birthYear
    const idTime:number = currentYear - issueYear
 
    const cond1:boolean = age <= 20 && idTime >= 5
    const cond2:boolean = age > 20 && age <= 50 && idTime >= 10
    const cond3:boolean = age > 50 && idTime >= 15
 
    return (cond1 || cond2 || cond3)
 }
 