/* Segundo Desafio do Módulo 2 - VnW
02 - If/Else */

//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let aline = 18

if (aline >= 18) {
    console.log('Você tem mais de 18 anos')
} else {
    console.log('Você não tem mais de 18 anos')
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a 
//condição humana seja true
let condHum = true

if (aline >= 18 && condHum == true) {
    console.log('Você tem mais de 18 anos e pode entrar')
} else {
    console.log('Você não tem mais de 18 anos, entao não pode entrar')
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em 
//Janeiro OU Dezembro
let janeiro = true;
let dezembro = true;

if (janeiro || dezembro == true) {
    console.log('Você faz aniversário em Janeiro ou Dezembro')
} else {
    console.log('Você não faz aniversário em Janeiro ou Dezembro')
}

//*** Exercícios bônus
// 4 e 5 não sei se fiz certo, mas tentei

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let nome = 'aline'
let resultado = nome.split('')

console.log(resultado)

let resul = nome.split('r')

if (resul == 'r') {
    console.log('Seu nome começa com R')
} else {
    console.log('Seu nome não começa com R')
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras 
//OU seu nome começar com a letra E
let sobrenome = 'Marques'

if (sobrenome.length >= 6 || nome == 'e') {
    console.log("Seu sobrenome tem mais de 6 letras OU seu nome começa com a letra 'E'")
} else {
    console.log('Nada Acontece')

}