/* Fazer um programa que leia três valores com ponto flutuante de dupla precisão:
 A, B e C. Em seguida, calcule e  mostre:  
a) a área do triângulo retângulo que tem A por base e C por altura. 
b) a área do círculo de raio C. (pi = 3.14159) 
c) a área do trapézio que tem A e B por bases e C por altura. 
d) a área do quadrado que tem lado B. 
e) a área do retângulo que tem lados A e B.
*/

const teclado = require('prompt-sync')();
let a = parseFloat(teclado('Digite o valor de A: '));
let b = parseFloat(teclado('Digite o valor de B: '));   
let c = parseFloat(teclado('Digite o valor de C: '));
const pi = 3.14159;

let areaTriangulo = (a * c) / 2;
let areaCirculo = pi * c * c;
let areaTrapezio = ((a + b) * c) / 2;
let areaQuadrado = b * b;
let areaRetangulo = a * b;
console.log(`Área do triângulo: ${areaTriangulo}`);
console.log(`Área do círculo: ${areaCirculo}`);