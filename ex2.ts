/* Faça um programa para ler o valor do raio de um círculo, 
e depois mostrar o valor da área deste círculo com quatro  casas decimais conforme exemplos.  
Fórmula da área: area = π . raio2 
Considere o valor de π = 3.14159 */

const teclado = require (`prompt-sync`)();
let raio: number = 0;
let area: number = 0;

raio = parseFloat(teclado(`Digite o valor do raio: `));

area = 3.14159 * (raio * raio)

console.log(`A área do circulo é ${area.toFixed(4)}`)
