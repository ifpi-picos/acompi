const divReservas = document.querySelector('#reservas')

async function getReservas() {
    const search = window.location.search.substring(1).substring(6)
    const id_turma = parseInt(search)
    const res = await fetch('https://acompi-back-end-la29.onrender.com/turmas/reservas/' + id_turma.toString());
    const turma = await res.json();
    preencherReservas(turma[0].reservas);
}
function preencherReservas(reservas) {
    reservas.forEach(async reserva => {
        const alunoID = reserva.id_aluno
        console.log(alunoID)
        const res = await fetch('https://acompi-back-end-la29.onrender.com/cadastro/aluno/' + alunoID.toString())
        const aluno = await res.json();
        const novaReservaHTML = '<div>\n<h1>'+aluno.nome+'</h1>\n<p>E-mail: '+aluno.email+'</p>\n<p>Curso: '+reserva.curso+'</p>\n<h4 class="ausenciaComputador" >'+'Possui Computador: '+reserva.computador+'</h4>\n<button onclick="excluirReserva(' + reserva.id + ')" class="btnRemoverAluno" id="excluirReserva">Remover Aluno</button>\n</div>'
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