/* Fazer um programa para ler quatro valores inteiros A, B, C e D. 
A seguir, calcule e mostre a diferença do produto  de A e B pelo produto de C e D 
segundo a fórmula: DIFERENCA = (A * B - C * D).*/

const teclado = require (`prompt-sync`)();
let a: number = 0;
let b: number = 0;
let c: number = 0;
let d: number = 0;
let diferenca: number = 0;

a = parseInt(teclado(`Digite o primeiro valor: `));
b = parseInt(teclado(`Digite o segundo valor: `))
c = parseInt(teclado(`Digite o terceiro valor: `))
d = parseInt(teclado(`Digite o quarto valor: `))

diferenca = (a * b - c * d)

console.log(`A diferença dos produtos é: ${diferenca}`)