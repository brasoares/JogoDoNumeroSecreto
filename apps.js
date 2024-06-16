alert("Seja bem-vindo(a) ao Jogo do Número Secreto!");
let numeroSecreto = 7;
console.log(numeroSecreto);
let chute;
let tentativas = 0;

while(chute !== numeroSecreto){
    chute = Number(prompt("Escolha um valor de 0 a 9: "));
    tentativas++;
}