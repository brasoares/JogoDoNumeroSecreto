/* Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador. */

let num = prompt("Enter a number: ");
let counter = 0;

while (counter <= num) {
    console.log(counter);
    counter++;
}

alert(num);