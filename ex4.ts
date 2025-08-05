/* Fazer um programa que leia o número de um funcionário, seu número de horas trabalhadas, 
o valor que recebe por  hora e calcula o salário desse funcionário. 
A seguir, mostre o número e o salário do funcionário, com duas casas  decimais.*/

const teclado = require(`prompt-sync`)();
let numero: number = 0;
let horas: number = 0;
let valorHoras: number = 0;
let salario: number = 0;

numero = parseInt(teclado(`Digite o número do funcionário: `));
horas = parseInt(teclado(`Digite as horas trabalhadas: `));
valorHoras = parseInt(teclado(`Digite o valor que recebe por hora: `));

salario = horas * valorHoras

console.log(`O número do funcionário é ${numero} e o salário do funcionário é: ${salario} `)