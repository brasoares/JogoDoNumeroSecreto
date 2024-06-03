/*Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.*/

let num = prompt("Informe um número: ");

num = parseInt(num);

if (isNaN(num)){
    console.log("Por favor, insira um número válido: ")
} else {while (num > 0){
    console.log(num);
    num--;
}}

