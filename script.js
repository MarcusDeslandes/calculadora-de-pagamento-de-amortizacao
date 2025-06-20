// Função calculo
function calcularMensalidade () {
    const valorCasa = document.querySelector("#valor-casa");

    const anosParcela = document.querySelector("#anos-parcela");
    const mesesParcela = anosParcela.value * 12;

    const taxaJuros = document.querySelector('#taxa-juros');
    const jurosConvertido = taxaJuros.value / 100;

    // const valorParcela = valorCasa.value * (1 + jurosConvertido) ** mesesParcela * jurosConvertido / (1 + jurosConvertido) ** mesesParcela - 1;

    const valorParcela = (valorCasa.value * jurosConvertido) / (1 - (1 + jurosConvertido)** - mesesParcela);

    console.log(mesesParcela);
    console.log(jurosConvertido);
    
    console.log(valorParcela.toFixed(2));
    
}
