alert("Seja bem-vindo(a) ao Jogo do Número Secreto!");
let numeroSecreto = 7;
console.log(numeroSecreto);
let chute;
let tentativas = 0;

while(chute !== numeroSecreto){
    chute = Number(prompt("Escolha um valor de 0 a 9: "));
    tentativas++;

    if (chute === numeroSecreto) {
        let tentativasTexto = tentativas === 1 ? "vez" : "vezes";
        alert(`Parabéns! Você acertou! O número secreto é o ${numeroSecreto} e você tentou acertá-lo com um total de ${tentativas} ${tentativasTexto}.`)
    } else {
        alert(`O número secreto é ${chute > numeroSecreto ? "menor" : "maior"} que ${chute}`);
    }
}