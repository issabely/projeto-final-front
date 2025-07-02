function exemplo1() {
  alert("Vamos calcular a média!");

  const quantidade = parseInt(prompt("Quantos números você deseja digitar?"));
  if (!Number.isInteger(quantidade) || quantidade <= 0) {
    alert("Digite um número válido.");
    return;
  }

  let soma = 0;

  for (let i = 1; i <= quantidade; i++) {
    let numero = parseFloat(prompt(`Digite o ${i}º número:`));
    if (isNaN(numero)) {
      numero = 0;
      alert("Número inválido. Será considerado 0.");
    }
    soma += numero;
  }

  const media = soma / quantidade;
  alert(`A média é: ${media.toFixed(2)}`);
}

function exemplo2() {
  alert("Vamos somar dois números!");

  let num1 = parseFloat(prompt("Digite o primeiro número:"));
  let num2 = parseFloat(prompt("Digite o segundo número:"));

  if (isNaN(num1) || isNaN(num2)) {
    alert("Entrada inválida. Tente novamente.");
    return;
  }

  let resultado = num1 + num2;
  alert(`A soma é: ${resultado}`);
}

function exemplo3() {
  document.body.innerHTML = `
    <h2>Formulário de Contato</h2>
    <form onsubmit="enviarFormulario(event)">
      <label>Nome: <input type="text" id="nome" required></label><br><br>
      <label>Email: <input type="email" id="email" required></label><br><br>
      <button type="submit">Enviar</button>
    </form>
  `;
}

function enviarFormulario(event) {
  event.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  alert(`Obrigado, ${nome}! Recebemos seu contato (${email}).`);
  location.reload();
}
