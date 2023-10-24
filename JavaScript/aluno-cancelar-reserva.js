const divReservas = document.querySelector('#reservas')

async function getReservas() {
    const token = JSON.parse(localStorage.getItem("token"))
    const alunoID = token.id;
    const res = await fetch('https://acompi-back-end-lhbe.onrender.com/cadastro/aluno/' + alunoID.toString());
    const aluno = await res.json();
    preencherReservas(aluno.reservas);
}

async function preencherReservas(reservas) {
    const token = JSON.parse(localStorage.getItem("token"))
    const alunoID = token.id;
    const res = await fetch('https://acompi-back-end-lhbe.onrender.com/cadastro/aluno/' + alunoID.toString());
    const aluno = await res.json();
    reservas.forEach(async reserva => {
        const turmaID = reserva.id_turma;
        const res = await fetch('https://acompi-back-end-lhbe.onrender.com/turmas/' + turmaID.toString());
        const turma = await res.json();
        const response = await fetch('https://acompi-back-end-lhbe.onrender.com/turmas/professor/' + turma.id_professor.toString())
        const professor = await response.json()
        const novaReservaHTML = '<div>\n<h1>Laboratório '+turma.id_lab+'</h1>\n<p>Professor: '+professor[0].nome+'</p>\n<p>Horário: '+turma.horario_inicio+' às '+turma.horario_fim+'</p>\n<p>Data: '+turma.data_turma+'</p>\n<button onclick="excluirReserva(' + reserva.id + ')" class="btnCancelarReserva" id="excluirReserva">Cancelar Reserva</button>\n</div>'
        divReservas.innerHTML = divReservas.innerHTML + novaReservaHTML
    });
}
getReservas()
const botaoExcluirReserva = document.querySelector('#excluirReserva')
async function excluirReserva (id) {
    try {
        const resposta = await fetch('https://acompi-back-end-lhbe.onrender.com/reservas/' + id.toString(), {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }); if (resposta.status === 200) {
            alert('Reserva excluída')
            window.location.reload();
        };
    } catch (erro) {
        console.error(erro)
    }
}