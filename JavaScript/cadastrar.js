const nome = document.getElementById("nome")
const email = document.getElementById("email")
const btnCadastrar = document.querySelector("input.btnPrincipal")

btnCadastrar.addEventListener("click", msgValidacao())
function msgValidacao() { 
alert("Deu certo!")
alert(nome)
}
