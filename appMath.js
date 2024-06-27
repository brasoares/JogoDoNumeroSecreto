alert("Seja bem-vindo(a) ao Jogo do Número Secreto!");
let numeroSecreto = Math.floor(Math.random() * 10); // Gera um número aleatório entre 0 e 9
console.log(numeroSecreto);
let chute;
let tentativas = 0;

while (chute !== numeroSecreto) {
  chute = Number(prompt("Escolha um valor de 0 a 9: "));

  if (chute === numeroSecreto) {
    break;
  } else if (chute > numeroSecreto) {
    alert(`O número secreto é menor que ${chute}`);
  } else {
    alert(`O número secreto é maior que ${chute}`);
  }
  
  tentativas++; 
}

tentativas++; // Conta a tentativa do acerto

if (tentativas > 1) {
  alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
  alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com 1 tentativa.`);
}