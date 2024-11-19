alert('Boas vindas ao jogo do Número Secreto!');
let desafio = 10;
let numeroSecreto = parseInt(Math.random() * desafio + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;
// enquanto chute não for igual ao numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 a ${desafio}:`);
    // se chute for igual ao numeroSecreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa'
alert(`Isso aí! Você descobriu o Número Secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if (tentativas > 1) {
//    alert(`Isso aí! Você descobriu o Número Secreto ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
//    alert(`Isso aí! Você descobriu o Número Secreto ${numeroSecreto} com ${tentativas} tentativa`)
// }
