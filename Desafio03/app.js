// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
//campoSaldo.innerHTML =0;
var saldo = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo)
        saldo += soma;
    campoSaldo.innerHTML = saldo.toString();
    limparCampoSoma();
}
function limparSaldo() {
    if (campoSaldo) {
        saldo = 0;
        campoSaldo.innerHTML = saldo.toString();
    }
}
function limparCampoSoma() {
    soma.value = "";
}
if (botaoLimpar)
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
if (botaoAtualizar)
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(parseInt(soma.value));
    });
