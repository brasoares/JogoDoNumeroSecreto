alert("Seja bem-vindo(a) ao Jogo do Número Secreto!")
let numeroSecreto = 7; 
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao nosso nº secreto

while (chute != numeroSecreto) {
	chute = Number(prompt("Escolha um valor de 0 a 9: "));

	// se o chute for igual ao número secreto

	/* if (chute == numeroSecreto){
	console.log("Parabéns! Você acertou! O número secreto é o 7!");
	} */

	if (chute == numeroSecreto) {
		break;
		alert(`Parabéns! Você acertou! O número secreto é o ${numeroSecreto} e você tentou acertá-lo o total de ${tentativas} vez(es)!`);
	} else {
		if (chute > numeroSecreto) {
			alert(`O número secreto é menor que ${chute}`);
		} else {
			alert(`O número secreto é maior que ${chute}`);
		}
        // tentativas = tentativas + 1;
        // tentativas += 1; Esta é uma forma melhor e mais prática de se fazer, é mais célere e economiza tempo e código, enquanto se poderá focar no que há a mais!
        tentativas++;
	}
}

if (tentativas > 1) {
	alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`)
} else {
	
}