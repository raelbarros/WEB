function validaNumero() {
	var campo1 = document.getElementById("campo1").value;
	var campo2 = document.getElementById("campo2").value;

	if (campo1 == "" || campo2 == "") {
		alert("Valor nao informado");
	}

	if (isNaN(campo1)) {
		alert("Valor do primeiro campo nao é numerico");
	}
	if (isNaN(campo2)) {
		alert("Valor do segundo campo nao é numerico");
	}
}

function soma() {
	validaNumero();
	var campo1 = document.getElementById("campo1").value;
	var campo2 = document.getElementById("campo2").value;
	var resultado = parseInt(campo1) + parseInt(campo2);
	document.getElementById("resultado").value = resultado;
}
function subtração() {
	validaNumero();
	var campo1 = document.getElementById("campo1").value;
	var campo2 = document.getElementById("campo2").value;
	var resultado = parseInt(campo1) - parseInt(campo2);
	document.getElementById("resultado").value = resultado;
}
function multiplicacao() {
	validaNumero();
	var campo1 = document.getElementById("campo1").value;
	var campo2 = document.getElementById("campo2").value;
	var resultado = parseInt(campo1) * parseInt(campo2);
	document.getElementById("resultado").value = resultado;
}
function divisao() {
	validaNumero();
	var campo1 = document.getElementById("campo1").value;
	var campo2 = document.getElementById("campo2").value;
	var resultado = campo1 / campo2;
	var arredonda = parseFloat(resultado.toFixed(2));
	document.getElementById("resultado").value = arredonda;
}
