const nome = document.querySelector(input)
const btnCadastrar = document.querySelector("input.btnPrincipal")

btnCadastrar.addEventListener("click", msgValidacao())

function msgValidacao() { 
if (nome.value == "" || email.value == "") {
    alert("ERRO! Preencha todos os campos obrigatórios!")
}else{
alert("Deu certo!")
}}