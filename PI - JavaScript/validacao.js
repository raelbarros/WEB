function validaCampos() {
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var nascimento = document.getElementById("nascimento").value;
    var etdCivil = document.getElementById("etdCivil").value;
    var rua = document.getElementById("rua").value;
    var numero = document.getElementById("numero").value;
    var bairro = document.getElementById("bairro").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("estado").value;
    var pais = document.getElementById("pais").value;

    if ((nome == "") ||
        (cpf == "") ||
        (nascimento == "") ||
        (etdCivil == "") ||
        (rua == "") ||
        (numero == "") ||
        (bairro == "") ||
        (cidade == "") ||
        (estado == "") ||
        (pais == "")) {
        return false;
    } else {
        return true;
    }
}
function enviar() {
    if (validaCampos() == false) {
        alert("Faltou preencher algum campos");
    } else {
        alert("Nome: " + nome.value + "\nCPF: " + cpf.value + "\nNascimento: " + nascimento.value + "\nEstado Civil: " + etdCivil.value + "\nRua: " + rua.value + "\nNumero: " + numero.value + "\nBairro: " + bairro.value + "\nCidade: " + cidade.value + "\nEstado: " + estado.value + "\nPais: " + pais.value);
    }
}
