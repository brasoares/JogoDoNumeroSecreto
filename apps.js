alert("Seja bem-vindo(a) ao Jogo do Número Secreto!");

const secretNumber = 7;
let attempts = 0;
let guess;

function getGuess() {
    return Number(prompt("Escolha um valor de 0 a 9: "));
}

function giveFeedback(guess, secretNumber) {
    if (guess > secretNumber) {
        alert(`O número secreto é menor que ${guess}`);
    } else {
        alert(`O número secreto é maior que ${guess}`);
    }
}

function successMessage(secretNumber, attempts) {
    const attemptsText = attempts === 1 ? "vez" : "vezes";
    alert(`Parabéns! Você acertou! O número secreto é o ${secretNumber} e você tentou acertá-lo com um total de ${attempts} ${attemptsText}.`);
}

while (guess !== secretNumber) {
    guess = getGuess();
    attempts++;

    if (guess === secretNumber) {
        successMessage(secretNumber, attempts);
    } else {
        giveFeedback(guess, secretNumber);
    }
}