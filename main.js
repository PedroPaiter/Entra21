// Selecionar os elementos
const $valueInput = document.querySelector("#valueInput");
const $fromCurrencySelect = document.querySelector("#fromCurrencySelect");
const $toCurrencySelect = document.querySelector("#toCurrencySelect");
const $submitButton = document.querySelector("#submitButton");
const $result = document.querySelector("#result");
/*const conversionRates = {
    "BRLUSD": 0.2,
    "USDBRL": 5.04
};*/

/**Função responsavel por fazer a conversão da moeda */

function convertCurrency() {
    const value = Number($valueInput.value);

    if (!value) {
        $result.textContent = "Por favor, insira um valor válido.";
        return;
    }

    const fromCurrency = $fromCurrencySelect.value;
    const toCurrency = $toCurrencySelect.value;


    if (fromCurrency === toCurrency) {
        $result.textContent = "Por favor, selecione uma conversão vlida";
        return;
    }


    let result = 0;
    if (fromCurrency === "BRL" && toCurrency === "USD") {
        result = value * 0.2;
    } else if(fromCurrency === "USD" && toCurrency === "BRL"){
        result = value * 5.04;
    } else if(fromCurrency === "BRL" && toCurrency === "EUR"){
        result = value * 0.19;
    }else if(fromCurrency === "EUR" && toCurrency === "BRL"){
        result = value * 5.26;
    } else if(fromCurrency === "EUR" && toCurrency === "USD"){
        result = value * 1.05;
    }else{
        result = value * 0.95;
    }

    $result.textContent = `Resultado: ${value} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;

}


$submitButton.addEventListener("click", convertCurrency)

