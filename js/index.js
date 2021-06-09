try {

let numero = document.getElementById('numero');
let nome = document.getElementById('nome');
let cvv = document.getElementById('cvv');
let validade = document.getElementById('validade');

numero.onkeyup = function () { infoCartaoNumero(numero,numeroCartaoVisual) }

nome.onkeyup = function () { infoCartaoNome(nome,nomeCartaoVisual) }

cvv.onkeyup = function () { infoCartaoCvv(cvv,cvvCartaoVisual) }

validade.onkeyup = function () { infoCartaoValidade(validade,validadeCartaoVisual) }

let numeroCartaoVisual = document.getElementById('numeroCartaoVisual');
let nomeCartaoVisual = document.getElementById('nomeCartaoVisual');
let cvvCartaoVisual = document.getElementById('cvvCartaoVisual');
let validadeCartaoVisual = document.getElementById('validadeCartaoVisual');

function infoCartaoNumero (campo,campoCartao) {
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

function infoCartaoNome (campo,campoCartao) {
      campo.value = campo.value
          .replace(/\d+/g, '');
            if (campo.value.length == 0) {
              campoCartao.innerHTML = "Jhon Doe";
            } else {
              campoCartao.innerHTML = campo.value;
            }
}

function infoCartaoValidade (campo,campoCartao) {
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

function infoCartaoCvv(campo,campoCartao) {
      campo.value = campo.value.replace(/\D+/g, '');
      if (campo.value.length == 0) {
          campoCartao.innerHTML = "123";
      } else {
          campoCartao.innerHTML = campo.value;
      }

}

} catch (e) {}
