alert("Seja bem-vindo(a) ao Jogo do Número Secreto!")
let numeroSecreto = 7;
let chute = prompt("Escolha um valor de 0 a 9: ");



// se o chute for igual ao número secreto

/* if (chute == numeroSecreto){
    console.log("Parabéns! Você acertou! O número secreto é o 7!");
} */


if (chute == numeroSecreto){
    alert(`Parabéns! Você acertou! O número secreto é o ${numeroSecreto}!`);
} else {
    if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }