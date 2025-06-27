// Função selecionar tipo de amortização
const opcaoAmortizacao = document.querySelectorAll('input[type=radio][name="tipo-amortizacao-opcao"]');
let valorSelecionado = "";

opcaoAmortizacao.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.checked) {
            valorSelecionado = radio.value;
            console.log(valorSelecionado);           
        }
    })
});

// Função calculo PRICE
function mensalidadePrice() {
  const valorCasa = document.querySelector("#valor-casa");

  const anosParcela = document.querySelector("#anos-parcela");
  const mesesParcela = anosParcela.value * 12;

  const taxaJuros = document.querySelector("#taxa-juros");
  const jurosConvertido = taxaJuros.value / 100;

  const valorParcela = (valorCasa.value * jurosConvertido) / (1 - (1 + jurosConvertido) ** -mesesParcela);

  const valorTotal = valorParcela * mesesParcela;

  const totalMensal = document.querySelector('#total-mensal');

  const totalValor = document.querySelector('#total-final');

  totalMensal.innerHTML = `R$ ${valorParcela.toFixed(2)}`;

}
