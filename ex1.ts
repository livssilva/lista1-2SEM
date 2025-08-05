/* Faça um programa para ler dois valores inteiros, 
e depois mostrar na tela a soma desses números com uma  mensagem explicativa, conforme exemplos.*/

const teclado = require (`prompt-sync`)();
let n1: number = 0;
let n2: number = 0;
let soma: number = 0;

n1 = parseInt(teclado(`Digite o primeiro número: `))
n2 = parseInt(teclado(`Digite o segundo número: `))

soma = n1 + n2

console.log(`A soma desses números é: ${soma}`)
