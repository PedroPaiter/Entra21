function calcular(){
    const resultado = document.getElementById('resultado').innerHTML;

    if(resultado){
        document.getElementById('resultado').innerHTML =  "Resultado: " + eval(resultado);
    }
}

function inserir(num) {
    const numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function limpar(){
    document.getElementById('resultado').innerHTML = "";
}
