// Função calculo
function calcularMensalidade () {
    const valorCasa = document.querySelector("#valor-casa");

    let anosParcela = document.querySelector("#anos-parcela");
    const mesesParcela = anosParcela * 12;

    const taxaJuros = document.querySelector('#taxa-juros');

    let valorParcela = (valorCasa * taxaJuros) / (1 - (1 + taxaJuros)** mesesParcela - 12 );
}
