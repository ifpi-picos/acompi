const cancelar = document.querySelector('#cancelar')
const criar = document.querySelector('#botaoCriar')
var a = 0
cancelar.addEventListener('click', function(){
    var url_atual = window.location.pathname; 

    if(url_atual.endsWith("usuarios/aluno/formularioReservaComputador.html")){
    window.location.href="/usuarios/aluno/escolherTurma.html"
    }
    if(url_atual.endsWith("usuarios/professor/formularioCriarTurma.html")){
        window.location.href="/usuarios/professor/turmas.html"
    }
    if(url_atual.endsWith("usuarios/professor/formularioBloquearLaboratorio.html")){
        window.location.href="/usuarios/professor/bloquearLaboratorioProf.html"
    }
    if(url_atual.endsWith("/usuarios/administrador/formularioProibirLaboratorio.html")){
        window.location.href="/usuarios/administrador/proibirLabAdm.html"
    }
})
function submitForm(event){
    event.preventDefault();
    criar.addEventListener('click', function(){
        var url_atual = window.location.pathname; 
        alert('dados enviados com sucesso')
        if(url_atual.endsWith("usuarios/aluno/formularioReservaComputador.html")){
            window.location.href="/usuarios/aluno/escolherTurma.html"
            }
            if(url_atual.endsWith("usuarios/professor/formularioCriarTurma.html")){
                window.location.href="/usuarios/professor/turmas.html"
            }
            if(url_atual.endsWith("usuarios/professor/formularioBloquearLaboratorio.html")){
                window.location.href="/usuarios/professor/bloquearLaboratorioProf.html"
            }
            if(url_atual.endsWith("/usuarios/administrador/formularioProibirLaboratorio.html")){
                window.location.href="/usuarios/administrador/proibirLabAdm.html"
            }
    })
}