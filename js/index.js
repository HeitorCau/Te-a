try {

let numero = document.getElementById('numero');
let nome = document.getElementById('nome');
let cvv = document.getElementById('cvv');
let validade = document.getElementById('validade');

let formPagamento = document.getElementById('form-pagamento');

formPagamento.onsubmit = function (e) {e.preventDefault(); verificarCamposPagamento(nome, nomeErro, numero, numeroErro, validade, validadeErro, cvv, cvvErro);}

numero.onkeyup = function () { infoCartaoNumero(numero,numeroCartaoVisual,numeroErro) }

nome.onkeyup = function () { infoCartaoNome(nome,nomeCartaoVisual,nomeErro) }

cvv.onkeyup = function () { infoCartaoCvv(cvv,cvvCartaoVisual,cvvErro) }

validade.onkeyup = function () { infoCartaoValidade(validade,validadeCartaoVisual,validadeErro) }

let numeroCartaoVisual = document.getElementById('numeroCartaoVisual');
let nomeCartaoVisual = document.getElementById('nomeCartaoVisual');
let cvvCartaoVisual = document.getElementById('cvvCartaoVisual');
let validadeCartaoVisual = document.getElementById('validadeCartaoVisual');

let numeroErro = document.getElementById('numero-erro');
let nomeErro = document.getElementById('nome-erro');
let validadeErro = document.getElementById('validade-erro');
let cvvErro = document.getElementById('cvv-erro');

function infoCartaoNumero (campo,campoCartao,campoErro) {

        campoErro.innerHTML = "";

        campo.value = campo.value
        .replace(/\D+/g, '')
        .replace(/(\d{4})(\d)/, '$1 $2')
        .replace(/(\d{4})(\d)/, '$1 $2')
        .replace(/(\d{4})(\d)/, '$1 $2')
        .replace(/(\d{4})\d+?$/, '$1');

        if (campo.value.length == 0) {
          campoCartao.innerHTML = "0000 0000 0000 0000";
        } else {
          campoCartao.innerHTML = campo.value;
        }
}

function infoCartaoNome (campo,campoCartao,campoErro) {

      campoErro.innerHTML = "";

      campo.value = campo.value
          .replace(/\d+/g, '');
            if (campo.value.length == 0) {
              campoCartao.innerHTML = "Jhon Doe";
            } else {
              campoCartao.innerHTML = campo.value;
            }
}

function infoCartaoValidade (campo,campoCartao,campoErro) {

    campoErro.innerHTML = "";

    campo.value = campo.value
        .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)/, '$1');

        if (campo.value.length == 0) {
          campoCartao.innerHTML = "12/21";
        } else {
          campoCartao.innerHTML = campo.value;
        }

}

function infoCartaoCvv(campo,campoCartao,campoErro) {

      campoErro.innerHTML = "";

      campo.value = campo.value.replace(/\D+/g, '');
      if (campo.value.length == 0) {
          campoCartao.innerHTML = "123";
      } else {
          campoCartao.innerHTML = campo.value;
      }

}

function verificarCamposPagamento(nome, nomeErro, numero, numeroErro, validade, validadeErro, cvv, cvvErro){

  if (nome.value.length == 0) {
    nomeErro.innerHTML = "Insira o nome no cartão";
  }

  if (numero.value.length == 0) {
    numeroErro.innerHTML = "Insira o numero do cartão";
  }

  if (validade.value.length == 0) {
    validadeErro.innerHTML = "Insira o validade do cartão";
  }

  if (cvv.value.length == 0) {
    cvvErro.innerHTML = "Insira o código de validação do cartão";
  }

}

} catch (e) {}
