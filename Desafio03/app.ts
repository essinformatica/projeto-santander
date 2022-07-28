// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo')!;
let botaoLimpar = document.getElementById('limpar-saldo')! ;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo')! as HTMLElement ;

//campoSaldo.innerHTML =0;
let saldo = 0;
limparSaldo()
function somarAoSaldo(soma: number) {

    if(campoSaldo)
    saldo+= soma;
    campoSaldo.innerHTML= saldo.toString() ;
    limparCampoSoma();
}

function limparSaldo() {
    if (campoSaldo) {
        saldo= 0;
        campoSaldo.innerHTML = saldo.toString();
    }
    
}
function limparCampoSoma(){
    soma.value = "";
}
if(botaoLimpar)
botaoLimpar.addEventListener('click',  ()=> {
    limparSaldo();
});
if(botaoAtualizar)
botaoAtualizar.addEventListener('click',  ()=>{
    somarAoSaldo(parseInt(soma.value));
});



