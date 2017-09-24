function calculaTabuada(){
    var numero = document.getElementById("numero").value;
    document.getElementById("conteudo").innerHTML = "";
    var aux = 1;

    if(numero == ""){
        alert("Insira um numero");
        return;
    }

    while (aux <= 10){
        document.getElementById("conteudo").innerHTML += numero + " * " + aux + " = " + (numero * aux)+"<br>";
        aux++;
    }    
}