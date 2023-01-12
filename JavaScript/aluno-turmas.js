const divTurmas = document.querySelector('#turmas')
async function getTurmas() {
    const res = await fetch('https://acompi-back-end-la29.onrender.com/turmas');
    const turmas = await res.json();
    preencherTurmas(turmas);
}
function preencherTurmas(turmas) {
    turmas.forEach(async turma => {
        const res = await fetch('https://acompi-back-end-la29.onrender.com/turmas/professor/' + turma.id_professor.toString())
        const professor = await res.json()
        const alunoID = 35;
        const verificaReserva = verificarReserva(turma.reservas, alunoID);
        const retorno = await fetch('https://acompi-back-end-la29.onrender.com/reservas/' + turma.id.toString())
        const quantidadeReservaTurma = await retorno.json()
        console.log(verificaReserva)
        if (verificaReserva != true && quantidadeReservaTurma.qtd < 12) {
            const novaTurmaHTML = '<div>\n<h1>Turma ' + turma.id + '</h1>\n<p>Laboratório: ' + turma.id_lab + '</p>\n<p>Professor: ' + professor[0].nome + '</p>\n<p>Horário: ' + turma.horario_inicio + 'min às ' + turma.horario_fim + 'min</p>\n<p>Data: ' + turma.data_turma + '</p>\n<a class="index" href="formulario-reserva-computador.html?turma=' + turma.id + '">Entrar na turma</a>\n</div>'
            divTurmas.innerHTML = divTurmas.innerHTML + novaTurmaHTML
        }
    });
}
function verificarReserva(reservas, alunoID) {
    let retorno;
    reservas.forEach(reserva => {
        if (reserva.id_aluno === alunoID) return retorno = true;
    });
    if (!retorno){retorno = false;}
    return retorno;
}
getTurmas()