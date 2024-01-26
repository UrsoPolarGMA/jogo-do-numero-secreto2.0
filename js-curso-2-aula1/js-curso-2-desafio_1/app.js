let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio!';

function verificarBotaoConsole() {
    console.log('O botão foi clicado');
}

function botaoAlerta() {
    alert('Eu amo JS!');
}

function botaoPrompt() {
    let cidade = prompt('Digite o nome de uma cidade');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function botaoSoma() {
    let primeroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let somaDosNumeros = primeroNumero + segundoNumero;
    alert(`A soma dos dois números é ${somaDosNumeros}`);
}