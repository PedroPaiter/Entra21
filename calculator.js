function calcular(){
    const resultado = document.getElementById('resultado').innerHTML;

    if(resultado){
        document.getElementById('resultado').innerHTML =  "Resultado: " + eval(resultado);
    }
}