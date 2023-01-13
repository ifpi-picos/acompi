var logado = false;
const token = JSON.parse(localStorage.getItem("token"))
var isExpiredToken = false;

var dateNow = new Date();

if (token.exp < dateNow.getTime() / 1000) {
  isExpiredToken = true;
}
if (isExpiredToken == true){
    localStorage.setItem("acesso", "false")
}
if(localStorage.getItem("acesso")== "true"){
    logado = true;
}
if (logado != true){
    alert("você não está autenticado");
    window.location.href = '../autenticacao/login.html'
}
var url_atual = window.location.pathname
if (token.user == "aluno" && url_atual.endsWith("usuarios/professor/formulario-criar-turma.html") || token.user == "aluno" && url_atual.endsWith("usuarios/professor/ver-cancelar-turma.html") || token.user == "aluno" && url_atual.endsWith("usuarios/professor/ver-remover-alunos-da-turma.html")){
    window.location.href = '../autenticacao/login.html'
}
if (token.user == "professor" && url_atual.endsWith("usuarios/aluno/escolher-turma.html") || token.user == "professor" && url_atual.endsWith("usuarios/aluno/formulario-reserva-computador.html") || token.user == "professor" && url_atual.endsWith("usuarios/aluno/ver-cancelar-reservas.html")){
    window.location.href = '../autenticacao/login.html'
}
function logout(){
    localStorage.setItem("token", "")
    localStorage.setItem("acesso", "false")
    window.location.href = '/'
}