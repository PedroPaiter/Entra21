function inserir(num) {
    const numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function calcular(){

    const resultado = document.getElementById('resultado').innerHTML;

    if(resultado){
        document.getElementById('resultado').innerHTML =  "Resultado: " + eval(resultado);
    }
}