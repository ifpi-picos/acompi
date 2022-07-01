const cancelar = document.querySelector('#cancelar')
const criar = document.querySelector('#botaoCriar')
var a = 0
cancelar.addEventListener('click', function(){
    var url_atual = window.location.pathname; 

    if(url_atual.endsWith("usuarios/aluno/formulario-reserva-computador.html")){
    window.location.href="escolher-turma.html"
    }
    if(url_atual.endsWith("usuarios/professor/formulario-criar-turma.html")){
        window.location.href="ver-cancelar-turma.html"
    }
    if(url_atual.endsWith("usuarios/professor/formulario-reservar-laboratorio.html")){
        window.location.href="reservar-laboratorio.html"
    }
    if(url_atual.endsWith("/usuarios/administrador/formulario-proibir-laboratorio.html")){
        window.location.href="proibir-lab-adm.html"
    }
})
function submitForm(event){
    event.preventDefault();
    criar.addEventListener('click', function(){
        var url_atual = window.location.pathname; 
        alert('dados enviados com sucesso')
        if(url_atual.endsWith("usuarios/aluno/formulario-reserva-computador.html")){
            window.location.href="ver-cancelar-reservas.html"
            }
            if(url_atual.endsWith("usuarios/professor/formulario-criar-turma.html")){
                window.location.href="ver-cancelar-turma.html"
            }
            if(url_atual.endsWith("usuarios/professor/formulario-reservar-laboratorio.html")){
                window.location.href="reservar-laboratorio.html"
            }
            if(url_atual.endsWith("/usuarios/administrador/formulario-proibir-laboratorio.html")){
                window.location.href="proibir-lab-adm.html"
            }
    })
}