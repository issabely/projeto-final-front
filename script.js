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
  let titulo = document.querySelector('h1');
  titulo.innerHTML = 'Jogo do número secreto';

  let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
  let num2 = parseInt(prompt("Digite o segundo número inteiro:"));
  let resultado = num1 + num2;
  alert("A soma dos números é: " + resultado);
}

function exemplo3() {
  document.body.innerHTML = `
    <h1>Formulário</h1>
    <form id="formulario">
      <label>Valor 1: <input type="text" id="valor1"></label><br>
      <label>Valor 2: <input type="text" id="valor2"></label><br>
      <label>Valor 3: <input type="text" id="valor3"></label><br>
      <label>Valor 4: <input type="text" id="valor4"></label><br>
      <label>Valor 5: <input type="text" id="valor5"></label><br>
      <button type="submit">Enviar</button>
    </form>
  `;

  document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const valores = [];
    for (let i = 1; i <= 5; i++) {
      const valor = document.getElementById(`valor${i}`).value.trim();
      if (valor === "") {
        alert(`O campo Valor ${i} está vazio.`);
        return;
      }
      valores.push(valor);
    }

    const conteudo = valores.map((v, i) => `Valor ${i + 1}: ${v}`).join("\\n");
    const blob = new Blob([conteudo], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "valores.txt";
    link.click();
  });
}
