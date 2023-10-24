const cancelar = document.querySelector('#cancelar')
const criar = document.querySelector('#botaoCriar')
var a = 0
cancelar.addEventListener('click', function () {
    var url_atual = window.location.pathname;

    if (url_atual.endsWith("usuarios/aluno/formulario-reserva-computador.html")) {
        window.location.href = "escolher-turma.html"
    }
    if (url_atual.endsWith("usuarios/professor/formulario-criar-turma.html")) {
        window.location.href = "ver-cancelar-turma.html"
    }
    if (url_atual.endsWith("usuarios/professor/formulario-reservar-laboratorio.html")) {
        window.location.href = "reservar-laboratorio.html"
    }
    if (url_atual.endsWith("/usuarios/administrador/formulario-proibir-laboratorio.html")) {
        window.location.href = "proibir-lab-adm.html"
    }
})
async function submitForm(event) {
    event.preventDefault();
    var url_atual = window.location.pathname;
    if (url_atual.endsWith("usuarios/aluno/formulario-reserva-computador.html")) {
        const dados = await getDadosForm()
        enviarDados(dados)
        async function getDadosForm() {
            const inputComputador = document.querySelector('.computador:checked')
            const inputCurso = document.querySelector('.curso:checked')
            const inputConsentimento = document.querySelector('.consentimento')
            const search = window.location.search.substring(1).substring(6)
            const id_turma = parseInt(search)
            const token = JSON.parse(localStorage.getItem("token"))
            const id_aluno = token.id
            if (inputComputador.value === null || inputCurso.value === null || inputConsentimento.value === null) {
                console.log('campos vazios')
                return
            }
            const dados = {
                id_turma: id_turma,
                id_aluno: id_aluno,
                computador: inputComputador.value,
                curso: inputCurso.value,
            }
            return dados
        }
        async function enviarDados(dados) {
            try {
                const resposta = await fetch('https://acompi-back-end-lhbe.onrender.com/reservas', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dados)
                })
                if (resposta.status === 201) {
                    document.querySelector('.computador:checked').checked = false
                    document.querySelector('.formSelect').value = ''
                    document.querySelector('.consentimento:checked').checked = false
                    alert('dados enviados com sucesso')
                    window.location.href = "ver-cancelar-reservas.html"
                } else {
                    alert('você já possui uma reserva nesta turma')
                    console.log('Erro ao reservar computador')
                }
            } catch (erro) {
                console.error(erro)
            }
        }
    }
    if (url_atual.endsWith("usuarios/professor/formulario-criar-turma.html")) {
        const inputHoraInicio = +document.querySelector('#horaInicio').value;
        const inputHoraFim = +document.querySelector('#horaFim').value;
        if (inputHoraFim == inputHoraInicio) {
            alert('A hora Final deve ser diferente da hora inicial')
        } else if (inputHoraFim < inputHoraInicio) {
            alert('A hora Final deve ser maior que a hora inicial')
        } else if (inputHoraFim - inputHoraInicio > 1) {
            alert('as turmas devem ser de 1 hora')
        } else if (inputHoraFim - inputHoraInicio == 1) {
            const dados = await getDadosForm()
            enviarDados(dados)
            async function getDadosForm() {
                const inputLaboratorio = document.querySelector('.laboratorio:checked')
                const inputData = document.querySelector('.data')
                const inputHoraInicio = document.querySelector('#horaInicio')
                const inputHoraFim = document.querySelector('#horaFim')
                const inputCurso = document.querySelector('.cursoProfessor')
                const token = JSON.parse(localStorage.getItem("token"))
                const id_professor = token.id
                if (inputLaboratorio.value === null || inputData.value === null || inputHoraInicio.value === null || inputHoraFim.value === null || inputCurso.value === null) {
                    console.log('campos vazios')
                    return
                }
                const dados = {
                    id_lab: +inputLaboratorio.value,
                    id_professor: +id_professor,
                    curso: inputCurso.value,
                    data_turma: inputData.value,
                    horario_inicio: inputHoraInicio.value,
                    horario_fim: inputHoraFim.value,
                }
                return dados;
            }
            async function enviarDados(dados) {
                try {
                    const resposta = await fetch('https://acompi-back-end-lhbe.onrender.com/turmas', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(dados)
                    })
                    if (resposta.status == 201) {
                        document.querySelector('#labSelect').value = ""
                        document.querySelector('.data').value = ""
                        document.querySelector('#horaInicio').value = ""
                        document.querySelector('#horaFim').value = ""
                        document.querySelector('.cursoProfessor').value = ""
                        alert('dados enviados com sucesso')
                        window.location.href = "ver-cancelar-turma.html"
                    } else {
                        alert('Já existe uma turma nesse horário')
                        console.log('Erro ao criar turma')
                    }
                } catch (erro) {
                    console.error(erro)
                }
            }
        }
    }
    if (url_atual.endsWith("usuarios/professor/formulario-reservar-laboratorio.html")) {
        window.location.href = "reservar-laboratorio.html"
    }
    if (url_atual.endsWith("/usuarios/administrador/formulario-proibir-laboratorio.html")) {
        window.location.href = "proibir-lab-adm.html"
    }
}