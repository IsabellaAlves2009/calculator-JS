const btnresult = document.getElementById('btn-result');
const result = document.getElementById('result')

function operacao () {

  let expressao = document.getElementById('result').value;

  // Trocar os símbolos visuais pelos operadores JS
  expressao = expressao.replace(/÷/g, '/')
                       .replace(/x/g, '*')
                       .replace(/\^/g, '**')
                       .replace(/√/g, 'Math.sqrt');

  try {
    const resultado = eval(expressao);
    document.getElementById('result').value = resultado;
  } catch (e) {
    document.getElementById('result').value = "ERROR!";
  }

}


/*function soma(...values) {
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }
  document.getElementById('result').value = total;
}

function subtracao(...values) {
  let total = values[0];
  for (let i = 1; i < values.length; i++) {
    total -= values[i];
  }
  document.getElementById('result').value = total;
}

function multiplicacao(...values) {
  let total = 1;
  for (let i = 0; i < values.length; i++) {
    total *= values[i];
  }
  document.getElementById('result').value = total;
}

function divisao(...values) {
  let total = values[0];
  for (let i = 1; i < values.length; i++) {
    total /= values[i];
  }
  document.getElementById('result').value = total;
}

function potenciacao(...values) {
  let total = values[0];
  for (let i = 1; i < values.length; i++) {
    total = total ** values[i];
  }
  document.getElementById('result').value = total;
}

function radiacao(...values) {
  let total = Math.sqrt(values[values.length - 1]);
  document.getElementById('result').value = total;
}
*/

function inserir(valor) {
  const result = document.getElementById('result')
  if (result.value === "00") {
    result.value = valor;
  } else {
    result.value += valor;
  }
  return;

}

function limpar() {
  const result = document.getElementById('result');
  result.value = '00';
  return;
}

