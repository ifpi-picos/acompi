const divReservas = document.querySelector('#reservas')

async function getReservas() {
    const alunoID = 35;
    const res = await fetch('https://acompi-back-end-la29.onrender.com/cadastro/aluno/' + alunoID.toString());
    const aluno = await res.json();
    preencherReservas(aluno.reservas);
}

async function preencherReservas(reservas) {
    const alunoID = 35;
    const res = await fetch('https://acompi-back-end-la29.onrender.com/cadastro/aluno/' + alunoID.toString());
    const aluno = await res.json();
    reservas.forEach(async reserva => {
        const turmaID = reserva.id_turma;
        const res = await fetch('http://localhost:3000/turmas/' + turmaID.toString());
        const turma = await res.json();
        const resposta = await fetch('https://acompi-back-end-la29.onrender.com/turmas/professor/'+turma.id_professor.toString());
        const professor = await res.json()
        const novaReservaHTML = '<div>\n<h1>Laboratório '+turma.id_lab+'</h1>\n<p>E-mail: '+aluno.email+'</p>\n<p>Curso: '+reserva.curso+'</p>\n<h4 class="ausenciaComputador" >'+'Possui Computador: '+reserva.computador+'</h4>\n<button onclick="excluirReserva(' + reserva.id + ')" class="btnRemoverAluno" id="excluirReserva">Remover Aluno</button>\n</div>'
        '<div>\n<h1>Laboratório '+turma.id_lab+'</h1>\n<p>Professor: '+professor.nome+'</p>\n<p>Horário: '+turma.horario_inicio+'às '+turma.horario_fim+'</p>\n<p>Data: '+turma.data_turma+'</p>\n<button onclick="excluirReserva(' + reserva.id + ')" class="btnCancelarReserva" id="excluirReserva">Cancelar Reserva</button>\n</div>'
        divReservas.innerHTML = divReservas.innerHTML + novaReservaHTML
    });
}
getReservas()
const botaoExcluirReserva = document.querySelector('#excluirReserva')
async function excluirReserva (id) {
    try {
        const resposta = await fetch('https://acompi-back-end-la29.onrender.com/reservas/' + id.toString(), {
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