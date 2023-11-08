const divReservas = document.querySelector('#reservas')

async function getReservas() {
    const token = JSON.parse(localStorage.getItem("token"))
    const alunoID = token.id;
    const res = await fetch('https://acompi-back-end-lhbe.onrender.com/cadastro/aluno/' + alunoID.toString());
    const aluno = await res.json();
    preencherReservas(aluno.reservas);
}

async function preencherReservas(reservas) {
    function encodeInput (input)  {
        const encoded = document.createElement('div');
        encoded.innerText = input;
        return encoded.innerHTML;
      }
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
        const id_lab = encodeInput(turma.id_lab)
        const nome_professor = encodeInput(professor[0].nome)
        const horario_i = encodeInput(turma.horario_inicio)
        const horario_f = encodeInput(turma.horario_fim)
        const data_turma = encodeInput(turma.data_turma)
        const novaReservaHTML = '<div>\n<h1>Laboratório '+id_lab+'</h1>\n<p>Professor: '+nome_professor+'</p>\n<p>Horário: '+horario_i+' às '+horario_f+'</p>\n<p>Data: '+data_turma+'</p>\n<button onclick="excluirReserva(' + reserva.id + ')" class="btnCancelarReserva" id="excluirReserva">Cancelar Reserva</button>\n</div>'
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