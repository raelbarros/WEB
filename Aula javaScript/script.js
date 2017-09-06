function clicou(){
	console.log("paulo viado");
}
clicou();
clicou();

function calculo(x, y){
	return x+y;
}
console.log(calculo(5,5));

function boasVindas(){
	var nome = prompt('nome?');
	alert ('bem vindo' + nome);
}

function boasVindas_2(){
	var campo1 = document.getElementById("campo1");
	var campo2 = document.getElementById("campo2");
	
	var nome = campo1.value;
	var sobrenome = campo2.value;
	
	var elemento_p = document.createElement("p");
	var texto_p = document.createTextNode("Bem vindo " + nome + " " + sobrenome);
	elemento_p.appendChild(texto_p);
	document.body.appendChild(elemento_p);
}
