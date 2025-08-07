/* Fazer um programa para ler o código de uma peça 1, o número de peças 1, 
o valor unitário de cada peça 1, o  código de uma peça 2,
 o número de peças 2 e o valor unitário de cada peça 2. Calcule e mostre o valor a ser pago. */

const teclado = require ('prompt-sync')();

let codigoPeca1: number = parseInt(teclado('Código da peça 1: '));
let numeroPeca1: number = parseInt(teclado('Número de peças 1: '));
let valorUnitarioPeca1: number = parseInt(teclado('Valor unitário da peça 1: '));
let codigoPeca2: number = parseInt(teclado('Código da peça 2: '));
let numeroPeca2: number = parseInt(teclado('Número de peças 2: '));

let valorUnitarioPeca2 = Number(teclado('Valor unitário da peça 2: '));
let valorTotal = (numeroPeca1 * valorUnitarioPeca1) + (numeroPeca2 * valorUnitarioPeca2);

console.log(`VALOR A PAGAR: R$ ${valorTotal}`);
