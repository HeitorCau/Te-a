// try {

let numero = document.getElementById('numero');
console.log(numero);
let nome = document.getElementById('nome');
let cvv = document.getElementById('cvv');
let validade = document.getElementById('validade');

numero.onchange = function () { infoCartaoVisual(numero,numeroCartaoVisual) }

nome.onchange = function () { infoCartaoVisual(nome,nomeCartaoVisual) }

cvv.onchange = function () { infoCartaoVisual(cvv,cvvCartaoVisual) }

validade.onchange = function () { infoCartaoVisual(validade,validadeCartaoVisual) }

let numeroCartaoVisual = document.getElementById('numeroCartaoVisual');
let nomeCartaoVisual = document.getElementById('nomeCartaoVisual');
let cvvCartaoVisual = document.getElementById('cvvCartaoVisual');
let validadeCartaoVisual = document.getElementById('validadeCartaoVisual');

const infoCartaoVisual = (input,campoCartao) => {
  campoCartao.innerHTML = input.value;
}
//
//
// } catch (e) {}
