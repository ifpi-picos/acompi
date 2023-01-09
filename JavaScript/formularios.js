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
    criar.addEventListener('click', async function(){
        var url_atual = window.location.pathname; 
        if(url_atual.endsWith("usuarios/aluno/formulario-reserva-computador.html")){
            const dados = await getDadosForm()
            enviarDados(dados)
            async function getDadosForm(){
                const inputComputador = document.querySelector('.computador:checked')
                const inputCurso = document.querySelector('.curso:checked')
                const inputConsentimento = document.querySelector('.consentimento')
                const search = window.location.search.substring(1).substring(6)
                const id_turma = parseInt(search)
                if (inputComputador.value === null || inputCurso.value === null || inputConsentimento.value === null){
                    console.log('campos vazios')
                    return
                }
                const dados = {
                    id_turma: id_turma,
                    id_aluno: 35,   
                    computador: inputComputador.value,
                    curso: inputCurso.value,
                }
                return dados
            }
            async function enviarDados(dados){
                try{
                const resposta = await fetch('https://acompi-back-end-la29.onrender.com/reservas', {
                    method: 'POST',
                    headers:{
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dados)
                })
                if(resposta.status === 201){
                    document.querySelector('.computador:checked').checked = false
                    document.querySelector('.formSelect').value = ''
                    document.querySelector('.consentimento:checked').checked = false
                    alert('dados enviados com sucesso')
                    window.location.href="ver-cancelar-reservas.html"
                }else{
                    alert('você já possui uma reserva nesta turma')
                    console.log('Erro ao reservar computador')
                }
            }catch(erro){
                console.error(erro)
            }
            }
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