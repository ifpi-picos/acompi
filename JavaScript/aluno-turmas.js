const divTurmas = document.querySelector('#turmas')
async function getTurmas() {
    const res = await fetch('https://acompi-back-end-lhbe.onrender.com/turmas');
    const turmas = await res.json();
    preencherTurmas(turmas);
}
function preencherTurmas(turmas) {
    function encodeInput (input)  {
        const encoded = document.createElement('div');
        encoded.innerText = input;
        return encoded.innerHTML;
      }
    turmas.forEach(async turma => {
        const res = await fetch('https://acompi-back-end-lhbe.onrender.com/turmas/professor/' + turma.id_professor.toString())
        const professor = await res.json()
        const token = JSON.parse(localStorage.getItem("token"))
        const alunoID = token.id;
        const verificaReserva = verificarReserva(turma.reservas, alunoID);
        const retorno = await fetch('https://acompi-back-end-lhbe.onrender.com/reservas/' + turma.id.toString())
        const quantidadeReservaTurma = await retorno.json()
        console.log(verificaReserva)
        if (verificaReserva != true && quantidadeReservaTurma.qtd < 12) {
            const id_turma = encodeInput(turma.id)
            const id_lab = encodeInput(turma.id_lab)
            const nome_professor = encodeInput(professor[0].nome)
            const horario_i = encodeInput(turma.horario_inicio)
            const horario_f = encodeInput(turma.horario_fim)
            const data_turma = encodeInput(turma.data_turma)
            const novaTurmaHTML = '<div>\n<h1>Turma ' + id_turma + '</h1>\n<p>Laboratório: ' + id_lab + '</p>\n<p>Professor: ' + nome_professor + '</p>\n<p>Horário: ' + horario_i + 'min às ' + horario_f + 'min</p>\n<p>Data: ' + data_turma + '</p>\n<a class="index" href="formulario-reserva-computador.html?turma=' + turma.id + '">Entrar na turma</a>\n</div>'
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