const cancelar = document.querySelector('#cancelar')
const criar = document.querySelector('#botaoCriar')
var a = 0
cancelar.addEventListener('click', function(){
    window.location.assign("http://127.0.0.1:5500/autenticacao/cadastro.html");
})
function submitForm(event){
    event.preventDefault();
    var url_atual = window.location.href; 
    alert('dados enviados com sucesso')
    window.location.assign("http://127.0.0.1:5500/")
    
    if(url_atual == "https://ifpi-picos.github.io/acompi-front-end/usuarios/aluno/formularioReservaComputador.html"){
    window.location.assign("https://ifpi-picos.github.io/acompi-front-end/usuarios/aluno/escolherTurma.html")
    }
    if(url_atual == "https://ifpi-picos.github.io/acompi-front-end/usuarios/professor/formularioCriarTurma.html"){
        window.location.assign("https://ifpi-picos.github.io/acompi-front-end/usuarios/professor/turmas.html")
    }
    if(url_atual == ""){
        window.location.assign("http://127.0.0.1:5500/")
    }
    if(url_atual == ""){
        window.location.assign("http://127.0.0.1:5500/")
    }
}